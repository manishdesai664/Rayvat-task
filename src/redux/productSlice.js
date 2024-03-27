import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Fetch products
export const fetchProducts = createAsyncThunk(
  'products/fetchProducts',
  async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
    // console.log(data.products);
  }
);

const initialState = {
  items: [],
  status: 'idle',
  error: null,
};

const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    addProduct(state, action) {
      state.items.push(action.payload);
    },
    updateProduct(state, action) {
      const { id, ...updatedProduct } = action.payload;
      const existingProduct = state.items.find(product => product.id === id);
      if (existingProduct) {
        Object.assign(existingProduct, updatedProduct);
      }
    },
    deleteProduct(state, action) {
      state.items = state.items.filter(product => product.id !== action.payload);
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});


export const { addProduct, updateProduct, deleteProduct } = productSlice.actions;

export default productSlice.reducer;
