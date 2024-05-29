import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";

const Store = configureStore({

    reducer: {
        app: SideBarSlice,
    }
})

export default Store;