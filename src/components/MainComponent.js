import { Box, Paper } from "@mui/material"
import CustomGrid from "./CustomGrid"

export default () => {
    return <Paper sx={{ marginTop: "15px !important", marginRight: "15px !important" }} elevation={1}>
        <Box padding={"15px"}>
            <CustomGrid />
        </Box>
    </Paper>
}