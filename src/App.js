import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import { CartProvider } from "./contexts/CartContext/CartContext";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <div className="App">
          <header>
            <Navbar />
          </header>
          <Switch>
            <Route path="/libros/:id">
              <ItemDetailContainer />
            </Route>
            <Route exact path="/categoria/:categoria">
              <ItemListContainer greeting="" />
            </Route>
            <Route exact path="/">
              <ItemListContainer greeting="" />
            </Route>
            <Route exact path="/cart">
              <Cart greeting="" />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
