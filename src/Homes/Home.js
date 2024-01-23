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
                            <NavLink to='/main' className='none-style-link block font-1rem black'>FundHub</NavLink>
                        </div>
                        <div className='navbar-middle d-flex justify-content-between'>
                            <NavLink to='/' className='none-style-link block font-0-75rem purple'>시작하기</NavLink>
                            <NavLink to='/main' className='none-style-link block font-0-75rem gray'>홈</NavLink>
                            <NavLink to='/announce' className='none-style-link block font-0-75rem gray'>공지사항</NavLink>
                            <NavLink to='/faq' className='none-style-link block font-0-75rem gray'>문의하기</NavLink>
                        </div>
                        <div className='navbar-right d-flex justify-content-end'>
                            <NavLink to='/write' className='none-style-link block font-0-75rem gray'>펀드 게시하기</NavLink>
                            <div className='navbar-right-button'>
                                <NavLink to='/login' className='none-style-link block font-0-75rem white'>로그인</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='about-header'>
                    <div className='about-header-background'></div>
                </section>
            </div>
        );
    }
}

export default Home;