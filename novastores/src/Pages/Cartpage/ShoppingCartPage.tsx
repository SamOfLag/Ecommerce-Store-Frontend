import React from 'react';
import ShoppingCard from './CartpageComponents/Card';
import CouponCode from './CartpageComponents/Coupon';
import CartTotals from './CartpageComponents/CartTotals';

const ShoppingCartPage: React.FC = () => {
  return (
    <div className="container my-5 d-flex justify-content-center">

      {/* Shopping Card Component */}
      <div className="col">
        <ShoppingCard />
      </div>

      <div className="mt-5">
        {/* Cart Totals Component */}
        <div className="col">
          <CartTotals />
        </div>

        {/* Coupon Code Component */}
        <div className="col">
          <CouponCode />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartPage;