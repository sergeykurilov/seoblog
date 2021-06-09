import React from 'react';
import GoogleLogin from 'react-google-login';
import {authenticate, isAuth, loginWithGoogle} from "../actions/auth";
import Router from "next/router";
import {GOOGLE_CLIENT_ID} from "../config";


const GoogleLoginComponent = () => {

    const responseGoogle = (response) => {
        console.log(response)
        const tokenId = response.tokenId
        const user = {tokenId}

        loginWithGoogle(user).then(data => {
            try {
                authenticate(data, () => {
                    if (isAuth() && isAuth().role === 1) {
                        Router.push(`/admin`)
                    } else {
                        Router.push(`/user`)
                    }
                })
            } catch (error) {
                console.log(error)
            }
        })
    }

    return (
        <div className="pb-3">
            <GoogleLogin
                clientId={`${GOOGLE_CLIENT_ID}`}
                buttonText="Login with Google"
                onSuccess={responseGoogle}
                onFailure={responseGoogle}
                theme="dark"
            />
        </div>
    );
};

export default GoogleLoginComponent;
