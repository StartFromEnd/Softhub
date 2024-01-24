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
import ArrowImage from '../img/arrow.svg';

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            starter: false,
        };
        this.observer = null;
        this.timer = null;
        this.aboutHeaderBackground = React.createRef();
        this.gridContainer = React.createRef();
        this.mainImage = React.createRef();
        
        this.aboutBodyBackground = React.createRef();
        this.aboutBodyLeft = React.createRef();
        this.aboutBodyGrid = React.createRef();
        
        this.aboutBody2Flex = React.createRef();
        this.aboutBody2GridTop = React.createRef();
        this.aboutBody2GridBottom = React.createRef();
        
        this.aboutBody3Flex = React.createRef();
    }
    
    componentDidMount(){
        this.setState({starter: true});
    }
    
    componentDidUpdate(prevProp, prevState){
        this.observer = new IntersectionObserver((all) => {
            all.forEach((thing) => {
                if(thing.isIntersecting){
                    if(!thing.target.className.includes('animation')){
                        thing.target.className += ' animation';
                    }
                }
            })
        });
        this.timer = setInterval(() => {
        if(this.aboutHeaderBackground.current){
            this.observer.observe(this.aboutHeaderBackground.current);
        }
        if(this.gridContainer.current){
            this.observer.observe(this.gridContainer.current);
        }
        if(this.mainImage.current){
            this.observer.observe(this.mainImage.current);
        }
        if(this.aboutBodyBackground.current){
            this.observer.observe(this.aboutBodyBackground.current);
        }
        if(this.aboutBodyLeft.current){
            this.observer.observe(this.aboutBodyLeft.current);
        }
        if(this.aboutBodyGrid.current){
            this.observer.observe(this.aboutBodyGrid.current);
        }
        if(this.aboutBody2Flex.current){
            this.observer.observe(this.aboutBody2Flex.current);
        }
        if(this.aboutBody2GridTop.current){
            this.observer.observe(this.aboutBody2GridTop.current);
        }
        if(this.aboutBody2GridBottom.current){
            this.observer.observe(this.aboutBody2GridBottom.current);
        }
        if(this.aboutBody3Flex.current){
            this.observer.observe(this.aboutBody3Flex.current);
        }
        }, 100);
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
        this.observer.disconnect();
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
                    <div className='about-header-background duration-2 fadeInUp' ref={this.aboutHeaderBackground}></div>
                    <div className='about-header-container'>
                        <div className='grid-container duration-2 fadeInUp' ref={this.gridContainer}>
                            <div className='grid-left'>
                                <div className='d-flex flex-column'>
                                    <div>
                                        <div className='grid-left-top'>
                                            <div className='grid-left-top-box purple font-0-75rem'>NEW</div>
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
                        <img src={JobImage} alt='업무 이미지1' className='main-image row-image duration-2 fadeInUp' ref={this.mainImage}></img>
                    </div>
                </section>
                <section className='about-body'>
                    <div className='about-body-background duration-2 fadeInRight' ref={this.aboutBodyBackground}></div>
                    <div className='about-body-container'>
                        <div className='about-body-left duration-2 fadeInUp' ref={this.aboutBodyLeft}>
                            <p className='font-0-75rem purple mb-2rem'>ABOUT FUNDHUB</p>
                            <p className='font-1-5rem black mb-2rem bold'>누가 이용하나요?</p>
                            <p className='font-0-75rem gray mb-2rem'>창업을 하고싶은데 자금이 부족한 창업꿈나무,<br></br>투자는 하고싶은데 크게 하는건 부담스러운 투자초보,<br></br>모두 펀드허브를 통해 고민을 해결하실 수 있습니다.</p>
                            <p className='font-0-75rem gray mb-1rem bold'>✅ 보유자금 1만원 이상</p>
                            <p className='font-0-75rem gray mb-2rem bold'>✅ 본인 명의의 계좌 소유</p>
                        </div>
                        <div className='about-body-grid duration-2 fadeInUp' ref={this.aboutBodyGrid}>
                            <img src={OfficeImage} alt='사무실 이미지' className='about-body-grid-img-left'></img>
                            <img src={Job2Image} alt='엄무 이미지2' className='about-body-grid-img-right-top'></img>
                            <img src={Job3Image} alt='엄무 이미지3' className='about-body-grid-img-right-bottom'></img>
                        </div>
                    </div>
                </section>
                <section className='about-body-2'>
                    <div className='about-body-2-flex d-flex flex-column mb-3rem duration-2 fadeInUp' ref={this.aboutBody2Flex}>
                        <p className='font-0-75rem purple mb-2rem'>ABOUT FUNDHUB</p>
                        <p className='font-1-5rem black mb-2rem bold'>어떤 원리인가요?</p>
                        <p className='font-0-75rem gray'>
                            1.사업자로 등록된 이용자가 '구독권'을 발행합니다
                            <br></br>
                            <br></br>
                            예시 (OO카페 50원 1년 구독권)
                            <br></br>
                            <br></br>
                            2.투자자는 해당 구독권을 사업자가 제시한 가격에 구매합니다.
                            <br></br>
                            <br></br>
                            3.투자자는 구독권 구매 후, 구독권 판매가 마감되는 다음날부터
                            <br></br>
                            1년동안 OO카페에서 판매되는 제품 하나당 50원의 수익을 얻으실 수 있습니다.
                        </p>
                    </div>
                    <div className='about-body-2-grid-top mb-1-5rem duration-2 fadeInUp' ref={this.aboutBody2GridTop}>
                        <div className='about-body-2-grid-top-left-top'>
                            사이트 이미지1
                        </div>
                        <div className='about-body-2-grid-top-left-bottom'>
                            사이트 이미지2
                        </div>
                        <div className='about-body-2-grid-top-right'>
                            사이트 이미지3
                        </div>
                    </div>
                    <div className='about-body-2-grid-bottom duration-2 fadeInUp' ref={this.aboutBody2GridBottom}>
                        <div className='about-body-2-grid-bottom-left'>
                            사이트 이미지4
                        </div>
                        <div className='about-body-2-grid-bottom-right'>
                            사이트 이미지5
                        </div>
                    </div>
                </section>
                <section className='about-body-3'>
                    <div className='about-body-3-container'>
                        <div className='about-body-3-flex d-flex flex-column mb-3rem duration-2 fadeInUp' ref={this.aboutBody3Flex}>
                            <p className='font-0-75rem purple mb-2rem'>ABOUT FUNDHUB</p>
                            <p className='font-1-5rem black mb-2rem bold'>자주 묻는 질문</p>
                        </div>
                        <div className='faq-block d-flex flex-column mb-3rem'>
                            <div className='faq-block-title d-flex justify-content-between'>
                                <div className='faq-block-title-text'>
                                    투자자 Q. 투자 성공시 수수료가 얼마인가요?
                                </div>
                                <div className='faq-block-title-image'>
                                    <img src={ArrowImage} alt='화살표 이미지'></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        );
    }
}

export default Home;