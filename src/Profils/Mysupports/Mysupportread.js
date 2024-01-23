import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import CameraImages from '../../Images/camera.png';

class Mysupportread extends React.Component {
    
    constructor(props){
        super(props);
        this.state ={
            support: [],
            main: '<p>로딩중입니다.</p>',
            percent: 0,
            srcs: [CameraImages, CameraImages, CameraImages, CameraImages, CameraImages, CameraImages],
            styles: [Styles.basic, Styles.one, Styles.two, Styles.three, Styles.four, Styles.five, Styles.six],
            slider: 0,
        }
    }
    
    LoadSupport = async() => {
        let params = new URLSearchParams(window.location.search);
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, params.get('seq'), null, null];
        let data = await common.Fetch('supportRead', array);
        
        if(data.ok){
            this.setState({support: data.result});
            this.setState({main: data.result[0].support_main});
            let srcs = [...this.state.srcs];
            let addresses = data.result[0].support_images.split('&%!,');
            for(let i=0; i<6; i++){
                if(addresses[i] == 'null'){
                    srcs[i] = CameraImages;
                }
                else{
                    srcs[i] = 'https://storage.googleapis.com/softhub-image-storage/'+addresses[i];
                }
            }
            this.setState({srcs: srcs});
            if(data.result[0].support_supporters == null){
                this.setState({percent: 0});
            }
            else{
                let tage = data.result[0].support_supporters.split('/').length / data.result[0].support_goal;
                this.setState({percent: tage});
            }
        }
        else{
            alert(data.msg);
        }
    }
    
    componentDidMount() {
        this.LoadSupport();
    }
    
    SlideLeft() {
        if(this.state.slider <= 0){
            return;
        }
        else{
            let modified = this.state.slider;
            modified -= 1;
            this.setState({slider: modified});
        }
    }
    
    SlideRight() {
        if(this.state.slider >= 6){
            return;
        }
        else{
            let modified = this.state.slider;
            modified += 1;
            this.setState({slider: modified});
        }
    }
    
    render(){
        return(
            <div style={{position:'relative'}}>
                <div className='wrap-main'>
                    <div className='wrap-images mb-3rem'>
                        <div className='left-button' onClick={() => this.SlideLeft()}></div>
                        <div className='slide-box'>
                            <div class="d-flex justify-content-between" style={this.state.styles[this.state.slider]}>
                                <img src={this.state.srcs[0]} alt='제품이미지 1'></img>
                                <img src={this.state.srcs[1]} alt='제품이미지 2'></img>
                                <img src={this.state.srcs[2]} alt='제품이미지 3'></img>
                                <img src={this.state.srcs[3]} alt='제품이미지 4'></img>
                                <img src={this.state.srcs[4]} alt='제품이미지 5'></img>
                                <img src={this.state.srcs[5]} alt='제품이미지 6'></img>
                            </div>
                        </div>
                        <div className='right-button' onClick={() => this.SlideRight()}></div>
                    </div>
                    <div className='wrap-body' dangerouslySetInnerHTML={{ __html: this.state.main }} style={{minHeight:'30vw'}}>
                        
                    </div>
                </div>
                <div className='wrap-purchase'>
                    <p className='bold one-half'>{this.state.support.length > 0 ? this.state.support[0].support_title : '로딩중입니다.'}</p>
                    <p className='bold one'>{this.state.support.length > 0 ? this.state.support[0].support_writer_id : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `${Number(this.state.support[0].support_price).toLocaleString('ko-KR')}원` : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `후원이 ${this.state.percent * this.state.support[0].support_goal}/${this.state.support[0].support_goal}명 진행중입니다.` : '로딩중입니다.'}</p>
                    <div className='border-round'>
                        <div className='border-round bg-skyblue' style={{width:`${100 * this.state.percent}%`, height:'1rem'}}>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const Styles = {
    basic: {
        transform: `translateX(0)`,
    },
    one: {
        transform: `translateX(-16rem)`,
    },
    two: {
        transform: `translateX(-32rem)`,
    },
    three: {
        transform: `translateX(-48rem)`,
    },
    four: {
        transform: `translateX(-64rem)`,
    },
    five: {
        transform: `translateX(-80rem)`,
    },
    six: {
        transform: `translateX(-96rem)`,
    },
};

export default Mysupportread;