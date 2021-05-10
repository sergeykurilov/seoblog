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
    const [blog,setBlog] = useState({})

    useEffect(() => {
        initBlog()
    },[])

   const initBlog = () => {
        if(router.query.slug){
            singleBlog(router.query.slug).then((data) => {
                if(data.error){
                    console.error(data.error)
                }else{
                    setBlog(data)
                }
            })
        }
   }


    return (
        <div className="container-fluid pb-5">
            <div className="row">
                <div className="col-md-8">
                    <p>create blog form</p>
                    {JSON.stringify(blog)}
                    <div className="pt-3">
                        <p>show success or error message</p>
                    </div>
                </div>

                <div className="col-md-4">
                    <div>
                        <div className="form-group pb-2">
                            <h5>Featured image</h5>
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(BlogUpdate);