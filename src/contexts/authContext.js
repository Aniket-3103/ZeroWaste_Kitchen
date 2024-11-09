import { createContext, useState, useContext } from "react";

import Cookies from "js-cookie";

const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const expirationTimeInHours = 4;
  const expirationDate = new Date(
    new Date().getTime() + expirationTimeInHours * 60 * 60 * 1000
  );

  const verifyAuth = () => {
    if (user) {
      return true;
    }
    const storedUser = Cookies.get("user");
    if (!storedUser) {
      return false;
    }
    const parsedUser = JSON.parse(storedUser);
    setUser(parsedUser);
    return storedUser ? true : false;
  };

  const addUser = (userData, token) => {
    const user = JSON.stringify(userData);
    Cookies.set("token", token, { expires: expirationDate });
    Cookies.set("user", user);
    setUser(userData);
  };

  const updateAddedUser = (newUser) => {
    const newUserJson = JSON.stringify(newUser);
    const existingExpiryDate = Cookies.get("user", { raw: true });
    Cookies.set("user", newUserJson, { expires: new Date(existingExpiryDate) });
    const updatedCookie = Cookies.get("user");
    const user = JSON.parse(updatedCookie);
    setUser(user);
  };

  const logout = () => {
    Cookies.remove("token");
    Cookies.remove("profilePicture");
    Cookies.remove("user", { expires: expirationDate });
    setUser(null);
  };

  const contextValue = {
    user,
    addUser,
    updateAddedUser,
    logout,
    verifyAuth,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};

const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export { AuthProvider, useAuthContext };
