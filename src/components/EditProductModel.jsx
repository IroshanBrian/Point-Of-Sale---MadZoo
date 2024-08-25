import React, { useState } from 'react';

const Modal = ({ isOpen, onClose, onSave, product, setProduct, mode }) => {
     const [selectedImage, setSelectedImage] = useState(null);

     if (!isOpen) return null;

     const handleChange = (e) => {
          const { name, value } = e.target;
          setProduct(prevProduct => ({ ...prevProduct, [name]: value }));
     };

     const handleImageChange = (e) => {
          const file = e.target.files[0];
          if (file) {
               setSelectedImage(URL.createObjectURL(file));
               setProduct(prevProduct => ({ ...prevProduct, image: file }));
          }
     };

     const handleSave = () => {
          onSave(product);
          setProduct({
               title: '',
               price: '',
               stock: '',
               image: null
          });
          setSelectedImage(null);
          onClose();
     };

     return (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
               <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full">
                    <div className='flex'>
                         <h2 className="text-xl font-bold mb-4 underline">{mode === 'edit' ? 'Edit Product' : 'Add Product'}</h2>
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
                    <div className="flex items-center justify-center w-full py-4">
                         <label htmlFor="dropzone-file" className="flex flex-col items-center justify-center w-full h-64 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600">
                              {selectedImage ? (
                                   <img src={selectedImage} alt="Selected" className="object-contain h-48 w-full" />
                              ) : (
                                   <div className="flex flex-col items-center justify-center pt-5 pb-6">
                                        <svg className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                             <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2" />
                                        </svg>
                                        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400"><span className="font-semibold">Click to upload</span> or drag and drop</p>
                                        <p className="text-xs text-gray-500 dark:text-gray-400">SVG, PNG, JPG or GIF (MAX. 800x400px)</p>
                                   </div>
                              )}
                              <input id="dropzone-file" type="file" className="hidden" onChange={handleImageChange} />
                         </label>
                    </div>
                    <div className="flex justify-end">
                         <button onClick={onClose} className="bg-gray-500 text-white font-bold py-2 px-4 rounded mr-2">Cancel</button>
                         <button onClick={handleSave} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">{mode === 'edit' ? 'Save Changes' : 'Add Product'}</button>
                    </div>
               </div>
          </div>
     );
};

export default Modal;
