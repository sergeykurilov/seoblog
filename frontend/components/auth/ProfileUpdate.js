import React, {useState, useEffect} from 'react';
import {getProfile, updateProfile, update} from "../../actions/user";
import {getCookie, isAuth} from "../../actions/auth";
import {API} from "../../config";

const ProfileUpdate = () => {

    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        error: '',
        success: false,
        loading: false,
        photo: '',
        userData: '',
        about: '',
    })
    const token = getCookie("token")

    let {username, name, email, password, success, error, loading, photo, userData, about} = values

    const url = `${API}/user/photo/${username}`
    const [{
        srcBlob,
        srcDataUri
    }, setSrc] = useState({
        srcBlob: null,
        srcDataUri: null
    });

    useEffect(() => {
        let isUnmounted = false;

        fetch(url, {
        })
            .then(response => response.blob())
            .then(blob => blob.arrayBuffer())
            .then(arrayBuffer => {

                if(isUnmounted) {
                    return;
                }

                const blob = new Blob([arrayBuffer], {type: "image/jpg"})
                const srcBlob = URL.createObjectURL(blob);

                setSrc(state => ({
                    ...state,
                    srcBlob
                }));

            })

        return () => {
            isUnmounted = true;
        }

    }, [username])

    const init = () => {
        getProfile(token).then(profile => {
            if (profile.error || undefined) {
                setValues({...values, error: profile.error ?? undefined})
            } else {
                setValues({
                    ...values,
                    name: profile.name,
                    username: profile.username,
                    email: profile.email,
                    senderEmail: profile.email,
                    about: profile.about,
                })
            }
        })
    }


    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        let userFormData = new FormData()
        userFormData.set(name, value);
        setValues({...values, [name]: value, userData: userFormData, error: '', success: false});
    };

    const handleSubmit = (e) => {
        e.preventDefault()
        setValues({...values, loading: true});
        updateProfile(userData, token).then((data) => {
            if (data.error) {
                setValues({...values, error: data.error, success: false, loading: false});
            } else {

                update(data, () => {
                    setValues({
                        ...values,
                        name: data.name,
                        username: data.username,
                        senderEmail: data.email,
                        about: data.about,
                        photo: data.photo,
                        password: data.password,
                        success: true,
                        loading: false
                    })
                })
            }
        })
    }

    useEffect(() => {
        init()
    },[])


    const updateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="btn btn-outline-info">
                    Profile photo
                    <input type="file" accept="image/*" hidden className="form-control"
                           onChange={handleChange('photo')}/>
                </label>
            </div>
            <div className="form-group">
                <label className="text-muted">Name</label>
                <input type="text" autocomplete="off" className="form-control" value={name} onChange={handleChange('name')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" autocomplete="off" className="form-control" value={email} onChange={handleChange('email')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input autocomplete="off" type="password" autoComplete="off" className="form-control" value={password}
                       onChange={handleChange('password')}/>
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <input type="textarea" autocomplete="off" className="form-control" value={about} onChange={handleChange('about')}/>
            </div>
            {/*<div className="form-group">*/}
            {/*    <label className="text-muted">Username</label>*/}
            {/*    <input type="text" className="form-control" value={username} onChange={handleChange('username')}/>*/}
            {/*</div>*/}
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )

    const showError = () => (
        <div className="alert alert-danger" style={{display: error ? '' : 'none'}}>
            {error}
        </div>
    );

    const showSuccess = () => (
        <div className="alert alert-success" style={{display: success ? '' : 'none'}}>
            Profile was successfully updated
        </div>
    );

    const showLoading = () => (
        <div className="alert alert-success" style={{display: loading ? '' : 'none'}}>
            Loading.....
        </div>
    );

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        {srcBlob ?  <img src={srcBlob} alt={`${username}`} className="img img-fluid mb-3"/> : "🤷 Can't find the user image"}
                    </div>
                    <div className="col-md-8">
                        {showError()}
                        {showLoading()}
                        {showSuccess()}
                        update form
                        <hr/>
                        {updateForm()}
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProfileUpdate;
