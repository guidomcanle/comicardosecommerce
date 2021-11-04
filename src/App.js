import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/item/:id">
            <ItemDetailContainer />
          </Route>
          <Route exact path="/catalogo">
            <ItemListContainer greeting="Hola Mundo!" />
          </Route>
          <Route exact path="/">
            <ItemListContainer greeting="Hola Mundo!" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
