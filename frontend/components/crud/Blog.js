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

const CreateBlog = () => {
    const [body, setBody] = useState({})
    const [values, setValues] = useState({
        "error": "",
        "sizeError": "",
        "success": "",
        "formData": "",
        "title": "",
        "hidePublishButton": false
    })


    const {error, title, success, formData, hidePublishButton, sizeError} = values

    const publishBlog = (e) => {
        e.preventDefault()
        console.log("Ready to publish blog")
    }

    const handleBody = e => {
        console.log(e)
    }

    const handleChange = name => e => {
        console.log(e.target.value)
    }

    const createBlogForm = () => {
        return(
            <form onSubmit={publishBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" onChange={handleChange("title")} className="form-control" value={title}/>
                </div>
                <div className="form-group">
                    <ReactQuill value={body} placeholder={"write something"} onChange={handleBody} />
                </div>
                <div className={"pt-2"}>
                    <button className="btn btn-primary">Submit</button>
                </div>
            </form>
        )
    }


    return <>
        {createBlogForm()}
    </>
}

export default CreateBlog