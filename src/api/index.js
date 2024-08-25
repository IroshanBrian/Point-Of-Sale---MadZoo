import axios from 'axios';

const API_URL = 'http://127.0.0.1:5000/api';

export const fetchProducts = async () => {
     try {
          const response = await axios.get(`${API_URL}/products/`);
          console.log(response.data);
          return response.data;
     } catch (error) {
          console.log('Failed to fetch products:', error);
          return [];
     }
};


// New function to handle product creation with form data
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
