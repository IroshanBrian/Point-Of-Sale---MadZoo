import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const fetchProducts = async () => {
     try {
          const response = await axios.get(`${API_URL}/products`);
          return response.data;
     } catch (error) {
          console.error('Failed to fetch products:', error);
          return [];
     }
};

export const fetchSales = async () => {
     try {
          const response = await axios.get(`${API_URL}/sales`);
          return response.data;
     } catch (error) {
          console.error('Failed to fetch sales:', error);
          return [];
     }
};

export const createProduct = async (product) => {
     try {
          const response = await axios.post(`${API_URL}/products`, product, {
               headers: {
                    'Content-Type': 'application/json',
               },
          });
          return response.data;
     } catch (error) {
          console.error('Failed to create product:', error);
          return null;
     }
};

export const createSale = async (sale) => {
     try {
          const response = await axios.post(`${API_URL}/sales`, sale, {
               headers: {
                    'Content-Type': 'application/json',
               },
          });
          return response.data;
     } catch (error) {
          console.error('Failed to create sale:', error);
          return null;
     }
};
