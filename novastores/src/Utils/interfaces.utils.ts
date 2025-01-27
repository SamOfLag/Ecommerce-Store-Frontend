
export interface IAuthContext {
  token: string | null;
  isAdmin: boolean;
  login: (token: string, role: string) => void;
  logout: () => void;
}

