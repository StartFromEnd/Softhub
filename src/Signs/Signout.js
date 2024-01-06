import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Signout extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            session: props.Session,
        }
    }
    
    componentDidMount(){
        if(this.state.session == ''){
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