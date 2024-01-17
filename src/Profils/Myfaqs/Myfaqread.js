import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
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
        let params = new URLSearchParams(window.location.search);
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, 'private', params.get('seq'), null];
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
        this.LoadFaq();
    }
    
    render() {
        return(
            <div>
                <section className='container mt-3rem mb-3rem'>
                    <table className='table'>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td className='table-info' colspan='1'>제목</td>
                                <td colspan='6'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_title}</td>
                            </tr>
                            <tr>
                                <td className='table-info' colspan='1'>게시일</td>
                                <td colspan='6'>{this.state.faq.length <= 0 ? '로딩중' : common.UTCChangeLocal(this.state.faq[0].faq_created_at)}</td>
                            </tr>
                            <tr>
                                <td className='table-info' colspan='1'>처리상태</td>
                                <td colspan='6'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_process}</td>
                            </tr>
                        </tbody>
                    </table>
                    <p className='one'>{this.state.faq.length <= 0 ? '로딩중' : this.state.faq[0].faq_main}</p>
                </section>
                <hr></hr>
                <section className='container mt-3rem mb-3rem'>
                    <p className='one bold'>답변제목</p>
                    <p className='one'>{this.state.faq.length <= 0 || this.state.faq[0].faq_process !== '답변완료' ? '요청을 처리중입니다..' : this.state.answer[0].answer_title}</p>
                    <p className='one bold'>답변본문</p>
                    <p className='one'>{this.state.faq.length <= 0 || this.state.faq[0].faq_process !== '답변완료' ? '요청을 처리중입니다..' : this.state.answer[0].answer_main}</p>
                    <br></br>
                    <br></br>
                    <p className='one bold'>답변일자</p>
                    <p className='one'>{this.state.faq.length <= 0 || this.state.faq[0].faq_process !== '답변완료' ? '요청을 처리중입니다..' : common.UTCChangeLocal(this.state.answer[0].answer_updated_at)}</p>
                </section>
                <div className="d-flex justify-content-center mt-3rem mb-3rem">
                    <NavLink to="/profil/myFaq/myFaqList" className="btn btn-dark">
                        뒤로가기
                    </NavLink>
                </div>
            </div>
        )
    }
}

export default Myfaqread;