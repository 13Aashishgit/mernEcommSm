import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";

// initial State
const initialState ={
    products:[]
}

// API thunk calls


// Slice
const productSlice = createSlice({
    name:'products',
    initialState,
    reducers:{
        setProducts:(state,action)=>{
            state.products = action.payload;
        },
    },
    extraReducers: (builder) => {
        builder
          .addCase(fetchProducts.fulfilled, (state, action) => {
            state.products = action.payload.data;
          })
          .addCase(createProduct.fulfilled, (state, action) => {
            state.products.push(action.payload.data);
          })
          .addCase(deleteProduct.fulfilled, (state, action) => {
            state.products = state.products.filter((product) => product._id !== action.meta.arg);
          })
          .addCase(updateProduct.fulfilled, (state, action) => {
            const index = state.products.findIndex((product) => product._id === action.meta.arg.pid);
            if (index !== -1) {
              state.products[index] = action.payload.data;
            }
          });
      },
});

export const {setProducts} = productSlice.actions;
export default productSlice.reducer;