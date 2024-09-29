import axios from 'axios';

export const addProduct = (productData) => {
    return axios.post('https://mern-1-mvro.onrender.com/api/products/add', productData);
};

export const updatePrice = (productId, newPrice) => {
    return axios.put(`https://mern-1-mvro.onrender.com/api/products/${productId}/price`, { price: newPrice });
};

export const getSalesReport = () => {
    return axios.get('https://mern-1-mvro.onrender.com/api/products/sales-report');
};

export const addCategory = (categoryData) => {
    return axios.post('https://mern-1-mvro.onrender.com/api/categories/add', categoryData);
};

export const getCategories = () => {
    return axios.get('https://mern-1-mvro.onrender.com/api/categories');
};
