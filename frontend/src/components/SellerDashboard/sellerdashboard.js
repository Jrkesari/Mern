import React, { useState, useEffect } from 'react';
import { addProduct, updatePrice, getSalesReport, addCategory, getCategories } from '../../api/productApi';
import './sellerdashboard.css';

const SellerDashboard = () => {
    const [tab, setTab] = useState('addProduct');
    const [productData, setProductData] = useState({ name: '', price: '', quantity: '', description: '', category: '' });
    const [productId, setProductId] = useState('');
    const [newPrice, setNewPrice] = useState('');
    const [salesReport, setSalesReport] = useState([]);
    const [categories, setCategories] = useState([]);
    const [newCategory, setNewCategory] = useState('');

    useEffect(() => {
        if (tab === 'manageCategories') {
            fetchCategories();
        }
    }, [tab]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setProductData({ ...productData, [name]: value });
    };

    const handleAddProduct = async () => {
        try {
            console.log('Product Data:', productData); // Log productData to check if category is included
            await addProduct(productData);
            alert('Product added successfully');
            setProductData({ name: '', price: '', quantity: '', description: '', category: '' });
        } catch (error) {
            console.error('Error adding product:', error);
        }
    };

    const handleUpdatePrice = async () => {
        try {
            await updatePrice(productId, newPrice);
            alert('Price updated successfully');
        } catch (error) {
            console.error('Error updating price:', error);
        }
    };

    const handleGetSalesReport = async () => {
        try {
            const response = await getSalesReport();
            setSalesReport(response.data);
        } catch (error) {
            console.error('Error fetching sales report:', error);
        }
    };

    const handleAddCategory = async () => {
        try {
            await addCategory({ name: newCategory });
            setNewCategory('');
            alert('Category added successfully');
            fetchCategories();
        } catch (error) {
            console.error('Error adding category:', error);
        }
    };

    const fetchCategories = async () => {
        try {
            const response = await getCategories();
            setCategories(response.data);
        } catch (error) {
            console.error('Error fetching categories:', error);
        }
    };

    return (
        <div className="seller-dashboard">
            <h2>Seller Dashboard</h2>
            <div className="dashboard-tabs">
                <button onClick={() => setTab('addProduct')}>Add Product</button>
                <button onClick={() => setTab('setPrice')}>Set Price</button>
                <button onClick={() => {
                    setTab('salesReport');
                    handleGetSalesReport();
                }}>Sales Report</button>
                <button onClick={() => setTab('manageCategories')}>Manage Categories</button>
            </div>

            <div className="dashboard-content">
                {tab === 'addProduct' && (
                    <div className="add-product">
                        <h3>Add New Product</h3>
                        <input
                            type="text"
                            name="name"
                            placeholder="Product Name"
                            value={productData.name}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="price"
                            placeholder="Product Price"
                            value={productData.price}
                            onChange={handleInputChange}
                        />
                        <input
                            type="number"
                            name="quantity"
                            placeholder="Quantity"
                            value={productData.quantity}
                            onChange={handleInputChange}
                        />
                        <textarea
                            name="description"
                            placeholder="Product Description"
                            value={productData.description}
                            onChange={handleInputChange}
                        />
                        <select
                            name="category"
                            value={productData.category}
                            onChange={handleInputChange}
                        >
                            <option value="">Select Category</option>
                            {categories.map((category) => (
                                <option key={category._id} value={category._id}>
                                    {category.name}
                                </option>
                            ))}
                        </select>
                        <button onClick={handleAddProduct}>Add Product</button>
                    </div>
                )}

                {tab === 'setPrice' && (
                    <div className="set-price">
                        <h3>Set Product Price</h3>
                        <input
                            type="text"
                            placeholder="Product ID"
                            value={productId}
                            onChange={(e) => setProductId(e.target.value)}
                        />
                        <input
                            type="number"
                            placeholder="New Price"
                            value={newPrice}
                            onChange={(e) => setNewPrice(e.target.value)}
                        />
                        <button onClick={handleUpdatePrice}>Update Price</button>
                    </div>
                )}

                {tab === 'salesReport' && (
                    <div className="sales-report">
                        <h3>Sales Report</h3>
                        {salesReport.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Name</th>
                                        <th>Price</th>
                                        <th>Quantity</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {salesReport.map((product) => (
                                        <tr key={product._id}>
                                            <td>{product.name}</td>
                                            <td>{product.price}</td>
                                            <td>{product.quantity}</td>
                                            <td>{product.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No sales data available</p>
                        )}
                    </div>
                )}

                {tab === 'manageCategories' && (
                    <div className="manage-categories">
                        <h3>Manage Categories</h3>
                        <input
                            type="text"
                            placeholder="New Category"
                            value={newCategory}
                            onChange={(e) => setNewCategory(e.target.value)}
                        />
                        <button onClick={handleAddCategory}>Add Category</button>
                        <h4>Categories</h4>
                        {categories.length > 0 ? (
                            <ul>
                                {categories.map((category) => (
                                    <li key={category._id}>{category.name}</li>
                                ))}
                            </ul>
                        ) : (
                            <p>No categories available</p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SellerDashboard;
