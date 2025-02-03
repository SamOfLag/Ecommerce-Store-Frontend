import { Container, Row, Col, Button } from "react-bootstrap";
import { CheckCircle } from "lucide-react";

const CheckoutSuccess = () => {
  return (
    <Container fluid className="d-flex justify-content-center pt-5 vh-100">
      <Row className="text-center">
        <Col>
          {/* Check Icon */}
          <CheckCircle color="green" size={80} className="mb-3" />

          {/* Success Message */}
          <h2 className="fw-bold">Your order is successfully placed</h2>
          <p className="text-muted">
            Pellentesque sed lectus nec tortor tristique accumsan quis dictum risus. Donec
            volutpat mollis nulla non facilisis.
          </p>

          {/* Action Buttons */}
          <div className="d-flex justify-content-center gap-3 mt-4">
            <Button variant="outline-warning" className="fw-bold px-4">
              <i className="me-2">🗂️</i> Go to Dashboard
            </Button>
            <Button variant="warning" className="fw-bold px-4">
              View Order →
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutSuccess;
