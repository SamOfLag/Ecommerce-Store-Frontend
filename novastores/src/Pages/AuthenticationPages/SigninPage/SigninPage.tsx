import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { Link, useNavigate, useLocation } from "react-router-dom";
import InputField from "../../../Components/Partials/InputField/InputField";
import CustomButton from "../../../Components/Partials/Button/Button";
import { signin } from "../../../Services/authService";
import { AxiosError } from "axios";

const SignInPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  // Toggle password visibility
  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      setIsLoading(true);
      await signin(formData.email, formData.password);
      setIsLoading(false);

      // Determine where to redirect user after sign-in
      const redirectPath = location.state?.from || "/";
      navigate(redirectPath, { replace: true });

    } catch (error: unknown) {
      setIsLoading(false);

      if (error instanceof AxiosError) {
        setErrors({ apiError: error.response?.data?.message || "Something went wrong" });
      } else if (error instanceof Error) {
        setErrors({ apiError: error.message });
      } else {
        setErrors({ apiError: "Something went wrong" });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "12px" }}>
        <div className="text-center mb-4">
          <Row className="border-bottom">
            <Col className="px-3 pb-2">
              <Link to="/signin" style={{ textDecoration: "none" }}>
                <h5 className="mb-0 fw-bold text-primary">Sign In</h5>
              </Link>
            </Col>
            <Col className="px-3 pb-2">
              <Link to="/signup" style={{ textDecoration: "none" }}>
                <h5 className="mb-0 fw-bold text-muted">Sign Up</h5>
              </Link>
            </Col>
          </Row>
        </div>

        <form onSubmit={handleSubmit}>
          {errors.apiError && <div className="text-danger mb-3">{errors.apiError}</div>}
          <InputField
            controlId="email"
            type="email"
            name="email"
            placeholder="Enter your email"
            label="Email Address"
            value={formData.email}
            onChange={handleInputChange}
          />
          <InputField
            controlId="password"
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Enter your password"
            label="Password"
            showPasswordToggle
            onTogglePassword={togglePasswordVisibility}
            value={formData.password}
            onChange={handleInputChange}
          />

          <CustomButton
            variant="warning"
            type="submit"
            className="w-100 fw-bold custom-btn text-white d-flex align-items-center justify-content-center mb-3"
            disabled={isLoading}
          >
            {isLoading ? "Signing In..." : "SIGN IN"} <span className="ms-2">→</span>
          </CustomButton>

          <div className="text-end mb-3">
            <Link to="/forgot-password" className="text-muted small text-decoration-none">
              Forgot Password?
            </Link>
          </div>
        </form>

        <div className="text-center text-muted my-2">
          <span>or</span>
        </div>

        <CustomButton
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-center mb-2"
        >
          <FcGoogle className="me-2" size={20} />
          Login with Google
        </CustomButton>

        <CustomButton
          variant="outline-secondary"
          className="w-100 d-flex align-items-center justify-content-center"
        >
          <FaApple className="me-2" size={20} />
          Login with Apple
        </CustomButton>
      </div>
    </div>
  );
};

export default SignInPage;
