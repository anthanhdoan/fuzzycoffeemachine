import React from "react";
import "./App.css";
import Routes from "./Routes";
import {CartProvider} from "./Contexts/CartContext";

function App() {
  return (
      <CartProvider>
        <div className="app">
          <Routes/>
        </div>
      </CartProvider>
  );
}

export default App;
