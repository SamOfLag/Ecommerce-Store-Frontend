import React, { useState } from "react";
import { Row, Col, Button, Offcanvas } from "react-bootstrap";
import FilterComponent from "./ProductsPageComponents/Filter";
import ProductsComponent from "./ProductsPageComponents/ProductsComponent";

const ShoppingPage: React.FC = () => {
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <Row className="gx-4 gy-4">
        {/* Mobile Filter Button */}
        <Col xs={12} className="d-md-none mb-3 text-center">
          <Button variant="primary" onClick={() => setShowFilters(true)}>
            Open Filters
          </Button>
        </Col>

        {/* Filter Component (Left Sidebar for Desktop) */}
        <Col lg={3} md={4} className="d-none d-md-block">
          <FilterComponent />
        </Col>

        {/* Products Component (Main Content) */}
        <Col lg={9} md={8} sm={12}>
          <ProductsComponent />
        </Col>
      </Row>

      {/* Offcanvas (Mobile Filter Sidebar) */}
      <Offcanvas show={showFilters} onHide={() => setShowFilters(false)} placement="start">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Filters</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <FilterComponent />
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default ShoppingPage;
