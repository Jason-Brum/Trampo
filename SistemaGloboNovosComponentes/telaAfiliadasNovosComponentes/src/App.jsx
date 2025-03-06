import React, { useState } from "react";
import Login from "./components/Login";
import Header from "./components/Header";
import Menu from "./components/Menu";
import AlertMessage from "./components/AlertMessage";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="container mx-auto px-4 py-6">
      {isLoggedIn ? (
        <>
          <Header />
          <Menu />
          <AlertMessage message="" />
        </>
      ) : (
        <Login onLogin={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
};

export default App;


