import { Container, Row, Col, Button } from "react-bootstrap";

const OrderSummary = () => {
  return (
    <Container className="p-4 bg-white rounded shadow-sm">
      <h5 className="mb-4 fw-bold">Order Summary</h5>

      {/* Items */}
      <Row className="align-items-center mb-3">
        <Col xs={2}>
          <img
            src="/assets/images/apple1.png"
            alt="Canon EOS 1500D DSLR Camera"
            className="img-fluid rounded"
          />
        </Col>
        <Col xs={7}>
          <p className="mb-1">Canon EOS 1500D DSLR Camera Body+ 18...</p>
          <small>1 x $70</small>
        </Col>
        <Col xs={3} className="text-end fw-bold">
          $70
        </Col>
      </Row>

      <Row className="align-items-center mb-3">
        <Col xs={2}>
          <img
            src="/assets/images/apple1.png"
            alt="Gaming Headphones"
            className="img-fluid rounded"
          />
        </Col>
        <Col xs={7}>
          <p className="mb-1">Wired Over-Ear Gaming Headphones with U...</p>
          <small>3 x $250</small>
        </Col>
        <Col xs={3} className="text-end fw-bold">
          $750
        </Col>
      </Row>

      {/* Summary */}
      <hr />
      <Row className="mb-2">
        <Col>Sub-total</Col>
        <Col className="text-end fw-bold">$820</Col>
      </Row>
      <Row className="mb-2">
        <Col>Shipping</Col>
        <Col className="text-end fw-bold">Free</Col>
      </Row>
      <Row className="mb-2">
        <Col>Discount</Col>
        <Col className="text-end fw-bold">-$24</Col>
      </Row>
      <Row className="mb-3">
        <Col>Tax</Col>
        <Col className="text-end fw-bold">$61.99</Col>
      </Row>
      <hr />
      <Row className="mb-4">
        <Col className="fw-bold">Total</Col>
        <Col className="text-end fw-bold">$857.99 USD</Col>
      </Row>

      {/* Place Order Button */}
      <Button
        variant="warning"
        className="w-100 text-uppercase fw-bold"
        style={{ borderRadius: "0.5rem" }}
      >
        Place Order →
      </Button>
    </Container>
  );
};

export default OrderSummary;











// import React from "react";
// import { Form, Col, Row, Container } from "react-bootstrap";

// const CheckoutInformation = () => {
//   return (
//     <Container className="p-4 bg-white rounded shadow-sm">
//       <h4 className="mb-4">Billing Information</h4>
//       <Form>
//         {/* User Name and Company Name */}
//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="firstName">
//               <Form.Label>First Name</Form.Label>
//               <Form.Control type="text" placeholder="First name" />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="lastName">
//               <Form.Label>Last Name</Form.Label>
//               <Form.Control type="text" placeholder="Last name" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="companyName">
//               <Form.Label>Company Name (Optional)</Form.Label>
//               <Form.Control type="text" placeholder="Company name" />
//             </Form.Group>
//           </Col>
//         </Row>

//         {/* Address Fields */}
//         <Form.Group controlId="address" className="mb-3">
//           <Form.Label>Address</Form.Label>
//           <Form.Control type="text" placeholder="Address" />
//         </Form.Group>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Group controlId="country">
//               <Form.Label>Country</Form.Label>
//               <Form.Select>
//                 <option>Select...</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="region">
//               <Form.Label>Region/State</Form.Label>
//               <Form.Select>
//                 <option>Select...</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="city">
//               <Form.Label>City</Form.Label>
//               <Form.Select>
//                 <option>Select...</option>
//               </Form.Select>
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="zipCode">
//               <Form.Label>Zip Code</Form.Label>
//               <Form.Control type="text" placeholder="Zip code" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="email">
//               <Form.Label>Email</Form.Label>
//               <Form.Control type="email" placeholder="Email" />
//             </Form.Group>
//           </Col>
//           <Col md={6}>
//             <Form.Group controlId="phoneNumber">
//               <Form.Label>Phone Number</Form.Label>
//               <Form.Control type="text" placeholder="Phone number" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Form.Group controlId="differentAddress" className="mb-4">
//           <Form.Check
//             type="checkbox"
//             label="Ship into different address"
//           />
//         </Form.Group>

//         <h4 className="mb-4">Payment Option</h4>

//         {/* Payment Options */}
//         <Row className="mb-3">
//           <Col>
//             <Form.Check
//               type="radio"
//               label="Cash on Delivery"
//               name="paymentMethod"
//               id="cashOnDelivery"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               type="radio"
//               label="Venmo"
//               name="paymentMethod"
//               id="venmo"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               type="radio"
//               label="Paypal"
//               name="paymentMethod"
//               id="paypal"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               type="radio"
//               label="Amazon Pay"
//               name="paymentMethod"
//               id="amazonPay"
//             />
//           </Col>
//           <Col>
//             <Form.Check
//               type="radio"
//               label="Debit/Credit Card"
//               name="paymentMethod"
//               id="creditCard"
//             />
//           </Col>
//         </Row>

//         {/* Card Details */}
//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="nameOnCard">
//               <Form.Label>Name on Card</Form.Label>
//               <Form.Control type="text" placeholder="Name on card" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={6}>
//             <Form.Group controlId="cardNumber">
//               <Form.Label>Card Number</Form.Label>
//               <Form.Control type="text" placeholder="Card number" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <Row className="mb-3">
//           <Col md={3}>
//             <Form.Group controlId="expiryDate">
//               <Form.Label>Expire Date</Form.Label>
//               <Form.Control type="text" placeholder="MM/YY" />
//             </Form.Group>
//           </Col>
//           <Col md={3}>
//             <Form.Group controlId="cvc">
//               <Form.Label>CVC</Form.Label>
//               <Form.Control type="text" placeholder="CVC" />
//             </Form.Group>
//           </Col>
//         </Row>

//         <h4 className="mb-4">Additional Information</h4>
//         <Form.Group controlId="additionalInfo">
//           <Form.Label>Order Notes (Optional)</Form.Label>
//           <Form.Control
//             as="textarea"
//             placeholder="Notes about your order, e.g., special notes for delivery"
//             rows={4}
//           />
//         </Form.Group>
//       </Form>
//     </Container>
//   );
// };

// export default CheckoutInformation;
