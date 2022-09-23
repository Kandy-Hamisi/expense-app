import { createSlice } from '@reduxjs/toolkit'


type InitialState = {
    modalState: boolean
}

const initialState: InitialState = {
    modalState: false
}


const modalSlice = createSlice({
    name: "categoryModal",
    initialState,
    reducers: {
        openModal: (state) => {
            state.modalState = true
        },
        closeModal: (state) => {
            state.modalState = false
        }
    }
})


export default modalSlice.reducer;
export const { openModal, closeModal } = modalSlice.actions;