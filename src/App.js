import React from "react";
import "./App.css";
import Navbar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route path="/">
            <ItemListContainer greeting="Hola Mundo!" />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
