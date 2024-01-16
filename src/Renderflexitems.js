import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';

function Renderflexitems({index, link, image, title, price, percent}){
    return(
        <div className='flexitems'>
            <NavLink to={link}>
                <p className='bold one'>{title}</p>
                <p className='bold half'>{price}</p>
                <div className='container border-round'>
                    <div className='border-round bg-skyblue' width={`${percent}`}>
                        
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Renderflexitems;