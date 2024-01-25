import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import * as common from './CommonFunctions.js';

import Home from './Homes/Home.js';
import Login from './Signs/Login.js';

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
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;