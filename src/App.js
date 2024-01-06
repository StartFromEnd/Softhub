import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import * as common from './CommonFunctions.js';
import Nav from './Nav.js';
import Home from './Homes/Home.js';
import Signin from './Signs/Signin.js';
import Signup from './Signs/Signup.js';
import Signout from './Signs/Signout.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Nav />
                    <section className="cover-fixed-nav-section"></section>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/signIn' element={<Signin />}></Route>
                        <Route path='/signUp' element={<Signup />}></Route>
                        <Route path='/signOut' element={<Signout />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;