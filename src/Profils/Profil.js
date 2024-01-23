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
                        <table className='table border-round'>
                        <tbody>
                            <tr>
                                <td className='table-warning bold center' width='20%'>닉네임</td>
                                <td width='80%'>{this.state.nickname}</td>
                            </tr>
                            <tr>
                                <td className='table-warning bold center' width='20%'>포지션</td>
                                <td width='80%'>{this.state.position}</td>
                            </tr>
                            <tr>
                                <td className='table-warning bold center' width='20%'>이메일</td>
                                <td width='80%'>{this.state.email}</td>
                            </tr>
                            <tr>
                                <td className='table-warning bold center' width='20%'>계좌정보</td>
                                <td width='80%'>{this.state.bankAccount}</td>
                            </tr>
                        </tbody>
                        </table>
                        <p className="half bold">이메일은 사용자 식별정보이므로 변경이 불가합니다.</p>
                        <p className="half bold">
                            닉네임 변경을 원할 시 관리자에게 개인 문의하여 주십시오.
                        </p>
                        <p className="half bold">
                            공인 혹은 상표가 있는 단체는 관리자의 판단하에 ✅ 표시를 부여받을 수
                            있습니다.
                        </p>
                        <hr></hr>
                    </section>
                </section>
                <section className="profil-routes container mt-3rem mb-3rem border-round">
                    <ul className="nav justify-content-center">
                        <li className="nav-item border-round">
                            <NavLink to="/profil" className="nav-link">
                                펀드 요청 현황
                            </NavLink>
                        </li>
                        <li className="nav-item border-round">
                            <NavLink to="/profil" className="nav-link">
                                펀드 등록 현황
                            </NavLink>
                        </li>
                        <li className="nav-item border-round">
                            <NavLink to="/profil/myFaq/myFaqList" className="nav-link">
                                개인 문의하기
                            </NavLink>
                        </li>
                    </ul>
                </section>
                <section className='container'>
                    <Outlet />
                </section>
            </div>
        );
    }
}

export default Profil;