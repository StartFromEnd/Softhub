import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import Renderflexitems from '../../Renderflexitems.js';

class Mysupportlist extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            request: true,
            response: false,
        }
    }
    
    TrueRequest(param){
        this.setState({request: param});
        this.setState({response: !param});
    }
    
    TrueResponse(param){
        this.setState({request: !param});
        this.setState({response: param});
    }
    
    componentDidMount() {}

    render() {
        return (
            <div>
                <div class="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                        checked={this.state.request}
                        onClick={(event) => this.TrueRequest(event.target.checked)}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault1">
                        내가 받은 후원
                    </label>
                </div>
                <div className="form-check">
                    <input
                        className="form-check-input"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault2"
                        checked={this.state.response}
                        onClick={(event) => this.TrueResponse(event.target.checked)}
                    ></input>
                    <label className="form-check-label" for="flexRadioDefault2">
                        내가 한 후원
                    </label>
                </div>
                <section className="flex container mb-3rem"></section>
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