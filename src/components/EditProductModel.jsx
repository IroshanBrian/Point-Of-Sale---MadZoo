import React from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { deleteProduct, updateProductWithFormData, fetchProductById } from '../api/index';

const Modal = ({ isOpen, onClose, onSave, product, setProduct }) => {
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

          try {
               const data = await updateProductWithFormData(formData, product.id);
               console.log('API Response:', data);

               if (data) {
                    onSave(data.product);
                    setProduct({
                         title: '',
                         price: '',
                         stock: ''
                    });
                    onClose();
               } else {
                    console.error('Error saving product');
               }
          } catch (error) {
               console.error('Error saving product:', error);
          }
     };


     const handleDelete = async (id) => {
          console.log("Deleting Product ID:", id);  // Add this to debug the ID
          if (!id) {
               console.error("Product ID is missing");
               return;
          }

          const confirmDelete = window.confirm("Are you sure you want to delete this product?");
          if (confirmDelete) {
               const result = await deleteProduct(id);
               if (result) {
                    onClose();
               } else {
                    console.error("Failed to delete product");
               }
          }
     };


     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <form onSubmit={handleSubmit}>
                         <div className='flex'>
                              <h2 className="text-xl font-bold mb-4 underline">Edit Product</h2>
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Title:</label>
                              <input
                                   type="text"
                                   name="title"
                                   value={product.title || ''}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Price:</label>
                              <input
                                   type="number"
                                   name="price"
                                   value={product.price || ''}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="mb-4">
                              <label className="block text-gray-700 text-sm font-bold mb-2">Stock:</label>
                              <input
                                   type="number"
                                   name="stock"
                                   value={product.stock || ''}
                                   onChange={handleChange}
                                   className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                              />
                         </div>
                         <div className="flex justify-end">
                              <button onClick={onClose} className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                              <button
                                   type="button"
                                   onClick={() => handleDelete(product.id)}
                                   className="bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                              >
                                   <FaRegTrashAlt />
                              </button>
                              <button type="submit" className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                                   Save Changes
                              </button>
                         </div>
                    </form>
               </div>
          </div>
     );
};

export default Modal;
