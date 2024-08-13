import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  docType: 'Bank',
  selectedFiles: {},
}

export const docuSlice = createSlice({
  name: 'docu',
  initialState,
  reducers: {
    setDocType: (state, action) => {
      state.docType = action.payload;
    },
    setSelectedFiles: (state, action) => {
      state.selectedFiles = action.payload;
    },
    addInvoices: (state, action) => {
      let {id, fileData} = action.payload;
      state.selectedFiles = {...state.selectedFiles,[id]:fileData};
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDocType, setSelectedFiles, addInvoices } = docuSlice.actions

export default docuSlice.reducer