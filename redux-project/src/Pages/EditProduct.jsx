import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import '../All.css'

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    price: '',
    image: ''
  });

  useEffect(() => {
    axios.get(`http://localhost:3000/Products/${id}`).then((res) => {
      setFormData(res.data);
    });
  }, [id]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:3000/Products/${id}`, formData)
      .then(() => {
        toast.success("Product updated!");
        navigate("/product");
      })
      .catch(() => toast.error("Failed to update"));
  };

  return (
    <div style={{ padding: '20px'}} className="edit-container">
      <h2>Edit Product</h2>
      <form onSubmit={handleUpdate}>
        <input type="text" name="title" value={formData.title} onChange={handleChange} required placeholder="Title" />
        <textarea name="description" value={formData.description} onChange={handleChange} required placeholder="Description" />
        <input type="number" name="price" value={formData.price} onChange={handleChange} required placeholder="Price" />
        <input type="text" name="image" value={formData.image} onChange={handleChange} placeholder="Image URL" />
        <button type="submit">Update</button>
      </form>
    </div>
  );
};

export default EditProduct;