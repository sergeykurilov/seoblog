import React, {useState, useEffect} from "react";
import Link from "next/link";
import {singleBlog, updateBlog} from "../../actions/blog";
import {isAuth, getCookie} from "../../actions/auth";
import router from "next/router";
import dynamic from 'next/dynamic'
import withRouter from "next/dist/client/with-router";
import {getAllTags} from "../../actions/tags"
import {getAllCategories} from "../../actions/category"
import {QuillModules, QuillFormats} from "../../helpers/quill"

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})
const token = getCookie("token")

const BlogUpdate = ({router}) => {
    const [body, setBody] = useState("")
    const [categories, setCategories] = useState([]);
    const [tags, setTags] = useState([]);

    const [checked, setChecked] = useState([]); // categories
    const [checkedTag, setCheckedTag] = useState([]); // tags

    const [values, setValues] = useState({
        error: '',
        success: '',
        formData: '',
        title: '',
    });

    const {error, title, formData, success} = values


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


    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = e => {
        setBody(e);
        formData.set('body', e);
    };

    const editBlog = () => {
        console.log("update blog")
    }

    const updateBlogForm = () => {
        return (
            <form onSubmit={editBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')}/>
                </div>

                <div className="form-group">
                    <ReactQuill
                        modules={QuillModules}
                        formats={QuillFormats}
                        value={body}
                        placeholder="Write something amazing..."
                        onChange={handleBody}
                    />
                </div>

                <div>
                    <button type="submit" className="btn btn-primary">
                        Update
                    </button>
                </div>
            </form>
        );
    };
    const setSelectedCategories = (blogCategories) => {
        let categories = []
        blogCategories.map((c, i) => {
            categories.push(c._id)
        })
        setChecked(categories)
    }

    const setSelectedTags = (blogTags) => {
        let tags = []
        blogTags.map((t, i) => {
            tags.push(t._id)
        })
        setCheckedTag(tags)
    }

    const initBlog = () => {
        if (router.query.slug) {
            singleBlog(router.query.slug).then((data) => {
                if (data.error) {
                    console.error(data.error)
                } else {
                    setValues({...values, title: data.title})
                    setBody(data.body)
                    setSelectedCategories(data.categories)
                    setSelectedTags(data.tags)
                }
            })
        }
    }

    useEffect(() => {
        initBlog()
        initCategories()
        initTags()
        setValues({...values, formData: new FormData()})
    }, [])

    const handleToggle = c => () => {
        setValues({ ...values, error: '' });
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


    const findCategory = (c) => {
        const result = checked.indexOf(c);
        if (result !== -1) {
            return true;
        } else {
            return false;
        }
    }


    const showCategories = () => {
        return (
            categories &&
            categories.map((c, i) => (
                <li key={i} className="list-unstyled">
                    <input
                        onChange={handleToggle(c._id)}
                        checked={findCategory(c._id)}
                        type="checkbox"
                        className="mr-2"
                    />
                    <label className="form-check-label">{c.name}</label>
                </li>
            ))
        );
    };

    const handleTagsToggle = t => () => {
        setValues({...values, error: ''});
        // return the first index or -1
        const clickedTag = checkedTag.indexOf(t);
        const all = [...checkedTag];

        if (clickedTag === -1) {
            all.push(t);
        } else {
            all.splice(clickedTag, 1);
        }
        setCheckedTag(all);
        formData.set('tags', all);
    };


    const findTags = (t) => {
        const result = checkedTag.indexOf(t)
        // return result !== -1;
        if (result !== -1) {
            return true
        } else {
            return false
        }
    }

    const showTags = () => {
        return (
            tags &&
            tags.map((t, i) => (
                <li key={i} className="list-unstyled">
                    <input
                        onChange={handleTagsToggle(t._id)}
                        checked={findTags(t._id)}
                        type="checkbox"
                        className="mr-2"
                    />
                    <label className="form-check-label">{t.name}</label>
                </li>
            ))
        );
    };


    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    <p>create blog form</p>
                    {updateBlogForm()}
                    <div className="pt-3">
                        <p>show success or error message</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured image</h5>
                            <hr/>

                            <small className="text-muted">Max size: 1mb</small>
                            <br/>
                            <label className="btn btn-outline-info">
                                Upload featured image
                                <input onChange={handleChange('photo')} type="file" accept="image/*" hidden/>
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
};

export default withRouter(BlogUpdate);
