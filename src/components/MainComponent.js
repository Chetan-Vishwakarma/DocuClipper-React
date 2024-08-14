import { Box, Paper } from "@mui/material"
import CustomGrid from "./CustomGrid"
import InvoiceDetails from "./InvoiceDetails"

export default () => {
    return <Paper sx={{ marginTop: "15px !important", marginRight: "15px !important", width:"100%" }} elevation={1}>
        <Box padding={"15px"}>
            {/* <CustomGrid /> */}
            <InvoiceDetails/>
        </Box>
    </Paper>
}