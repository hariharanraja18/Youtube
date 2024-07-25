import { createSlice } from "@reduxjs/toolkit";

const AppSlice = createSlice({
    name : "app",
    initialState:{
        isMenuOpen : true,
    },
    reducers:{
        toggleMenu : (state)=>{
            state.isMenuOpen = !state.isMenuOpen;
        },
        closeMenu:(state)=>{
            state.isMenuOpen = false;
        }
    }
})
export const {toggleMenu,closeMenu} = AppSlice.actions;
export default AppSlice.reducer;
