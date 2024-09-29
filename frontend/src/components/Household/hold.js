import React from 'react';
import { useCart } from '../Cartcontext/context';
import './hold.css';
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

const Hold = () => {
  return (
    <div>
      {/* Carousel */}
      <div id="myCarousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="hold.html">
              <img className="d-block w-100" src="https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=" alt="First slide" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="care.html">
              <img className="d-block w-100" src="https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=" alt="Second slide" />
            </a>
          </div>
          <div className="carousel-item">
            <a href="kitchen.html">
              <img className="d-block w-100" src="https://media.istockphoto.com/id/1196974664/photo/set-of-home-kitchen-appliances-in-the-room-on-the-wall-background.jpg?s=612x612&w=0&k=20&c=dUSAMg-LUh6j-4437kz30w8k7KgJiR8yrTTXhGiFh0s=" alt="Third slide" />
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
            <Product
              id="36"
              name="Baby Oil"
              oldPrice="$7.00"
              newPrice="$6.00"
              image="images/of36.png"
            />
            <Product
              id="37"
              name="Soap"
              oldPrice="$5.00"
              newPrice="$4.50"
              image="images/of37.png"
            />
            <Product
              id="38"
              name="Hair Gel"
              oldPrice="$4.50"
              newPrice="$3.50"
              image="images/of38.png"
            />
            <Product
              id="39"
              name="Lotion"
              oldPrice="$1.00"
              newPrice="$0.80"
              image="images/of39.png"
            />
            <Product
              id="40"
              name="Shower Gel"
              oldPrice="$7.00"
              newPrice="$6.00"
              image="images/of40.png"
            />
            <Product
              id="41"
              name="Hair Color"
              oldPrice="$5.00"
              newPrice="$4.50"
              image="images/of41.png"
            />
            <Product
              id="42"
              name="Wipes"
              oldPrice="$4.00"
              newPrice="$3.50"
              image="images/of42.png"
            />
            <Product
              id="43"
              name="Essential Oils"
              oldPrice="$1.00"
              newPrice="$0.80"
              image="images/of43.png"
            />
            <Product
              id="44"
              name="Cream"
              oldPrice="$7.00"
              newPrice="$6.00"
              image="images/of44.png"
            />
            <Product
              id="45"
              name="Hair Color"
              oldPrice="$5.00"
              newPrice="$4.50"
              image="images/of45.png"
            />
            <Product
              id="46"
              name="Baby Care"
              oldPrice="$4.00"
              newPrice="$3.50"
              image="images/of46.png"
            />
            <Product
              id="47"
              name="Lotion"
              oldPrice="$1.00"
              newPrice="$0.80"
              image="images/of47.png"
            />
          </div>
        </div>
      </div>

      {/* Modals */}
      <Modal id="myModal36" title="Baby Oil" image="images/of36.png" price="$6.00" />
      <Modal id="myModal37" title="Soap" image="images/of37.png" price="$4.50" />
      <Modal id="myModal38" title="Hair Gel" image="images/of38.png" price="$3.50" />
      <Modal id="myModal39" title="Lotion" image="images/of39.png" price="$0.80" />
      <Modal id="myModal40" title="Shower Gel" image="images/of40.png" price="$6.00" />
      <Modal id="myModal41" title="Hair Color" image="images/of41.png" price="$4.50" />
      <Modal id="myModal42" title="Wipes" image="images/of42.png" price="$3.50" />
      <Modal id="myModal43" title="Essential Oils" image="images/of43.png" price="$0.80" />
      <Modal id="myModal44" title="Cream" image="images/of44.png" price="$6.00" />
      <Modal id="myModal45" title="Hair Color" image="images/of45.png" price="$4.50" />
      <Modal id="myModal46" title="Baby Care" image="images/of46.png" price="$3.50" />
      <Modal id="myModal47" title="Lotion" image="images/of47.png" price="$0.80" />
    </div>
  );
};

export default Hold;
