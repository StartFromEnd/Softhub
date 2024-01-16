import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Mysupport extends React.Component {
    
    componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            window.location.replace('/signIn');
            return;
        }
    }
    
    render() {
        return(
            <div>
                <section className='two center mb-3rem container'>
                    내 후원목록
                </section>
                <section className='mysupport-form container'>
                    <Outlet />
                </section>
            </div>
        )
    }
}

export default Mysupport;