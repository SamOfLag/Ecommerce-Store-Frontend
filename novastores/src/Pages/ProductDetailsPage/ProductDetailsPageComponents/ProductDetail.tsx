import {
  Container,
  Row,
  Col,
  Image,
  Dropdown,
  Form,
  InputGroup,
} from 'react-bootstrap';
import { FaStar } from 'react-icons/fa';
import CustomButton from '../../../Components/Partials/Button/Button';

const thumbnails = ['/assets/images/apple1.png', '/assets/images/apple2.png'];

const ProductDetail = () => {
  return (
    <Container className="py-4">
      <Row>
        {/* Product Image */}
        <Col md={6} className="text-center">
          <Image
            src="/assets/images/apple1.png" // Replace with your image path
            fluid
            className="border rounded"
          />
          <div className="d-flex justify-content-center mt-3">
            <CustomButton variant="outline-secondary" className="me-2">
              ◀
            </CustomButton>

            {/* Thumbnail images */}
            {thumbnails.map((thumbnail, idx) => (
              <img
                key={idx}
                src={thumbnail}
                alt={`Thumbnail ${idx + 1}`}
                className="img-thumbnail"
                style={{ width: '100px', height: '100px', objectFit: 'cover' }}
              />
            ))}

            <CustomButton variant="outline-secondary">▶</CustomButton>
          </div>
        </Col>

        {/* Product Details */}
        <Col md={6}>
          <h5 className="mb-3">
            2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 256GB
            SSD Storage) - Space Gray
          </h5>

          <div className="mb-3">
            <span className="text-warning">
              {[...Array(5)].map((_, idx) => (
                <FaStar key={idx} className="me-1" />
              ))}
            </span>
            <span className="text-muted">
              4.7 Star Rating (21,671 User feedback)
            </span>
          </div>

          <ul className="list-unstyled text-muted mb-3">
            <li>
              <strong>SKU:</strong> A264671
            </li>
            <li>
              <strong>Brand:</strong> Apple
            </li>
            <li>
              <strong>Availability:</strong>{' '}
              <span className="text-success">In Stock</span>
            </li>
            <li>
              <strong>Category:</strong> Electronics Devices
            </li>
          </ul>

          <h4 className="text-primary mb-3">
            $1699 <del className="text-muted">$1999.00</del>{' '}
            <span className="text-success">21% OFF</span>
          </h4>

          <Form>
            {/* Color Options */}
            <Form.Group controlId="color" className="mb-3">
              <Form.Label>Color</Form.Label>
              <div className="d-flex">
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'orange',
                    border: '2px solid black',
                    marginRight: '10px',
                    cursor: 'pointer',
                  }}
                ></div>
                <div
                  style={{
                    width: '30px',
                    height: '30px',
                    borderRadius: '50%',
                    backgroundColor: 'gray',
                    border: '2px solid lightgray',
                    cursor: 'pointer',
                  }}
                ></div>
              </div>
            </Form.Group>

            {/* Memory Option */}
            <Form.Group controlId="memory" className="mb-3">
              <Form.Label>Memory</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  16GB unified memory
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>8GB unified memory</Dropdown.Item>
                  <Dropdown.Item>16GB unified memory</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            {/* Size Option */}
            <Form.Group controlId="size" className="mb-3">
              <Form.Label>Size</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  14-inch Liquid Retina XDR display
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>
                    13-inch Liquid Retina XDR display
                  </Dropdown.Item>
                  <Dropdown.Item>
                    14-inch Liquid Retina XDR display
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            {/* Storage Option */}
            <Form.Group controlId="storage" className="mb-3">
              <Form.Label>Storage</Form.Label>
              <Dropdown>
                <Dropdown.Toggle variant="outline-secondary">
                  1TB SSD Storage
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item>512GB SSD Storage</Dropdown.Item>
                  <Dropdown.Item>1TB SSD Storage</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>

            {/* Quantity */}
            <Form.Group controlId="quantity" className="mb-3">
              <Form.Label>Quantity</Form.Label>
              <InputGroup>
                <CustomButton variant="outline-secondary">-</CustomButton>
                <Form.Control
                  type="number"
                  value="1"
                  className="text-center"
                  readOnly
                />
                <CustomButton variant="outline-secondary">+</CustomButton>
              </InputGroup>
            </Form.Group>
          </Form>

          {/* Actions */}
          <div className="d-flex gap-2 mb-3">
            <CustomButton variant="warning" className="text-white">
              <i className="bi bi-cart me-2"></i> Add to Cart
            </CustomButton>
            <CustomButton variant="danger" className="text-white">
              Buy Now
            </CustomButton>
          </div>

          <div className="d-flex gap-3 text-muted">
            <span>Add to Wishlist</span>
            <span>Add to Compare</span>
            <span>Share product</span>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
