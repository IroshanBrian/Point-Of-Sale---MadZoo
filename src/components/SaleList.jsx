import { useEffect, useState } from 'react';
import { fetchSales } from '../api/index.js';

const SaleList = () => {
     const [sales, setSales] = useState([]);

     useEffect(() => {
          const loadSales = async () => {
               const salesData = await fetchSales();
               setSales(salesData);
          };
          loadSales();
     }, []);

     return (
          <div className="p-4">
               <h1 className="text-2xl font-bold mb-4">Sale List</h1>
               <ul>
                    {sales.map((sale) => (
                         <li key={sale._id} className="border p-2 mb-2">
                              <h2 className="text-xl">Product: {sale.product.name}</h2>
                              <p>Quantity: {sale.quantity}</p>
                              <p className="font-bold">Total Price: ${sale.totalPrice}</p>
                              <p>Date: {new Date(sale.date).toLocaleDateString()}</p>
                         </li>
                    ))}
               </ul>
          </div>
     );
};

export default SaleList;
