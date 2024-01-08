import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Myfaqwrite extends React.Component {
    componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            window.location.replace('/signIn');
            return;
        }
    }

    render() {
        return (
            <div>
                <div class="mb-3rem">
                    <label for="TitleFormControlInput" class="form-label">
                        제목
                    </label>
                    <input
                        type="text"
                        class="form-control"
                        id="TitleFormControlInput"
                        placeholder="100자 이내로 입력하여 주십시오."
                    ></input>
                </div>
                <div class="mb-3">
                    <label for="MainFormControlTextarea" class="form-label">
                        본문
                    </label>
                    <textarea
                        class="form-control"
                        id="MainFormControlTextarea"
                        placeholder='500자 이내로 입력하여 주십시오.'
                        rows="10"
                    ></textarea>
                </div>
                <div className="d-flex justify-content-center mt-3rem mb-3rem">
                    <NavLink to="/profil/myFaq/myFaqList" className="btn btn-black">
                        뒤로가기
                    </NavLink>
                    <button type="button" class="btn btn-success">완료</button>
                </div>
            </div>
        );
    }
}

export default Myfaqwrite;