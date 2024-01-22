import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import CKEditor from 'ckeditor4-react-advanced';
import CameraImages from '../../Images/camera.png';

class Mysupportwrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            product: '',
            price: '',
            goal: '',
            imgs: [CameraImages, CameraImages, CameraImages, CameraImages, CameraImages, CameraImages],
            resource: '<p>이 문장들은 지우고 작성하십시오</p><br/><p>한 게시물의 본문 용량은 1Mb 입니다. 글자의 굵기, 크기, 색상 등 여러 효과를 사용하시려면 2000자,</p><br/><p>효과없이 기본으로 글자만 작성하시려면 4000자 이내가 안정적입니다.</p>',
        };
    }

    SaveTitle(param) {
        this.setState({ title: param });
    }
    SaveProduct(param) {
        this.setState({ product: param });
    }
    SavePrice(param) {
        this.setState({ price: param });
    }
    SaveGoal(param) {
        this.setState({ goal: param });
    }
    SaveResource(param) {
        this.setState({ resource: param });
    }
    GetImagePreview = (event) => {
        const files = event.currentTarget.files;

        if ([...files].length >= 7) {
            alert('상품 이미지는 6개까지 업로드가 가능합니다.');
            return;
        }

        [...files].forEach((file) => {
            if (!file.type.match('image/.*')) {
                alert('이미지 파일만 업로드가 가능합니다.');
                return;
            }
        });
        
        if([...files].length < 7){
            for (let i=0; i<=5; i++){
                const reader = new FileReader();
                if(i < [...files].length){
                    reader.readAsDataURL([...files][i]);
                    reader.onload = (e) => {
                        let newImgs = [...this.state.imgs];
                        newImgs[i] = e.target.result;
                        this.setState({imgs: newImgs});
                    }
                }
                else{
                    let newImgs = [...this.state.imgs];
                    newImgs[i] = CameraImages;
                    this.setState({imgs: newImgs});
                }
                
            }
        }
    };
    SupportWrite = async () => {
        
        if(this.state.title == '' || this.state.product == '' || this.state.price == '' || this.state.goal == '' || this.state.resource == ''){
            alert('모든 칸을 기입하여 주십시오.');
            return;
        }
        
        //session, email, password, nickname, variables(3)...
        let images = [...this.state.imgs];
        for(let i=0; i<6; i++){
            if(images[i] == CameraImages){
                images[i] = 'null';
            }
            images[i] += '&%!';
        }
        let array = [cookie.load('sessionID'), null, null, null, [this.state.title+'&%!',this.state.product+'&%!',this.state.price+'&%!',this.state.goal], images, this.state.resource];
        let data = await common.Fetch('supportWrite', array);
        
        if(data.ok){
            alert(data.msg);
            window.location.replace('/profil/mySupport/mySupportList');
        }
        else{
            alert(data.msg);
        }
    };
    componentDidMount() {}

    render() {
        return (
            <div id="all">
                <section className="one-half center mb-3rem">후원 요청 글쓰기</section>
                <table className="table mb-3rem border-round">
                    <tbody>
                        <tr>
                            <td className="bold center table-primary" width="20%">
                                제목
                            </td>
                            <td width="80%">
                                <input
                                    type="text"
                                    className="form-control form-input"
                                    placeholder="100자 이내로 입력하여 주십시오."
                                    value={this.state.title}
                                    onChange={(event) => this.SaveTitle(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold center table-primary" width="20%">
                                제품명
                            </td>
                            <td width="80%">
                                <input
                                    type="text"
                                    className="form-control form-input"
                                    placeholder="50자 이내로 입력하여 주십시오."
                                    value={this.state.product}
                                    onChange={(event) => this.SaveProduct(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold center table-primary" width="20%">
                                가격
                            </td>
                            <td width="80%">
                                <input
                                    type="number"
                                    className="form-control form-input"
                                    placeholder="제품 하나당 후원받을 가격을 입력하여 주십시오."
                                    min='0'
                                    value={this.state.price}
                                    onChange={(event) => this.SavePrice(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold center table-primary" width="20%">
                                목표
                            </td>
                            <td width="80%">
                                <input
                                    type="number"
                                    className="form-control form-input"
                                    placeholder="몇 개의 제품에 대하여 후원받을지 입력하여 주십시오."
                                    min='0'
                                    value={this.state.goal}
                                    onChange={(event) => this.SaveGoal(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold center table-primary" width="20%">
                                상품 이미지
                            </td>
                            <td
                                width="80%"
                                onClick={() => document.querySelector('.realUpload').click()}
                            >
                                <input
                                    type="file"
                                    className="realUpload"
                                    display="hidden"
                                    accept="image/*"
                                    required
                                    multiple
                                    onChange={(event) => this.GetImagePreview(event)}
                                ></input>
                                <ul className="image-preview">
                                    <li className="flex-preview-items border-round">
                                        <div>대표 이미지</div>
                                        <img src={this.state.imgs[0]} alt="이미지"></img>
                                    </li>
                                    <li className="flex-preview-items border-round">
                                        <img src={this.state.imgs[1]} alt="이미지"></img>
                                    </li>
                                    <li className="flex-preview-items border-round">
                                        <img src={this.state.imgs[2]} alt="이미지"></img>
                                    </li>
                                    <li className="flex-preview-items border-round">
                                        <img src={this.state.imgs[3]} alt="이미지"></img>
                                    </li>
                                    <li className="flex-preview-items border-round">
                                        <img src={this.state.imgs[4]} alt="이미지"></img>
                                    </li>
                                    <li className="flex-preview-items border-round">
                                        <img src={this.state.imgs[5]} alt="이미지"></img>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <CKEditor
                    data={this.state.resource}
                    type="classic"
                    config={{
                        toolbar: [
                            {
                                name: 'document',
                                items: ['ExportPdf', 'Preview', 'Print', '-', 'Templates'],
                            },
                            {
                                name: 'clipboard',
                                items: [
                                    'Cut',
                                    'Copy',
                                    'Paste',
                                    'PasteText',
                                    'PasteFromWord',
                                    '-',
                                    'Undo',
                                    'Redo',
                                ],
                            },
                            {
                                name: 'editing',
                                items: ['Find', 'Replace', '-', 'SelectAll'],
                            },
                            '/',
                            {
                                name: 'basicstyles',
                                items: [
                                    'Bold',
                                    'Italic',
                                    'Underline',
                                    'Strike',
                                    'Subscript',
                                    'Superscript',
                                    '-',
                                    'CopyFormatting',
                                    'RemoveFormat',
                                ],
                            },
                            {
                                name: 'paragraph',
                                items: [
                                    'NumberedList',
                                    'BulletedList',
                                    '-',
                                    'Outdent',
                                    'Indent',
                                    '-',
                                    'Blockquote',
                                    '-',
                                    'JustifyLeft',
                                    'JustifyCenter',
                                    'JustifyRight',
                                    'JustifyBlock',
                                    '-',
                                ],
                            },
                            { name: 'links', items: ['Link', 'Unlink'] },
                            {
                                name: 'insert',
                                items: [
                                    'Image',
                                    'Table',
                                    'HorizontalRule',
                                    'Smiley',
                                    'SpecialChar',
                                    'PageBreak',
                                ],
                            },
                            '/',
                            { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                            { name: 'colors', items: ['TextColor', 'BGColor'] },
                            { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
                        ],
                    }}
                    onChange={(event) => this.SaveResource(event.editor.getData())}
                />
                <section className="center mt-3rem container">
                    <p className="half bold">
                        글쓰기 입력창의 오른쪽 제일 아래 직각삼각형을 드래그하면 창의 크기를 조절할
                        수 있습니다.
                    </p>
                    <p className="half bold">
                        글쓰기 입력창의 '도구' 오른쪽 제일 아래부분의 '최대화'버튼으로 전체화면
                        모드를 활성화 할 수 있습니다.
                    </p>
                </section>
                <section className="container center mt-3rem mb-3rem">
                    <NavLink to="/profil/mySupport/mySupportList" className="btn btn-dark">
                        뒤로가기
                    </NavLink>
                    <button
                        type="button"
                        className="btn btn-success"
                        onClick={() => this.SupportWrite()}
                    >
                        완료
                    </button>
                </section>
            </div>
        );
    }
}

export default Mysupportwrite;