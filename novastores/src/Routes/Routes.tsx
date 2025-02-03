import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AdminDashboard from '../Pages/AdminDashboardPage/AdminDashboardPage';
import SigninPage from '../Pages/AuthenticationPages/SigninPage/SigninPage';
import LayoutRoutes from './Layoutroutes';
import SignUpPage from '../Pages/AuthenticationPages/SignupPage/SignupPage';
import ShoppingPage from '../Pages/ProductPage/HomePage';
import ProductDetailsPage from '../Pages/ProductDetailsPage/ProductDetailsPage';
import ShoppingCartPage from '../Pages/Cartpage/ShoppingCartPage';
import CheckoutPage from '../Pages/CheckoutPage/CheckoutPage';
import CheckoutSuccess from '../Pages/CheckoutPage/CheckoutSuccessPage';
import ForgotPassword from '../Pages/AuthenticationPages/ForgotPasswordpPage';
import ResetPassword from '../Pages/AuthenticationPages/ResetPasswordPage';
import VerifyEmail from '../Pages/AuthenticationPages/VerifyEmailPage';

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        {/* Pages that need masterlayout */}
        <Route path="/" element={<LayoutRoutes />}>
          <Route index element={<ShoppingPage />} />
          <Route path="/product/:id" element={<ProductDetailsPage />} />
          <Route path="/cart" element={<ShoppingCartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/checkout/success" element={<CheckoutSuccess />} />
        </Route>

        {/* Pages that don't need masterlayout */}
        <Route path="/signin" element={<SigninPage />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/admin" element={<AdminDashboard />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
