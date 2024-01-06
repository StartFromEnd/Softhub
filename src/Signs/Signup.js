import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Signup extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            nickname: '',
            password: '',
            passwordCheck: '',
            
            emailAuthNum: '',
            emailAuthWrite: '',
            
            helpMsg: '',
            helpMsgStyle: Styles.red,
        };
    }

    componentDidMount() {
        if (cookie.load('sessionID') !== undefined) {
            alert('이미 로그인 상태입니다.');
            window.location.replace('/');
            return;
        }
    }
    
    SaveEmail(param){
        this.setState({ email: param });
    }
    
    SaveNickname(param){
        this.setState({ nickname: param });
    }
    
    SavePassword(param){
        this.setState({ password: param });
    }
    
    SavePasswordCheck(param){
        this.setState({ passwordCheck: param });
    }
    
    SaveEmailAuthWrite(param){
        this.setState({ emailAuthWrite: param });
    }
    
    render() {
        return (
            <div>
                <section className="sign-form-wrap container">
                    <form className="sign-form">
                        <div className="mb-3">
                            <label for="email-input" className="form-label">
                                이메일
                            </label>
                            <input
                                type="email"
                                id="email-input"
                                className="form-control"
                                placeholder="email"
                                value={this.state.email}
                                onChange={(event) => this.SaveEmail(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label for="nickname-input" className="form-label">
                                닉네임
                            </label>
                            <input
                                type="text"
                                id="nickname-input"
                                className="form-control"
                                placeholder="nickname"
                                value={this.state.nickname}
                                onChange={(event) => this.SaveNickname(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label for="password-input" className="form-label">
                                비밀번호
                            </label>
                            <input
                                type="password"
                                id="password-input"
                                className="form-control"
                                placeholder="password"
                                value={this.state.password}
                                onChange={(event) => this.SavePassword(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label for="passwordCheck-input" className="form-label">
                                비밀번호 확인
                            </label>
                            <input
                                type="password"
                                id="passwordCheck-input"
                                className="form-control"
                                placeholder="password-check"
                                value={this.state.passwordCheck}
                                onChange={(event) => this.SavePasswordCheck(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3" style={this.state.emailAuthNum == '' ? Styles.none : Styles.inlineBlock}>
                            <label for="emailAuthWrite-input" className="form-label">
                                인증번호
                            </label>
                            <input
                                type="number"
                                id="emailAuthWrite-input"
                                className="form-control"
                                placeholder="auth-number"
                                value={this.state.emailAuthWrite}
                                onChange={(event) => this.SaveEmailAuthWrite(event.target.value)}
                            ></input>
                        </div>
                        <div id="Help" className="form-text" style={this.state.helpMsgStyle}>
                            {this.state.helpMsg}
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.SignIn()}
                        >
                            확인
                        </button>
                        <hr></hr>
                        <p className="bold">계정이 이미 있으신가요?</p>
                        <NavLink to="/signIn">로그인 하기</NavLink>
                    </form>
                </section>
            </div>
        );
    }
}

const Styles = {
    red: {
        color: 'red'
    },
    
    green: {
        color: 'green'
    },
    
    none: {
        display: 'none'
    },
    
    inlineBlock: {
        display: 'inline-block'
    }
}

export default Signup;