import React, {useState, useEffect} from "react";
import Link from "next/link";
import router from "next/router";
import {isAuth, getCookie} from "../../actions/auth";
import {list, removeBlog} from "../../actions/blog";
import moment from "moment";


const BlogRead = ({username}) => {

    const [blogs, setBlogs] = useState([])
    const [message, setMessage] = useState('')
    const token = getCookie("token")

    const loadBlogs = () => {
        list(username).then((data) => {
            if (data.error || undefined) {
                console.log(data.error)
            }else{
                setBlogs(data)
            }
        })
    }

    useEffect(() => {
        loadBlogs()
    }, [])




    const deleteBlog = (slug) => {
        removeBlog(slug, token).then(data => {
            if(data.error){
                console.log(data.error)
            }else{
                setMessage(data.message)
                loadBlogs()
            }
        })
    }

    const deleteConfirm = (slug) => {
         let answer = window.confirm("Are you sure you want to delete blog?")
        if(answer){
            deleteBlog(slug)
        }
    }

    const showUpdateButton = (blog) => {
        if(isAuth() && isAuth.role === 0){
            return(
                <Link href={`/user/crud/${blog.slug}`}>
                    <a className="btn btn-sm btn-warning">Update</a>
                </Link>
            )
        }else{
            return(
                <Link href={`/admin/crud/${blog.slug}`}>
                    <a className="ml-2 btn btn-sm btn-warning">Update</a>
                </Link>
            )
        }
    }

    const showAllBlogs = () => {
        return blogs.map((blog, i) => {
            return (
                <div key={i} className="pb-5">
                    <h3>{blog.title}</h3>
                    <p className="mark">Written by {blog.postedBy.name} | Published
                        on {moment(blog.updatedAt).fromNow()}</p>
                    <button className="btn btn-sm btn-danger" onClick={() => deleteConfirm(blog.slug)}>Delete</button>
                    {showUpdateButton(blog)}
                </div>
            )
        })
    }

    return (
        <>
            <div className="container">
                <div className="row">
                    <p>Update/Delete Blogs</p>
                    <div className="col-md-12">
                        {message && <div className="alert alert-warning">{message}</div>}
                        {showAllBlogs()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default BlogRead;
