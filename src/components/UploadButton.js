import { Button } from '@mui/material';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import { styled } from '@mui/material/styles';
import { useDispatch, useSelector } from "react-redux";
import { addInvoices, setSelectedFiles } from '../redux/docuSlice';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import { v4 as uuidv4 } from 'uuid';

const VisuallyHiddenInput = styled('input')({
    clip: 'rect(0 0 0 0)',
    clipPath: 'inset(50%)',
    height: 1,
    overflow: 'hidden',
    position: 'absolute',
    bottom: 0,
    left: 0,
    whiteSpace: 'nowrap',
    width: 1,
});

export default () => {
    const dispatch = useDispatch();
    const { docType, selectedFiles } = useSelector(state => state.docu);

    const handleFileChange = (e) => {
        let allFiles = e.target.files;
        let check = Object.entries(allFiles).some((file) => file[1].type !== "application/pdf");
        if (check) {
            alert("Only PDF files are allowed");
        }
        let filteredData = Object.entries(allFiles).filter((data) => {
            if (data[1].type === "application/pdf") {
                return allFiles[data[0]]
            }
        }).reduce((acc, itm, i) => {
            let uniqueId = uuidv4();
            return { ...acc, [uniqueId]: itm[1] };
        }, {})
        if (Object.keys(selectedFiles).length > 0 && docType === "Invoice") {
            Object.keys(filteredData).forEach(itm => {
                let uniqueId = uuidv4();
                dispatch(addInvoices({ id: uniqueId, fileData: filteredData[itm] }));
            })
            return;
        }else if(Object.keys(selectedFiles).length > 0 && docType === 'Bank'){
            if(window.confirm("Are you sure you want to replace this file")){
                dispatch(setSelectedFiles(e.target.files));
                return;
            }else{
                dispatch(setSelectedFiles(selectedFiles));
                return;
            }
        }
        dispatch(setSelectedFiles(filteredData));
    }
    return <>
        <Button
            component="label"
            role={undefined}
            variant="contained"
            tabIndex={-1}
            size='medium'
            sx={{ fontSize: "11px" }}
            startIcon={docType === "Invoice" && Object.keys(selectedFiles).length > 0 ? <AddCircleOutlineIcon /> : <CloudUploadOutlinedIcon />}
        > {docType === "Invoice" && Object.keys(selectedFiles).length > 0 ? "Add" : "Upload"}
            {docType === "Bank" ? <VisuallyHiddenInput onChange={handleFileChange} type="file" /> : <VisuallyHiddenInput onChange={handleFileChange} type="file" multiple />}
        </Button>
    </>
}