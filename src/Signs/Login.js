import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from '../logo.svg';
import '../App.css';
import * as common from '../CommonFunctions.js';
import GoogleImage from '../img/Google__G__logo.svg.png';
import KakaoImage from '../img/kakao_login_medium_wide.png';
import NaverImage from '../img/naver_logo.png';

class Login extends React.Component {
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
                <section className='login-about-body'>
                    <div className='login-about-body-background'></div>
                    <div className='login-about-body-grid'>
                        <div className='login-about-body-grid-left'>
                            <p className='font-1rem black mt-3rem'>로그인</p>
                            <p className='font-0-75rem gray mt-2rem mb-3rem'>소셜계정으로 편하고 안전하게 로그인해요!</p>
                            <button className='google-sign-in mb-0-5rem' onClick={() => this.OAuthGoogleStart()}>
                                <img src={GoogleImage} alt='구글 이미지'></img>
                                <p className='font-0-75rem gray center'>구글 로그인</p>
                            </button>
                            <button className='kakao-sign-in mb-0-5rem'>
                                <img src={KakaoImage} alt='카카오 이미지'></img>
                            </button>
                            <button className='naver-sign-in mb-1rem'>
                                <img src={NaverImage} alt='네이버 이미지'></img>
                                <p className='font-0-75rem white center'>네이버 로그인</p>
                            </button>
                            <p className='font-0-5rem gray mt-2rem'>더 강력한 보안과 편의성을 위해<br></br>저희 펀드허브는 소셜로그인만 지원해요!</p>
                        </div>
                        <div className='login-about-body-grid-right'>
                            <p className='font-1rem white mt-3rem'>펀드허브 사업자 수수료</p>
                            <p className='white mt-3rem'><span className='font-1rem'>고정금액 없이 </span><span className='font-1-5rem'>"단 3%"</span></p>
                            <p className='white mt-3rem font-0-75rem'>고정금이 없어서 소액이라도 부담이 없어요!</p>
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
                                <p className='font-0-75rem gray'><span className='purple'>Address:</span> OO시 OO로 OO길</p>
                                <br></br>
                                <p className='font-0-75rem gray'><span className='purple'>Tel:</span> 010.xxxx.xxxx</p>
                                <br></br>
                                <p className='font-0-75rem gray'><span className='purple'>Email:</span> example@abc.com</p>
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

export default Login;