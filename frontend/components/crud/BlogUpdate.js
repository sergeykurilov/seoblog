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
    const [values, setValues] = useState({
        error: '',
        success: '',
        formData: '',
        title: '',
    });

    const {error,  title, formData, success} = values


    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        formData.set(name, value);
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleBody = (e) => {
        setValues({...values, body: e})
        formData.set('body',e)
    }

    const editBlog = () => {
        console.log("update blog")
    }

    const updateBlogForm = () => {
        return (
            <form onSubmit={editBlog}>
                <div className="form-group">
                    <label className="text-muted">Title</label>
                    <input type="text" className="form-control" value={title} onChange={handleChange('title')} />
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

   const initBlog = () => {
        if(router.query.slug){
            singleBlog(router.query.slug).then((data) => {
                if(data.error){
                    console.error(data.error)
                }else{
                    console.log("title -",data.title)
                    setBody(data.body)
                    setValues({...values, title: data.title})
                }
            })
        }
   }
    useEffect(() => {
        initBlog()
        setValues({...values, formData: new FormData()})
    },[])

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
                            <hr />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default withRouter(BlogUpdate);
