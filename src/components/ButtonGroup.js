import { Stack, Button } from '@mui/material';
import HighlightOffOutlinedIcon from '@mui/icons-material/HighlightOffOutlined';
import { useSelector } from "react-redux";
import UploadButton from './UploadButton';
import ExtractButton from './ExtractButton';

export default ({ marginTop, marginBottom }) => {
    const  { docType, selectedFiles } = useSelector(state=> state.docu);
    
    return <>
        <Stack spacing={1} direction="row" justifyContent={'end'} marginTop={marginTop} marginBottom={marginBottom}>
            <UploadButton/>
            <ExtractButton/>
            <Button variant="contained" size='medium' sx={{ fontSize: "11px" }} startIcon={<HighlightOffOutlinedIcon />} disabled={Object.keys(selectedFiles).length>0?false:true}>Clear</Button>
        </Stack>
    </>
}