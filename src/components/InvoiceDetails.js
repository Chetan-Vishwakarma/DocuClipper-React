import { Box, Grid, TextField, Typography } from "@mui/material";
import CustomSelectBox from "./CustomSelectBox";
import DeleteIcon from '@mui/icons-material/Delete';

const InvoiceDetails = () => {
    return <Box sx={{ width: "100%" }}>
        <Grid container spacing={2}>
            <Grid item md={6}>
                <CustomSelectBox label="Export To" />
            </Grid>
            <Grid item md={6}>
                <CustomSelectBox label="Document Type" />
            </Grid>
            <Grid item md={12}>
                <TextField id="outlined-basic" label="Vendor" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField id="outlined-basic" label="ID#" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField id="outlined-basic" label="Date" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={4}>
                <TextField id="outlined-basic" label="Due" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={6}>
                <TextField id="outlined-basic" label="Tax" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={6}>
                <TextField id="outlined-basic" label="Total" variant="outlined" size="small" fullWidth />
            </Grid>
            <Grid item md={12}>
                <Grid container spacing={2}>
                    <Grid item md={2}>
                        <Typography>Category</Typography>
                    </Grid>
                    <Grid item md={5}>
                        <Typography>Item</Typography>
                    </Grid>
                    <Grid item md={1}>
                        <Typography>Quantity</Typography>
                    </Grid>
                    <Grid item md={2}>
                        <Typography>Unit Price</Typography>
                    </Grid>
                    <Grid item md={1}>
                        <Typography>Price</Typography>
                    </Grid>
                    <Grid item md={1}>
                        <Typography>Action</Typography>
                    </Grid>
                    {/* Inputs respect with this Labels */}
                    
                    {Array(5).fill("").map(() => {
                        return <>
                            <Grid item md={2}>
                                <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Grid>
                            <Grid item md={5}>
                                <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Grid>
                            <Grid item md={1}>
                                <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Grid>
                            <Grid item md={2}>
                                <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Grid>
                            <Grid item md={1}>
                                <TextField id="outlined-basic" label="" variant="outlined" size="small" fullWidth />
                            </Grid>
                            <Grid item md={1} textAlign={'center'}>
                                <DeleteIcon color="error" />
                            </Grid>
                        </>
                    })}
                </Grid>
            </Grid>

        </Grid>
    </Box>
}

export default InvoiceDetails;