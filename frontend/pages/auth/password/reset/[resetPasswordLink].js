import React, {useState} from 'react';
import {PageHeader} from "../../../../components/pagesHeader";
import {Layout} from "../../../../components/Layout";
import {resetPassword} from "../../../../actions/auth";
import { useRouter } from 'next/router'

const ForgotPassword = () => {

    const [values, setValues] = useState({
        name: "",
        newPassword: "",
        message: "",
        error: "",
        showMessage: true
    })

    const router = useRouter()

    const {name,newPassword, message, error, showMessage} = values
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value, error: "", message: ""});
    const showError = () => <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    const showSuccess = () => message && <div className="alert alert-info">{message}</div>
    const clickSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: "", message: ""})
        resetPassword({newPassword,resetPasswordLink: router.query.resetPasswordLink}).then(data => {
            if (data.error){
                setValues({ ...values, error: data.error, newPassword: ""})
            }else{
                setValues({ ...values, message: data.message, password: "", showMessage: false})
            }
        })
    }

    const contactForm = () => (
        <form onSubmit={clickSubmit} className="pb-5">
            <div className="form-group">
                <label className="lead">New Password</label>
                <input className="form-control" value={newPassword} required type="password" onChange={(e) => setValues({...values, newPassword: e.currentTarget.value})} />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Send</button>
            </div>
        </form>
    )


    return (
        <div>
            <PageHeader/>
            <Layout>
                <div className="container">
                    {showError()}
                    {showSuccess()}
                    {showMessage && contactForm()}
                </div>
            </Layout>
        </div>
    );
};

export default ForgotPassword;
