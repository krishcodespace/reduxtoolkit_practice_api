import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import { click } from "@testing-library/user-event/dist/click";

const initialState= {
    productData:[],
    isLoading:false,
    error:false,



}

const api = "https://dummyjson.com/products"
const api1 = "https://dummyjson.com/products/1"




// createAsyncthumk first aargument is actiontype and second callback function  which give data from api // 

export const fetchData = createAsyncThunk("FETCH_DATA",async()=>{
    const response = await fetch(api);
    const result = await response.json();
    return result.products;

})
// export const fetchSingleProduct = createAsyncThunk("SINGLE_DATA",async()=>{
//     const response = await fetch(`https://dummyjson.com/products/${id}`);
//     const result = await response.json();
//     return result.products;

// })

const productSlice = createSlice({
    name:"productdata",
    initialState,
    reducers : {},

    extraReducers: (builders) => {
        builders
        .addCase(fetchData.pending,(state)=> {
            console.log('action', state)
            state.isLoading = true;
            
        })
        .addCase(fetchData.fulfilled,(state,action)=> {
            console.log('action', action)
           console.log('sucess', action.payload)
            state.productData = [...state?.productData,action.payload]
            state.isLoading = false;
        })
        .addCase(fetchData.rejected,(state,action)=> {
          console.log('action', action)
            state.productData = null;
            state.error = true
        })


    }


})

// export const {reducers} = productSlice.actions;
export default productSlice.reducer;
