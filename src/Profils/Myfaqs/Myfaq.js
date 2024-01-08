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
                <section className='myfaq-form container'>
                    <Outlet />
                </section>
                <section className='myfaq-form-wrap mt-3rem mb-3rem container'>
                    <p className='half'>개인 문의하기는 다른 사용자에게 노출되지 않습니다.</p>
                    <p className='half'>개인 문의하기는 로그인된 사용자만 이용이 가능합니다.</p>
                    <p className='half'>과도한 장난 혹은 악질적인 내용이 확인되면 계정 정지와 함께 법적 조치가 이뤄질 수 있습니다.</p>
                </section>
            </div>
        )
    }
}

export default Myfaq;