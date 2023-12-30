import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

function Nav(props) {
    return (
        <nav className="navbar navbar-dark bg-dark fixed-top">
            <div className="container-fluid responsive">
                <a className="navbar-brand" href="/">
                    SoftHub
                </a>
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
                                <a className="nav-link active" aria-current="page" href="/">
                                    홈
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="#"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {props.dropdownBtn}
                                </a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    <li>
                                        <a href={props.dropdownOne[1]} className="dropdown-item">
                                            {props.dropdownOne[0]}
                                        </a>
                                    </li>
                                    <li>
                                        <a href={props.dropdownTwo[1]} className="dropdown-item">
                                            {props.dropdownTwo[0]}
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    공지사항
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">
                                    문의하기
                                </a>
                            </li>
                        </ul>
                        <form className="d-flex mt-3" role="search">
                            <input
                                className="form-control me-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                            <button className="btn btn-success btn-min-width" type="submit">
                                검색
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Nav;