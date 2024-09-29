import axios from 'axios';

export const addProduct = (productData) => {
    return axios.post('/api/products/add', productData);
};

export const updatePrice = (productId, newPrice) => {
    return axios.put(`/api/products/${productId}/price`, { price: newPrice });
};

export const getSalesReport = () => {
    return axios.get('/api/products/sales-report');
};

export const addCategory = (categoryData) => {
    return axios.post('/api/categories/add', categoryData);
};

export const getCategories = () => {
    return axios.get('/api/categories');
};
