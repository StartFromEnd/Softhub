import React, { Component } from 'react';
import { BrowserRouter, Routes, Route, NavLink, Outlet } from 'react-router-dom';
import cookie from 'react-cookies';
import '../../App.css';
import * as common from '../../CommonFunctions.js';
import CKEditor from 'ckeditor4-react-advanced';

class Mysupportwrite extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            price: '',
            goal: '',
            resource: '',
        };
    }

    SaveTitle(param) {
        this.setState({ title: param });
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
    SupportWrite = async () => {};
    GetImagePreview = () => {
        
    };
    componentDidMount() {}

    render() {
        return (
            <div id="all">
                <section className="one-half center mb-3rem">후원 요청 글쓰기</section>
                <table className="table mb-3rem border-round">
                    <tbody>
                        <tr>
                            <td className="bold center table-primary" width='20%'>제목</td>
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
                            <td className="bold center table-primary" width='20%'>가격</td>
                            <td width="80%">
                                <input
                                    type="number"
                                    className="form-control form-input"
                                    placeholder="제품 하나당 후원받을 가격을 입력하여 주십시오."
                                    value={this.state.price}
                                    onChange={(event) => this.SavePrice(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className="bold center table-primary" width='20%'>목표</td>
                            <td width="80%">
                                <input
                                    type="number"
                                    className="form-control form-input"
                                    placeholder="제품 하나당 후원받을 가격을 입력하여 주십시오."
                                    value={this.state.goal}
                                    onChange={(event) => this.SaveGoal(event.target.value)}
                                ></input>
                            </td>
                        </tr>
                        <tr>
                            <td className='bold center table-primary' width='20%'>상품 이미지</td>
                            <td width='80%' onClick={() => document.querySelector('.realUpload').click()}>
                                <input type='file' className='realUpload' display='hidden' accept='image/*' required multiple onChange={(event) => this.GetImagePreview(event)}></input>
                                <ul className='image-preview'>
                                    <li className='flex-preview-items border-round'>
                                        <div>대표 이미지</div>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                    <li className='flex-preview-items border-round'>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                    <li className='flex-preview-items border-round'>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                    <li className='flex-preview-items border-round'>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                    <li className='flex-preview-items border-round'>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                    <li className='flex-preview-items border-round'>
                                        <img src='../../Images/camera.png' alt='이미지'></img>
                                    </li>
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <CKEditor
                    data={this.state.resource}
                    type="classic"
                    config={
                        ({
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
                        })
                    }
                    onChange={(event) => this.SaveResource(event.editor.getData())}
                />
                <section className='center mt-3rem container'>
                    <p className='half bold'>글쓰기 입력창의 오른쪽 제일 아래 직각삼각형을 드래그하면 창의 크기를 조절할 수 있습니다.</p>
                    <p className='half bold'>글쓰기 입력창의 '도구' 오른쪽 제일 아래부분의 '최대화'버튼으로 전체화면 모드를 활성화 할 수 있습니다.</p>
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