import { configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/companys/companySlice";

const store = configureStore({
    reducer:{
        posts: companyReducer
    },
})

export default store;