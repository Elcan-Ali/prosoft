import { createSlice } from "@reduxjs/toolkit";


const initialState = {
    applyModal: false,
    hamburgerMenu: false,
}

export const layoutSlice = createSlice({
    name: 'layout',
    initialState,
    reducers: {
        setModal: (state, action) => {
            state.applyModal = action.payload
        },
        setHamburgerMenu: (state, action) => {
            state.hamburgerMenu = action.payload
        }
    }
})

export const { setModal, setHamburgerMenu } = layoutSlice.actions