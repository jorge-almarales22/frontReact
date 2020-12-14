import React from 'react';
import { Route, Redirect } from 'react-router-dom';
const isAuth = () => {
    if(localStorage.getItem('token') !== null){
        return true;
    }else{
        return false;
    }
}
const PrivateRoute = ({component:Component, ...props}) => {
    if(!isAuth()){
        return <Redirect to={{pathname: '/', state: {message: 'Usuario no autorizado'}}}></Redirect>
    }
    return <Component isAuth={isAuth()}></Component>
}

export default PrivateRoute;
