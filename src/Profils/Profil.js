import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Profil extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            nickname: '',
            position: '',
            email: '',
            bankAccount: ''
        }
    }
    
    async componentDidMount(){
        if(cookie.load('sessionID') == undefined){
            alert('로그인이 필요합니다.');
            window.location.replace('/signIn');
            return;
        }
        
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, null, null, null];
        let data = await common.Fetch('profil', array);
        if(data.ok){
            this.setState({nickname: data.result[0]});
            this.setState({position: data.result[1]});
            this.setState({email: data.result[2]});
            this.setState({bankAccount: data.result[3]});
            console.log(data.result[3]);
        }
        else {
            cookie.remove('sessionID', { path: '/' });
            alert(data.msg);
            window.location.replace('/');
        }
    }
    
    render() {
        return(
            <div>
               <section className='profil-form-wrap container mt-3'>
                    <p className='one bold'>{this.state.nickname}</p>
                    <p className='one bold'>{this.state.position}</p>
                    <p className='one bold'>{this.state.email}</p>
                    <p className='one bold'>{this.state.bankAccount}</p>
                </section>
            </div>
        );
    }
}

export default Profil;