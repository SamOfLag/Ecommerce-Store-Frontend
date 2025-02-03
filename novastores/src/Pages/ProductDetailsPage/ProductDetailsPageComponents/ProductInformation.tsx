import { Container, Row, Col, Nav, Tab, ListGroup } from 'react-bootstrap';

const ProductInformation = () => {
  return (
    <Container className="py-4">
      <Tab.Container defaultActiveKey="description">
        <Nav variant="tabs" className="mb-4">
          <Nav.Item>
            <Nav.Link eventKey="description">Description</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="additional-info">Additional Information</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="specification">Specification</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="review">Review</Nav.Link>
          </Nav.Item>
        </Nav>

        <Tab.Content>
          <Tab.Pane eventKey="description">
            <Row>
              <Col md={8}>
                <h6 className="fw-bold mb-3">Description</h6>
                <p className="text-muted">
                  The most powerful MacBook Pro ever is here. With the blazing-fast M1 Pro or M1 Max chip — the first Apple silicon designed for pros — you get groundbreaking performance and amazing battery life. Add to that a stunning Liquid Retina XDR display, the best camera and audio ever in a Mac notebook, and all the ports you need. The first notebook of its kind, this MacBook Pro is a beast. M1 Pro takes the exceptional performance of the M1 architecture to a whole new level for pro users.
                </p>
                <p className="text-muted">
                  Even the most ambitious projects are easily handled with up to 10 CPU cores, up to 16 GPU cores, a 16-core Neural Engine, and dedicated encode and decode media engines that support H.264, HEVC, and ProRes codecs.
                </p>
              </Col>

              <Col md={4}>
                <h6 className="fw-bold mb-3">Feature</h6>
                <ListGroup variant="flush" className="text-muted">
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="bi bi-award me-2 text-warning"></i> Free 1 Year Warranty
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="bi bi-truck me-2 text-warning"></i> Free Shipping & Fasted Delivery
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="bi bi-arrow-counterclockwise me-2 text-warning"></i> 100% Money-back Guarantee
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="bi bi-headset me-2 text-warning"></i> 24/7 Customer Support
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex align-items-center">
                    <i className="bi bi-shield-lock me-2 text-warning"></i> Secure Payment Method
                  </ListGroup.Item>
                </ListGroup>

                <h6 className="fw-bold mt-4 mb-3">Shipping Information</h6>
                <ListGroup variant="flush" className="text-muted">
                  <ListGroup.Item>
                    <strong>Courier:</strong> 2-4 days, free shipping
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Local Shipping:</strong> up to one week, $19.00
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>UPS Ground Shipping:</strong> 4-6 days, $29.00
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <strong>Unishop Global Export:</strong> 3-4 days, $39.00
                  </ListGroup.Item>
                </ListGroup>
              </Col>
            </Row>
          </Tab.Pane>

          <Tab.Pane eventKey="additional-info">
            <h6 className="fw-bold">Additional Information</h6>
            <p className="text-muted">Details about additional information will be displayed here.</p>
          </Tab.Pane>

          <Tab.Pane eventKey="specification">
            <h6 className="fw-bold">Specification</h6>
            <p className="text-muted">Specification details will be shown here.</p>
          </Tab.Pane>

          <Tab.Pane eventKey="review">
            <h6 className="fw-bold">Review</h6>
            <p className="text-muted">Customer reviews will appear here.</p>
          </Tab.Pane>
        </Tab.Content>
      </Tab.Container>
    </Container>
  );
};

export default ProductInformation;
