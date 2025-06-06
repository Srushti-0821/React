import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';
import { toast } from 'react-toastify';
import { SUCCESS, REQUEST, REJECT } from '../redux/actionType';
import '../All.css';

const SingleProduct = ({ id, title, description, price, image }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch({ type: REQUEST });
    axios.delete(`http://localhost:3000/Products/${id}`)
      .then(() => {
        toast.success("Product deleted!");
        axios.get('http://localhost:3000/Products')
          .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
          .catch(() => dispatch({ type: REJECT }));
      })
      .catch(() => {
        toast.error("Failed to delete product");
        dispatch({ type: REJECT });
      });
  };

  const handleEdit = () => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="single-product-card">
      <img src={image} alt={title} className="product-image" />
      <h3 className="product-title">{title}</h3>
      <p className="product-description">{description}</p>
      <p className="product-price">₹{price}</p>
      <div className="product-button-group">
        <button className="edit-button" onClick={handleEdit}>Edit</button>
        <button className="delete-button" onClick={handleDelete}>Delete</button>
      </div>
    </div>
  );
};

export default SingleProduct;