"use client";
import React, { createContext, ReactNode, useContext, useState } from "react";

// Define the context type if needed
interface IStateData { loggedIn: boolean, token: string }
interface ILoginContext {
  userData: IStateData;
  setUserData: React.Dispatch<React.SetStateAction<IStateData>>;
}

// Create the context outside the component
export const LoginContext = createContext<ILoginContext | undefined>(undefined);

interface ILoginProviderProps {
  children: ReactNode;
}

// The LoginProvider component that provides context values
export const LoginProvider: React.FC<ILoginProviderProps> = ({ children }) => {
  const [userData, setUserData] = useState<IStateData>({
    loggedIn: false,
    token: ""
  });

  return (
    <LoginContext.Provider value={{ userData, setUserData }}>
      {children}
    </LoginContext.Provider>
  );
};

// Custom hook to use the LoginContext
export const useLoginContext = () => {
  const context = useContext(LoginContext);

  // Ensure that context is being used inside the provider
  if (!context) {
    throw new Error("useLoginContext must be used within a LoginProvider");
  }

  return context;
};
