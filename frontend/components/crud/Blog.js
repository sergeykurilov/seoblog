import React, {useState, useEffect} from "react";
import {create, deleteCategory, getAllCategories} from "../../actions/category";
import {isAuth, getCookie, signup} from "../../actions/auth";
import Router from "next/router";

const CreateBlog = () => {

    return <>
       <h2>Create Blog Form</h2>
    </>
}

export default CreateBlog