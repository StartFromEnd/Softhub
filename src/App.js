import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import cookie from 'react-cookie';
import logo from './logo.svg';
import './App.css';
import Nav from './Nav.js';
import Main from './Main.js';
import Signin from './Signin.js';
import Signup from './Signup.js';

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
            secure: true,
            httpOnly: true,
        });
        CheckCookie;
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
                    if(data.ok){
                        this.setState({dropdownBtn: data.nickname});
                        this.setState({dropdownOne: ['프로필', '#']});
                        this.setState({dropdownTwo: ['로그아웃', '#']});
                    }
                    else{
                        alert(data.msg);
                        cookie.remove('sessionID', {path: '/'});
                    }
                });
        }
        else{
            this.setState({dropdownBtn: '계정관리'});
            this.setState({dropdownOne: ['로그인', '/signIn']});
            this.setState({dropdownTwo: ['회원가입', '/signUp']});
        }
    };

    render() {
        return (
            <div className="App">
                <Nav
                    dropdownBtn={this.state.dropdownBtn}
                    dropdownOne={this.state.dropdownOne}
                    dropdownTwo={this.state.dropdownTwo}
                />
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Main />}></Route>
                        <Route
                            path="/signIn"
                            element={<Signin changeMainState={this.ChangeMainState} />}
                        ></Route>
                        <Route path="/signUp" element={<Signup />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

function fetchingSession(session) {}

export default App;