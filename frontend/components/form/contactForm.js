import React, {useState} from 'react';
import {emailContactForm} from "../../actions/form";

const ContactForm = ({authorEmail}) => {

    const [values, setValues] = useState({
        message: '',
        name: '',
        email: '',
        sent: false,
        buttonText: 'Send Message',
        success: false,
        error: false
    })

    const {message, name, email, success, error,buttonText} = values


    const clickSubmit = (e) => {
        e.preventDefault()
        setValues({ ...values, buttonText: "Sending..."})
        emailContactForm({authorEmail, name, email, message}).then(data => {
            if (data.error){
                setValues({ ...values, error: data.error})
            }else{
                setValues({ ...values, sent: true, name: "", senderEmail: "", message: "", buttonText: "Sent", success: data.success })
            }
        })
    }

    const showError = () => <div className="alert alert-danger" style={{ display: error ? '' : 'none' }}>{error}</div>
    const showSuccess = () => success && <div className="alert alert-info" style={{ display: success ? '' : 'none' }}>Thank you for contacting us!</div>
    const handleChange = name => e => setValues({ ...values, [name]: e.target.value, error: false, success: false, buttonText: "Send Message" });


    const contactForm = () => (
        <form onSubmit={clickSubmit} className="pb-5">
            <div className="form-group">
                <label className="lead">Message</label>
                <textarea className="form-control" value={message} required type="text" rows="10" onChange={handleChange('message')} />
            </div>
            <div className="form-group">
                <label className="lead">Name</label>
                <input className="form-control" value={name} required type="text" onChange={handleChange('name')} />
            </div>
            <div className="form-group">
                <label className="lead">Email</label>
                <input className="form-control" value={email} required type="email" onChange={handleChange('email')} />
            </div>
            <div>
                <button className="btn btn-primary">{buttonText}</button>
            </div>
        </form>
    )


    return (
        <>
            {showError()}
            {showSuccess()}
            {contactForm() }
        </>
    );
};

export default ContactForm;
