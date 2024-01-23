import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import Renderfaq from '../../Renderfaq.js';

class Myfaqlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            faqNum: 0,
            faqList: [],
            nowPage: 1,
            standardPage: 1,
        };
    }

    LoadFaqList = async () => {
        //session, email, password, nickname, variables(3)...
        let array = [
            cookie.load('sessionID'),
            null,
            null,
            null,
            'private',
            this.state.nowPage,
            null,
        ];
        let data = await common.Fetch('faqList', array);

        if (data.ok) {
            this.setState({ faqNum: data.result[0] });
            this.setState({ faqList: data.result[1] });
        } else {
            alert(data.msg);
        }
    };
    
    ButtonClick = async (param) => {
        await this.setState({nowPage: this.state.standardPage + param});
        this.LoadFaqList();
    }
    
    LeftMoveButtonClick = async () => {
        if(this.state.standardPage >= 6){
            await this.setState({standardPage: this.state.standardPage-5, nowPage: this.state.standardPage - 5});
            this.LoadFaqList();
        }
        else{
            return;
        }
    }
    
    RightMoveButtonClick = async () => {
        if(this.state.faqNum > (this.state.standardPage + 4) * 10){
            await this.setState({standardPage: this.state.standardPage + 5, nowPage: this.state.standardPage + 5});
            this.LoadFaqList();
        }
        else{
            return;
        }
    }
    
    componentDidMount() {
        
        this.LoadFaqList();
    }

    render() {
        return (
            <div>
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">처리상태</th>
                            <th scope="col">제목</th>
                            <th scope="col">게시일</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.faqList.length <= 0 ? (
                            <span>작성한 문의사항이 없습니다.</span>
                        ) : (
                            this.state.faqList.map((item, index) => (
                                <Renderfaq
                                    key={index}
                                    index={index+1+(this.state.nowPage-1)*10}
                                    link={`/profil/myFaq/myFaqRead/?seq=${item.seq}`}
                                    process={item.faq_process}
                                    title={item.faq_title}
                                    created_at={item.faq_created_at}
                                />
                            ))
                        )}
                    </tbody>
                </table>
                <div className="d-flex justify-content-center mt-3rem">
                    <button
                        type="button"
                        className="btn btn-light bg-white btn-left"
                        onClick={() => this.LeftMoveButtonClick()}>
                        &lt;
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white"
                        onClick={() => this.ButtonClick(0)}
                    >
                        {this.state.standardPage}
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white"
                        style={
                            this.state.faqNum > this.state.standardPage * 10
                                ? Styles.inlineBlock
                                : Styles.none
                        }
                        onClick={() => this.ButtonClick(1)}
                    >
                        {this.state.standardPage + 1}
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white"
                        style={
                            this.state.faqNum > (this.state.standardPage+1) * 10
                                ? Styles.inlineBlock
                                : Styles.none
                        }
                        onClick={() => this.ButtonClick(2)}
                    >
                        {this.state.standardPage + 2}
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white"
                        style={
                            this.state.faqNum > (this.state.standardPage+2) * 10
                                ? Styles.inlineBlock
                                : Styles.none
                        }
                        onClick={() => this.ButtonClick(3)}
                    >
                        {this.state.standardPage + 3}
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white"
                        style={
                            this.state.faqNum > (this.state.standardPage+3) * 10
                                ? Styles.inlineBlock
                                : Styles.none
                        }
                        onClick={() => this.ButtonClick(4)}
                    >
                        {this.state.standardPage + 4}
                    </button>
                    <button
                        type="button"
                        className="btn btn-light bg-white btn-right"
                        onClick={() => this.RightMoveButtonClick()}
                    >
                        &gt;
                    </button>
                </div>
                <div className="d-flex justify-content-center mt-3rem mb-3rem">
                    <NavLink to="/profil/myFaq/myFaqWrite" className="btn btn-primary">
                        글쓰기
                    </NavLink>
                </div>
            </div>
        );
    }
}

const Styles = {
    none: {
        display: 'none',
    },
    inlineBlock: {
        display: 'inline-block',
    },
};

export default Myfaqlist;