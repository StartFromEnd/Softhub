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
    }

    TrueResponse(param) {
        this.setState({ request: !param });
        this.setState({ response: param });
    }

    LoadSupport = async () => {
        //session, email, password, nickname, variables(3)...
        let array = [
            cookie.load('sessionID'),
            null,
            null,
            null,
            this.state.request == true ? 'request' : 'response',
            this.state.nowPage,
            null,
        ];
        let data = await common.Fetch('supportRead', array);

        if (data.ok) {
            this.setState({ supportNum: data.result[0] });
            this.setState({ supportList: data.result[1] });
        }
    };

    componentDidMount() {}

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

                <section className="flex container mb-3rem">
                    {this.state.supportNum <= 0 ? (
                        <p className="center mt-3rem">아직 참여한 후원이 존재하지 않습니다.</p>
                    ) : (
                        this.state.supportList.map((item, index) => (
                            <Rendersupport
                                key={index}
                                index={index}
                                link={`/profil/mySupport/mySupportRead/?seq=${item.seq}`}
                                image={item.support_images[0]}
                                title={item.support_title}
                                price={item.support_price}
                                percent={
                                    item.support_supporters.split('/').length / item.support_goal
                                }
                            />
                        ))
                    )}
                </section>
                <section className="container center mb-3rem">
                    <NavLink to="/profil/mySupport/mySupportWrite" className="btn btn-primary">
                        후원 요청하기
                    </NavLink>
                </section>
            </div>
        );
    }
}

export default Mysupportlist;