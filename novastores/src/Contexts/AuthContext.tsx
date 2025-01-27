import { createContext, useState, ReactNode, useEffect } from 'react';
import { IAuthContext } from '../Utils/interfaces.utils';

const AuthContext = createContext<IAuthContext | undefined>(undefined);

const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [token, setToken] = useState<string | null>(null);
  const [role, setRole] = useState<string | null>(null);

  useEffect(() => {
    const storedToken = localStorage.getItem('token');
    const storedRole = localStorage.getItem('role');
    if (storedToken) {
      setToken(storedToken);
      setRole(storedRole);
    }
  }, []);

  const login = (authToken: string, userRole: string) => {
    localStorage.setItem('token', authToken);
    localStorage.setItem('role', userRole);
    setToken(authToken);
    setToken(userRole);
  };

  const logout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    setToken(null);
    setRole(null);
  };

  return (
    <AuthContext.Provider
      value={{ token, isAdmin: role === 'Admin', login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
