import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { REQUEST, SUCCESS, REJECT } from '../redux/actionType';
import SingleProduct from './SingleProduct';

const ProductsList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.Product.data);
  const loading = useSelector((state) => state.Product.isLoading);
  const error = useSelector((state) => state.Product.isError);

  useEffect(() => {
    dispatch({ type: REQUEST });
    axios.get('http://localhost:3000/Products')
      .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
      .catch(() => dispatch({ type: REJECT }));
  }, [dispatch]);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products</p>;

  return (
    <div className="products-container">
      {products.map(product => (
        <SingleProduct key={product.id}// 
          id={product.id}
          title={product.title}
          description={product.description}
          price={product.price}
          image={product.image}
        />
      ))}
  </div>

  );
};

export default ProductsList;