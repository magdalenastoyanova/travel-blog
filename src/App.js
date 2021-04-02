import { Route, Switch, Redirect } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AddPlace from "./components/AllPlaces/AddPlace";
import Places from "./components/AllPlaces/Places";
import Details from "./components/AllPlaces/Details";
import { auth } from "./components/firebase/config"
import Register from "./components/Auth/Register/Register";
import Login from "./components/Auth/Login/Login";

function App() {
  return (
    <div className="container">
      <Header />

      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/create" exact component={AddPlace} />
        <Route path="/places" exact component={Places} />
        <Route path="/details/:id" exact component={Details} />
        <Route path="/register" exact component={Register} />
        <Route path="/login" exact component={Login} />
        <Route path="/logout" render={() => {
          auth.signOut();
          return <Redirect to="/" />
        }} />
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
//	<Route path="/categories/:category" component={Blog} />
//<Route path="/places/details/:id" component={Places} />
