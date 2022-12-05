import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userRepositories, setUserRepositories] = useState([]);
  const [loading, setLoading] = useState(false);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRepositories,
        setUserRepositories,
        loading,
        setLoading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
