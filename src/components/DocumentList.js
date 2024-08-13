import { Box } from "@mui/material"
import DocumentCard from "./DocumentCard";
import { useSelector } from "react-redux";

export const DocumentList = ({marginTop}) => {
    const { selectedFiles } = useSelector(state=>state.docu);
    return <>
        <Box marginTop={marginTop}>
            {Object.keys(selectedFiles).length>0 && Object.keys(selectedFiles).map((itm,index)=>{
                return <DocumentCard key={index} id={itm} doc={selectedFiles[itm]}/>
            })}
        </Box >
    </>
}

export default DocumentList