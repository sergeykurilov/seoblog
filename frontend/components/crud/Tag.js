import React, {useState, useEffect} from "react";
import {create} from "../../actions/tags";
import {isAuth, getCookie, signup} from "../../actions/auth";
import Router from "next/router";

const Tag = () => {
    const [value, setValue] = useState({
        "name": "",
        "error": false,
        "tag": [],
        "success": false,
        "removed": false
    })

    const {name, success, error , removed, tags} = value

    const token = getCookie("token")


    const handleChange = (e) => {
        setValue({...value, name: e.target.value, success: false, removed: "", error: false})
    }

    const onSubmit = (e) => {
        console.log("create tag = ", name)
        e.preventDefault()
        create({name}, token)
            .then(res => {
                if (res.error) {
                    setValue({...value, error: res.error, success: false})
                } else {
                    setValue({...value, name: '', error: false, success: true})
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


    return <>
        {error && <div className="alert alert-danger">{error}</div>}
        {TagForm()}
    </>
}

export default Tag