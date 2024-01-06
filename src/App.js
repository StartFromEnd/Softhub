import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import * as common from './CommonFunctions.js';
import Nav from './Nav.js';
import Home from './Homes/Home.js';
import Signin from './Signs/Signin.js';
import Signup from './Signs/Signup.js';
import Signout from './Signs/Signout.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            sessionID: '',
        };
    }

    SessionCheck = () => {
        let session = cookie.load('sessionID');
        if (session !== undefined) {
            this.setState({ sessionID: session });
        } else {
            this.setState({ sessionID: '' });
        }
    };

    componentDidMount() {
        this.SessionCheck();
    }
    
    componentDidUpdate(prevProps) {
        if(this.props.sessionID !== prevProps.sessionID){
            this.SessionCheck();
        }
    }
    
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Nav Session={this.state.sessionID} />
                    <section className="cover-fixed-nav-section"></section>
                    <Routes>
                        <Route path='/' element={<Home Session={this.state.sessionID}/>}></Route>
                        <Route path='/signIn' element={<Signin Session={this.state.sessionID} SessionCheck={this.state.SessionCheck()}/>}></Route>
                        <Route path='/signUp' element={<Signup Session={this.state.sessionID}/>}></Route>
                        <Route path='/signOut' element={<Signout Session={this.state.sessionID}/>}></Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;