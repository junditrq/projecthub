import ClientSessionSentry from "@/app/components/client-session-sentry";
import { Toaster } from "@/components/ui/sonner";
import { ThemeProvider } from "@/providers/theme-provider";
import { Suspense } from "react";
import AuthProvider from "./auth-provider";

const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <AuthProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
        <Suspense>
          <ClientSessionSentry />
        </Suspense>
        <Toaster />
      </ThemeProvider>
    </AuthProvider>
  );
};
export default Providers;
