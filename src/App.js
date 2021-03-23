import { Route, Switch } from "react-router-dom";

import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home/Home";
import AddPlace from "./components/AllPlaces/AddPlace";
import Places from "./components/AllPlaces/Places";
import Details from "./components/AllPlaces/Details";
import Register from "./components/Auth/Register";

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
      </Switch>

      <Footer />
    </div>
  );
}

export default App;
//	<Route path="/categories/:category" component={Blog} />
//<Route path="/places/details/:id" component={Places} />
