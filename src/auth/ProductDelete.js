import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../redux/productSlice';


const ProductDelete = ({ id }) => {
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteProduct(id));
  };

  return (
    <button onClick={handleDelete}>Delete</button>
  );
};

export default ProductDelete;
