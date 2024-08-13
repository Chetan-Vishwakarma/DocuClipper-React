import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  docType: 'Bank',
  selectedFiles: {},
  openDmsDocModal:true
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
    setOpenDmsDocModal: (state, action) => {
      state.openDmsDocModal = action.payload;
    },
  },
})

// Action creators are generated for each case reducer function
export const { setDocType, setSelectedFiles, addInvoices, setOpenDmsDocModal } = docuSlice.actions

export default docuSlice.reducer