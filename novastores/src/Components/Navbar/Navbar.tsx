import "bootstrap/dist/css/bootstrap.min.css";
import './Navbar.css'
import { Container, Navbar, InputGroup, FormControl, Button, Dropdown } from "react-bootstrap";
import { FaSearch, FaShoppingCart, FaHeart, FaUser, FaSyncAlt, FaHeadphonesAlt, FaInfoCircle, FaMapMarkerAlt, FaTwitter, FaFacebook, FaInstagram, FaYoutube, FaPhone } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaPinterest } from "react-icons/fa6";

const NavBar = () => {
  return (
    <header>
      {/* Top bar */}
      <div className="custom-bg text-white py-3">
        <Container className="d-flex justify-content-between align-items-center">
          <div>Welcome to Nova online eCommerce stores.</div>
          <div>
            Follow us:
            <Link to="#" className="text-white ms-2"><FaTwitter size={20}/></Link>
            <Link to="#" className="text-white ms-2"><FaFacebook size={20}/></Link>
            <Link to="#" className="text-white ms-2"><FaPinterest size={20}/></Link>
            <Link to="#" className="text-white ms-2"><FaInstagram size={20}/></Link>
            <Link to="#" className="text-white ms-2"><FaYoutube size={20}/></Link>
          </div>
        </Container>
    
      </div>

      {/* Main Navbar */}

      <Navbar bg="custom-bg" expand="lg" className="custom-bg">
        <Container className="align-items-center">
          <Navbar.Brand href="#" className="d-flex align-items-center">
            <img
              src="/assets/images/novastoreslogo.png"
              alt="Novastores Logo"
              className="me-2 text-white"
            />
            <span className="text-white"><strong>NOVASTORES</strong></span>
          </Navbar.Brand>

          {/* Search Bar */}
          <InputGroup className="mx-auto" style={{ maxWidth: "600px" }}>
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                All Categories
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#">Electronics Devices</Dropdown.Item>
                <Dropdown.Item href="#">Computer & Laptop</Dropdown.Item>
                <Dropdown.Item href="#">Computer Accessories</Dropdown.Item>
                <Dropdown.Item href="#">SmartPhone</Dropdown.Item>
                <Dropdown.Item href="#">Headphone</Dropdown.Item>
                <Dropdown.Item href="#">Mobile Accessories</Dropdown.Item>
                <Dropdown.Item href="#">Gaming Console</Dropdown.Item>
                <Dropdown.Item href="#">Camera & Photo</Dropdown.Item>
                <Dropdown.Item href="#">TV & Home Appliances</Dropdown.Item>
                <Dropdown.Item href="#">Watches & Accessories</Dropdown.Item>
                <Dropdown.Item href="#">GPS & Navigation</Dropdown.Item>
                <Dropdown.Item href="#">Wearable Technology</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <FormControl
              placeholder="Search for anything..."
              aria-label="Search"
            />

            <Button variant="light">
              <FaSearch />
            </Button>
          </InputGroup>

          {/* Icons */}
          <div className="d-flex align-items-center ms-auto">
            <a href="#" className="text-dark mx-2">
              <FaShoppingCart size={20} />
              <span className="badge bg-danger rounded-circle" style={{ fontSize: "0.7rem", position: "relative", top: "-10px", left: "-10px" }}>2</span>
            </a>
            <a href="#" className="text-dark mx-2">
              <FaHeart size={20} />
            </a>
            <a href="#" className="text-dark mx-2">
              <FaUser size={20} />
            </a>
          </div>
        </Container>
      </Navbar>

      {/* Bottom Links */}
      <div className="bg-light py-2">
        <Container className="d-flex justify-content-between">
          <div className="d-flex align-items-center">
            <Link to="#" className="text-dark text-decoration-none mx-3 d-flex align-items-center">
              <FaMapMarkerAlt className="me-2" /> Track Order
            </Link>
            <Link to="#" className="text-dark text-decoration-none mx-3 d-flex align-items-center">
              <FaSyncAlt className="me-2" /> Compare
            </Link>
            <Link to="#" className="text-dark text-decoration-none mx-3 d-flex align-items-center">
              <FaHeadphonesAlt className="me-2" /> Customer Support
            </Link>
            <Link to="#" className="text-dark text-decoration-none mx-3 d-flex align-items-center">
              <FaInfoCircle className="me-2" /> Need Help
            </Link>
          </div>
          <div className="text-dark">
            <i className="fas fa-phone-alt me-2"></i> <FaPhone/> +1-202-555-0104
          </div>
        </Container>
      </div>
    </header>
  );
};

export default NavBar;