import { createContext, useState, useContext, PropsWithChildren } from "react";

type TAuthContext = "signIn" | "logIn" | "default";
type TUpdateContext = (newState: TAuthContext) => void;

const AuthContext = createContext<TAuthContext>("default");
const UpdateAuthContext = createContext<TUpdateContext>(() => {});

export const useAuthContext = () => useContext(AuthContext);
export const useAuthContextUpdate = () => useContext(UpdateAuthContext);

export default function Home() {
  const [authState, setAuthState] = useState<TAuthContext>("default");

  const updateContext = (newState: TAuthContext) => {
    setAuthState(newState);
  };

  return (
    <main>
      <AuthContext.Provider value={authState}>
        <UpdateAuthContext.Provider value={updateContext}></UpdateAuthContext.Provider>
      </AuthContext.Provider>
    </main>
  );
}
