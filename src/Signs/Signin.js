import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Signin extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            check: false,
            helpMsg: '',
        };
    }

    componentDidMount() {
        if (cookie.load('sessionID') !== undefined) {
            alert('이미 로그인 상태입니다.');
            window.location.replace('/');
            return;
        }
    }

    SaveEmail(param) {
        this.setState({ email: param });
    }

    SavePassword(param) {
        this.setState({ password: param });
    }

    SaveCheck(param) {
        this.setState({ check: param });
    }
    
    SignIn = async () => {
        if(this.state.email == '' || this.state.password == ''){
            this.setState({ helpMsg: '모든 칸을 기입하여 주십시오.' });
            return;
        }
        else{
            //session, email, password, nickname, variables(3)...
            let array = [this.state.session, this.state.email, this.state.password, null, this.state.check, null, null];
            let data = await common.Fetch('signIn', array);
            if(data.ok){
                let servedSession = data.result[0];
                let expires = new Date();
                expires.setDate(expires.getDate() + data.result[1]);
                if(this.state.check){
                    
                }
                cookie.save('sessionID', servedSession, {
                    path: '/',
                    expires
                });
                this.setState({ helpMsg: '' });
                alert(data.msg);
                window.location.replace('/');
            }
            else{
                this.setState({ helpMsg: data.msg });
            }
        }
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
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="input-check"
                                checked={this.state.check}
                                onChange={(event) => this.SaveCheck(event.target.checked)}
                            />
                            <label className="form-check-label" for="input-check">
                                정보 기억하기
                            </label>
                        </div>
                        <div id="Help" className="form-text" style={Styles.red}>
                            {this.state.helpMsg}
                        </div>
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={() => this.SignIn()}
                        >
                            확인
                        </button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <section className='container center'>
                            <p className="bold center">계정이 없으신가요?</p>
                            <NavLink to='/signUp' className='center'>회원가입 하기</NavLink>
                        </section>
                    </form>
                </section>
            </div>
        );
    }
}

const Styles = {
    red: {
        color: 'red',
    },
};

export default Signin;