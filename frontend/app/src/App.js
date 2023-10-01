import React, { createContext, useState, useContext } from "react";
import Login from './screens/Login/Login';
import UserDetails from './screens/UserDetails/UserDetails';
import { Routes, Route } from 'react-router-dom';

const UserContext = createContext();

export function UserProvider({ children }) {
    const [userData, setUserData] = useState({
        username: "",
        pokemonList: []
    });

    return (
        <UserContext.Provider value={{ userData, setUserData }}>
            {children}
        </UserContext.Provider>
    );
}

export function useUser() {
  return useContext(UserContext);
}

function App() {
    return (
        <UserProvider>
            <Routes>
                <Route path="/userDetails" element={<UserDetails />} />
                <Route path="/" element={<Login />} />
            </Routes>
        </UserProvider>
    );
}

export default App;
