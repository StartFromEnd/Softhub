import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet, useParams } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Myfaqread extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            faq: [],
            answer: []
        }
    }
    
    LoadFaq = async() => {
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, 'private', useParams().seq, null];
        let data = await common.Fetch('faqRead', array);
        
        if(data.ok){
            this.setState({faq: data.result[0]});
            this.setState({answer: data.result[1]});
        }
        else{
            alert(data.msg);
            window.location.replace('/profil/myFaq/myFaqList');
        }
    }
    
    componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            window.location.replace('/signIn');
            return;
        }

        this.LoadFaq();
    }
    
    render() {
        return(
            <div>
                <section className='container mt-3rem mb-3rem'>
                    <p className='one bold'>제목</p>
                    <p className='one'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_title}</p>
                    <p className='one bold'>본문</p>
                    <p className='one'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_main}</p>
                    <br></br>
                    <br></br>
                    <p className='half bold'>게시일</p>
                    <p className='half'>{this.state.faq.length <= 0 ? '로딩중' : common.UTCChangeLocal(this.state.faq[0].faq_created_at)}</p>
                    <br></br>
                    <p className='half bold'>처리상태</p>
                    <p className='half'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_process}</p>
                </section>
                <hr></hr>
                <section className='container mt-3rem mb-3rem'>
                    <p className='one bold'>답변제목</p>
                    <p className='one'>{this.state.answer.length <= 0 ? '로딩중' : this.state.answer[0].answer_title}</p>
                    <p className='one bold'>답변본문</p>
                    <p className='one'>{this.state.answer.length <= 0 ? '로딩중' : this.state.answer[0].answer_main}</p>
                    <br></br>
                    <br></br>
                    <p className='half bold'>답변일자</p>
                    <p className='half'>{this.state.answer.length <= 0 ? '로딩중' : common.UTCChangeLocal(this.state.answer[0].answer_updated_at)}</p>
                </section>
            </div>
        )
    }
}

export default Myfaqread;