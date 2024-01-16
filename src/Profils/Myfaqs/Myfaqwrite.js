import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Myfaqwrite extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            title: '',
            main: ''
        }
    }
    
    SaveTitle(param){
        this.setState({title: param});
    }
    
    SaveMain(param){
        this.setState({main: param});
    }
    
    FaqWrite = async() => {
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, 'private', this.state.title, this.state.main];
        let data = await common.Fetch('faqWrite', array);
        
        if(data.ok){
            alert(data.msg);
            window.location.replace('/profil/myFaq/myFaqList');
        }
        else{
            alert(data.msg);
        }
    }
    
    componentDidMount() {
        
    }

    render() {
        return (
            <div>
                <section className='one center mb-3rem'>
                    개인 문의 글쓰기
                </section>
                <div className="mb-3rem">
                    <label for="TitleFormControlInput" className="form-label">
                        제목
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="TitleFormControlInput"
                        placeholder="100자 이내로 입력하여 주십시오."
                        value={this.state.title}
                        onChange={(event) => this.SaveTitle(event.target.value)}
                    ></input>
                </div>
                <div className="mb-3">
                    <label for="MainFormControlTextarea" className="form-label">
                        본문
                    </label>
                    <textarea
                        className="form-control"
                        id="MainFormControlTextarea"
                        placeholder='500자 이내로 입력하여 주십시오.'
                        rows="10"
                        value={this.state.main}
                        onChange={(event) => this.SaveMain(event.target.value)}
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center mt-3rem mb-3rem">
                    <NavLink to="/profil/myFaq/myFaqList" className="btn btn-dark">
                        뒤로가기
                    </NavLink>
                    <button type="button" className="btn btn-success" onClick={() => this.FaqWrite()}>완료</button>
                </div>
            </div>
        );
    }
}

export default Myfaqwrite;