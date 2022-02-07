import Menu from "../components/Menu/Menu";
import Home from "../pages/Home/Home";
import Footer from "../components/Footer/Footer";
import Productcart from "../pages/ProductCart/Productcart";
import Cart from "../pages/Cart/Cart";
import Product from "../pages/Products/Product";
import PrivateRoute from "./PrivateRoute";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
function RootRouter() {
  return (
    <>
      <Router>
        <Menu />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/product/:id" component={Productcart}></Route>
          <PrivateRoute path="/cart" component={Cart} />
          <Route path="/products" component={Product} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default RootRouter;
