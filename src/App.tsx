import React from "react";
import "./App.css";
import Routes from "./Routes";
import {CartProvider} from "./Contexts/CartContext";
import {PersonalDetailsProvider} from "./Contexts/PersonalDetailsContext";

function App() {
  return (
      <CartProvider>
        <PersonalDetailsProvider>
          <div className="app">
            <Routes/>
          </div>
        </PersonalDetailsProvider>
      </CartProvider>
  );
}

export default App;
