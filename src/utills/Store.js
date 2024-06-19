import { configureStore } from "@reduxjs/toolkit";
import SideBarSlice from "./SideBarSlice";
import ChatSlice from "./ChatSlice";

const Store = configureStore({

    reducer: {
        app: SideBarSlice,
        chat:ChatSlice,
    }
})

export default Store;