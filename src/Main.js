import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderCounter: 0,
            sliderList: [
                mainStyles.sliderMoveZero,
                mainStyles.sliderMoveOne,
                mainStyles.sliderMoveTwo,
                mainStyles.sliderMoveThree,
            ],

            classifiedList: ['전체', 'Best', '게임', '사이트', '실생활', 'AI', '커뮤니티'],
            classifiedNum: 0,
        };
    }
    slideButtonsClick(num) {
        if (this.state.sliderCounter + num < 0 || this.state.sliderCounter + num > 3) {
            return;
        }
        this.setState({ sliderCounter: this.state.sliderCounter + num });
        console.log('hi');
        console.log(this.state.sliderCounter);
    }

    classifiedButtonsClick(num) {
        this.setState({ classifiedNum: num });
    }
    render() {
        return (
            <div style={mainStyles.all}>
                <section className="cover-fixed-nav-section"></section>
                <section className="main-banner-section">banner</section>
                <section className="search-section">
                    <div className="wrap container">
                        <div className="search">
                            <input type="text" className="searchTerm" placeholder="검색창" />
                            <button type="submit" className="searchButton">
                                ✓<i className="fa fa-search"></i>
                            </button>
                        </div>
                    </div>
                </section>
                <section className="classify-section container">
                    <button
                        className="left-slide-button"
                        onClick={() => this.slideButtonsClick(-1)}
                    >
                        «
                    </button>
                    <div className="wrap-slider">
                        <div
                            className="slider"
                            style={this.state.sliderList[this.state.sliderCounter]}
                        >
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(0)}
                                    style={
                                        this.state.classifiedNum == 0
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">전체</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(1)}
                                    style={
                                        this.state.classifiedNum == 1
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">Best</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(2)}
                                    style={
                                        this.state.classifiedNum == 2
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">게임</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(3)}
                                    style={
                                        this.state.classifiedNum == 3
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">사이트</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(4)}
                                    style={
                                        this.state.classifiedNum == 4
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">실생활</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(5)}
                                    style={
                                        this.state.classifiedNum == 5
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">AI</p>
                            </div>
                            <div className="classify-div">
                                <button
                                    className="classify-button"
                                    onClick={() => this.classifiedButtonsClick(6)}
                                    style={
                                        this.state.classifiedNum == 6
                                            ? mainStyles.buttonEnabled
                                            : mainStyles.buttons
                                    }
                                ></button>
                                <p className="classify-button-name">커뮤니티</p>
                            </div>
                        </div>
                    </div>
                    <button
                        className="right-slide-button"
                        onClick={() => this.slideButtonsClick(1)}
                    >
                        »
                    </button>
                </section>
                <section className="classified-items-section">
                    <div className="classified-info container">
                        <p className="classified-info-text">
                            {this.state.classifiedList[this.state.classifiedNum]}
                        </p>
                        <div className="semi-nav-bar"></div>
                    </div>
                    <hr></hr>
                    <div className="classified-items-list container"></div>
                </section>
            </div>
        );
    }
}

const mainStyles = {
    all: {
        width: '100%',
    },
    buttons: {
        borderColor: '#EAEAEA',
    },

    buttonEnabled: {
        borderColor: '#4374D9',
    },

    sliderMoveZero: {
        transform: ['translateX(0%)'],
    },

    sliderMoveOne: {
        transform: ['translateX(-30%)'],
    },

    sliderMoveTwo: {
        transform: ['translateX(-60%)'],
    },

    sliderMoveThree: {
        transform: ['translateX(-90%)'],
    },
};

export default Main;