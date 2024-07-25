import { configureStore } from "@reduxjs/toolkit";

import AppReducer from "./AppSlice";

const Store = configureStore({
    reducer:{
        app: AppReducer,
    }
});

export default Store;