    import { createAsyncThunk, createSlice, isFulfilled } from "@reduxjs/toolkit";

const intialstate = ({
    msg: '',
    user: '',
    token: '',
    loading: false,
    error: '',
    createAsyncThunk: '',
});

export const signInUser = createAsyncThunk('signInUser', async (body) => {
    const res = await fetch("https://dummyjson.com/auth/login", {
        method: "post",
        headers: {
            'content-type': "application/json"
        },
        body: JSON.stringify(body)
    })
    return await res.json();
});

const authSlice = ({
    name: 'user',
    intialstate: [],
    reducers: { },
})     
export default authSlice.reducers;