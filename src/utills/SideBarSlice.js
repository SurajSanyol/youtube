import { createSlice } from "@reduxjs/toolkit";


const SideBarSlice = createSlice({
     name:"app",
     initialState:{
         isMenuOpen:false,
     },
     reducers:{
           toggleMenu:(state)=>{
                state.isMenuOpen = !state.isMenuOpen;
           },

           toOffMenu:(state)=>{
               state.isMenuOpen=false;
           }
     }
})

export const{toggleMenu,toOffMenu} = SideBarSlice.actions;
export default SideBarSlice.reducer;