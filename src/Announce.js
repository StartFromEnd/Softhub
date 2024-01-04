import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

class Announce extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            announceNum: 0,
            nowAnnounceNum: 1,
            announceList: [],
        };
    }
    
    render() {
        return (
            <div className="all">
                <section className="cover-fixed-nav-section"></section>
                <section className="announcement-section container">공지사항</section>
                <section className="announcement-list-section container">
                    <div class="d-flex flex-column mb-3">
                        {this.state.announceNum <= 0 ? (
                            <p className="na">아직 작성된 공지사항이 없습니다.</p>
                        ) : (
                            this.state.announceList.map((item) => {
                                return <div className="list-items"></div>;
                            })
                        )}
                    </div>
                </section>
                <section className="announcement-search-section container">
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
                    <div className="container myfaq-search-buttons">
                        <button type="button">&lt;</button>
                        <button type="button">{this.state.nowAnnounceNum}</button>
                        <button
                            type="button"
                            style={
                                this.state.announceNum > this.state.nowAnnounceNum * 10
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowAnnounceNum + 1}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.announceNum > this.state.nowAnnounceNum * 20
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowAnnounceNum + 2}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.announceNum > this.state.nowAnnounceNum * 30
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowAnnounceNum + 3}
                        </button>
                        <button
                            type="button"
                            style={
                                this.state.announceNum > this.state.nowAnnounceNum * 40
                                    ? myfaqStyles.dYes
                                    : myfaqStyles.dNone
                            }
                        >
                            {this.state.nowAnnounceNum + 4}
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

export default Announce;