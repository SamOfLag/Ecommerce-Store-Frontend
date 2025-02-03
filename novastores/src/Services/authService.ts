import { IVerifyEmailResponse } from '../Utils/interfaces.utils';
import apiClient from './apiClient';

export const signup = async (
  firstName: string,
  lastName: string,
  email: string,
  password: string
) => {
  return apiClient.post('/auth/signup', {
    firstName,
    lastName,
    email,
    password,
  });
};

export const verifyEmail = async (token: string) => {
  return apiClient.post<IVerifyEmailResponse>(`/auth/verify-email?token=${token}`);
};

export const resendVerificationEmail = async (email: string) => {
  return apiClient.post('/auth/resend-verification', { email });
};

export const signin = async (email: string, password: string) => {
  return apiClient.post('/auth/signin', { email, password });
};

export const forgotPassword = async (email: string) => {
  return apiClient.post('/auth/forgot-password', { email });
};

export const resetPassword = async (token: string, newPassword: string) => {
  return apiClient.post(`/auth/reset-password?token=${token}`, {
    password: newPassword,
  });
};
