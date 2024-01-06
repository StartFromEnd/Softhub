import React, { Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

class Myfaqwrite extends Component {
    
    render() {
        return(
            <div className="all">
                <p>글쓰기</p>
                <section className="myFaq-write-section">
                    <form>
                        <div className="mb-3">
                            <label for='input-title' className='form-label'>제목</label>
                            <input
                                id='input-title'
                                type='text'
                                className='form-control'
                                placeholder='제목은 100자 이내로 작성하여 주십시오.'
                            ></input>
                        </div>
                        <div className='mb-3'>
                            <label for='input-faq' className='form-label'>본문</label>
                            <textarea
                                id='input-faq'
                                className='form-control'
                                placeholder='본문은 500자 이내로 작성하여 주십시오.'
                                wrap='on'
                            ></textarea>
                        </div>
                    </form>
                    <button type="button" className="btn btn-success">확인</button>
                    <NavLink to='/profil/myFaq' className="btn btn-danger">취소</NavLink>
                </section>
            </div>
        )
    }
}

export default Myfaqwrite;