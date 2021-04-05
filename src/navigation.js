import React, { useState, useEffect, useContext } from 'react'
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Home from './components/Home/Home'
import firebase from '../src/components/firebase/config'
import UserContext from './Context'
import Places from './components/AllPlaces/Places'
import Register from './components/Auth/Register/Register'
import Login from './components/Auth/Login/Login'
import Logout from './components/Auth/Logout/Logout'
import Details from './components/AllPlaces/Details'
import AddPlace from './components/AllPlaces/AddPlace'
import EditPlace from './components/AllPlaces/EditPlace'
import ErrorPage from './components/404/index'

const Navigation = (props) => {
    const [firebaseInitialized, setFirebaseInitialized] = useState(false);

    useEffect(() => {
        firebase.isInitialized().then(value => {
            setFirebaseInitialized(value)
        })
    })
    const { isLoggedIn } = useContext(UserContext);

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
                <Route path="/logout">
                    {isLoggedIn ? <Logout /> : <Redirect to="/login" />}
                </Route>
                <Route path="/places" component={Places}/>
 
                <Route path="/details/:placeId">
                     {isLoggedIn ? <Details /> : <Redirect to="/" />}
                </Route> 

                <Route path="/create">
                    {isLoggedIn ? <AddPlace /> : <Redirect to="/" />}
                </Route>
                <Route path="/edit/:placeId">
                    {isLoggedIn ? <EditPlace /> : <Redirect to="/" />}
                </Route>
                
                <Route component={ErrorPage} />
            </Switch>
        </BrowserRouter>
    ): <div className='addloader'/>
} 

export default Navigation;