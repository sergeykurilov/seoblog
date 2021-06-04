import React, {useState} from 'react';
import {emailContactForm} from "../../../actions/form";
import {forgotPassword} from "../../../actions/auth";
import Link from "next/link";
import {PageHeader} from "../../../components/pagesHeader";
import {Layout} from "../../../components/Layout";

const ForgotPassword = () => {

    const [values, setValues] = useState({
        email: "",
        message: "",
        error: "",
        showMessage: true
    })

    const {email, message, error, showMessage} = values
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value, error: "", message: ""});
    const showError = () => <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>{error}</div>
    const showSuccess = () => message && <div className="alert alert-info">{message}</div>
    const clickSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, error: "", message: ""})
        forgotPassword(email).then(data => {
            if (data.error){
                setValues({ ...values, error: data.error})
            }else{
                setValues({ ...values, message: data.message, email: "", showMessage: false})
            }
        })
    }

    const contactForm = () => (
        <form onSubmit={clickSubmit} className="pb-5">
            <div className="form-group">
                <label className="lead">Email</label>
                <input className="form-control" value={email} required type="email" onChange={handleChange('email')} />
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
