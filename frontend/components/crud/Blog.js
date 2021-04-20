import React, {useState, useEffect} from "react";
import Link from "next/link";
import {createBlog} from "../../actions/blog";
import {isAuth, getCookie} from "../../actions/auth";
import Router from "next/router";
import dynamic from 'next/dynamic'
import withRouter from "next/dist/client/with-router";
import {getAllTags} from "../../actions/tags"
import {getAllCategories} from "../../actions/category"

const ReactQuill = dynamic(() => import("react-quill"), {ssr: false})
const token = getCookie("token")

const CreateBlog = () => {
    const blogFromLocalStorage = () => {
        if (typeof window === "undefined") {
            return false
        }
        if (localStorage.getItem("blog")) {
            return JSON.parse(localStorage.getItem("blog"))
        } else {
            return false
        }
    }

        const [values, setValues] = useState({
            "error": "",
            "sizeError": "",
            "success": "",
            "formData": "",
            "title": "",
            "hidePublishButton": false
        })
        const [body, setBody] = useState(blogFromLocalStorage())
        const [categories, setCategories] = useState([])
        const [tags, setTags] = useState([])
        const [checkedCategories, setCheckedCategories] = useState([])
        const [checkedTag, setCheckedTag] = useState([])
        const {error, title, success, formData, hidePublishButton, sizeError} = values


        const publishBlog = (e) => {
            e.preventDefault()
            // console.log("Ready to publish blog")
            createBlog(formData, token).then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                } else {
                    setValues({...values, error: "", title: "", success: `A new blog titled: ${data.title} is created`})
                    setBody("")
                    setCategories([])
                    setTags([])
                }
            })
        }

        const handleBody = e => {
            // console.log(e)
            setBody(e)
            formData.set("body", e)
            if (typeof window !== "undefined") {
                localStorage.setItem("blog", JSON.stringify(e))
            }
        }

        const initCategories = () => {
            getAllCategories().then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                }
                setCategories(data)
            })
        }

        const initTags = () => {
            getAllTags().then(data => {
                if (data.error) {
                    setValues({...values, error: data.error})
                }
                setTags(data)
            })
        }

        useEffect(() => {
            setValues({...values, formData: new FormData()})
            initCategories()
            initTags()
        }, [Router])

        const handleChange = name => e => {
            // console.log(e.target.value)
            const value = name === "photo" ? e.target.files[0] : e.target.value
            formData.set(name, value)
            setValues({...values, [name]: value, formData, error: ""})
        }

        const createBlogForm = () => {
            return (
                //asdasd
                <form onSubmit={publishBlog}>
                    <div className="form-group">
                        <label className="text-muted">Title</label>
                        <input type="text" onChange={handleChange("title")} className="form-control" value={title}/>
                    </div>
                    <div className="form-group">
                        <ReactQuill modules={CreateBlog.modules} formats={CreateBlog} value={body}
                                    placeholder={"write something"} onChange={handleBody}/>
                    </div>
                    <div className={"pt-2"}>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            )
        }
///askjdnaj

        const handleToggleCategories = (c) => () => {
            setValues({...values, error: ""})
            //return the first index or -1
            const clickedCategory = checkedCategories.indexOf(c)
            const all = [...checkedCategories]
            if (clickedCategory === -1) {
                return all.push(c)
            } else {
                return all.splice(clickedCategory, 1)
            }
            console.log(all)
            setCheckedCategories(all)
            formData.set("categories", all)
        }

        const handleToggleTags = (t) => () => {
            setValues({...values, error: ""})
            //return the first index or -1
            const clickedTag = checkedTag.indexOf(t)
            const all = [...checkedTag]
            if (clickedTag === -1) {
                return all.push(t)
            } else {
                return all.splice(clickedTag, 1)
            }
            console.log(all)
            setCheckedTag(all)
            formData.set("tags", all)
        }


        const showCategories = () => {
            return categories && categories.map(c => {
                return <li className="unstyled">
                    <input onChange={handleToggleCategories(c._id)} type="checkbox" nam className="mr-2"/>
                    <label className="form-check-label">{c.name}</label>
                </li>
            })
        }
        const showTags = () => {
            return tags && tags.map((t, i) => {
                return <li key={i} className="unstyled">
                    <input type="checkbox" onChange={handleToggleTags(t._id)} nam className="mr-2"/>
                    <label className="form-check-label">{t.name}</label>
                </li>
            })
        }

        return <>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-8">
                        {createBlogForm()}
                        <hr/>
                        {JSON.stringify(title)}
                        <hr/>
                        {JSON.stringify(body)}
                        <hr/>
                        {JSON.stringify(categories)}
                        <hr/>
                        {JSON.stringify(tags)}
                    </div>
                    <div className="col-md-4">
                        <div>
                            <div className="form-group pb-2">
                                <h5>Featured Image</h5>

                                <small className="text-muted">Max size: 1mb</small>
                                <hr/>
                                <label className="btn btn-outline-info">Upload featured image
                                    <input onChange={handleChange("photo")} type="file" accept="image/*" hidden/>
                                </label>
                                <hr/>
                            </div>
                        </div>
                        <div>
                            <h5>Categories</h5>
                            <hr/>
                            <ul style={{maxHeight: "200px", overflowY: "scroll"}}>
                                {showCategories()}
                            </ul>
                        </div>
                        <div>
                            <h5>Tags</h5>
                            <hr/>
                            <ul style={{maxHeight: "200px", overflowY: "scroll"}}>
                                {showTags()}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    }


    CreateBlog.modules = {
        toolbar: [
            [{header: '1'}, {header: '2'}, {header: [3, 4, 5, 6]}, {font: []}],
            [{size: []}],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{list: 'ordered'}, {list: 'bullet'}],
            ['link', 'image', 'video'],
            ['clean'],
            ['code-block']
        ]
    };

    CreateBlog.formats = [
        'header',
        'font',
        'size',
        'bold',
        'italic',
        'underline',
        'strike',
        'blockquote',
        'list',
        'bullet',
        'link',
        'image',
        'video',
        'code-block'
    ];

    export default CreateBlog