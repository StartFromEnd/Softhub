import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signupEmail: '',
            signupNickname: '',
            signupPassword: '',
            signupPasswordCheck: '',
            isPasswordOK: false,
            isPasswordOKmsg: '',

            signupMsg: '',
            signupMsgStyle: signupStyles.red,

            signupEmailAuth: '',
            signupEmailAuthWrite: '',
            signupEmailAuthWritePlaceholder: '처음엔 작성하실 필요가 없습니다.',

            changeMainState: props.changeMainState,
        };
    }

    saveSignupEmail(param) {
        this.setState({ signupEmail: param });
    }

    saveSignupNickname(param) {
        this.setState({ signupNickname: param });
    }

    saveSignupPassword(param) {
        this.setState({ signupPassword: param });
    }

    saveSignupPasswordCheck(param) {
        this.setState({ signupPasswordCheck: param });
        this.setState({ isPasswordOK: this.state.signupPassword == param });
        if (this.state.signupPassword == param) {
            this.setState({ isPasswordOKmsg: '비밀번호가 일치합니다' });
        } else {
            this.setState({ isPasswordOKmsg: '비밀번호가 일치하지 않습니다' });
        }
        console.log(this.state.signupPasswordCheck);
    }

    signupButton() {
        if (
            this.state.signupEmail == '' ||
            this.state.signupNickname == '' ||
            this.state.signupPassword == '' ||
            this.state.signupPasswordCheck == ''
        ) {
            this.setState({ signupMsgStyle: signupStyles.red });
            this.setState({ signupMsg: '모든 칸을 기입해주십시오' });
            return;
        } else if (this.state.signupPassword !== this.state.signupPasswordCheck) {
            return;
        } else {
            if (
                this.state.signupEmailAuth == this.state.signupEmailAuthWrite &&
                this.state.signupEmailAuth != ''
            ) {
                fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signup', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        signupEmail: `${this.state.signupEmail}`,
                        signupPassword: `${this.state.signupPassword}`,
                        signupNickname: `${this.state.signupNickname}`,
                        signupEmailAuth: 'true',
                    }),
                })
                    .then((response) => {
                        return response.json();
                    })
                    .catch((error) => {
                        alert('오류가 발생하였습니다.');
                    })
                    .then((data) => {
                        if (data.ok) {
                            alert(data.msg);
                            this.state.changeMainState(data.cookie[0], data.cookie[1]);
                            window.location.replace('/');
                        } else {
                            alert(data.msg);
                        }
                    });
            } else if (this.state.signupEmailAuth == '') {
                fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signup', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        signupEmail: `${this.state.signupEmail}`,
                        signupPassword: `${this.state.signupPassword}`,
                        signupNickname: `${this.state.signupNickname}`,
                        signupEmailAuth: 'null',
                    }),
                })
                    .then((response) => {
                        return response.json();
                    })
                    .catch((error) => {
                        alert('오류가 발생하였습니다.');
                    })
                    .then((data) => {
                        if (data.ok) {
                            this.setState({ signupMsgStyle: signupStyles.green });
                            this.setState({ signupEmailAuth: data.authNum });
                            this.setState({
                                signupMsg: `${this.state.signupEmail} 계정으로 인증번호가 전송되었습니다.
            (페이지를 나가거나 새로고침하면 인증번호를 다시 발급받아야 합니다.)`,
                            });
                            this.setState({
                                signupEmailAuthWritePlaceholder: '인증번호를 작성하여 주십시오.',
                            });
                        } else {
                            alert(data.msg);
                        }
                    });
            } else {
                fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signup', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        signupEmail: `${this.state.signupEmail}`,
                        signupPassword: `${this.state.signupPassword}`,
                        signupNickname: `${this.state.signupNickname}`,
                    }),
                })
                    .then((response) => {
                        return response.json();
                    })
                    .catch((error) => {
                        alert('오류가 발생하였습니다.');
                    })
                    .then((data) => {
                        this.setState({ signupMsgStyle: signupStyles.red });
                        this.setState({
                            signupMsg: `${this.state.signupEmail} 계정으로 보낸 인증번호와 일치하지 않습니다.`,
                        });
                        this.setState({
                            signupEmailAuthWritePlaceholder: '인증번호를 작성하여 주십시오.',
                        });
                    });
            }
        }
    }

    saveSignupEmailAuthWrite(param) {
        this.setState({ signupEmailAuthWrite: param });
    }

    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="wrap-signup-form">
                    <div className="container">
                        <p className="signup-text">회원가입</p>
                        <form>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">
                                    이메일
                                </label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    value={this.state.signupEmail}
                                    onChange={(event) => this.saveSignupEmail(event.target.value)}
                                />
                                <div id="emailHelp" className="form-text"></div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputNickname1" className="form-label">
                                    닉네임
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="exampleInputNickname1"
                                    value={this.state.signupNickname}
                                    onChange={(event) =>
                                        this.saveSignupNickname(event.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">
                                    비밀번호
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPassword1"
                                    value={this.state.signupPassword}
                                    onChange={(event) =>
                                        this.saveSignupPassword(event.target.value)
                                    }
                                />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPasswordCheck1" className="form-label">
                                    비밀번호 확인
                                </label>
                                <input
                                    type="password"
                                    className="form-control"
                                    id="exampleInputPasswordCheck1"
                                    value={this.state.signupPasswordCheck}
                                    onChange={(event) =>
                                        this.saveSignupPasswordCheck(event.target.value)
                                    }
                                />
                                <div
                                    id="passwordHelp"
                                    className="form-text"
                                    style={
                                        this.state.isPasswordOK
                                            ? signupStyles.green
                                            : signupStyles.red
                                    }
                                >
                                    {this.state.isPasswordOKmsg}
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmailAuthWrite1" className="form-label">
                                    인증번호
                                </label>
                                <input
                                    placeholder={this.state.signupEmailAuthWritePlaceholder}
                                    type="text"
                                    className="form-control"
                                    id="exampleInputEmailAuthWrite1"
                                    value={this.state.signupEmailAuthWrite}
                                    onChange={(event) =>
                                        this.saveSignupEmailAuthWrite(event.target.value)
                                    }
                                />
                            </div>
                            <div id="Help" className="form-text" style={this.state.signupMsgStyle}>
                                {this.state.signupMsg}
                            </div>
                            <button
                                type="button"
                                className="btn btn-primary"
                                onClick={() => this.signupButton()}
                            >
                                확인
                            </button>
                            <hr></hr>
                            <p>계정이 이미 있으신가요?</p>
                            <NavLink to="/signIn">로그인 하기</NavLink>
                        </form>
                    </div>
                </section>
            </div>
        );
    }
}

const signupStyles = {
    red: {
        color: 'red',
    },
    green: {
        color: 'green',
    },
};

export default Signup;