import { useState } from 'react';
import { createProduct } from '../api/index.js';

const ProductForm = () => {
     const [name, setName] = useState('');
     const [description, setDescription] = useState('');
     const [price, setPrice] = useState('');
     const [quantity, setQuantity] = useState('');

     const handleSubmit = async (e) => {
          e.preventDefault();
          const product = { name, description, price, quantity };
          await createProduct(product);
          setName('');
          setDescription('');
          setPrice('');
          setQuantity('');
     };

     return (
          <div className="p-4">
               <h1 className="text-2xl font-bold mb-4">Add Product</h1>
               <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                         <label className="block">Name:</label>
                         <input
                              type="text"
                              value={name}
                              onChange={(e) => setName(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <div>
                         <label className="block">Description:</label>
                         <input
                              type="text"
                              value={description}
                              onChange={(e) => setDescription(e.target.value)}
                              className="border p-2 w-full"
                         />
                    </div>
                    <div>
                         <label className="block">Price:</label>
                         <input
                              type="number"
                              value={price}
                              onChange={(e) => setPrice(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <div>
                         <label className="block">Quantity:</label>
                         <input
                              type="number"
                              value={quantity}
                              onChange={(e) => setQuantity(e.target.value)}
                              className="border p-2 w-full"
                              required
                         />
                    </div>
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2">Add Product</button>
               </form>
          </div>
     );
};

export default ProductForm;
