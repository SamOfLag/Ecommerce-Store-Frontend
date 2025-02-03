import { useState } from "react";
import { Form, Col, Row, Container, Button, Modal } from "react-bootstrap";
import { PaystackButton } from "react-paystack";
import generatePaystackConfig from "../../../Services/paystack/paystackConfig";



const CheckoutInformation = () => {
  const [selectedPayment, setSelectedPayment] = useState("cashOnDelivery");
  const [showPaystackModal, setShowPaystackModal] = useState(false);

  const userEmail = "customer@example.com"; // Replace with dynamic user email
  const totalAmount = 5000; // Replace with dynamic order total in Naira

  // Generate the Paystack config
  const paystackConfig = generatePaystackConfig(userEmail, totalAmount);

  const handlePaymentSelection = (method: string) => {
    setSelectedPayment(method);
  };

  const handleSuccess = (reference: unknown) => {
    console.log("Payment successful:", reference);
    setShowPaystackModal(false);
    // TODO: Handle success logic (e.g., verify the payment on your backend)
  };

  const handleClose = () => {
    console.log("Payment form closed");
    setShowPaystackModal(false);
  };

  return (
    <Container className="p-4 bg-white rounded shadow-sm">
      <h4 className="mb-4">Billing Information</h4>
      <Form>
        {/* User Name and Company Name */}
        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="firstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="First name" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="lastName">
              <Form.Label>Last Name</Form.Label>
              <Form.Control type="text" placeholder="Last name" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="companyName">
              <Form.Label>Company Name (Optional)</Form.Label>
              <Form.Control type="text" placeholder="Company name" />
            </Form.Group>
          </Col>
        </Row>

        {/* Address Fields */}
        <Form.Group controlId="address" className="mb-3">
          <Form.Label>Address</Form.Label>
          <Form.Control type="text" placeholder="Address" />
        </Form.Group>

        <Row className="mb-3">
          <Col md={3}>
            <Form.Group controlId="country">
              <Form.Label>Country</Form.Label>
              <Form.Select>
                <option>Select...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="region">
              <Form.Label>Region/State</Form.Label>
              <Form.Select>
                <option>Select...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Select>
                <option>Select...</option>
              </Form.Select>
            </Form.Group>
          </Col>
          <Col md={3}>
            <Form.Group controlId="zipCode">
              <Form.Label>Zip Code</Form.Label>
              <Form.Control type="text" placeholder="Zip code" />
            </Form.Group>
          </Col>
        </Row>

        <Row className="mb-3">
          <Col md={6}>
            <Form.Group controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Email" />
            </Form.Group>
          </Col>
          <Col md={6}>
            <Form.Group controlId="phoneNumber">
              <Form.Label>Phone Number</Form.Label>
              <Form.Control type="text" placeholder="Phone number" />
            </Form.Group>
          </Col>
        </Row>

        <Form.Group controlId="differentAddress" className="mb-4">
          <Form.Check type="checkbox" label="Ship into different address" />
        </Form.Group>

        <h4 className="mb-4">Payment Option</h4>

        {/* Payment Options */}
        <Row className="mb-3">
          <Col>
            <Form.Check
              type="radio"
              label="Cash on Delivery"
              name="paymentMethod"
              id="cashOnDelivery"
              onChange={() => handlePaymentSelection("cashOnDelivery")}
              checked={selectedPayment === "cashOnDelivery"}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Paystack"
              name="paymentMethod"
              id="paystack"
              onChange={() => handlePaymentSelection("paystack")}
              checked={selectedPayment === "paystack"}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Paypal"
              name="paymentMethod"
              id="paypal"
              onChange={() => handlePaymentSelection("paypal")}
              checked={selectedPayment === "paypal"}
            />
          </Col>
          <Col>
            <Form.Check
              type="radio"
              label="Debit/Credit Card"
              name="paymentMethod"
              id="creditCard"
              onChange={() => handlePaymentSelection("creditCard")}
              checked={selectedPayment === "creditCard"}
            />
          </Col>
        </Row>

        {/* Paystack Modal */}
        <Modal show={showPaystackModal} onHide={handleClose} centered>
          <Modal.Header closeButton>
            <Modal.Title>Pay with Paystack</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <PaystackButton
              email={paystackConfig.email}
              amount={paystackConfig.amount}
              publicKey={paystackConfig.publicKey}
              metadata={paystackConfig.metadata}
              text="Pay Now"
              className="btn btn-primary w-100"
              onSuccess={handleSuccess}
              onClose={handleClose}
            />
          </Modal.Body>
        </Modal>

        {/* Pay Now Button */}
        {selectedPayment === "paystack" && (
          <Button
            variant="success"
            className="mt-3"
            onClick={() => setShowPaystackModal(true)}
          >
            Proceed to Paystack
          </Button>
        )}

        <h4 className="mb-4 mt-4">Additional Information</h4>
        <Form.Group controlId="additionalInfo">
          <Form.Label>Order Notes (Optional)</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Notes about your order, e.g., special notes for delivery"
            rows={4}
          />
        </Form.Group>
      </Form>
    </Container>
  );
};

export default CheckoutInformation;
