import React, {useState} from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import InputField from "../../../Components/Partials/InputField/InputField";
import CustomButton from "../../../Components/Partials/Button/Button";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";

const SignUpPage: React.FC = () => {
    const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  }

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: '12px'}}>
        <div className="text-center mb-4">
          <Row className="border-bottom">
            <Col className="px-3 pb-2">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <h5 className="mb-0 fw-bold text-muted">Sign In</h5>
              </Link>
            </Col>
            <Col className="px-3 pb-2">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <h5 className="mb-0 fw-bold text-primary">Sign Up</h5>
              </Link>
            </Col>
          </Row>
        </div>

        <form>
        <InputField
            controlId="fullName"
            type="name"
            placeholder="Enter first and last name"
            label="Full name"
          />
          <InputField
            controlId="emailAddress"
            type="email"
            placeholder="Enter your email"
            label="Email Address"
          />
          <InputField
            controlId="password"
            type={showPassword ? 'text' : 'password'}
            placeholder="Enter your password"
            label="Password"
            showPasswordToggle
            onTogglePassword={togglePasswordVisibility}
          />
          <InputField
            controlId="confirmPassword"
            type={showPassword ? 'text' : 'password'}
            placeholder="Confirm your password"
            label="Confirm Password"
            showPasswordToggle
            onTogglePassword={togglePasswordVisibility}
          />

          <CustomButton
            variant="warning"
            type="submit"
            className="w-100 custom-btn fw-bold text-white d-flex align-items-center justify-content-center mb-3"
          >
            SIGN UP <span className="ms-2">→</span>
          </CustomButton>

          <div className="text-center text-muted my-2">
          <span>or</span>
        </div>

          <CustomButton
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-center mb-2"
        >
          <FcGoogle className="me-2" size={20} />
          Signup with Google
        </CustomButton>

        <CustomButton
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-center"
        >
          <FaApple className="me-2" size={20} />
          Signup with Apple
        </CustomButton>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
