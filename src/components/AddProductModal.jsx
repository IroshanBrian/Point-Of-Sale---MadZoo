import React, { useState } from 'react';
import { createProductWithFormData } from '../api/index';

const AddProductModal = ({ isOpen, onClose, onAdd }) => {
     const [product, setProduct] = useState({
          title: '',
          price: '',
          stock: ''
     });

     if (!isOpen) return null;

     const handleChange = (e) => {
          const { name, value } = e.target;
          setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
     };

     const handleSubmit = async (e) => {
          e.preventDefault();

          const formData = new FormData();
          formData.append('title', product.title);
          formData.append('price', product.price);
          formData.append('stock', product.stock);

          const data = await createProductWithFormData(formData); // Send the form data to the server

          if (data) {
               onAdd(data.product);
               setProduct({
                    title: '',
                    price: '',
                    stock: ''
               });
               onClose();
          } else {
               console.error('Error adding product');
          }
     };

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <h2 className="text-xl font-bold mb-4">Add New Product</h2>
                    <form onSubmit={handleSubmit}>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Title</label>
                              <input
                                   type="text"
                                   name="title"
                                   value={product.title}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Price</label>
                              <input
                                   type="number"
                                   name="price"
                                   value={product.price}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Stock</label>
                              <input
                                   type="number"
                                   name="stock"
                                   value={product.stock}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="flex justify-end">
                              <button onClick={onClose} type="button" className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add</button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default AddProductModal;
