import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Myorder extends React.Component {
    componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            window.location.replace('/signIn');
            return;
        }
    }

    render() {
        return (
            <div>
                <div>
                    <section className="two center mb-3rem container">내 주문목록</section>
                    <section className='container'>
                        <Outlet />
                    </section>
                </div>
            </div>
        );
    }
}

export default Myorder;