import { Select, FormControl, MenuItem, OutlinedInput } from "@mui/material"
import { setDocType, setSelectedFiles } from "../redux/docuSlice";
import { useDispatch, useSelector } from "react-redux";
const CustomSelect = () => {
    const dispatch = useDispatch();
    const  { docType } = useSelector(state=> state.docu);
    const handleTypeChange = (event) => {
        dispatch(setDocType(event.target.value));
        dispatch(setSelectedFiles({}));
    };
    return <>
        <FormControl fullWidth>
            <Select
                input={<OutlinedInput size="small" />}
                displayEmpty
                value={docType}
                sx={{backgroundColor: 'white'}}
                label="Age"
                onChange={handleTypeChange}
                inputProps={{ 'aria-label': 'Without label' }}
            >
                <MenuItem value="Bank">Bank Statement</MenuItem>
                <MenuItem value="Invoice">Invoice</MenuItem>
            </Select>
        </FormControl>
    </>
}
export default CustomSelect;