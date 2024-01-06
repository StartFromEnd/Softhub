import React, { Component } from 'react';
import { NavLink, Navigate } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

class Myfaqwrite extends Component {
    constructor(props) {
        super(props);
        this.state = {
            noWrite: props.noWrite,
            faqTitle: '',
            faqMain: '',
            faqMsg: '',
        };
    }

    sendFaq = () => {
        if (this.faqTitle == '' || this.faqMain == '') {
            this.setState({ faqMsg: '모든칸을 작성하여 주십시오.' });
            return;
        } else {
            const session = cookie.load('sessionID');
            if (session != undefined) {
                fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/faqwrite', {
                    method: 'POST',
                    mode: 'cors',
                    credentials: 'include',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        sessionID: `${session}`,
                        faqTitle: `${this.state.faqTitle}`,
                        faqMain: `${this.state.faqMain}`
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
                            alert(data.msg);
                            window.location.replace('/profil/myFaq');
                        } else {
                            this.setState({faqMsg: data.msg});
                        }
                    });
            } else {
                alert('로그인이 필요합니다.');
                window.location.replace('/signIn');
            }
        }
    };

    saveFaqTitle(param) {
        this.setState({ faqTitle: param });
    }

    saveFaqMain(param) {
        this.setState({ faqMain: param });
    }

    render() {
        return (
            <div className="all">
                <p>글쓰기</p>
                <section className="myFaq-write-section">
                    <form>
                        <div className="mb-3">
                            <label for="input-title" className="form-label">
                                제목
                            </label>
                            <input
                                id="input-title"
                                type="text"
                                className="form-control"
                                placeholder="제목은 100자 이내로 작성하여 주십시오."
                                value={this.state.faqTitle}
                                onChange={(event) => this.saveFaqTitle(event.target.value)}
                            ></input>
                        </div>
                        <div className="mb-3">
                            <label for="input-faq" className="form-label">
                                본문
                            </label>
                            <textarea
                                id="input-faq"
                                className="form-control"
                                placeholder="본문은 500자 이내로 작성하여 주십시오."
                                value={this.state.faqMain}
                                onChange={(event) => this.saveFaqTitle(event.target.value)}
                            ></textarea>
                        </div>
                        <div id="Help" className="form-text" style={myFaqStyles.red}>
                            {this.state.faqMsg}
                        </div>
                        <button
                            type="button"
                            className="btn btn-success"
                            onClick={() => this.sendFaq()}
                        >
                            확인
                        </button>
                        <NavLink
                            to="/profil/myFaq"
                            className="btn btn-danger"
                            onClick={() => this.noWrite()}
                        >
                            취소
                        </NavLink>
                    </form>
                </section>
            </div>
        );
    }
}

const myFaqStyles = {
    red: {
        color: 'red',
    },
};

export default Myfaqwrite;