import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import {
  verifyEmail,
  resendVerificationEmail,
} from '../../Services/authService';
import { AxiosError } from 'axios';

const VerifyEmail: React.FC = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const token = queryParams.get('token');
  const navigate = useNavigate();

  const [verificationStatus, setVerificationStatus] = useState<'pending' | 'success' | 'error'>('pending');
  const [errorMessage, setErrorMessage] = useState('');
  const [resendSuccess, setResendSuccess] = useState(false);
  const [email, setEmail] = useState('');

  // Handle email verification on component mount
  useEffect(() => {
    if (token) {
      verifyEmail(token)
        .then(response => {
          setVerificationStatus('success');
          setEmail(response.data.data); // Save email for resending verification if needed
          setTimeout(() => navigate('/signin'), 3000); // Redirect after 3s
        })
        .catch(error => {
          setVerificationStatus('error');
          setErrorMessage(
            error.response?.data?.message || 'Invalid or expired token.'
          );
        });
    }
  }, [token, navigate]);

  // Handle resend verification request
  const handleResend = async () => {
    if (!email) return;
    try {
      await resendVerificationEmail(email);
      setResendSuccess(true);
    } catch (error: unknown) {
      const axiosError = error as AxiosError<{ message: string }>;
      setErrorMessage(
        axiosError.response?.data?.message ||
          'Failed to resend verification email.'
      );
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <div
        className="card shadow-lg p-4"
        style={{ maxWidth: '450px', width: '100%', borderRadius: '12px' }}
      >
        <h3 className="text-center mt-3">
          <strong>Email Verification</strong>
        </h3>

        {verificationStatus === 'pending' && (
          <p className="text-center">Verifying your email...</p>
        )}

        {verificationStatus === 'success' && (
          <p className="text-center text-success">
            ✅ Email verified successfully! Redirecting...
          </p>
        )}

        {verificationStatus === 'error' && (
          <>
            <p className="text-center text-danger">{errorMessage}</p>
            <div className="text-end mb-3">
              <button
                onClick={handleResend}
                className="btn btn-link text-muted small text-decoration-none"
              >
                Resend Code
              </button>
            </div>
            {resendSuccess && (
              <p className="text-center text-success">
                Verification email resent! Check your inbox.
              </p>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default VerifyEmail;
