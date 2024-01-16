import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import Renderflexitems from '../../Renderflexitems.js';

class Mysupportlist extends React.Component {
    
    componentDidMount() {
        
    }
    
    render() {
        return(
            <div>
                <section className='flex container mb-3rem'>
                    
                </section>
                <section className='container center mb-3rem'>
                    <NavLink to='/profil/mySupport/mySupportWrite' className="btn btn-primary">후원 요청하기</NavLink>
                </section>
            </div>
        )
    }
}

export default Mysupportlist;