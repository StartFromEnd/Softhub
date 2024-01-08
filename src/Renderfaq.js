import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';

function Renderfaq({seq, process, title, created_at}) {
    return(
        <tr>
            <th scope='col'>{key}</th>
            <td>{process}</td>
            <td><NavLink to='/profil/myFaq/myFaqRead'>{title}</NavLink></td>
            <td>{created_at}</td>
        </tr>
    )
}

export default Renderfaqer;