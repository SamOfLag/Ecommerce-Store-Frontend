import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Product from '../Pages/ProductPage/ProductPageComponents/ProductPage';
import Cart from '../Pages/Cartpage/Cartpage';
import Checkout from '../Pages/CheckoutPage/CheckoutPage';
import AdminDashboard from '../Pages/AdminDashboardPage/AdminDashboardPage';
import SigninPage from '../Pages/AuthenticationPages/SigninPage/SigninPage';
import LayoutRoutes from './Layoutroutes';
import SignUpPage from '../Pages/AuthenticationPages/SignupPage/SignupPage';
import ShoppingPage from '../Pages/ProductPage/ShoppingPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Pages that need masterlayout */}
        <Route path="/" element={<LayoutRoutes />}>
          <Route index element={<ShoppingPage />} />
          <Route path="/product" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/signin" element={<SigninPage />} />
          <Route path="/signup" element={<SignUpPage />} />
        </Route>

        {/* Pages that don't need masterlayout */}
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
