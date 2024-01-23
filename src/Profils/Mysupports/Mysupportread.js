import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import CameraImages from '../../Images/camera.png';

class Mysupportread extends React.Component {
    
    constructor(props){
        super(props);
        console.log(props.location.aboutProps);
        console.log(props.location);
        this.state ={
            support: props.location.aboutProps.totalData,
            main: props.location.aboutProps.totalData.support_main,
            percent: props.location.aboutProps.percentage,
            srcs: props.location.aboutProps.totalData.support_images.split('&%!,'),
            styles: [Styles.basic, Styles.one, Styles.two, Styles.three, Styles.four, Styles.five],
            slider: 0,
            actions: [<NavLink to='#' className='btn btn-success bold' style={{width:'100%'}}>후원하기</NavLink>,
                      <button className='btn btn-dark bold' style={{width:'100%'}}>후원완료</button>,
                      <NavLink to={() => {
                              let params = new URLSearchParams(window.location.search);
                              let link = '/profil/mySupport/mySupportModify/?seq='+params.get('seq');
                              return link;
                      }} className='btn btn-info bold' style={{width:'100%'}}>수정하기</NavLink>],
            isSame: 0,
        }
    }
    
    LoadSupport = async() => {
        let params = new URLSearchParams(window.location.search);
        //session, email, password, nickname, variables(3)...
        let array = [cookie.load('sessionID'), null, null, null, params.get('seq'), null, null];
        let data = await common.Fetch('supportRead', array);
        
        if(data.ok){
            this.setState({support: data.result[0]});
            this.setState({main: data.result[0][0].support_main});
            this.setState({isSame: data.result[1]});
            let srcs = [...this.state.srcs];
            let addresses = data.result[0][0].support_images.split('&%!,');
            for(let i=0; i<6; i++){
                if(addresses[i] == 'null'){
                    srcs[i] = CameraImages;
                }
                else{
                    srcs[i] = 'https://storage.googleapis.com/softhub-image-storage/'+addresses[i];
                }
            }
            this.setState({srcs: srcs});
            if(data.result[0][0].support_supporters == null){
                this.setState({percent: 0});
            }
            else{
                let tage = data.result[0][0].support_supporters.split('/').length / data.result[0][0].support_goal;
                this.setState({percent: tage});
            }
        }
        else{
            alert(data.msg);
        }
    }
    
    componentDidMount() {
        let srcs = [...this.state.srcs];
            for(let i=0; i<6; i++){
                if(srcs[i] == 'null'){
                    srcs[i] = CameraImages;
                }
                else{
                    srcs[i] = 'https://storage.googleapis.com/softhub-image-storage/'+srcs[i];
                }
            }
            this.setState({srcs: srcs});
            if(this.state.support.support_supporters == null){
                this.setState({percent: 0});
            }
            else{
                let tage = this.state.support.support_supporters.split('/').length / this.state.support.support_goal;
                this.setState({percent: tage});
            }
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
        if(this.state.slider >= 5){
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
                <div className='wrap-main mb-3rem'>
                    <div className='wrap-images'>
                        <div className='left-button' onClick={() => this.SlideLeft()}></div>
                        <div className='slide-box'>
                            <div className="d-flex justify-content-between" style={this.state.styles[this.state.slider]}>
                                <img src={this.state.srcs[0]} alt='제품이미지 1'></img>
                                <img src={this.state.srcs[1]} alt='제품이미지 2'></img>
                                <img src={this.state.srcs[2]} alt='제품이미지 3'></img>
                                <img src={this.state.srcs[3]} alt='제품이미지 4'></img>
                                <img src={this.state.srcs[4]} alt='제품이미지 5'></img>
                                <img src={this.state.srcs[5]} alt='제품이미지 6'></img>
                            </div>
                            <p className='container center half-large'>{`${this.state.slider+1}/6`}</p>
                        </div>
                        <div className='right-button' onClick={() => this.SlideRight()}></div>
                    </div>
                </div>
                <div className='wrap-purchase'>
                    <p className='bold one-half'>{this.state.support.length > 0 ? this.state.support[0].support_title : '로딩중입니다.'}</p>
                    <p className='bold one'>{this.state.support.length > 0 ? this.state.support[0].support_writer_id : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `${Number(this.state.support[0].support_price).toLocaleString('ko-KR')}원` : '로딩중입니다.'}</p>
                    <p className='bold half-large'>{this.state.support.length > 0 ? `후원이 ${this.state.percent * this.state.support[0].support_goal}/${this.state.support[0].support_goal}명 진행중입니다.` : '로딩중입니다.'}</p>
                    <div className='border-round mb-3rem'>
                        <div className='border-round bg-skyblue' style={{width:`${100 * this.state.percent}%`, height:'1rem'}}>
                        </div>
                    </div>
                    {this.state.actions[this.state.isSame]}
                </div>
                <div className='wrap-body' dangerouslySetInnerHTML={{ __html: this.state.main }} style={{width:'100%', minHeight:'30vw'}}>
                        
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
        transform: `translateX(-25rem)`,
    },
    two: {
        transform: `translateX(-50rem)`,
    },
    three: {
        transform: `translateX(-75rem)`,
    },
    four: {
        transform: `translateX(-100rem)`,
    },
    five: {
        transform: `translateX(-125rem)`,
    },
};

export default Mysupportread;