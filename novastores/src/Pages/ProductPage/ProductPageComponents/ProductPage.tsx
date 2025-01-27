import React from 'react';
import {
  Row,
  Col,
  InputGroup,
  Dropdown,
  Button,
  Pagination,
  FormControl,
} from 'react-bootstrap';
import ProductCard from './ProductCard';
import { FaSearch } from 'react-icons/fa';

const ProductsComponent: React.FC = () => {
  return (
    <div>
      {/* Search Bar, Sort, and Results Found */}
      <Row className="mb-4 align-items-center">
        <Col md={6}>
          <InputGroup>
          <FormControl
              placeholder="Search for anything..."
              aria-label="Search"
            />

            <Button variant="light">
              <FaSearch />
            </Button>
          </InputGroup>
        </Col>
        <Col md={3} className="text-end">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" className="shadow-sm">
              Sort by: Most Popular
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item>Most Popular</Dropdown.Item>
              <Dropdown.Item>Price: Low to High</Dropdown.Item>
              <Dropdown.Item>Price: High to Low</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
        <Col md={3} className="text-end">
          <span className="fw-semibold">65,867 Results found</span>
        </Col>
      </Row>

      {/* Product Cards */}
      <Row>
        {Array.from({ length: 12 }).map((_, idx) => (
          <Col md={3} sm={6} xs={12} key={idx} className="mb-4">
            <ProductCard
              image="/assets/images/phone1.png"
              name={`Product Name ${idx + 1}`}
              price={`${(Math.random() * 1000).toFixed(2)}`}
              rating={Math.ceil(Math.random() * 5)}
              reviews={Math.floor(Math.random() * 1000)}
              badge={
                idx % 3 === 0 ? 'HOT' : idx % 4 === 0 ? 'BEST DEALS' : undefined
              }
            />
          </Col>
        ))}
      </Row>

      {/* Pagination */}
      <div className="d-flex justify-content-center mt-4">
        <Pagination className="shadow-sm">
          <Pagination.Prev />
          <Pagination.Item active>{1}</Pagination.Item>
          <Pagination.Item>{2}</Pagination.Item>
          <Pagination.Item>{3}</Pagination.Item>
          <Pagination.Ellipsis />
          <Pagination.Item>{6}</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default ProductsComponent;
