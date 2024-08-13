import { Box } from "@mui/material"
import CustomSelect from "./CustomSelect";
import DocumentList from "./DocumentList";
import ButtonGroup from "./ButtonGroup";
import Paper from '@mui/material/Paper';

const Sidebar = ({ width }) => {
    return <>
        <div style={{ width: width }}>
            <Box sx={{ margin: "15px 0 0 15px" }}>
                <CustomSelect />
                <Paper elevation={1} sx={{padding:"4px 20px 20px 20px", width:"300px", marginTop:"15px", height:"536px"}}>
                    <ButtonGroup marginTop="15px" marginBottom="15px" />
                    <hr />
                    <DocumentList marginTop={"15px"} />
                </Paper>
            </Box>
        </div>
    </>
}

export default Sidebar