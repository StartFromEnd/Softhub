import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Faq extends Component {
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
            </div>
        );
    }
}

export default Faq;