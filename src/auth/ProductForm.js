import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct, updateProduct } from '../redux/productSlice';

const ProductForm = ({ product }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(product || {});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (product) {
      dispatch(updateProduct(formData));
    } else {
      dispatch(addProduct(formData));
    }
    setFormData({}); 
  };

  
  if (!product) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={formData.name || ''} onChange={handleChange} />
      <input type="number" name="price" value={formData.price || ''} onChange={handleChange} />
      <input type="text" name="description" value={formData.description || ''} onChange={handleChange} />
      <button type="submit">{product ? 'Update' : 'Add'}</button>
    </form>
  );
};

export default ProductForm;
