import React, { useState, useEffect } from 'react';
import Card from '../Card';
import AddProductModal from '../AddProductModal';
import EditProductModal from '../EditProductModel';
import { fetchProducts, createProductWithFormData, updateProductWithFormData } from '../../api/index';

const Products = () => {
     const [isAddModalOpen, setIsAddModalOpen] = useState(false);
     const [isEditModalOpen, setIsEditModalOpen] = useState(false);
     const [products, setProducts] = useState([]);
     const [currentProduct, setCurrentProduct] = useState(null);

     useEffect(() => {
          fetchData();
     }, [isAddModalOpen, isEditModalOpen]);

     const fetchData = async () => {
          try {
               const data = await fetchProducts();
               setProducts(data);
          } catch (error) {
               console.error("Failed to fetch products:", error);
          }
     };

     const handleAddProduct = async (newProduct) => {
          try {
               await createProductWithFormData(newProduct);
               fetchData();
               closeAddModal();
          } catch (error) {
               console.error("Failed to add product:", error);
          }
     };

     const handleEditProduct = async (updatedProduct) => {
          try {
               await updateProductWithFormData(updatedProduct);
               fetchData();
               closeEditModal();
          } catch (error) {
               console.error("Failed to update product:", error);
          }
     };

     const openAddModal = () => setIsAddModalOpen(true);
     const closeAddModal = () => setIsAddModalOpen(false);
     const openEditModal = (product) => {
          setCurrentProduct(product);
          setIsEditModalOpen(true);
     };
     const closeEditModal = () => setIsEditModalOpen(false);

     return (
          <div>
               <div className="container mx-auto p-4">
                    <div className='flex justify-between p-2'>
                         <h2 className="text-2xl font-bold mb-4">Products</h2>
                         <button onClick={openAddModal} className="bg-blue-500 text-white font-bold py-2 px-4 rounded">Add Product</button>
                         {isAddModalOpen && (
                              <AddProductModal
                                   isOpen={isAddModalOpen}
                                   onClose={closeAddModal}
                                   onAdd={handleAddProduct}
                              />
                         )}
                         {isEditModalOpen && currentProduct && (
                              <EditProductModal
                                   isOpen={isEditModalOpen}
                                   onClose={closeEditModal}
                                   onSave={handleEditProduct}
                                   product={currentProduct}
                                   setProduct={setCurrentProduct}
                              />
                         )}
                    </div>

                    <hr className='pb-4' />
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                         {products.map(product => (
                              <Card
                                   key={product.id}
                                   title={product.title}
                                   price={product.price}
                                   stock={product.stock}
                                   onEdit={() => openEditModal(product, product._id)}
                              />
                         ))}
                    </div>
               </div>
          </div>
     );
};

export default Products;
