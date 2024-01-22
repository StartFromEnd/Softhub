import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Mysupportread extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            support: [],
            main: '<p>로딩중입니다.</p>',
            percent: 0,
        }
    }
    
    LoadSupport = async() => {
        let params = new URLSearchParams(window.location.search);
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, params.get('seq'), null, null];
        let data = await common.Fetch('supportRead', array);
        
        if(data.ok){
            this.setState({support: data.result});
            this.setState({main: data.result[0].support_main});
            if(data.result[0].support_supporters == null){
                this.setState({percent: 0});
            }
            else{
                let tage = data.result[0].support_supporters.split('/').length / data.result[0].support_goal;
                this.setState({percent: tage});
            }
        }
        else{
            alert(data.msg);
        }
    }
    
    componentDidMount() {
        this.LoadSupport();
    }
    
    render(){
        return(
            <div style={{position:'relative'}}>
                <div className='wrap-main'>
                    <div className='wrap-images'>
                        
                    </div>
                    <div className='wrap-body' dangerouslySetInnerHTML={{ __html: this.state.main }}>
                        
                    </div>
                </div>
                <div className='wrap-purchase'>
                    <p className='bold one-half'>{this.state.support.length > 0 ? this.state.support[0].support_title : '로딩중입니다.'}</p>
                    <p className='bold one'>{this.state.support.length > 0 ? this.state.support[0].support_writer_id : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `${this.state.support[0].support_price.toLocaleString('ko-KR')}원` : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `후원이 ${this.state.percent * this.state.support[0].support_goal}/${this.state.support[0].support_goal}명 진행중입니다.` : '로딩중입니다.'}</p>
                    <div className='border-round'>
                        <div className='border-round bg-skyblue' style={{width:`${100 * this.state.percent}%`, height:'1rem'}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Mysupportread;