import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';

function Signout() {
    let session = cookie.load('sessionID');
    fetch('https://port-0-softhub-back-d8gr12alqtfs5p9.sel5.cloudtype.app/signout', {
        method: 'POST',
        mode: 'cors',
        credentials: 'include',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: new URLSearchParams({
            sessionID: `${session}`,
        }),
    })
        .then((response) => {
            return response.json();
        })
        .catch((error) => {
            alert('로그아웃중 오류가 발생하였습니다.');
        })
        .then((data) => {
            if (data.ok) {
                alert('로그아웃 되었습니다.');
            } else {
                alert(data.msg);
            }
        });
    cookie.remove('sessionID', { path: '/' });
    return <script>{window.location.replace('/')}</script>;
}

export default Signout;