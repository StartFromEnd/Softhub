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
            //session, email, password, nickname, variables...
            let array = [this.state.session, this.state.email, this.state.password, null, null, null, null];
            let data = await common.Fetch('signIn', array);
            console.log(data);
            if(data.ok){
                let servedSession = data.cookie[0];
                let expires = new Date();
                expires.setHours(expires.getHours() + data.cookie[1]);
                if(this.state.check){
                    expires.setFullYear(expires.getFullYear() + 10);
                }
                cookie.save('sessionID', data.cookie[0], {
                    path: '/',
                    expires
                });
                this.setState({ helpMsg: '' });
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
                <section className="signin-form-wrap">
                    <form>
                        <div className="mb-3">
                            <label for="email-input" className="form-label">
                                이메일
                            </label>
                            <input
                                type="email"
                                id="email-input"
                                className="form-control"
                                placeholder="(한글, 영문, 숫자, !, ?, @, .) 만 입력가능"
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
                                placeholder="(한글, 영문, 숫자, !, ?, @) 만 입력가능"
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
                                로그인 유지하기
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