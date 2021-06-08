import React, {useEffect, useState} from 'react';
import jwt from "jsonwebtoken";
import {PageHeader} from "../../../../components/pagesHeader";
import {Layout} from "../../../../components/Layout";
import {signup} from "../../../../actions/auth";
import {useRouter, withRouter} from 'next/router'


const ActivateAccount = ({router}) => {
    const [values, setValues] = useState({
        name: "",
        token: "",
        error: "",
        loading: false,
        success: false,
        showButton: true
    })

    const {name, token, loading, success, showButton, error} = values


    useEffect(() => {
        let token = router.query.id
        if(token){
            const {name} = jwt.decode(token)
            setValues({...values, name: name, token: token})
        }
    },[])

    const clickSubmit = (e) => {
        e.preventDefault()
        setValues({...values, loading: true, error: ""})
        signup({token}).then(data => {
            if(data.error){
                setValues({...values, error: data.error, loading: false, showButton: false})
            }
            setValues({...values, loading: false, success: true, showButton: false})
        })
    }

    const showLoading = () => loading ? (<h2>Loading......</h2>) : ""
    return (
        <Layout>
            <div className="container">
                <h3 className="pb-4">Hey {name}, Ready to activate your account?</h3>
                {showLoading()}
                {error && error}
                {success && "You have successfully activated your account. Please sign in."}
                {showButton && <button onClick={clickSubmit} className="btn btn-outline-primary">Activate Account</button>}
            </div>
        </Layout>
    )


}

export default withRouter(ActivateAccount)
