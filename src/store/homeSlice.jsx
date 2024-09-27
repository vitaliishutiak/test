import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    windowInnerWidth: window.innerWidth,
    servicesBlockScroll: '',
    isOpenMenu: false,
    showMessageObj: {
        open: false,
        message: '',
        status: '',
    },
}

export const homeSlice = createSlice({
    name: 'homeSlice',
    initialState,
    reducers: {
        setShowMessageObj: (state, action) => {
            state.showMessageObj = action.payload;
        },
        setWindowInnerWidth: (state, action) => {
            state.windowInnerWidth = action.payload;
        },
        setServicesBlockScroll: (state, action) => {
            state.servicesBlockScroll = action.payload;
        },
        setIsOpenMenu: (state, action) => {
            state.isOpenMenu = action.payload;
        },
    },
})

export const { setIsOpenMenu, setServicesBlockScroll, setWindowInnerWidth, setShowMessageObj } = homeSlice.actions

export default homeSlice.reducer