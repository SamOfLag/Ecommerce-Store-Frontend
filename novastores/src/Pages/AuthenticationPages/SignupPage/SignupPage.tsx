import React, { useState } from 'react';
import { Row, Col, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import InputField from '../../../Components/Partials/InputField/InputField';
import CustomButton from '../../../Components/Partials/Button/Button';
import { signup } from '../../../Services/authService';
import { AxiosError } from 'axios';

const SignUpPage: React.FC = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(prev => !prev);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrors({});

    if (formData.password !== formData.confirmPassword) {
      setErrors({ confirmPassword: 'Passwords do not match' });
      return;
    }

    try {
      setIsLoading(true);
      await signup(formData.firstName, formData.lastName, formData.email, formData.password);
      setIsLoading(false);
      setShowModal(true); 
    } catch (error: unknown) {
      setIsLoading(false);

      if (error instanceof AxiosError) {
        setErrors({ apiError: error.response?.data?.message || 'Something went wrong' });
      } else if (error instanceof Error) {
        setErrors({ apiError: error.message });
      } else {
        setErrors({ apiError: 'Something went wrong' });
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="card shadow-lg p-4" style={{ maxWidth: '450px', width: '100%', borderRadius: '12px' }}>
        <div className="text-center mb-4">
          <Row className="border-bottom">
            <Col className="px-3 pb-2">
              <Link to="/signin" style={{ textDecoration: 'none' }}>
                <h5 className="mb-0 fw-bold text-muted">Sign In</h5>
              </Link>
            </Col>
            <Col className="px-3 pb-2">
              <Link to="/signup" style={{ textDecoration: 'none' }}>
                <h5 className="mb-0 fw-bold text-primary">Sign Up</h5>
              </Link>
            </Col>
          </Row>
        </div>

        <form onSubmit={handleSubmit}>
          {errors.apiError && <div className="text-danger mb-3">{errors.apiError}</div>}
          <InputField controlId="firstName" type="text" label="First Name" name="firstName" value={formData.firstName} onChange={handleInputChange} />
          <InputField controlId="lastName" type="text" label="Last Name" name="lastName" value={formData.lastName} onChange={handleInputChange} />
          <InputField controlId="email" type="email" label="Email Address" name="email" value={formData.email} onChange={handleInputChange} />
          <InputField controlId="password" type={showPassword ? "text" : "password"} label="Password" name="password" value={formData.password} onChange={handleInputChange} onTogglePassword={togglePasswordVisibility} showPasswordToggle={true} />
          <InputField controlId="confirmPassword" type={showPassword ? "text" : "password"} label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleInputChange} onTogglePassword={togglePasswordVisibility} showPasswordToggle={true} />
          {errors.confirmPassword && <div className="text-danger mb-3">{errors.confirmPassword}</div>}

          <CustomButton variant="warning" type="submit" className="w-100 fw-bold text-white d-flex align-items-center justify-content-center mb-3" disabled={isLoading}>
            {isLoading ? 'Signing Up...' : 'SIGN UP'} <span className="ms-2">→</span>
          </CustomButton>
        </form>
      </div>

      {/* Modal for Email Verification Message */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title className='text-center'>Verify Your Email</Modal.Title>
        </Modal.Header >
        <Modal.Body className='text-center'>
          <p>
            We've sent a verification email to <strong>{formData.email}</strong>.  
            Please check your inbox and follow the link to verify your account.
          </p>
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

export default SignUpPage;
