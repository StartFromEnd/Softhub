import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from '../logo.svg';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Main extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            nickname: '',
        }
    }
    
    componentDidMount() {
        if(cookie.load('nickname') != undefined){
            this.setState({nickname: cookie.load('nickname')});
        }
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
                            <NavLink to='/' className='none-style-link block font-0-75rem gray'>시작하기</NavLink>
                            <NavLink to='/main' className='none-style-link block font-0-75rem blue'>홈</NavLink>
                            <NavLink to='/announce' className='none-style-link block font-0-75rem gray'>공지사항</NavLink>
                            <NavLink to='/faq' className='none-style-link block font-0-75rem gray'>문의하기</NavLink>
                        </div>
                        <div className='navbar-right d-flex justify-content-end'>
                            <NavLink to='/write' className='none-style-link block font-0-75rem gray'>펀드 게시하기</NavLink>
                            <div className='navbar-right-button'>
                                <NavLink to={this.state.nickname=='' ? '/login' : '/profil'} className='none-style-link block font-0-75rem white'>{this.state.nickname == '' ? '로그인' : `${this.state.nickname}`+' 님'}</NavLink>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='about-footer-bottom'>
                    <div className='about-footer-bottom-container'>
                        <div className='about-footer-bottom-logo mb-2rem'>
                            <NavLink to='/' className='none-style-link block font-1rem black'>FundHub</NavLink>
                        </div>
                        <div className='about-footer-bottom-grid mb-3rem'>
                            <div className='about-footer-bottom-grid-2'>
                                <div>
                                    <p className='font-0-75rem gray'>PAGES</p>
                                    <br></br>
                                    <NavLink to='/' className='none-style-link block font-0-5rem mb-1rem black'>Start</NavLink>
                                    <NavLink to='/main' className='none-style-link block font-0-5rem mb-1rem black'>Home</NavLink>
                                    <NavLink to='/announcement' className='none-style-link block font-0-5rem mb-1rem black'>Announcement</NavLink>
                                    <NavLink to='/faq' className='none-style-link block font-0-5rem mb-1rem black'>FAQ</NavLink>
                                </div>
                                <div>
                                    <p className='font-0-75rem gray'>ACCOUNT</p>
                                    <br></br>
                                    <NavLink to='/login' className='none-style-link block font-0-5rem mb-1rem black'>Sign In</NavLink>
                                    <NavLink to='/privacy-policy' className='none-style-link block font-0-5rem mb-1rem black'>Privacy Policy</NavLink>
                                    <NavLink to='/terms-of-service' className='none-style-link block font-0-5rem mb-1rem black'>Terms of Service</NavLink>
                                </div>
                            </div>
                            <div className='about-footer-bottom-grid-right'>
                                <p className='font-0-75rem gray'>저희와 함께해요!</p>
                                <br></br>
                                <p className='font-0-75rem gray'><span className='black'>Address:</span> OO시 OO로 OO길</p>
                                <br></br>
                                <p className='font-0-75rem gray'><span className='black'>Tel:</span>     010.xxxx.xxxx</p>
                                <br></br>
                                <p className='font-0-75rem gray'><span className='black'>Email:</span>   example@abc.com</p>
                            </div>
                        </div>
                        <div className='about-footer-bottom-bottom font-0-5rem'>
                            © Thank you for your idea, HireUp.
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Main;