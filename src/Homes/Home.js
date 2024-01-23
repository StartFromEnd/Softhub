import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from '../logo.svg';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return(
            <div>
                <section className='navbar'>
                    <div className='navbar-container container d-flex justify-content-between'>
                        <div className='navbar-left d-flex justify-content-start'>
                            <NavLink to='/' className='none-style-link block'>FundHub</NavLink>
                        </div>
                        <div className='navbar-middle d-flex justify-content-between'>
                            
                        </div>
                        <div className='navbar-right d-flex justify-content-end'>
                            
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;