import React, { useState } from "react";
import InputField from "../../Components/Partials/InputField/InputField";
import CustomButton from "../../Components/Partials/Button/Button";
import apiClient from "../../Services/apiClient"; // Axios instance for API requests
import { AxiosError } from "axios";
import { Modal } from "react-bootstrap";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Handle input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    try {
      setIsLoading(true);
      await apiClient.post("/auth/forgot-password", { email });
      setIsLoading(false);
      setShowModal(true);
    } catch (error: unknown) {
      setIsLoading(false);

      if (error instanceof AxiosError) {
        setErrors({ apiError: error.response?.data?.message || "Something went wrong" });
      } else {
        setErrors({ apiError: "Something went wrong" });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: "450px", width: "100%", borderRadius: "12px" }}
      >
        <h3 className="text-center mt-3">
          <strong>Forgot Password</strong>
        </h3>
        <p className="text-center">
          Enter the email address associated with your NovaStores account.
        </p>

        <form className="mt-3" onSubmit={handleSubmit}>
          {errors.apiError && <div className="text-danger mb-3">{errors.apiError}</div>}

          <InputField
            controlId="emailAddress"
            type="email"
            placeholder="Enter your email"
            label="Email Address"
            value={email}
            onChange={handleInputChange}
          />

          <CustomButton
            variant="warning"
            type="submit"
            className="w-100 fw-bold custom-btn text-white d-flex align-items-center justify-content-center mb-3 mt-5"
            disabled={isLoading}
          >
            {isLoading ? "Sending..." : "SEND CODE"} <span className="ms-2">→</span>
          </CustomButton>

          <div className="text mb-2">
            <span>
              Already have an account?{" "}
              <a href="/signin" className="text-decoration-none small">
                Sign In
              </a>
            </span>
          </div>

          <div className="text mb-3">
            <span>
              Don't have an account?{" "}
              <a href="/signup" className="text-decoration-none small">
                Sign Up
              </a>
            </span>
          </div>
        </form>
        <hr />
        <p>You may contact our Customer Service for help restoring access to your account.</p>
      </div>

      {/* Modal for success message */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Email Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          If this email exists in our system, a password reset link has been sent to your email
          address. Please check your inbox and spam folder.
        </Modal.Body>
        <Modal.Footer>
          <CustomButton variant="primary" onClick={() => setShowModal(false)}>
            OK
          </CustomButton>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ForgotPassword;
