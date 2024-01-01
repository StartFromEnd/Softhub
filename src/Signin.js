import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Signin extends Component {
    constructor(props){
        super(props);
        this.state = {
            signinEmail: '',
            signinPassword: '',
            signinMsg: '',
            signinMsgStyle: signinStyles.red
        };
    }
    saveSigninEmail(param){
        this.setState({signinEmail: param});
    }
    saveSigninPassword(param){
        this.setState({signinPassword: param});
    }
    signinButton(){
        if(this.state.signinEmail == '' || this.state.signinPassword == ''){
            this.setState({signinMsg: '모든 칸을 기입해주십시오'});
            this.setState({signinMsgStyle: signinStyles.red});
            return;
        }
        else {
            let email = this.state.signinEmail;
            let password = this.state.signinPassword;
            this.setState({signinMsg: ''});
            fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signin', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    signinEmail: `${email}`,
                    signinPassword: `${password}`
                }),
            })
            .then((response) => {console.log(response.json()[3]);});
        }
    }
    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="wrap-login-form">
                    <p className="login-text">로그인</p>
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
                                value={this.state.signinEmail}
                                onChange={(event) => this.saveSigninEmail(event.target.value)}
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
                                value={this.state.signinPassword}
                                onChange={(event) => this.saveSigninPassword(event.target.value)}
                            />
                        </div>
                        <div className="mb-3 form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="exampleCheck1"
                            />
                            <label className="form-check-label" for="exampleCheck1">
                                기능 준비중..
                            </label>
                        </div>
                        <div id="Help" className="form-text" style={this.state.signinMsgStyle}>
                            {this.state.signinMsg}
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.signinButton()}>
                            확인
                        </button>
                    </form>
                </section>
            </div>
        );
    }
}

const signinStyles = {
    red: {
        color: 'red',
    }
}

export default Signin;