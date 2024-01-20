import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';

function Renderflexitems({index, link, image, title, price, percent}){
    return(
        <div className='flexitems'>
            <NavLink to={link}>
                <img src={image} alt='제품사진'></img>
                <p className='bold one'>{title}</p>
                <p className='bold half'>{price}</p>
                <p className='bold half'>후원 {100*percent}% 진행중</p>
                <div className='container border-round'>
                    <div className='border-round bg-skyblue' width={100 * percent}>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Renderflexitems;