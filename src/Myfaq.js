import React, { Component } from 'react';
import { NavLink, useNavigate, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

class Myfaq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            faqNum: 0,
            nowFaqNum: 1,
            pageNum: 1,
            faqList: [],
            
            isWriting: false
        };
    }
    
    CheckFaq = () => {
        const session = cookie.load('sessionID');
        if (session != undefined) {
            fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/faq', {
                method: 'POST',
                mode: 'cors',
                credentials: 'include',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: new URLSearchParams({
                    sessionID: `${session}`,
                    pageNum: `${this.state.pageNum}`
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
                        this.setState({faqNum: data.faqNum});
                        this.setState({faqList: data.faqList});
                    } else {
                        alert(data.msg);
                    }
                });
        } else {
            alert('로그인이 필요합니다.');
            window.location.replace('/signIn');
        }
    };
    
    componentDidMount() {
        this.CheckFaq();
    }

    write = () => {
        //this.setState({isWriting: true});
    }
    
    noWrite = () => {
        this.setState({isWriting: false});
    }
    
    render() {
        return (
            <div className="mt-3 container">
                <p className="p-bold five">
                    '문의하기'와 달리 '개인 문의하기'는 다른 사용자에게 노출되지 않습니다.
                </p>
                <p className="p-bold five">'개인 문의하기'는 로그인된 사용자만 이용가능합니다.</p>
                <p className="p-bold five">
                    과도한 장난 혹은 악질적인 내용이 확인되면 회원정지와 함께 법적 조치가 이뤄질 수
                    있습니다.
                </p>
                <Outlet />
                <section className="mt-3 container myfaq-list-section" style={this.state.isWriting ? myfaqStyles.dNone : myfaqStyles.dEyes}>
                    <div class="d-flex flex-column mb-3">
                        {this.state.faqNum <= 0 ? (
                            <p className="na">아직 작성한 문의사항이 없습니다.</p>
                        ) : (
                            this.state.faqList.map((item) => {
                                return <div className="list-items"></div>;
                            })
                        )}
                    </div>
                </section>
                <section className="mt-3 container myfaq-search-section" style={this.state.isWriting ? myfaqStyles.dNone : myfaqStyles.dEyes}>
                    <div className="container myfaq-write-button">
                        <NavLink to='/profil/myFaq/write' className="btn btn-primary" onClick={() => this.write()}>글쓰기</NavLink>
                    </div>
                    <div className="container myfaq-search-buttons">
                        <button type="button">&lt;</button>
                        <button type="button">{this.state.nowFaqNum}</button>
                        <button
                            type="button"
                            style={
                                this.state.faqNum > this.state.nowFaqNum * 10
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowFaqNum + 1}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.faqNum > this.state.nowFaqNum * 20
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowFaqNum + 2}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.faqNum > this.state.nowFaqNum * 30
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowFaqNum + 3}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.faqNum > this.state.nowFaqNum * 40
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowFaqNum + 4}
                        </button>
                        <button type="button">&gt;</button>
                    </div>
                </section>
            </div>
        );
    }
}

const myfaqStyles = {
    dNone: {
        display: 'none',
    },
    dYes: {
        display: 'inline-block',
    },
    dEyes: {
        display: 'block',
    }
};

export default Myfaq;