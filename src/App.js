import React, { Component } from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
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
            session: '',
            
            dropdownBtn: '계정관리',
            dropdownOne: ['로그인', '/signIn'],
            dropdownTwo: ['회원가입', '/signUp'],
        };
    }

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
                        <Route path="/signIn" element={<Signin />}></Route>
                        <Route path="/signUp" element={<Signup />}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;