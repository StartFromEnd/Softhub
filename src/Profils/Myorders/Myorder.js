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
                    <section className="flex container mb-3rem"></section>
                    <section className="container center">
                        <button type="button" className="btn btn-primary">
                            주문 요청하기
                        </button>
                        <button type="button" className="btn btn-info">주문 등록하기</button>
                    </section>
                </div>
            </div>
        );
    }
}

export default Myorder;