import { Row, Col, Container } from "react-bootstrap";
import CheckoutInformation from "./CheckoutPageComponents/CheckoutInformation";
import OrderSummary from "./CheckoutPageComponents/OrderSummary";

const CheckoutPage = () => {
  return (
    <Container fluid className="py-4">
      {/* Page Title */}
      <Row>
        {/* Checkout Information Section */}
        <Col lg={8} className="mb-4">
          <CheckoutInformation />
        </Col>

        {/* Order Summary Section */}
        <Col lg={4}>
          <OrderSummary />
        </Col>
      </Row>
    </Container>
  );
};

export default CheckoutPage;
