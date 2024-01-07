import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../App.css';
import * as common from '../CommonFunctions.js';

class Profil extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            position: '',
            email: '',
            bankAccount: '',
        };
    }

    async componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            alert('로그인이 필요합니다.');
            window.location.replace('/signIn');
            return;
        }

        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, null, null, null];
        let data = await common.Fetch('profil', array);
        if (data.ok) {
            this.setState({ nickname: data.result[0] });
            this.setState({ position: data.result[1] });
            this.setState({ email: data.result[2] });
            this.setState({ bankAccount: data.result[3] == null ? 'null' : data.result[3] });
        } else {
            cookie.remove('sessionID', { path: '/' });
            alert(data.msg);
            window.location.replace('/');
        }
    }

    render() {
        return (
            <div>
                <section className="profil-form-wrap container">
                    <section className="profil-form-wrap-margin container">
                        <p className="one">{this.state.nickname}</p>
                        <p className="one">{this.state.position}</p>
                        <p className="one">{this.state.email}</p>
                        <p className="one">{this.state.bankAccount}</p>
                        <hr></hr>
                        <p className="half">이메일은 사용자 식별정보이므로 변경이 불가합니다.</p>
                        <p className="half">
                            닉네임 변경을 원할 시 관리자에게 개인 문의하여 주십시오.
                        </p>
                        <p className="half">
                            공인 혹은 상표가 있는 단체는 관리자의 판단하에 √ 표시를 부여받을 수
                            있습니다.
                        </p>
                    </section>
                </section>
                <section className="profil-routes container">
                    <ul className="nav justify-content-center">
                        <li className="nav-item">
                            <NavLink to="/profil/mySupport" className="nav-link">
                                내 후원목록
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profil/myOrder" className="nav-link">
                                내 주문목록
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink to="/profil/myFaq" className="nav-link">
                                개인 문의하기
                            </NavLink>
                        </li>
                    </ul>
                    <Outlet />
                </section>
            </div>
        );
    }
}

export default Profil;