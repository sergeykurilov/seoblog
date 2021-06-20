import React, {useState, useEffect, useRef} from "react";
import Link from "next/link";
import {createBlog} from "../../actions/blog";
import {isAuth, getCookie} from "../../actions/auth";
import router from "next/router";
import dynamic from 'next/dynamic'
import withRouter from "next/dist/client/with-router";
import {getAllTags} from "../../actions/tags"
import {getAllCategories} from "../../actions/category"
import {QuillModules, QuillFormats} from "../../helpers/quill"
import deltaToHtml from 'delta-to-html-improved'
const token = getCookie("token")
const Quill = typeof window === 'object' ? require('quill') : () => false;
import 'quill/dist/quill.bubble.css';
import Sharedb from 'sharedb-client';
import richText from 'rich-text';
import StringBinding from "sharedb-string-binding";

const CreateBlog = () => {

    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags


    const [values, setValues] = useState({
        error: '',
        sizeError: '',
        success: '',
        formData: '',
        title: '',
        hidePublishButton: false
    });

    const {error, sizeError, success, formData, title, hidePublishButton} = values;
    const token = getCookie('token');


    const blogFromLS = () => {
        if (typeof window === 'undefined') {
            return false;
        }

        if (localStorage.getItem('blog')) {
            return JSON.parse(localStorage.getItem('blog'));
        } else {
            return false;
        }
    };

    const [body, setBody] = useState();
    const textInput = useRef("");

    useEffect(() => {
        Sharedb.types.register(richText.type);
        const socket = new WebSocket('ws://127.0.0.1:8090');
        const connection = new Sharedb.Connection(socket);
        const doc = connection.get('documents', 'firstDocument');
        const example = connection.get('example', 'title');

        example.subscribe(function (err) {
            if (err) throw err;
            var content = ['content']
            var binding = new StringBinding(textInput.current, example, content);
            binding.setup();
        });
        doc.subscribe(function (err) {
            if (err) throw err;
            const options = {
                theme: 'snow',
                modules: {
                    toolbar: [
                        ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
                        ['blockquote', 'code-block'],

                        [{'header': 1}, {'header': 2}],               // custom button values
                        [{'list': 'ordered'}, {'list': 'bullet'}],
                        [{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
                        [{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
                        [{'direction': 'rtl'}],                         // text direction

                        [{'size': ['small', false, 'large', 'huge']}],  // custom dropdown
                        [{'header': [1, 2, 3, 4, 5, 6, false]}],

                        [{'color': []}, {'background': []}],          // dropdown with defaults from theme
                        [{'font': []}],
                        [{'align': []}],

                        ['clean'],                                        // remove formatting button
                        ['link', 'image']
                    ]
                },
                toolbar: {
                    container: '#toolbar',  // Selector for toolbar container
                    handlers: QuillFormats
                }
            };
            let quill = new Quill('#editor', options);
            quill.setContents(doc.data);
            let quillContent = quill.getContents();
            let html = deltaToHtml(quillContent)
            setBody(html)
            quill.on('text-change', function (delta, oldDelta, source) {
                if (source !== 'user') return;
                doc.submitOp(delta, {source: quill});
            });
            doc.on('op', function (op, source) {
                if (source === quill) return;
                quill.updateContents(op);
            });
        });
        return () => {
            connection.close();
        };
    }, []);


    useEffect(() => {
        setValues({...values, formData: new FormData()});
        initCategories();
        initTags();
    }, [router]);

    const initCategories = () => {
        getAllCategories().then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setCategories(data);
            }
        });
    };

    const initTags = () => {
        getAllTags().then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setTags(data);
            }
        });
    };

    const publishBlog = e => {
        e.preventDefault();
        formData.set('body', body)
        // console.log('ready to publishBlog');
        createBlog(formData, token).then(data => {
            if (data.error) {
                setValues({...values, error: data.error});
            } else {
                setValues({...values, title: '', error: '', success: `A new blog titled "${data.title}" is created`});
                setBody('');
                setCategories([]);
                setTags([]);
            }
        });
    };

    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({...values, [name]: value, formData, error: ''});
    };


    const handleToggle = c => () => {
        setValues({...values, error: ''});
        // return the first index or -1
        const clickedCategory = checked.indexOf(c);
        const all = [...checked];

        if (clickedCategory === -1) {
            all.push(c);
        } else {
            all.splice(clickedCategory, 1);
        }
        setChecked(all);
        formData.set('categories', all);
    };

    const handleTagsToggle = t => () => {
        setValues({...values, error: ''});
        // return the first index or -1
        const clickedTag = checked.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        console.log(all);
        setCheckedTag(all);
        formData.set('tags', all);
    };

    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleToggle(c._id)} type="checkbox" className="form-checkbox h-4 w-4 mr-2"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input onChange={handleTagsToggle(t._id)} type="checkbox" className="form-checkbox h-4 w-4 mr-2"/>
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        );
    };

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{display: success ? '' : 'none'}}>
            {success}
        </div>
    );

    const createBlogForm = () => {
        return (
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <input
                        type="text"
                        name="title"
                        id="title"
                        value={title}
                        ref={textInput}
                        onChange={handleChange('title')}
                        className="shadow-sm px-4 py-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                        placeholder="Title"
                        aria-describedby="email-optional"
                    />
                </div>

                <div className="form-group">

                    <div>
                        <div id='toolbar'></div>
                        <div id='editor'></div>
                    </div>
                </div>

                <div>
                    <button
                        type="submit"
                        className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                    >
                        Publish
                    </button>
                </div>
            </form>
        );
    };

    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    {createBlogForm()}
                    <div className="pt-3">
                        {showError()}
                        {showSuccess()}
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5 className="font-sans md:font-serif pb-1">Featured image</h5>
                            <hr/>

                            <small className="text-muted font-sans md:font-serif pb-1">Max size: 1mb</small>
                            <br/>
                            <label
                                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            >
                                Upload featured image
                                <input
                                    onChange={handleChange('photo')} type="file" accept="image/*" hidden/>
                            </label>
                        </div>
                    </div>
                    <div>
                        <h5>Categories</h5>
                        <hr/>

                        <ul style={{maxHeight: '200px', overflowY: 'scroll'}}>{showCategories()}</ul>
                    </div>
                    <div>
                        <h5>Tags</h5>
                        <hr/>
                        <ul style={{maxHeight: '200px', overflowY: 'scroll'}}>{showTags()}</ul>
                    </div>
                </div>
            </div>
        </div>
    );
}


export default CreateBlog
