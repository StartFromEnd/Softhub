import React, { Component } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
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
            nickname: '',
            session: null,

            dropdownBtn: '계정관리',
            dropdownOne: ['로그인', '/signIn'],
            dropdownTwo: ['회원가입', '/signUp'],
        };
    }

    ChangeMainState = (session) => {
        if (session != null) {
            let data = fetchingSession(session);
            this.setState({ nickname: data.nickname });
            this.setState({ session: session });
            this.setState({ dropdownBtn: data.nickname });
            this.setState({ dropwdownOne: ['프로필', '#'] });
            this.setState({ dropdownTwo: ['로그아웃', '#'] });
        } else {
            this.setState({ nickname: '' });
            this.setState({ session: null });
            this.setState({ dropdownBtn: '계정관리' });
            this.setState({ dropwdownOne: ['로그인', '/signIn'] });
            this.setState({ dropdownTwo: ['회원가입', '#'] });
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
                        <Route path="/signIn" element={<Signin changeMainState={this.ChangeMainState}/>}></Route>
                        <Route path="/signUp" element={<Signup />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

function fetchingSession(session) {
    fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/session', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            session: `${session}`
        }),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            alert('오류가 발생하였습니다.');
        })
        .then((data) => {
            return data;
        });
}

export default App;