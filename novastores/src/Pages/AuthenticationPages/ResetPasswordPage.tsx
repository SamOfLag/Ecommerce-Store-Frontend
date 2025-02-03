import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import InputField from "../../Components/Partials/InputField/InputField";
import CustomButton from "../../Components/Partials/Button/Button";
import { resetPassword } from "../../Services/authService"; // Import the resetPassword function
import { AxiosError } from "axios";
import { Modal } from "react-bootstrap";

const ResetPassword: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const token = new URLSearchParams(location.search).get("token");

  const [formData, setFormData] = useState({ password: "", confirmPassword: "" });
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

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

    // ✅ Validate confirmPassword
    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: "Passwords do not match" });
      return;
    }

    try {
      setIsLoading(true);
      await resetPassword(token!, formData.password);
      setIsLoading(false);
      setShowSuccessModal(true); 
    } catch (error: unknown) {
      setIsLoading(false);
      if (error instanceof AxiosError) {
        setErrors({ apiError: error.response?.data?.message || "Failed to reset password. Try again." });
      } else {
        setErrors({ apiError: "Failed to reset password. Try again." });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: "450px", width: "100%", borderRadius: "12px" }}>
        <h3 className="text-center mt-3">
          <strong>Reset Password</strong>
        </h3>
        <p className="text-center">
          Enter a strong password of at least 6 characters and make sure to keep it safe.
        </p>

        <form className="mt-3" onSubmit={handleSubmit}>
          {errors.apiError && <div className="text-danger mb-3">{errors.apiError}</div>}

          <InputField
            controlId="password"
            type={showPassword ? "text" : "password"}
            placeholder="Enter your password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            showPasswordToggle
            onTogglePassword={togglePasswordVisibility}
          />

          <InputField
            controlId="confirmPassword"
            type={showPassword ? "text" : "password"}
            placeholder="Confirm your password"
            label="Confirm Password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            showPasswordToggle
            onTogglePassword={togglePasswordVisibility}
          />
          {errors.confirmPassword && <div className="text-danger mb-3">{errors.confirmPassword}</div>}

          <CustomButton
            variant="warning"
            type="submit"
            className="w-100 fw-bold custom-btn text-white d-flex align-items-center justify-content-center mb-3 mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Resetting..." : "RESET PASSWORD"} <span className="ms-2">→</span>
          </CustomButton>
        </form>
      </div>

      {/* ✅ Success Modal */}
      <Modal show={showSuccessModal} onHide={() => navigate("/signin")} centered>
        <Modal.Header closeButton>
          <Modal.Title>Password Reset Successful</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your password has been reset successfully. You can now sign in with your new password.
        </Modal.Body>
        <Modal.Footer>
          <CustomButton variant="primary" onClick={() => navigate("/signin")}>
            Sign In
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ResetPassword;
