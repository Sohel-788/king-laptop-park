import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./App.css";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AllProducts from "./Pages/Home/AllProducts/AllProducts";
import Login from "./Pages/Login/Login/Login";
import Register from "./Pages/Login/Register/Register";
import AuthProvider from "./contexts/AuthProvider/AuthProvider";
import PrivateRoute from "./Pages/Login/PrivateRoute/PrivateRoute";
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import Dashboard from "./Pages/Dashboard/Dashboard/Dashboard";
function App() {
  return (
    <div>
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/allproducts">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>
           {/*  <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute> */}
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
