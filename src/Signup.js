import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Signup extends Component {
    constructor(props){
        super(props);
        this.state = {
            signupEmail: '',
            signupNickname: '',
            signupPassword: '',
            signupPasswordCheck: '',
            isPasswordOK: false,
            isPasswordOKmsg: '',
            
            signupMsg: '',
            
            signupEmailAuth: '',
            signupEmailAuthWrite: '',
            signupEmailAuthWritePlaceholder: '처음엔 작성하실 필요가 없습니다.'
        };
    }
    
    saveSignupEmail(param){
        this.setState({signupEmail: param});
    }
    
    saveSignupNickname(param){
        this.setState({signupNickname: param});
    }
    
    saveSignupPassword(param){
        this.setState({signupPassword: param});
    }
    
    saveSignupPasswordCheck(param){
        this.setState({signupPasswordCheck: param});
        this.setState({isPasswordOK: (this.state.signupPassword == param)});
        if(this.state.signupPassword == param){
            this.setState({isPasswordOKmsg: '비밀번호가 일치합니다'});
        }
        else{
            this.setState({isPasswordOKmsg: '비밀번호가 일치하지 않습니다'});
        }
        console.log(this.state.signupPasswordCheck);
    }
    
    signupButton(){
        if(this.state.signupEmail == '' || this.state.signupNickname == '' || this.state.signupPassword == '' || this.state.signupPasswordCheck == ''){
            this.setState({signupMsg: '모든 칸을 기입해주십시오'});
            return;
        }
        else if(!this.state.signupPassword == this.state.signupPasswordCheck){
            return;
        }
        else{
            this.setState({signupMsg: ''});
            this.setState({signupEmailAuthWritePlaceholder: '인증번호를 작성하여 주십시오.'});
        }
    }
    
    saveSignupEmailAuthWrite(param){
        this.setState({signupEmailAuthWrite: param});
    }
    
    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="wrap-signup-form">
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
                                onChange={(event) => this.saveSignupNickname(event.target.value)}
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
                                onChange={(event) => this.saveSignupPassword(event.target.value)}
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
                                onChange={(event) => this.saveSignupPasswordCheck(event.target.value)}
                            />
                            <div id="passwordHelp" className="form-text" style={this.state.isPasswordOK ? signupStyles.green : signupStyles.red}>
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
                                onChange={(event) => this.saveSignupEmailAuthWrite(event.target.value)}
                            />
                        </div>
                        <div id="Help" className="form-text" style={signupStyles.red}>
                            {this.state.signupMsg}
                        </div>
                        <button type="button" className="btn btn-primary" onClick={() => this.signupButton()}>
                            확인
                        </button>
                    </form>
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
    }
}

export default Signup;