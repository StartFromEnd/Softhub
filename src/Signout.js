import React, { Component } from 'react';
import Redirect from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

function Signout() {
    let session = cookie.load('sessionID');
    cookie.remove('sessionID', {path: '/'});
    return(
        <Redirect to="/" />
    )
}

export default Signout;