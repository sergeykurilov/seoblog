import React, {useEffect, useState} from 'react';
import jwt from "jsonwebtoken";
import {PageHeader} from "../../../../components/pagesHeader";
import {Layout} from "../../../../components/Layout";
import {signup} from "../../../../actions/auth";
import {useRouter, withRouter} from 'next/router'


const ActivateAccount = ({router}) => {
    const [values, setValues] = useState({
        name: '',
        password: '',
        email: '',
        token: '',
        error: '',
        loading: false,
        success: false,
        showButton: true
    });

    const {name, email, password, token, error, loading, success, showButton} = values;

    useEffect(() => {
        let token = router.query.id;
        if (token) {
            const {name, email, password} = jwt.decode(token);
            setValues({...values, name, token, email, password});
        }
    }, [router]);

    const clickSubmit = e => {
        e.preventDefault();
        setValues({...values, loading: true, error: ""});
        signup({name, email, password}).then(data => {
            if (data.error) {
                setValues({...values, error: data.error, loading: false, showButton: false});
            } else {
                setValues({...values, loading: false, success: true, showButton: false});
            }
        });
    };

    const showLoading = () => (loading ? <h2>Loading...</h2> : '');

    return (
        <Layout>
            <div className="container">
                <h3 className="pb-4">Hey {name}, Ready to activate your account?</h3>
                {showLoading()}
                {error && error}
                {success && 'You have successfully activated your account. Please signin.'}
                {showButton && (
                    <button className="btn btn-outline-primary" onClick={clickSubmit}>
                        Activate Account
                    </button>
                )}
            </div>
        </Layout>
    );
};


export default withRouter(ActivateAccount)
