import { createSlice } from "@reduxjs/toolkit"

export const addCharModalSlice = createSlice({
    name: "addCharModal",
    initialState: {
        isOpen: false
    },
    reducers: {
        openAddCharModal: state => {
            state.isOpen = true
        },
        closeAddCharModal: state => {
            state.isOpen = false
        }
    }
})

export const { openAddCharModal, closeAddCharModal } = addCharModalSlice.actions
export default addCharModalSlice.reducer