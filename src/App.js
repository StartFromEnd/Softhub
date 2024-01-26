import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import * as common from './CommonFunctions.js';

import Home from './Homes/Home.js';
import Main from './Mains/Main.js';
import Login from './Signs/Login.js';

class App extends React.Component {
    
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/main' element={<Main />}></Route>
                        <Route path='/login' element={<Login />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;