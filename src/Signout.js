import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

function Signout() {
    let session = cookie.load('sessionID');
    cookie.remove('sessionID', {path: '/'});
    return(
        <Navigate replace to="/" />
    );
}

export default Signout;