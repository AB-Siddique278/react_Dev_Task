import axios from "axios"


import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'



export const fetchCompanys = createAsyncThunk("posts/fetchCompanys", async () =>{
    const res = await axios.get("http://139.59.35.127/production/propsoft-api/public/api/get-all-companys");
    return res.data
})




const companySlice = createSlice({
    name : "posts",
    initialState:{
        isLoading: false,
        posts:[],
        error:null
    },
    extraReducers: (builder) => {
        builder.addCase(fetchCompanys.pending, (state)=>{
            state.isLoading=true;
        });


        builder.addCase(fetchCompanys.fulfilled, (state, action)=>{
            state.isLoading=false;
            state.posts=action.payload;
            state.error=null;
        });



        builder.addCase(fetchCompanys.rejected, (state, action)=>{
            state.isLoading=true;
            state.posts=[];
            state.error=action.error.message;
        });


    }
})
export default companySlice.reducer





// companySlice.js
