// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// // import Product from './Product';
// import { REQUEST, SUCCESS, REJECT } from '../redux/actionType';

// const Product = () => {
//   const dispatch = useDispatch();
//   const products = useSelector((state) => state.products.data);  // Adjust this based on your redux state shape
//   const loading = useSelector((state) => state.products.loading);
//   const error = useSelector((state) => state.products.error);

//   useEffect(() => {
//     dispatch({ type: REQUEST });
//     axios.get('http://localhost:3000/Products')
//       .then((res) => dispatch({ type: SUCCESS, payload: res.data }))
//       .catch(() => dispatch({ type: REJECT }));
//   }, [dispatch]);

//   if (loading) return <p>Loading products...</p>;
//   if (error) return <p>Error loading products</p>;

//   return (
//    <div>
//       {products && products.length > 0 ? (
//         products.map(product => (
//           <SingleProduct
//             key={product.id}
//             id={product.id}
//             title={product.title}
//             description={product.description}
//             price={product.price}
//             image={product.image}
//           />
//         ))
//       ) : (
//         <p>No products found</p>
//       )}
//     </div>
//   );
// };

// export default Product;