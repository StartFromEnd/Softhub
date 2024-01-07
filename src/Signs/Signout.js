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
    
    async componentDidMount(){
        if(cookie.load('sessionID') == undefined){
            alert('로그인하지 않은 상태입니다.');
            window.location.replace('/');
            return;
        }
        
        //SignOut
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, null, null, null];
        let data = await common.Fetch('signOut', array);
        if(data.ok){
            cookie.remove('sessionID', {path: '/'});
            alert(data.msg);
            window.location.replace('/');
        }
        else {
            alert(data.msg);
            window.location.replace('/');
        }
    }
    
    render(){
        return(<div>SignOut</div>);
    }
}

export default Signout;