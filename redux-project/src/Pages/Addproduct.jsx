import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ useNavigate, not Navigate
import axios from 'axios';
import '../All.css';

const AddProduct = () => {
  const navigate = useNavigate(); // ✅ initialize the hook

  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:3000/Products', formData);
      alert('Product added successfully!');
      setFormData({
        title: '',
        description: '',
        price: '',
        image: ''
      });
      navigate('/product'); // ✅ this is correct now
    } catch (err) {
      alert('Error adding product');
      console.error(err);
    }
  };

  return (
    <div className="addProductContainer">
      <h2>Add New Product</h2>
      <form className="addProductForm" onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          placeholder="Product Title"
          
        />
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          placeholder="Product Description"
          
        />
        <input
          type="number"
          name="price"
          value={formData.price}
          onChange={handleChange}
          placeholder="Price"
          
        />
        <input
          type="text"
          name="image"
          value={formData.image}
          onChange={handleChange}
          placeholder="Image URL"
        />
        <button type="submit">Add Product</button>
      </form>
    </div>
  );
};

export default AddProduct;