import React from "react";
import { Row, Col } from "react-bootstrap";
import FilterComponent from "./ProductPageComponents/Filter";
import ProductsComponent from "./ProductPageComponents/ProductPage";


const ShoppingPage: React.FC = () => {
  return (
    <Row className="gx-4 gy-4">
      {/* Filter Component (Left Sidebar) */}
      <Col lg={3} md={4} sm={12} className="d-none d-md-block">
        <FilterComponent />
      </Col>

      {/* Products Component (Main Content) */}
      <Col lg={9} md={8} sm={12}>
        <ProductsComponent />
      </Col>
    </Row>
  );
};

export default ShoppingPage;
