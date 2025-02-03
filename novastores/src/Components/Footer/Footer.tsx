import { Container, Row, Col, Button } from 'react-bootstrap';
import CustomButton from '../Partials/Button/Button';
// import { FaApple } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-5">
      <Container>
        <Row>
          {/* Logo and Contact Info */}
          <Col md={3} className="mb-4">
            <h5 className="text-uppercase fw-bold">CLICON</h5>
            <p className="mb-1">Customer Supports:</p>
            <p className="mb-1">(629) 555-0129</p>
            <p className="mb-1">4517 Washington Ave.</p>
            <p className="mb-1">Manchester, Kentucky 39495</p>
            <a href="mailto:info@kinbo.com" className="text-light">
              info@kinbo.com
            </a>
          </Col>

          {/* Top Category */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold text-uppercase">Top Category</h6>
            <ul className="list-unstyled">
              <li>Computer & Laptop</li>
              <li>SmartPhone</li>
              <li>Headphone</li>
              <li>
                <span className="text-warning">&mdash; Accessories</span>
              </li>
              <li>Camera & Photo</li>
              <li>TV & Homes</li>
            </ul>
            <a href="#" className="text-light">
              Browse All Product &rarr;
            </a>
          </Col>

          {/* Quick Links */}
          <Col md={2} className="mb-4">
            <h6 className="fw-bold text-uppercase">Quick Links</h6>
            <ul className="list-unstyled">
              <li>Shop Product</li>
              <li>Shopping Cart</li>
              <li>Wishlist</li>
              <li>Compare</li>
              <li>Track Order</li>
              <li>Customer Help</li>
              <li>About Us</li>
            </ul>
          </Col>

          {/* Download App */}
          <Col md={3} className="mb-4">
            <h6 className="fw-bold text-uppercase">Download App</h6>
            <Button variant="light" className="d-block mb-2">
              Get it now on <br />
              Google Play
            </Button>
            <Button variant="light" className="d-block">
              {/* <FaApple size={50}/> */}
              Get it now on <br />
              App Store
            </Button>
          </Col>

          {/* Popular Tags */}
          <Col md={2} className="mb-1">
            <h6 className="fw-bold text-uppercase">Popular Tag</h6>
            <div className="mb-4">
              <div className="d-flex flex-wrap">
                {[
                  'Game',
                  'iPhone',
                  'TV',
                  'Asus Laptops',
                  'Macbook',
                  'SSD',
                  'Graphics Card',
                  'Power Bank',
                  'Smart TV',
                  'Speaker',
                  'Tablet',
                  'Microwave',
                  'Samsung',
                ].map((tag, index) => (
                  <CustomButton
                    key={index}
                    variant="outline-secondary"
                    size="sm"
                    className="me-2 mb-2 text-white border-white"
                  >
                    {tag}
                  </CustomButton>
                ))}
              </div>
            </div>
          </Col>
        </Row>
        <hr />
        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">Novastore - © 2025. Built by Samson Oladapo</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
