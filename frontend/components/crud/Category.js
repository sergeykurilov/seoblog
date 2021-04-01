import React, {useState, useEffect} from "react";
import {create} from "../../actions/category";
import {isAuth, getCookie, signup} from "../../actions/auth";
import Router from "next/router";

const Category = () => {
    const [value, setValue] = useState({
        "name": "",
        "error": false,
        "categories": [],
        "success": false,
        "removed": false
    })

    const {name, success, error , removed, categories} = value

    const token = getCookie("token")


    const handleChange = (e) => {
        setValue({...value, name: e.target.value, success: false, removed: "", error: false})
    }

    const onSubmit = (e) => {
        console.log("create category = ", name)
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

    const CategoryForm = () => (
        <form onSubmit={onSubmit}>
            <label className="text-muted">Create Category</label>
            <input type="text" onChange={handleChange} className="form-control" value={name}/>
            <div className={"pt-2"}>
                <button className="btn btn-primary">Submit</button>
            </div>
        </form>
    )


    return <>
        {CategoryForm()}
    </>
}

export default Category