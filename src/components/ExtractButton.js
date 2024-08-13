import { Button } from '@mui/material';
import InsertPageBreakOutlinedIcon from '@mui/icons-material/InsertPageBreakOutlined';
import { useSelector } from "react-redux";
import { extractBankSts, extractInvoices } from '../api/api';

export default () => {
    const  { docType, selectedFiles } = useSelector(state=> state.docu);
    
    const convertBlobToBase64 = async (blob) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(blob);
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
        });
    };

    const getBase64Files = async (allFiles) => {
        const base64Files = await Promise.all(
            Object.entries(allFiles).map(async ([key, file]) => {
                try {
                    const base64 = await convertBlobToBase64(file);
                    return { [key]: base64 };
                } catch (error) {
                    console.error(`Error reading file ${key}:`, error);
                    return { [key]: null }; // Or handle error as needed
                }
            })
        );
        return Object.assign({}, ...base64Files);
    };

    const handleExtraction = () => {
        getBase64Files(selectedFiles)
            .then(base64Data => {
                let base64DataArr = Object.entries(base64Data).map(([key, value]) => {
                    return value.split(",")[1];
                });
                docType==='Bank'?extractBankSts(base64DataArr):extractInvoices(base64DataArr);
            })
            .catch(error => {
                console.error('Error reading files:', error);
            });
    }
    return <>
        <Button variant="contained" size='medium' sx={{ fontSize: "11px" }} startIcon={<InsertPageBreakOutlinedIcon />} onClick={handleExtraction} disabled={Object.keys(selectedFiles).length>0?false:true}>Extract</Button>
    </>
}