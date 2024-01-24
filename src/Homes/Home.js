import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from '../logo.svg';
import '../App.css';
import * as common from '../CommonFunctions.js';
import JobImage from '../img/job.jpg';
import Job2Image from '../img/job2.jpg';
import Job3Image from '../img/job3.jpg';
import OfficeImage from '../img/office.jpg';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            
        };
        this.aboutHeaderBackground = React.createRef();
    }
    
    componentDidMount(){
        window.onbeforeunload = function pushRefresh() {
            window.scrollTo(0, 0);
        };
        const observer = new IntersectionObserver((all) => {
            all.forEach((thing) => {
                console.log(thing.intersectionRatio);
                if(thing.intersectionRatio >= 0.5){
                    if(!thing.target.className.includes('fadeInUp')){
                        thing.target.className += ' fadeInUp';
                    }
                }
            })
        });
        
        if(this.aboutHeaderBackground.current){
            observer.observe(this.aboutHeaderBackground.current);
        }
    }
    
    componentDidUpdate(prevProp, prevState){
        const observer = new IntersectionObserver((all) => {
            all.forEach((thing) => {
                console.log(thing.intersectionRatio);
                if(thing.intersectionRatio >= 0.5){
                    thing.className = thing.className + ' fadeInUp';
                }
            })
        });
        
        if(this.aboutHeaderBackground.current){
            observer.observe(this.aboutHeaderBackground.current);
        }
    }
    
    componentWillUnmount(){
        
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
                    <div className='about-header-background' ref={this.aboutHeaderBackground}></div>
                    <div className='about-header-container'>
                        <div className='grid-container'>
                            <div className='grid-left'>
                                <div className='d-flex flex-column'>
                                    <div>
                                        <div className='grid-left-top'>
                                            <div className='grid-left-top-box purple font-0-75rem bold'>NEW</div>
                                            <div className='grid-left-top-text'>
                                                <p className='white font-0-75rem'>새로운 개념의 투자를 시작해보세요.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div>
                                        <h2 className='font-2rem white'>펀드허브는</h2>
                                        <br></br>
                                        <h2 className='font-2rem white'>투자중개 플랫폼입니다.</h2>
                                    </div>
                                </div>
                            </div>
                            <div className='grid-right'>
                                <p className='grid-right-text font-0-75rem white'>
                                    한 번의 투자로 지속적인 수입을 얻을 수 있습니다.<br></br>투자한 기업의 매출의 일부가 당신의 수익이 됩니다.
                                </p>
                            </div>
                        </div>
                        <img src={JobImage} alt='업무 이미지1' className='row-image'></img>
                    </div>
                </section>
                <section className='about-body'>
                    <div className='about-body-background'></div>
                    <div className='about-body-container'>
                        <div>
                            <p className='font-0-75rem purple mb-2rem'>ABOUT FUNDHUB</p>
                            <p className='font-1-5rem black mb-2rem bold'>누가 이용하나요?</p>
                            <p className='font-0-75rem gray mb-2rem'>창업을 하고싶은데 자금이 부족한 창업꿈나무,<br></br>투자는 하고싶은데 크게 하는건 부담스러운 투자초보,<br></br>모두 펀드허브를 통해 고민을 해결하실 수 있습니다.</p>
                            <p className='font-0-75rem gray mb-1rem bold'>✅ 보유자금 1만원 이상</p>
                            <p className='font-0-75rem gray mb-2rem bold'>✅ 본인 명의의 계좌 소유</p>
                        </div>
                        <div className='about-body-grid'>
                            <img src={OfficeImage} alt='사무실 이미지' className='about-body-grid-img-left'></img>
                            <img src={Job2Image} alt='엄무 이미지2' className='about-body-grid-img-right-top'></img>
                            <img src={Job3Image} alt='엄무 이미지3' className='about-body-grid-img-right-bottom'></img>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;