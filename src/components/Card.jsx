import React, { useState } from 'react';
import { MdAddShoppingCart } from "react-icons/md";
import { CiEdit } from "react-icons/ci";
import Modal from './EditProductModel';

const Card = ({ image, title, price, stock }) => {
     const [isModalOpen, setIsModalOpen] = useState(false);
     const [product, setProduct] = useState({ title, price, stock });

     const openModal = () => {
          setIsModalOpen(true);
     };

     const closeModal = () => {
          setIsModalOpen(false);
     };

     const saveChanges = () => {
          // Logic to save the changes, e.g., send to server or update state
          setIsModalOpen(false);
     };

     return (
          <div className="relative p-4 w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
               <a>
                    <img className="p-8 rounded-t-lg" src={image} alt="product image" />
               </a>
               <div className="flex items-center absolute top-3 left-0">
                    <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-3">{stock}</span>
               </div>
               <div>
                    <a href="#">
                         <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white mb-4">{product.title}</h5>
                    </a>

                    <div className="flex items-center justify-between">
                         <span className="text-2xl font-bold text-gray-900 dark:text-white">${product.price}</span>
                         <div className='flex gap-2'>
                              <button onClick={openModal} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                   <CiEdit />
                              </button>
                              <a href="#" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                                   <MdAddShoppingCart />
                              </a>
                         </div>
                    </div>
               </div>
               <Modal
                    isOpen={isModalOpen}
                    onClose={closeModal}
                    onSave={saveChanges}
                    product={product}
                    setProduct={setProduct}
               />
          </div>
     );
}

export default Card;
