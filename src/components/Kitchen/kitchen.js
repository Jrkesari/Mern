import React from 'react';
import { useCart } from '../Cartcontext/context';
import './kitchen.css';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import 'font-awesome/css/font-awesome.min.css';

const Category = ({ image, title }) => (
  <div className="col-md-4 kic-top1">
    <a href="single.html">
      <img src={image} className="img-responsive category-image" alt={title} />
    </a>
    <h6 className="category-title">{title}</h6>
    <p className="category-description">Nam libero tempore</p>
  </div>
);

const Product = ({ id, name, quantity, oldPrice, newPrice, image }) => {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart({ id, name, quantity, price: newPrice, image });
  };

  return (
    <div className="col-md-3 pro-1 product-card">
      <div className="product-image-wrapper">
        <a href="#" data-toggle="modal" data-target={`#myModal${id}`} className="offer-img">
          <img src={image} className="img-responsive product-image" alt={name} />
        </a>
        <div className="mid-1">
          <div className="women">
            <h6><a href="single.html">{name}</a>({quantity})</h6>
          </div>
          <div className="mid-2">
            <p>
              <label className="old-price">{oldPrice}</label>
              <em className="item-price">{newPrice}</em>
            </p>
            <div className="block">
              <div className="starbox small ghosting"></div>
            </div>
            <div className="clearfix"></div>
          </div>
          <div className="add">
            <button
              className="btn btn-danger add-to-cart-btn"
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
                <img src={image} className="img-responsive modal-image" alt={title} />
              </div>
            </div>
            <div className="col-md-7 span-1">
              <h3>{title}</h3>
              <p className="in-para">There are many variations of passages of Lorem Ipsum.</p>
              <div className="price_single">
                <span className="reducedfrom"><del>$2.00</del>{price}</span>
                <div className="clearfix"></div>
              </div>
              <h4 className="quick">Quick Overview:</h4>
              <p className="quick_desc">Nam liber tempor cum soluta nobis eleifend option congue nihil imperdiet doming id quod mazim placerat facer possim assum.</p>
              <div className="add-to">
                <button className="btn btn-danger add-to-cart-btn" onClick={handleAddToCart}>
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

const Kitchen = () => {
  return (
    <div>
      <div className="kic-top">
        <div className="container">
          <div className="kic">
            <h3>Popular Categories</h3>
          </div>
          <div className="row">
            <Category image="images/ki.jpg" title="Dal" />
            <Category image="images/ki1.jpg" title="Snacks" />
            <Category image="images/ki2.jpg" title="Spice" />
          </div>
        </div>
      </div>

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
          <div className="con-w3l agileinf row">
            <Product
              id="24"
              name="Wheat"
              quantity="500 g"
              oldPrice="$7.00"
              newPrice="$6.00"
              image="images/of24.png"
            />
            <Product
              id="25"
              name="Peach Halves"
              quantity="250 g"
              oldPrice="$5.00"
              newPrice="$4.50"
              image="images/of25.png"
            />
          </div>
        </div>
      </div>

      <Modal id="myModal1" title="Wheat" image="images/of24.png" price="$1.50" />
      <Modal id="myModal2" title="Peach Halves" image="images/of25.png" price="$9.00" />
    </div>
  );
};

export default Kitchen;
