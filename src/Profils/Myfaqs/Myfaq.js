import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Myfaq extends React.Component {
    
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
                    개인 문의하기
                </section>
                <section className='myfaq-form container'>
                    <Outlet />
                </section>
            </div>
        )
    }
}

export default Myfaq;