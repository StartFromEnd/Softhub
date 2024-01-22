import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import './App.css';
import * as common from './CommonFunctions.js';
import CameraImages from './Images/camera.png';

function Renderflexitems({index, link, image, title, writer, price, percent}){
    return(
        <div className='flex-items'>
            <NavLink to={link} className='none-style-link'>
                <img src={image[0] == 'null' ? CameraImages : 'https://storage.googleapis.com/softhub-image-storage/'+image[0]} alt='제품사진'></img>
                <p className='bold half-large'>{title}</p>
                <p className='bold half-large'>{writer}</p>
                <p className='bold half'>{`${price.toLocaleString('ko-KR')}원`}</p>
                <p className='bold half'>후원 {100*percent}% 진행중</p>
                <div className='border-round'>
                    <div className='border-round bg-skyblue' style={{width:`${100 * percent}%`, height:'1rem'}}>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default Renderflexitems;