import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';

class Nav extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            session: props.Session,

            nickname: '',
            position: '',

            dropDownNames: ['계정관리', '로그인', '회원가입'],
            dropDownLinks: ['/signIn', '/signUp'],
        };
    }

    async componentDidMount() {
        if (cookie.load('sessionID') == '') {
            return;
        }

        //session, email, password, nickname, variables...
        let array = [cookie.load('sessionID'), null, null, this.state.nickname, null, null, null];
        let data = await common.Fetch('sessionCheck', array);
        if (data.ok) {
            this.setState({ nickname: data.nickname });
            this.setState({ position: data.position });

            let profilOrManage;
            if (data.position == 'admin') {
                profilOrManage = ['관리', '/management'];
            } else {
                profilOrManage = ['프로필', '/profil'];
            }

            this.setState({ dropDownNames: [data.nickname, profilOrManage[0], '로그아웃'] });
            this.setState({ dropDownLinks: [profilOrManage[1], '/signOut'] });
        } else {
            cookie.remove('sessionID', { path: '/' });
            alert(data.msg);
            window.location.replace('/');
        }
    }

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark fixed-top">
                <div className="container-fluid responsive">
                    <NavLink to="/" className="navbar-brand">
                        Softhub
                    </NavLink>
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
                                    <NavLink to="/" className="nav-link active">
                                        홈
                                    </NavLink>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link dropdown-toggle"
                                        href="#"
                                        role="button"
                                        data-bs-toggle="dropdown"
                                        aria-expanded="false"
                                    >
                                        {this.state.dropDownNames[0]}
                                    </a>
                                    <ul className="dropdown-menu dropdown-menu-dark">
                                        <li>
                                            <NavLink
                                                to={this.state.dropDownLinks[0]}
                                                className="dropdown-item"
                                            >
                                                {this.state.dropDownNames[1]}
                                            </NavLink>
                                        </li>
                                        <li>
                                            <NavLink
                                                to={this.state.dropDownLinks[1]}
                                                className="dropdown-item"
                                            >
                                                {this.state.dropDownNames[2]}
                                            </NavLink>
                                        </li>
                                    </ul>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        공지사항
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink to="/" className="nav-link">
                                        문의하기
                                    </NavLink>
                                </li>
                            </ul>
                            <form className="d-flex mt-3" role="search">
                                <input
                                    className="form-control me-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                />
                                <button className="btn btn-success btn-min-width" type="button">
                                    검색
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Nav;