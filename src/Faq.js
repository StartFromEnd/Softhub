import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Faq extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            faqNum: 0,
            nowFaqNum: 1,
            faqList: [],
        };
    }
    
    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="faq-section container">문의하기</section>
                <section className="faq-list-section container"></section>
                <section className="faq-search-section container">
                    <div class="input-group mb-3 search">
                        <input
                            type="text"
                            class="form-control"
                            placeholder="글 제목"
                            aria-label="Recipient's username"
                            aria-describedby="button-addon2"
                        ></input>
                        <button class="btn btn-outline-secondary" type="button" id="button-addon2">
                            검색
                        </button>
                    </div>
                </section>
                <section className="mt-3 container myfaq-search-section">
                    <div className="container myfaq-write-button">
                        <button className="btn btn-primary" type="button">글쓰기</button>
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
};


export default Faq;