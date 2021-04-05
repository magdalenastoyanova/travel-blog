import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Home from './components/Home/Home'
import Places from './components/AllPlaces/Places'
import Register from './components/Auth/Register/Register'
import Login from './components/Auth/Login/Login'
import Logout from './components/Auth/Logout/Logout'
import Details from './components/AllPlaces/Details'
import AddPlace from './components/AllPlaces/AddPlace'
import ErrorPage from './components/404/index'

const Navigation = () => {
    return (
        <BrowserRouter>
            <Switch>
            
                <Route path="/" exact component={Home} />
                
                <Route path="/places" component={Places} />
                <Route path="/create" component={AddPlace} />
                <Route path="/details/:id" component={Details} />
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route path="/logout" component={Logout} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation;