import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Faq extends React.Component {
    
    render() {
        return(
            <div>
                <section className='container mt-3rem three'>
                    문의하기
                </section>
                <section className='faq-form container mt-3rem'>
                    <Outlet />
                </section>
                <section className='faq-form-wrap mt-3rem mb-3rem container'>
                    <p className='half bold'>문의하기는 다른 사용자에게 노출되는 대신 익명으로 공개됩니다.</p>
                    <p className='half bold'>문의하기는 로그인되지 않은 사용자도 이용이 가능합니다.</p>
                    <p className='half bold'>과도한 장난 혹은 악질적인 내용이 확인되면 계정 정지와 함께 법적 조치가 이뤄질 수 있습니다.</p>
                </section>
            </div>
        )
    }
}

export default Faq;