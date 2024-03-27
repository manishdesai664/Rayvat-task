import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./redux/authSlice";
import productReducer from "./redux/productSlice";


const store = configureStore({
    reducer: {
        user: authSlice,
        products: productReducer,
    }
});
export default store;