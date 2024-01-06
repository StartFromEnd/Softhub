import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Signout extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    
    componentDidMount(){
        if(cookie.load('sessionID') == undefined){
            alert('로그인하지 않은 상태입니다.');
            window.location.replace('/');
            return;
        }
    }
    
    render(){
        return(<div>hi</div>);
    }
}

export default Signout;