import { useEffect, useState } from 'react';
import { fetchProducts } from '../api/index.js';

const ProductList = () => {
     const [products, setProducts] = useState([]);

     useEffect(() => {
          const loadProducts = async () => {
               const productsData = await fetchProducts();
               setProducts(productsData);
          };
          loadProducts();
     }, []);

     return (
          <div className="p-4">
               <h1 className="text-2xl font-bold mb-4">Product List</h1>
               <ul>
                    {products.map((product) => (
                         <li key={product._id} className="border p-2 mb-2">
                              <h2 className="text-xl">{product.name}</h2>
                              <p>{product.description}</p>
                              <p className="font-bold">${product.price}</p>
                              <p>Quantity: {product.quantity}</p>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default ProductList;  