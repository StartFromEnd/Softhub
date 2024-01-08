import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';

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
    
    ShowFaqList = () => {
        let arr = this.state.faqList;
        console.log(this.state.faqList);
        console.log(arr);
        if(arr.length <= 0){
            return (<p>아직 작성한 문의사항이 없습니다.</p>);
        }
        else {
            return(arr.map((item) => {
                return(
                    <div class="d-flex justify-content-between">
                        <p>{item.faq_process}</p>
                        <p>{item.faq_title}</p>
                        <p>{item.faq_created_at}</p>
                    </div>
                );
            }));
        }
    }
    
    async componentDidMount() {
        if (cookie.load('sessionID') == undefined) {
            window.location.replace('/signIn');
            return;
        }

        this.LoadFaqList();
    }

    render() {
        return (
            <div>
                <div className="d-flex flex-column mb-3">
                    {this.ShowFaqList()}
                </div>
            </div>
        );
    }
}

export default Myfaqlist;