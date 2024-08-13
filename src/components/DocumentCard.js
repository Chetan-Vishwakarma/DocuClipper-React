import { Box, Stack } from "@mui/material"
import pdfIcon from "../assets/icons/pdf.png";
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import { useDispatch,useSelector } from "react-redux";
import { setSelectedFiles } from "../redux/docuSlice";

export default ({id, doc}) => {
    const dispatch = useDispatch();
    const { selectedFiles } = useSelector(state=>state.docu);
    const handleDocRemove = (target) => {
        let temp = {...selectedFiles};
        delete temp[id];
        dispatch(setSelectedFiles(temp));

    }
    return <>
        <Stack marginBottom={"8px"} direction={"row"} justifyContent={"space-between"} alignItems={"center"} border={"1px solid grey"} borderRadius={"5px"} padding={"8px 8px 6px 8px"}>
            <Stack direction={"row"}>
                <Box>
                    <img src={pdfIcon} height={"30px"} width={"30px"} />
                </Box>
                <Box marginLeft={"10px"}>{doc.name}</Box>
            </Stack>
            <Box>
                <DeleteOutlineOutlinedIcon color="error" sx={{cursor:"pointer"}} onClick={()=>handleDocRemove(id)}/>
            </Box>
        </Stack>
    </>
}