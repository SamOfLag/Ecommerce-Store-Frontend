import React from "react";
import CustomButton from "../../../Components/Partials/Button/Button";


const CartTotals: React.FC = () => {
    return (
      <div className="card my-5 p-4 shadow-sm">
        <h5 className="mb-3">Card Totals</h5>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Sub-total</p>
          <p className="mb-2 fw-bold">$320</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Shipping</p>
          <p className="mb-2 fw-bold">Free</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Discount</p>
          <p className="mb-2 fw-bold">$24</p>
        </div>
        <div className="d-flex justify-content-between">
          <p className="mb-2">Tax</p>
          <p className="mb-2 fw-bold">$61.99</p>
        </div>
        <hr />
        <div className="d-flex justify-content-between">
          <p className="mb-2 fw-bold">Total</p>
          <p className="mb-2 fw-bold text-primary">$357.99 USD</p>
        </div>
        <CustomButton
          variant="warning"
          className="text-white w-100 mt-3 d-flex align-items-center justify-content-center gap-2"
        >
          PROCEED TO CHECKOUT
        </CustomButton>
      </div>
    );
  };
  
export default CartTotals;