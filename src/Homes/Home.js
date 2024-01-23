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
                    <div className='about-header-container'>
                        <div className='grid-container'>
                            <div className='grid-left'>
                                <div className='d-flex flex-column'>
                                    <div>
                                        <div className='grid-left-top'>
                                            <div className='grid-left-top-box purple font-0-75rem'>NEW</div>
                                            <div className='grid-left-top-text'>
                                                <p className='white font-0-75rem'>새로운 개념의 투자를 시작해보세요</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='font-2rem white'>펀드허브는</h2>
                                        <br></br>
                                        <h2 className='font-2rem white'>투자중계 플랫폼입니다.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-right'></div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;