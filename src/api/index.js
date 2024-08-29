import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const fetchProducts = async () => {
     try {
          const response = await axios.get(`${API_URL}/products/`);
          return response.data;
     } catch (error) {
          console.log('Failed to fetch products:', error);
          return [];
     }
};

export const fetchSales = async () => {
     try {
          const response = await axios.get(`${API_URL}/sales/`);
          return response.data;
     } catch (error) {
          console.log('Failed to fetch products:', error);
          return [];
     }
};

export const fetchProductById = async (id) => {
     try {
          const response = await axios.get(`${API_URL}/products/${id}`);
          return response.data;
     } catch (error) {
          console.log('Failed to fetch product:', error);
          return [];
     }
};

export const createProductWithFormData = async (product) => {
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

export const updateProductWithFormData = async (formData, productId) => {
     try {
          const response = await axios.put(`${API_URL}/products/${productId}`, formData);
          return response.data;
     } catch (error) {
          console.error('Failed to update product:', error);
          return null;
     }
};



export const deleteProduct = async (productId) => {
     try {
          const response = await axios.delete(`${API_URL}/products/${productId}`);
          return response.data;
     } catch (error) {
          console.error('Failed to delete product:', error);
          return null;
     }
};

