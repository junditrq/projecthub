import { SessionProvider } from "next-auth/react";
interface AuthProviderProps {
  children: React.ReactNode;
}
const AuthProvider = ({ children }: AuthProviderProps) => {
  return <SessionProvider refetchInterval={60 * 5}>{children}</SessionProvider>;
};
export default AuthProvider;
