import React, { useEffect, useState } from 'react';
import { useCart } from '../Cartcontext/context';
import './care.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Category = ({ image, title }) => (
  <div className="col-md-4 kic-top1">
    <a href="single.html">
      <img src={image} className="img-responsive" alt={title} />
    </a>
    <h6>{title}</h6>
    <p>Nam libero tempore</p>
  </div>
);

const Product = ({ id, name, oldPrice, newPrice, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, quantity: 1, price: newPrice, image });
  };

  return (
    <div className="col-md-3 pro-1">
      <div className="col-m">
        <a href="#" data-toggle="modal" data-target={`#myModal${id}`} className="offer-img">
          <img src={image} className="img-responsive" alt={name} />
        </a>
        <div className="mid-1">
          <div className="women">
            <h6><a href="single.html">{name}</a></h6>
          </div>
          <div className="mid-2">
            <p>
              <label>{oldPrice}</label><em className="item_price">{newPrice}</em>
            </p>
            <div className="block">
              <div className="starbox small ghosting"> </div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="add">
            <button
              className="btn btn-danger my-cart-btn my-cart-b"
              onClick={handleAddToCart}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Modal = ({ id, title, image, price }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, title, price, image });
  };

  return (
    <div className="modal fade" id={id} tabIndex="-1" role="dialog" aria-labelledby="myModalLabel">
      <div className="modal-dialog" role="document">
        <div className="modal-content modal-info">
          <div className="modal-header">
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body modal-spa">
            <div className="col-md-5 span-2">
              <div className="item">
                <img src={image} className="img-responsive" alt={title} />
              </div>
            </div>
            <div className="col-md-7 span-1">
              <h3>{title}</h3>
              <p className="in-para">There are many variations of passages of Lorem Ipsum.</p>
              <div className="price_single">
                <span className="reducedfrom "><del>$2.00</del>{price}</span>
                <div className="clearfix"></div>
              </div>
              <h4 className="quick">Quick Overview:</h4>
              <p className="quick_desc">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
              <div className="add-to">
                <button className="btn btn-danger my-cart-btn my-cart-btn1" onClick={handleAddToCart}>
                  Add to Cart
                </button>
              </div>
            </div>
            <div className="clearfix"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Care = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('/api/products');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
      {/* Carousel */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="care.html">
              <img className="d-block w-100" src="images/ba1.jpg" alt="First slide" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="kitchen.html">
              <img className="d-block w-100" src="images/ba.jpg" alt="Second slide" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="hold.html">
              <img className="d-block w-100" src="images/ba2.jpg" alt="Third slide" />
            </a>
          </div>
        </div>
        <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

      {/* Popular Categories */}
      <div className="kic-top">
        <div className="container">
          <div className="kic">
            <h3>Popular Categories</h3>
          </div>
          <div className="row">
            <Category image="images/ki3.jpg" title="Natural Cream" />
            <Category image="images/ki4.jpg" title="Shaving Kit" />
            <Category image="images/ki5.jpg" title="Makeup Kit" />
          </div>
        </div>
      </div>

      {/* Products */}
      <div className="product">
        <div className="container">
          <div className="spec">
            <h3>Products</h3>
            <div className="ser-t">
              <b></b>
              <span><i></i></span>
              <b className="line"></b>
            </div>
          </div>
          <div className="row con-w3l agileinf">
            {products.map(product => (
              <Product
                key={product.id}
                id={product.id}
                name={product.name}
                oldPrice={product.oldPrice}
                newPrice={product.newPrice}
                image={product.image}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modals */}
      {products.map(product => (
        <Modal
          key={product.id}
          id={`myModal${product.id}`}
          title={product.name}
          image={product.image}
          price={product.newPrice}
        />
      ))}
    </div>
  );
};

export default Care;
