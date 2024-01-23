import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import cookie from 'react-cookies';
import logo from './logo.svg';
import './App.css';
import * as common from './CommonFunctions.js';
import Nav from './Nav.js';
import Home from './Homes/Home.js';

import Signin from './Signs/Signin.js';
import Signup from './Signs/Signup.js';
import Signout from './Signs/Signout.js';

import Profil from './Profils/Profil.js';

import Myfaq from './Profils/Myfaqs/Myfaq.js';
import Myfaqlist from './Profils/Myfaqs/Myfaqlist.js';
import Myfaqread from './Profils/Myfaqs/Myfaqread.js';
import Myfaqwrite from './Profils/Myfaqs/Myfaqwrite.js';

import Faq from './Faqs/Faq.js';
import Faqlist from './Faqs/Faqlist.js';
import Faqread from './Faqs/Faqread.js';
import Faqwrite from './Faqs/Faqwrite.js';

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            
        };
    }
    
    render() {
        return (
            <div className="App">
                <BrowserRouter>
                    <Nav />
                    <section className="cover-fixed-nav-section"></section>
                    <Routes>
                        <Route path='/' element={<Home />}></Route>
                        <Route path='/signIn' element={<Signin />}></Route>
                        <Route path='/signUp' element={<Signup />}></Route>
                        <Route path='/signOut' element={<Signout />}></Route>
                        <Route path='/profil' element={<Profil />}>
                            <Route path='/profil/myFaq' element={<Myfaq />}>
                                <Route path='/profil/myFaq/myFaqList' element={<Myfaqlist />}></Route>
                                <Route path='/profil/myFaq/myFaqRead' element={<Myfaqread />}></Route>
                                <Route path='/profil/myFaq/myFaqWrite' element={<Myfaqwrite />}></Route>
                            </Route>
                        </Route>
                        <Route path='/faq' element={<Faq />}>
                            <Route path='/faq/faqList' element={<Faqlist />}></Route>
                            <Route path='/faq/faqRead' element={<Faqread />}></Route>
                            <Route path='/faq/faqWrite' element={<Faqwrite />}></Route>
                        </Route>
                    </Routes>
                </BrowserRouter>
            </div>
        );
    }
}

export default App;