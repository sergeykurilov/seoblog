import React, {useState, useEffect} from "react";
import {create, deleteSingleTag, getAllTags} from "../../actions/tags";
import {isAuth, getCookie, signup} from "../../actions/auth";
import Router from "next/router";
import {deleteCategory} from "../../actions/category";

const Tag = () => {
    const [value, setValue] = useState({
        "name": "",
        "error": false,
        "tag": [],
        "success": false,
        "removed": false,
        "reload": false
    })

    const {name, success, error , removed, tag, reload} = value

    const token = getCookie("token")


    const handleChange = (e) => {
        setValue({...value, name: e.target.value, success: false, removed: false, error: false})
    }

    const AllTags = () => {
        getAllTags().then(data => {
            if (data.error) {
                setValue({...value, error: data.error})
            } else {
                setValue({...value, tag: data})
            }
        })
    }

    useEffect(() => {
        AllTags()
    }, [reload])


    const DeleteTag = (slug) => {
        console.log("delete", slug)
        deleteSingleTag(slug, token).then(data => {
            console.log(data)
            if (data.error) {
                setValue({...value, error: data.error})
            } else {
                setValue({...value, error: false, success: false, reload: !reload, removed: true})
            }
        })
    }
    const DeleteConfirm = (slug) => {
        let answer = window.confirm("Are you sure that you want to delete this category?")
        if (answer) {
            DeleteTag(slug)
        }
    }

    function TagBlock() {
        return tag.map((c, i) => {
            return <button onDoubleClick={() => DeleteConfirm(c.slug)} title={"Double click to delete"} key={i}
                           className="btn btn-outline-primary mr-1 ml-1 mt-3">{c.name}</button>
        })
    }


    const onSubmit = (e) => {
        console.log("create tag = ", name)
        e.preventDefault()
        create({name}, token)
            .then(res => {
                if (res.error) {
                    setValue({...value, error: res.error, success: false})
                } else {
                    setValue({...value, error: false, success: true, reload: !reload, removed: false, name: ""})
                }
            })

    }

    const TagForm = () => (
        <form onSubmit={onSubmit}>
            <label className="text-muted">Create Tag</label>
            <input type="text" onChange={handleChange} className="form-control" value={name}/>
            <div className={"pt-2"}>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

    const showSuccess = () => {
        if (success) {
            return <p className="text-success">Category successfully created.</p>
        }
    }
    const showError = () => {
        if (error) {
            return <p className="text-danger">Category already exist!</p>
        }
    }
    const showRemoved = () => {
        if (removed) {
            return <p className="text-danger">Category successfully removed.</p>
        }
    }



    const mouseHandler = () => {
        setValue({...value, error: false, success: false, removed: false})
    }

    return <>
        <div onMouseMove={mouseHandler}>
            {showRemoved()}
            {showError()}
            {showSuccess()}
        </div>
        {TagForm()}
        {TagBlock()}
    </>
}

export default Tag