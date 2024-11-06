// AuthProvider.js
import React, { createContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [nickname, setNickname] = useState("");
  const [isLogged, setIsLogged] = useState(false);

  const login = (name) => {
    setNickname(name);
    setIsLogged(true);
  };

  const logout = () => {
    setNickname("");
    setIsLogged(false);
  };

  // Função para permitir entrar sem login
  const enterWithoutLogin = () => {
    setIsLogged(false); // Define que o usuário não está logado
  };

  return (
    <AuthContext.Provider
      value={{
        nickname,
        setNickname,
        isLogged,
        login,
        logout,
        enterWithoutLogin,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
