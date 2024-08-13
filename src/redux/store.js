import { configureStore } from '@reduxjs/toolkit'
import docuReducer from './docuSlice'

export const store = configureStore({
  reducer: {
    docu: docuReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these action types
        ignoredActions: ['docu/setSelectedFiles', 'docu/addInvoices'],
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
        // Ignore these paths in the state
        ignoredPaths: ['items.dates', 'docu.selectedFiles', 'docu.addInvoices'],
      },
    }),
})