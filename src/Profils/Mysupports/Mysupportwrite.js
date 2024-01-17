import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

class Mysupportwrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            goal: '',
        };
        this.editor = React.createRef();
    }

    SaveTitle(param) {
        this.setState({ title: param });
    }
    SavePrice(param) {
        this.setState({ price: param });
    }
    SaveGoal(param) {
        this.setState({ goal: param });
    }
    componentDidMount() {}

    render() {
        return (
            <div id="all">
                <section className="one-half center mb-3rem">후원 요청 글쓰기</section>
                <div className="mb-3rem">
                    <label for="TitleFormControlInput" className="form-label">
                        제목
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="TitleFormControlInput"
                        placeholder="100자 이내로 입력하여 주십시오."
                        value={this.state.title}
                        onChange={(event) => this.SaveTitle(event.target.value)}
                    ></input>
                </div>
                <div className="mb-3rem">
                    <label for="PriceFormControlInput" className="form-label">
                        가격
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="PriceFormControlInput"
                        placeholder="제품 하나당 후원받을 가격을 입력하여 주십시오."
                        value={this.state.price}
                        onChange={(event) => this.SavePrice(event.target.value)}
                    ></input>
                </div>
                <div className="mb-3rem">
                    <label for="GoalFormControlInput" className="form-label">
                        목표
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="GoalFormControlInput"
                        placeholder="몇 개의 제품에 대해서 후원받을지 입력하여 주십시오."
                        value={this.state.goal}
                        onChange={(event) => this.SaveGoal(event.target.value)}
                    ></input>
                </div>
                <div id="editor"></div>
                <script>
                    {ClassicEditor.create(document.querySelector('#editor'))
                        .then((editor) => {
                            console.log(editor);
                        })
                        .catch((error) => {
                            console.error(error);
                        })}
                </script>
            </div>
        );
    }
}

export default Mysupportwrite;