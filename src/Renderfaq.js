import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';

function Renderfaq({key, seq, process, title, created_at}) {
    return(
        <tr>
            <th scope='row'>{key}</th>
            <td>{process}</td>
            <td><NavLink to={`/profil/myFaq/myFaqRead/?seq=${seq}`}>{title}</NavLink></td>
            <td>{common.UTCChangeLocal(created_at)}</td>
        </tr>
    )
}

export default Renderfaq;