import { Route, Switch } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './components/Home/Home'
import AddPlace from './components/AddPlace/AddPlace'

function App() {
	return (
	  <div className="container">
		  <Header />

		  <Switch>
			<Route path="/" exact component={Home} />
			<Route path="/create" exact component={AddPlace} />
		</Switch>
		  
		  <Footer />
	  </div>
	);
  }
  
  export default App;
  //	<Route path="/categories/:category" component={Blog} />
  //<Route path="/places/details/:id" component={Places} />
		  