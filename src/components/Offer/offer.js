import React, { useState } from 'react';
import { useCart } from '../Cartcontext/context';
import './offer.css';
import { Carousel, Container, Row, Col, Button, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Offer = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const { addToCart } = useCart();

  const handleSearch = (event) => {
    event.preventDefault();
    if (searchQuery) {
      // Redirect to the searched page
      window.location.href = `/${searchQuery}.html`;
    }
  };

  const handleAddToCart = (item) => {
    addToCart(item);
  };

  return (
    <>
      {/* Search Bar */}
      <div className="search-bar">
        <Container>
          <Form inline onSubmit={handleSearch}>
            <Form.Control
              type="text"
              placeholder="Search..."
              className="mr-sm-2"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="btn-container">
        <Button type="submit" variant="outline-light">Search</Button>
      </div>
          </Form>
        </Container>
      </div>

      {/* Carousel */}
      <Carousel id="myCarousel">
        <Carousel.Item>
          <a href="kitchen.html">
            <img
              className="d-block w-100"
              src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
              alt="First slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="care.html">
            <img
              className="d-block w-100"
              src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
              alt="Second slide"
            />
          </a>
        </Carousel.Item>
        <Carousel.Item>
          <a href="hold.html">
            <img
              className="d-block w-100"
              src="https://t3.ftcdn.net/jpg/02/52/38/80/360_F_252388016_KjPnB9vglSCuUJAumCDNbmMzGdzPAucK.jpg"
              alt="Third slide"
            />
          </a>
        </Carousel.Item>
      </Carousel>

      {/* Content */}
      <div className="content-top offer-w3agile">
        <Container>
          <div className="spec">
            <h3>Special Offers</h3>
            <div className="ser-t">
              <b></b>
              <span><i></i></span>
              <b className="line"></b>
            </div>
          </div>
          <Row>
            {[...Array(15).keys()].map(index => (
              <Col md={3} key={index} className="pro-1">
                <div className="col-m">
                  <a href="#" data-toggle="modal" data-target={`#myModal${index + 1}`} className="offer-img">
                    <img
                      src={`images/of${index + 1}.png`}
                      className="img-responsive"
                      alt=""
                    />
                    {/* <div className="offer">
                      <p><span>Offer</span></p>
                    </div> */}
                  </a>
                  <div className="mid-1">
                    <div className="women">
                      <h6><a href="single.html">{['Moong', 'Sunflower Oil', 'Kabuli Chana', 'Soya Chunks', 'Lays', 'Kurkure', 'Popcorn', 'Nuts', 'Banana', 'Onion', 'Bitter Gourd', 'Apples', 'Honey', 'Chocos'][index]}</a>({['1 kg', '5 kg', '1 kg', '1 kg', '100 g', '100 g', '250 g', '250 g', '6 pcs', '1 kg', '1 kg', '1 kg', '500g', '250g'][index]})</h6>
                    </div>
                    <div className="mid-2">
                      <p>
                        <label>${[2.00, 10.00, 3.00, 4.00, 1.00, 1.00, 2.00, 4.00, 2.00, 1.00, 2.00, 4.00, 7.00, 5.00][index]}</label>
                        <em className="item_price">${[1.50, 9.00, 2.00, 3.50, 0.70, 0.70, 1.00, 3.50, 1.50, 0.70, 1.00, 3.50, 6.00, 4.50][index]}</em>
                      </p>
                      <div className="block">
                        <div className="starbox small ghosting"></div>
                      </div>
                      <div className="clearfix"></div>
                    </div>
                    <div className="add">
                      <Button
                        className="btn btn-danger my-cart-btn my-cart-b"
                        onClick={() => handleAddToCart({
                          id: index + 1,
                          name: ['Moong', 'Sunflower Oil', 'Kabuli Chana', 'Soya Chunks', 'Lays', 'Kurkure', 'Popcorn', 'Nuts', 'Banana', 'Onion', 'Bitter Gourd', 'Apples', 'Honey', 'Chocos'][index],
                          quantity: ['1 kg', '5 kg', '1 kg', '1 kg', '100 g', '100 g', '250 g', '250 g', '6 pcs', '1 kg', '1 kg', '1 kg', '500g', '250g'][index],
                          price: ['1.50', '9.00', '2.00', '3.50', '0.70', '0.70', '1.00', '3.50', '1.50', '0.70', '1.00', '3.50', '6.00', '4.50'][index],
                          image: `images/of${index + 1}.png`
                        })}
                      >
                        Add to Cart
                      </Button>
                    </div>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Offer;
