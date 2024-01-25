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
import BuildingImage from '../img/building.jpg';
import GoogleImage from '../img/Google__G__logo.svg.png';
import KakaoImage from '../img/kakao_login_medium_wide.png';
import NaverImage from '../img/naver_logo.png';

require("dotenv").config();

class Home extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            starter: false,
            
            faqBoxes: [false, false, false],
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
        this.aboutBody3Faq1 = React.createRef();
        this.aboutBody3Faq2 = React.createRef();
        this.aboutBody3Faq3 = React.createRef();
        
        this.aboutFooterTopFlex = React.createRef();
        this.aboutFooterTopGrid = React.createRef();
    }
    
    componentDidMount(){
        console.log(process.env.REACT_APP_GOOGLE_CLIENT_ID);
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
        if(this.aboutBody3Faq1.current){
            this.observer.observe(this.aboutBody3Faq1.current);
        }
        if(this.aboutBody3Faq2.current){
            this.observer.observe(this.aboutBody3Faq2.current);
        }
        if(this.aboutBody3Faq3.current){
            this.observer.observe(this.aboutBody3Faq3.current);
        }
        if(this.aboutFooterTopFlex.current){
            this.observer.observe(this.aboutFooterTopFlex.current);
        }
        if(this.aboutFooterTopGrid.current){
            this.observer.observe(this.aboutFooterTopGrid.current);
        }
        }, 100);
    }
    
    componentWillUnmount(){
        clearInterval(this.timer);
        this.observer.disconnect();
    }
    
    OpenFaq = (param) => {
        let faqBoxes = [...this.state.faqBoxes];
        faqBoxes[param] = !faqBoxes[param];
        this.setState({faqBoxes: faqBoxes});
    }
    
    OAuthGoogleStart = () => {
        const GOOGLE_CLIENT_ID = process.env.REACT_APP_GOOGLE_CLIENT_ID;
        const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URI;
        
        window.location.replace(`https://accounts.google.com/o/oauth2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}&response_type=code&scope=openid email profile`);
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
                            1.사업자로 등록된 이용자가 <span className='purple'>'구독권'</span>을 발행합니다
                            <br></br>
                            <br></br>
                            예시 (OO카페 50원 1년 <span className='purple'>구독권</span>)
                            <br></br>
                            <br></br>
                            2.투자자는 해당 <span className='purple'>구독권</span>을 사업자가 제시한 가격에 구매합니다.
                            <br></br>
                            <br></br>
                            3.투자자는 <span className='purple'>구독권</span> 구매 후, <span className='purple'>구독권</span> 판매가 마감되는 다음날부터
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
                        <div className='faq-block d-flex flex-column mb-3rem duration-2 fadeInRight' style={this.state.faqBoxes[0] ? Styles.extension : Styles.nothing} ref={this.aboutBody3Faq1}>
                            <div className='faq-block-title d-flex justify-content-between' onClick={() => this.OpenFaq(0)}>
                                <div className='faq-block-title-text'>
                                    <span className='red'>투자자 Q.</span> 투자 성공시 수수료가 얼마인가요?
                                </div>
                                <div className='faq-block-title-image'>
                                    <img src={ArrowImage} alt='화살표 이미지' style={this.state.faqBoxes[0] ? Styles.rotation : Styles.nothing}></img>
                                </div>
                            </div>
                            <div className='faq-block-main'>
                                <p className='font-0-75rem gray'>
                                    A. 저희 펀드허브에서는 투자(성공/실패)에 대한 수수료를 받지 않고 있어요!
                                </p>
                            </div>
                        </div>
                        <div className='faq-block d-flex flex-column mb-3rem duration-2 fadeInRight' style={this.state.faqBoxes[1] ? Styles.extension : Styles.nothing} ref={this.aboutBody3Faq2}>
                            <div className='faq-block-title d-flex justify-content-between' onClick={() => this.OpenFaq(1)}>
                                <div className='faq-block-title-text'>
                                    <span className='red'>투자자 Q.</span> 사업자가 얼마만큼의 물건을 팔았는지 어떻게 확인하나요?
                                </div>
                                <div className='faq-block-title-image'>
                                    <img src={ArrowImage} alt='화살표 이미지' style={this.state.faqBoxes[1] ? Styles.rotation : Styles.nothing}></img>
                                </div>
                            </div>
                            <div className='faq-block-main'>
                                <p className='font-0-75rem gray'>
                                    A. 저희 펀드허브에서는 매달 사업자분들께서 제공해주시는 소득현황을 바탕으로
                                    <br></br>
                                    <br></br>
                                    투자자 여러분께 정보를 공유해드리고 있어요!
                                    <br></br>
                                    <br></br>
                                    또, 매년 7월 정부에서 해당 사업의 소득에 대하여 증명해주는 '소득금액증명'을 이용하여
                                    <br></br>
                                    <br></br>
                                    소득내용에 거짓이 있는지 꼼꼼히 확인하고 있답니다!
                                </p>
                            </div>
                        </div>
                        <div className='faq-block d-flex flex-column mb-3rem duration-2 fadeInRight' style={this.state.faqBoxes[2] ? Styles.extension : Styles.nothing} ref={this.aboutBody3Faq3}>
                            <div className='faq-block-title d-flex justify-content-between' onClick={() => this.OpenFaq(2)}>
                                <div className='faq-block-title-text'>
                                    <span className='blue'>사업자 Q.</span> 펀드허브에서 구독권을 판매하면 수수료는 얼마나 나가나요?
                                </div>
                                <div className='faq-block-title-image'>
                                    <img src={ArrowImage} alt='화살표 이미지' style={this.state.faqBoxes[2] ? Styles.rotation : Styles.nothing}></img>
                                </div>
                            </div>
                            <div className='faq-block-main'>
                                <p className='font-0-75rem gray'>
                                    A. 저희 펀드허브에서는 창업을 할 때의 자금부족에 대하여 매우 공감하기 때문에
                                    <br></br>
                                    <br></br>
                                    구독권 판매로 얻으신 수익의 단 5%(사이트 유지비용) 만 받고 있습니다!
                                </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className='about-footer-top'>
                    <div className='about-footer-top-container'>
                        <div className='about-footer-top-flex d-flex flex-column mb-3rem duration-2 fadeInUp' ref={this.aboutFooterTopFlex}>
                            <p className='font-1-5rem black mb-2rem bold'>협업 및 광고문의</p>
                            <p className='font-0-75rem gray'>저희와 함께해요!</p>
                        </div>
                        <div className='about-footer-top-grid duration-2 fadeInUp' ref={this.aboutFooterTopGrid}>
                            <div className='about-footer-top-grid-left'>
                                <img src={BuildingImage} alt='커피 이미지'></img>
                            </div>
                            <div className='about-footer-top-grid-right d-flex flex-column mt-3rem'>
                                <p className='font-0-75rem purple mb-2rem'>FUNDHUB (펀드허브)</p>
                                <p className='font-0-75rem gray'>
                                    <span className='purple'>Address:</span> OO시 OO로 OO길
                                    <br></br>
                                    <br></br>
                                    <span className='purple'>Tel:</span> 010.xxxx.xxxx
                                    <br></br>
                                    <br></br>
                                    <span className='purple'>Email:</span> example@abc.com
                                </p>
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
                                <p className='font-0-75rem gray'>Get Started with Social Accounts</p>
                                <br></br>
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
                                <div className='footer-button'>
                                    <NavLink to='/login' className='none-style-link block font-0-75rem white'>Get Started</NavLink>
                                </div>
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

const Styles = {
    nothing: {
        
    },
    rotation: {
        transform: 'rotate(270deg)',
    },
    extension: {
        height: '15rem',
    }
}

export default Home;