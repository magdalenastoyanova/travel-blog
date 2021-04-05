import React from 'react'
import { useHistory } from 'react-router-dom'
import { auth } from '../../firebase/config'
import Header from '../../Header/Header'
import {  Button } from "antd";
import style from "./Logout.module.css";



const SignIn = () => {
    const history = useHistory()

    const logOut = (e) => {
        e.preventDefault()

        auth.signOut()
        history.push('/')
    }

    return (
        <div >
                                
                <h1> Logout</h1>
            <Header />
            <div className={style.container}>
            <Button onClick={logOut} className={style.logoutBtn} to="/create">Create new Place</Button>
            </div>
        </div >
    )
}

export default SignIn