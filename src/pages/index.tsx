import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createContext, useState, useContext, PropsWithChildren } from "react";
import Login from "./Login";
import SignIn from "./SignIn";

type TAuthContext = "signIn" | "logIn";
type TUpdateContext = (newState: TAuthContext) => void;

const AuthContext = createContext<TAuthContext>("signIn");
const UpdateAuthContext = createContext<TUpdateContext>(() => {});

export const useAuthContext = () => useContext(AuthContext);
export const useAuthContextUpdate = () => useContext(UpdateAuthContext);

export default function Home() {
  const [authState, setAuthState] = useState<TAuthContext>("signIn");

  const updateContext = (newState: TAuthContext) => {
    setAuthState(newState);
  };

  return (
    <main>
      <AuthContext.Provider value={authState}>
        <UpdateAuthContext.Provider value={updateContext}>
          <Card className={cn("w-[380px] mx-auto")}>{authState === "signIn" ? <SignIn /> : <Login />}</Card>
        </UpdateAuthContext.Provider>
      </AuthContext.Provider>
    </main>
  );
}
