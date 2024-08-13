import axios from "axios";

export const extractInvoices = (base64Arr) => {
    let resData = [];
    base64Arr.reduce((prevPromise, group) => {
        return prevPromise.then(() => {
            return axios.post(`https://extract.docusoftpractice.com/processInvoices`, { base64: group }).then(function (res) {
                    const tempObj = JSON.parse(res.data.transactions[0].row).lines;
                    let testObj = { ...JSON.parse(res.data.transactions[0].row) };
                    let data = tempObj.map(itm => {
                        return { ...testObj, ...itm }
                    });
                    resData.push(data);
            }).catch(function (err) {
                console.error("Api failed", err);
            });
        });
    },
        Promise.resolve()
    ).then(res => {
        console.log("resData", resData);
    }).catch(err => {
        console.error("Api failed", err);
    });
}

export const extractBankSts = (base64Arr) => {
    let resData = [];
    base64Arr.reduce((prevPromise, group) => {
        return prevPromise.then(() => {

            return axios.post(`https://extract.docusoftpractice.com/processBankStatementsUpdatedApi`, { base64: group }).then(function (res) {
                if (res.data.documentId) {
                    axios.post(`https://extract.docusoftpractice.com/createJob`, {
                        documentId: res.data.documentId,
                        jobType: ""
                    }).then(res => {
                        let jobId = res.data.jobId;
                        if (jobId) {
                            let interval_ID = setInterval(() => {
                                axios.post(`https://extract.docusoftpractice.com/jobStatus`, {
                                    jobId: jobId
                                }).then(res => {
                                    let jobSts = res.data.status;
                                    if (jobSts === "Succeeded") {
                                        clearInterval(interval_ID);
                                        axios.post(`https://extract.docusoftpractice.com/transactions`, {
                                            jobId: jobId
                                        }).then(res => {
                                            resData.push(res.data.transactions);
                                        }).catch(err => {
                                            console.error("Error while getting transaction", err);
                                            clearInterval(interval_ID);
                                        })
                                    } else if (jobSts === "OutOfCredits") {
                                        axios.post(`https://extract.docusoftpractice.com/resumeJob`, {
                                            jobId: jobId
                                        }).then(res => {
                                            console.log('Job Resumed Success', res.data.status);
                                        }).catch(err => {
                                            console.error("Error while trying to resume job", err);
                                            clearInterval(interval_ID);
                                        })
                                    }
                                }).catch(err => {
                                    console.error("Error while getting job status", err);
                                    clearInterval(interval_ID);
                                })
                            }, 3000);
                        } else {
                            console.error("Unable to create job");
                        }
                    }).catch(err => {
                        console.error("Error while creating job", err);
                    })
                } else {
                    console.error("Document Id not found");
                }
            }).catch(function (err) {
                console.log("Error while sending document to server", err);
            });
        });
    },
        Promise.resolve()
    ).then(res => {
        console.log("resData for BankSts", resData);
    }).catch(err => {
        console.log("Error while calling Json_GetItemBase64DataById", err);
    });
}