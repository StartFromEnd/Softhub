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
    componentDidMount() {}

    render() {
        return (
            <div id="all">
                <section className="one-half center mb-3rem">후원 요청 글쓰기</section>
                <div className="mb-3rem">
                    <label for="TitleFormControlInput" className="form-label">
                        제목
                    </label>
                    <input
                        type="text"
                        className="form-control"
                        id="TitleFormControlInput"
                        placeholder="100자 이내로 입력하여 주십시오."
                        value={this.state.title}
                        onChange={(event) => this.SaveTitle(event.target.value)}
                    ></input>
                </div>
                <div className="mb-3rem">
                    <label for="PriceFormControlInput" className="form-label">
                        가격
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="PriceFormControlInput"
                        placeholder="제품 하나당 후원받을 가격을 입력하여 주십시오."
                        value={this.state.price}
                        onChange={(event) => this.SavePrice(event.target.value)}
                    ></input>
                </div>
                <div className="mb-3rem">
                    <label for="GoalFormControlInput" className="form-label">
                        목표
                    </label>
                    <input
                        type="number"
                        className="form-control"
                        id="GoalFormControlInput"
                        placeholder="몇 개의 제품에 대해서 후원받을지 입력하여 주십시오."
                        value={this.state.goal}
                        onChange={(event) => this.SaveGoal(event.target.value)}
                    ></input>
                </div>
                <CKEditor
                    data={this.state.resource}
                    type="classic"
                    config={{
                        toolbar: [
                            {
                                name: 'document',
                                items: [
                                    'Source',
                                    '-',
                                    'Save',
                                    'NewPage',
                                    'ExportPdf',
                                    'Preview',
                                    'Print',
                                    '-',
                                    'Templates',
                                ],
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
                                items: ['Find', 'Replace', '-', 'SelectAll', '-', 'Scayt'],
                            },
                            {
                                name: 'forms',
                                items: [
                                    'Form',
                                    'Checkbox',
                                    'Radio',
                                    'TextField',
                                    'Textarea',
                                    'Select',
                                    'Button',
                                    'ImageButton',
                                    'HiddenField',
                                ],
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
                                    'CreateDiv',
                                    '-',
                                    'JustifyLeft',
                                    'JustifyCenter',
                                    'JustifyRight',
                                    'JustifyBlock',
                                    '-',
                                    'BidiLtr',
                                    'BidiRtl',
                                    'Language',
                                ],
                            },
                            { name: 'links', items: ['Link', 'Unlink', 'Anchor'] },
                            {
                                name: 'insert',
                                items: [
                                    'Image',
                                    'Table',
                                    'HorizontalRule',
                                    'Smiley',
                                    'SpecialChar',
                                    'PageBreak',
                                    'Iframe',
                                ],
                            },
                            '/',
                            { name: 'styles', items: ['Styles', 'Format', 'Font', 'FontSize'] },
                            { name: 'colors', items: ['TextColor', 'BGColor'] },
                            { name: 'tools', items: ['Maximize', 'ShowBlocks'] },
                            { name: 'about', items: ['About'] },
                        ],
                    }}
                    onChange={(event, editor) => this.SaveResource(editor.getData())}
                />
            </div>
        );
    }
}

export default Mysupportwrite;