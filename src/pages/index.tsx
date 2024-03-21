import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { createContext, useState, useContext } from "react";
import Login from "./Login";
import SignIn from "./SignIn";
import { motion } from "framer-motion";

type TAuthContext = "signIn" | "logIn";
type TUpdateContext = (newState: TAuthContext) => void;

const AuthContext = createContext<TAuthContext>("signIn");
const UpdateAuthContext = createContext<TUpdateContext>(() => {});

export const useAuthContext = () => useContext(AuthContext);
export const useAuthContextUpdate = () => useContext(UpdateAuthContext);

export default function Home() {
  const [authState, setAuthState] = useState<TAuthContext>("logIn");

  const updateContext = (newState: TAuthContext) => {
    setAuthState(newState);
  };

  return (
    <main className={cn("min-h-screen flex items-center justify-center ")}>
      <AuthContext.Provider value={authState}>
        <UpdateAuthContext.Provider value={updateContext}>
          <Card className={cn("w-[380px]")}>
            <motion.div
              key={authState}
              initial={{ height: 0, overflow: "hidden" }}
              animate={{ height: "auto" }}
              transition={{ ease: "easeInOut" }}
            >
              {authState === "signIn" ? <SignIn /> : <Login />}
            </motion.div>
          </Card>
        </UpdateAuthContext.Provider>
      </AuthContext.Provider>
    </main>
  );
}
