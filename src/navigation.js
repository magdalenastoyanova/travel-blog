import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import Places from './components/AllPlaces/Places'
import Register from './components/Auth/Register/Register'
import Login from './components/Auth/Login/Login'
import Details from './components/AllPlaces/Details'
import AddPlace from './components/AllPlaces/AddPlace'
import ErrorPage from './components/404/index'

const Navigation = (props) => {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then(value => {
            setFirebaseInitialized(value)
        })
    })

    return firebaseInitialized !== false ? (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login">
                    {!isLoggedIn ? <Login /> : <Redirect to="/" />}
                </Route>

                <Route path="/register">
                    {!isLoggedIn ? <Register /> : <Redirect to="/" />}
                </Route>
                
                <Route path="/places">
                     {isLoggedIn ? <Places /> : <Redirect to="/" />}
                 </Route> 
                <Route path="/details/:id">
                     {isLoggedIn ? <Details /> : <Redirect to="/" />}
                </Route> 

                <Route path="/create">
                    {isLoggedIn ? <AddPlace /> : <Redirect to="/" />}
                </Route>
                <Route path="/register" component={Register} />
                <Route path="/login" component={Login} />
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    ): <div className='addloader'/>
} 

export default Navigation;