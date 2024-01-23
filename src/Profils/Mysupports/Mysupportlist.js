import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import Rendersupport from '../../Rendersupport.js';

class Mysupportlist extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            request: true,
            response: false,

            supportNum: 0,
            nowPage: 1,
            supportList: [],
            standardPage: 1,
        };
    }

    TrueRequest(param) {
        this.setState({ request: param });
        this.setState({ response: !param });
        this.LoadSupportList(true);
    }

    TrueResponse(param) {
        this.setState({ request: !param });
        this.setState({ response: param });
        this.LoadSupportList(false);
    }

    LoadSupportList = async (bool) => {
        //session, email, password, nickname, variables(3)...
        let array = [
            cookie.load('sessionID'),
            null,
            null,
            null,
            bool == true ? 'request' : 'response',
            this.state.nowPage,
            null,
        ];
        let data = await common.Fetch('supportList', array);

        if (data.ok) {
            this.setState({ supportNum: data.result[0] });
            this.setState({ supportList: data.result[1] });
        }
        else {
            alert(data.msg);
        }
    };

    ButtonClick = async (param) => {
        await this.setState({nowPage: this.state.standardPage + param});
        this.LoadSupportList(this.state.request == true ? true : false);
    }
    
    LeftMoveButtonClick = async () => {
        if(this.state.standardPage >= 6){
            await this.setState({standardPage: this.state.standardPage-5, nowPage: this.state.standardPage - 5});
            this.LoadSupportList(this.state.request == true ? true : false);
        }
        else{
            return;
        }
    }
    
    RightMoveButtonClick = async () => {
        if(this.state.faqNum > (this.state.standardPage + 4) * 20){
            await this.setState({standardPage: this.state.standardPage + 5, nowPage: this.state.standardPage + 5});
            this.LoadSupportList(this.state.request == true ? true : false);
        }
        else{
            return;
        }
    }
    
    componentDidMount() {
        this.LoadSupportList(true);
    }

    render() {
        return (
            <div>
                <div class="d-flex flex-row-reverse">
                    <div class="p-2">
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioSupport"
                                id="flexRadioSupport2"
                                checked={this.state.response}
                                onClick={(event) => this.TrueResponse(event.target.checked)}
                            ></input>
                            <label className="form-check-label bold" for="flexRadioSupport2">
                                한 후원
                            </label>
                        </div>
                    </div>
                    <div class="p-2">
                        <div class="form-check">
                            <input
                                className="form-check-input"
                                type="radio"
                                name="flexRadioSupport"
                                id="flexRadioSupport1"
                                checked={this.state.request}
                                onClick={(event) => this.TrueRequest(event.target.checked)}
                            ></input>
                            <label className="form-check-label bold" for="flexRadioSupport1">
                                받은 후원
                            </label>
                        </div>
                    </div>
                </div>

                <section className="container mb-3rem" style={this.state.supportNum <= 0 ? Styles.nothing : Styles.flex}>
                    {this.state.supportNum <= 0 ? (
                        <p className="center mt-3rem center">아직 참여한 후원이 존재하지 않습니다.</p>
                    ) : (
                        this.state.supportList.map((item, index) => (
                            <Rendersupport
                                key={index}
                                index={index}
                                total={item}
                                link={`/profil/mySupport/mySupportRead/?seq=${item.seq}`}
                                image={item.support_images.split('&%!,')}
                                title={item.support_title}
                                writer={item.support_writer_id}
                                price={item.support_price}
                                percent={
                                    item.support_supporters == null ? (
                                    0
                                    ) : (
                                    item.support_supporters.split('/').length / item.support_goal
                                    )
                                }
                            />
                        ))
                    )}
                </section>
                <section className="container center mb-3rem">
                    <div className="d-flex justify-content-center mb-3rem">
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
                            this.state.supportNum > this.state.standardPage * 20
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
                            this.state.supportNum > (this.state.standardPage+1) * 20
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
                            this.state.supportNum > (this.state.standardPage+2) * 20
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
                            this.state.supportNum > (this.state.standardPage+3) * 20
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
                    <NavLink to="/profil/mySupport/mySupportWrite" className="btn btn-primary">
                        후원 요청하기
                    </NavLink>
                </section>
            </div>
        );
    }
}

const Styles = {
    nothing: {
        
    },
    
    flex: {
        display: 'flex',
        flexWrap: 'wrap',
        gap: '1rem',
    },
    none: {
        display: 'none',
    },
    inlineBlock: {
        display: 'inline-block',
    },
}

export default Mysupportlist;