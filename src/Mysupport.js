import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

class Mysupport extends Component {
    
    checkCookie = () => {
        let session = cookie.load('sessionID');
        if(session !== undefined){
            return;
        }
        else {
            alter('로그인이 필요합니다.');
            window.location.replace('/signIn');
        }
    }
    
    componentDidMount(){
        this.checkCookie();
    }
    
    render() {
        return (
            <div className="container">
                <p>mysupport</p>
            </div>
        );
    }
}

export default Mysupport;