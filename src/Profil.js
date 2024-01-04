import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

class Profil extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nickname: '',
            position: '',
            email: '',
        };
    }

    checkCookie = () => {
        const session = cookie.load('sessionID');
        if (session != undefined) {
            fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/session', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    sessionID: `${session}`,
                }),
            })
                .then((response) => {
                    return response.json();
                })
                .catch((error) => {
                    alert('데이터를 불러오던중 오류가 발생하였습니다.');
                })
                .then((data) => {
                    if (data.ok) {
                        this.setState({ nickname: data.nickname });
                        this.setState({ position: data.position });
                        this.setState({ email: data.address });
                    } else {
                        alert(data.msg);
                        cookie.remove('sessionID', { path: '/' });
                        window.location.replace('/');
                    }
                });
        } else {
            alert('로그인이 필요합니다.');
            window.location.replace('/signIn');
        }
    };

    componentDidMount() {
        this.checkCookie();
    }

    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="profil-section container">
                    <p>{this.state.nickname}</p>
                    <p>{this.state.position}</p>
                    <p>{this.state.email}</p>
                    <p className="p-bold">
                        닉네임과 이메일 주소는 사용자 식별 정보이므로 변경필요시 관리자에게 문의하여 주십시오.
                    </p>
                </section>
                <section className="profil-options-section container">
                    <ul class="nav nav-tabs">
                        <li class="nav-item">
                            <NavLink to="/profil/mySupport" className='nav-link'>내 후원목록</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/profil/myOrder" className='nav-link'>내 주문목록</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink to="/profil/myFaq" className='nav-link'>개인 문의하기</NavLink>
                        </li>
                    </ul>
                </section>
                <Outlet />
            </div>
        );
    }
}

export default Profil;