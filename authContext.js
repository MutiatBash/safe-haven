import * as React from "react";
import { useState, useContext, useCallback, useEffect } from "react";
import { Alert } from "react-native";
// import Toast, { BaseToast } from "react-native-toast-message";
// import { auth } from "./firebase";

export const AuthContext = React.createContext();

export function AuthProvider({ children }) {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState("");
  const [error, setError] = useState("");

  return (
    <AuthContext.Provider
      value={{
        email,
        password,
        setEmail,
        username,
        setUsername,
        setPassword,
        loading,
        error,
        setError,
        // success,
        // setSuccess,
        setLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
