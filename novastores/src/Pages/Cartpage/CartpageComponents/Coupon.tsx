import React from "react";
import { Form, Button } from "react-bootstrap";



const CouponCode: React.FC = () => {


  return (
    <div className="card p-4 shadow-sm">
      <h5 className="mb-3">Coupon Code</h5>
      <Form>
        <Form.Group controlId="couponEmail">
          <Form.Control
            type="email"
            placeholder="Email address"
            className="mb-3"
          />
        </Form.Group>
        <Button
          variant="primary"
          className="w-100 text-uppercase fw-bold"
          type="submit"
        >
          Apply Coupon
        </Button>
      </Form>
    </div>
  );
};

export default CouponCode