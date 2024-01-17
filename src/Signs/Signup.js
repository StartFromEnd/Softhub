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

            pwCheckHelpMsg: '',
            pwCheckHelpMsgStyle: Styles.red,

            emailAuthNum: '',
            emailAuthWrite: '',
            emailAuthWriteDisplay: Styles.none,

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

    SaveEmail(param) {
        this.setState({ email: param });
    }

    SaveNickname(param) {
        this.setState({ nickname: param });
    }

    SavePassword(param) {
        this.setState({ password: param });
    }

    SavePasswordCheck(param) {
        this.setState({ passwordCheck: param });
        if (this.state.password !== param) {
            this.setState({ pwCheckHelpMsg: '비밀번호가 일치하지 않습니다.' });
            this.setState({ pwCheckHelpMsgStyle: Styles.red });
            return;
        } else {
            this.setState({ pwCheckHelpMsg: '비밀번호가 일치합니다.' });
            this.setState({ pwCheckHelpMsgStyle: Styles.green });
            return;
        }
    }

    SaveEmailAuthWrite(param) {
        this.setState({ emailAuthWrite: param });
    }

    SignUp = async () => {
        if (this.state.email == '' || this.state.nickname == '' || this.state.password == '') {
            this.setState({ helpMsg: '모든 칸을 기입하여 주십시오.' });
            this.setState({ helpMsgStyle: Styles.red });
            return;
        } else if (this.state.password !== this.state.passwordCheck) {
            this.setState({ helpMsg: '' });
            return;
        } else {
            if (this.state.emailAuthNum !== '' && this.state.emailAuthNum == this.state.emailAuthWrite) {
                //session, email, password, nickname, variables(3)...
                let array = [
                    null,
                    this.state.email,
                    this.state.password,
                    this.state.nickname,
                    true,
                    null,
                    null,
                ];
                let data = await common.Fetch('signUp', array);
                if (data.ok) {
                    this.setState({ helpMsg: data.msg });
                    this.setState({ helpMsgStyle: Styles.green });
                    let servedSession = data.result[0];
                    let expires = new Date();
                    expires.setDate(expires.getDate() + data.result[1]);
                    cookie.save('sessionID', servedSession, {
                        path: '/',
                        expires,
                    });
                    alert(data.msg);
                    window.location.replace('/');
                }
                else {
                    this.setState({ helpMsg: data.msg });
                    this.setState({ helpMsgStyle: Styles.red });
                }
            } else if (
                this.state.emailAuthNum !== '' &&
                this.state.emailAuthNum !== this.state.emailAuthWrite
            ) {
                let array = [
                    null,
                    this.state.email,
                    this.state.password,
                    this.state.nickname,
                    false,
                    null,
                    null,
                ];
                let data = await common.Fetch('signUp', array);

                this.setState({ helpMsg: data.msg });
                this.setState({ helpMsgStyle: Styles.red });
            } else {
                let array = [
                    null,
                    this.state.email,
                    this.state.password,
                    this.state.nickname,
                    null,
                    null,
                    null,
                ];
                let data = await common.Fetch('signUp', array);
                if (data.ok) {
                    this.setState({ helpMsg: data.msg });
                    this.setState({ helpMsgStyle: Styles.green });
                    this.setState({ emailAuthNum: `${data.result[0]}` });
                    this.setState({ emailAuthWriteDisplay: Styles.inlineBlock });
                }
                else {
                    this.setState({ helpMsg: data.msg });
                    this.setState({ helpMsgStyle: Styles.red });
                }
            }
        }
    };

    render() {
        return (
            <div>
                <section className='one-half center container mt-r3em bm-3rem'>로그인</section>
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
                                aria-describedby="passwordCheckHelp"
                                value={this.state.passwordCheck}
                                onChange={(event) => this.SavePasswordCheck(event.target.value)}
                            ></input>
                            <div
                                id="passwordCheckHelp"
                                class="form-text"
                                style={this.state.pwCheckHelpMsgStyle}
                            >
                                {this.state.pwCheckHelpMsg}
                            </div>
                        </div>
                        <div
                            className="mb-3"
                            style={this.state.emailAuthWriteDisplay}
                        >
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
                            onClick={() => this.SignUp()}
                        >
                            확인
                        </button>
                        <br></br>
                        <br></br>
                        <br></br>
                        <section className='container center'>
                            <p className="bold center">계정이 이미 있으신가요?</p>
                            <NavLink to="/signIn" className='center'>로그인 하기</NavLink>
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

    green: {
        color: 'green',
    },

    none: {
        display: 'none',
    },

    inlineBlock: {
        display: 'inline-block',
    },
};

export default Signup;