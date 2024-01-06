import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Home extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {

        }
    }
    render(){
        return(<div>hi</div>);
    }
}

export default Home;