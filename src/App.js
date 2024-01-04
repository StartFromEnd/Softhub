import React, { Component, useEffect } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import Main from './Main.js';
import Signin from './Signin.js';
import Signup from './Signup.js';
import Signout from './Signout.js';
import Announce from './Announce.js';
import Faq from './Faq.js';
import Profil from './Profil.js';
import Mysupport from './Mysupport.js';
import Myorder from './Myorder.js';
import Myfaq from './Myfaq.js';
import Myfaqwrite from './Myfaqwrite.js';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dropdownBtn: '계정관리',
            dropdownOne: ['로그인', '/signIn'],
            dropdownTwo: ['회원가입', '/signUp'],
        };
    }

    ChangeMainState = (session, expire) => {
        const expires = new Date();
        expires.setHours(expires.getHours() + expire);
        cookie.save('sessionID', session, {
            path: '/',
            expires,
        });
        this.CheckCookie();
    };

    CheckCookie = () => {
        const session = cookie.load('sessionID');
        if (session != undefined) {
            fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/session', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    sessionID: `${session}`,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .catch((error) => {
                    alert('데이터를 불러오던중 오류가 발생하였습니다.');
                })
                .then((data) => {
                    if (data.ok) {
                        this.setState({ dropdownBtn: data.nickname });
                        if(data.position == 'admin'){
                            this.setState({ dropdownOne: ['관리메뉴', '/admin']});
                        }
                        else{
                            this.setState({ dropdownOne: ['프로필', '/profil'] });   
                        }
                        this.setState({ dropdownTwo: ['로그아웃', '/signOut'] });
                    } else {
                        alert(data.msg);
                        cookie.remove('sessionID', { path: '/' });
                    }
                });
        } else {
            this.setState({ dropdownBtn: '계정관리' });
            this.setState({ dropdownOne: ['로그인', '/signIn'] });
            this.setState({ dropdownTwo: ['회원가입', '/signUp'] });
        }
    };
    
    componentDidMount(){
        this.CheckCookie();
    }
    
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <nav className="navbar navbar-dark bg-dark fixed-top">
                        <div className="container-fluid responsive">
                            <NavLink to='/' className='navbar-brand'>Softhub</NavLink>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasDarkNavbar"
                                aria-controls="offcanvasDarkNavbar"
                                aria-label="Toggle navigation"
                            >
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="offcanvas offcanvas-end text-bg-dark"
                                tabindex="-1"
                                id="offcanvasDarkNavbar"
                                aria-labelledby="offcanvasDarkNavbarLabel"
                            >
                                <div className="offcanvas-header">
                                    <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
                                        SoftHub
                                    </h5>
                                    <button
                                        type="button"
                                        className="btn-close btn-close-white"
                                        data-bs-dismiss="offcanvas"
                                        aria-label="Close"
                                    ></button>
                                </div>
                                <div className="offcanvas-body">
                                    <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                                        <li className="nav-item">
                                            <NavLink to='/' className='nav-link active'>홈</NavLink>
                                        </li>
                                        <li className="nav-item dropdown">
                                            <a
                                                className="nav-link dropdown-toggle"
                                                href="#"
                                                role="button"
                                                data-bs-toggle="dropdown"
                                                aria-expanded="false"
                                            >
                                                {this.state.dropdownBtn}
                                            </a>
                                            <ul className="dropdown-menu dropdown-menu-dark">
                                                <li>
                                                    <NavLink to={this.state.dropdownOne[1]} className='dropdown-item'>{this.state.dropdownOne[0]}</NavLink>
                                                </li>
                                                <li>
                                                    <NavLink to={this.state.dropdownTwo[1]} className='dropdown-item'>{this.state.dropdownTwo[0]}</NavLink>
                                                </li>
                                            </ul>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/announce' className='nav-link'>공지사항</NavLink>
                                        </li>
                                        <li className="nav-item">
                                            <NavLink to='/faq' className='nav-link'>문의하기</NavLink>
                                        </li>
                                    </ul>
                                    <form className="d-flex mt-3" role="search">
                                        <input
                                            className="form-control me-2"
                                            type="search"
                                            placeholder="Search"
                                            aria-label="Search"
                                        />
                                        <button
                                            className="btn btn-success btn-min-width"
                                            type="submit"
                                        >
                                            검색
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route
                            path="/signIn"
                            element={<Signin changeMainState={this.ChangeMainState} />}
                        ></Route>
                        <Route path="/signUp" element={<Signup changeMainState={this.ChangeMainState}/>}></Route>
                        <Route path="/signOut" element={<Signout />}></Route>
                        <Route path="/announce" element={<Announce />}></Route>
                        <Route path="/faq" element={<Faq />}></Route>
                        <Route path="/profil" element={<Profil />}>
                            <Route path="/profil/mySupport" element={<Mysupport />}></Route>
                            <Route path="/profil/myOrder" element={<Myorder />}></Route>
                            <Route path="/profil/myFaq" element={<Myfaq />}>
                                <Route path="/profil/myFaq/write" element={<Myfaqwrite />}></Route>
                            </Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;