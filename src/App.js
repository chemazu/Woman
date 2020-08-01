import React from "react";
import "./App.css";
import Home from "./View/Home/Home";
import Footer from "./Custom/Footer/Footer";
import Shop from "./View/Shop/Shop";
import ProductPage from "./Custom/ProductPage/ProductPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./View/SignIn/SignIn";

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/shop" component={Shop}></Route>
          <Route exact path="/shop/Product" component={ProductPage}></Route>
          <Route exact path="/sign-in" component={SignIn}></Route>
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
