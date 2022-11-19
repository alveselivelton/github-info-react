import { createContext, useState } from "react";

export const UserContext = createContext();

export const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [userRepositories, setUserRepositories] = useState([]);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        userRepositories,
        setUserRepositories,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
