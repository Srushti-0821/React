import axios from 'axios';
import React, { useEffect, useState } from 'react';
import "./API.css"

const API = () => {
  const [formdata, setformdata] = useState([]);

  const fetchdata = () => {
    axios.get("http://localhost:3000/products")
      .then((res) => {setformdata(res.data)})
      .catch((err) => {console.error("Error fetching products:", err)})
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div>
      <h1> Product List from API</h1>
      <hr />
      {formdata.length > 0 ? (
        <ul className='product'>
          {formdata.map((el) => (
            <div className="product-card" key={el.id}>
              <h2>ID: {el.id}</h2>
              <img src={el.image} alt="product" />
              <i>{el.title}</i>
              <p>₹ {el.price}</p>
              <p>{el.description}</p>
              <p><b>Category:</b> {el.category}</p>
            </div>
          ))}
        </ul>
      ) : (
        <p>Loading products...</p>
      )}
    </div>
  );
};

export default API;