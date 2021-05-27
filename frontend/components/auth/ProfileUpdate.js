import React, {useState, useEffect} from 'react';
import {getProfile} from "../../actions/user";
import {getCookie} from "../../actions/auth";

const ProfileUpdate = () => {
    const [values, setValues] = useState({
        username: '',
        name: '',
        email: '',
        password: '',
        error: '',
        success: '',
        loading: false,
        photo: '',
        userData: '',
        about: '',
    })
    const token = getCookie("token")

    const {username, name, email, password, error, loading, photo, userData, about} = values
    console.log(username)

    const init = () => {
        getProfile(token).then(profile => {
            console.log(profile)
            if (profile.error) {
                setValues({...values, error: profile.error})
            } else {
                setValues({
                    ...values,
                    name: profile.name,
                    username: profile.username,
                    email: profile.email,
                    about: profile.about,
                })
            }
        })
    }
    const handleChange = name => e => {
        // console.log(e.target.value);
        const value = name === 'photo' ? e.target.files[0] : e.target.value;
        const formData = new FormData()
        setValues({ ...values, [name]: value, formData, error: '' });
    };

    const handleSubmit = (e) => {

    }

    const updateForm = () => (
        <form onSubmit={handleSubmit}>
            <div className="form-group">
                <label className="text-muted">Profile photo</label>
                <input type="file" accept="image/*"  className="form-control" value={photo}  onChange={handleChange('photo')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Username</label>
                <input type="text" className="form-control" value={username}  onChange={handleChange('username')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Password</label>
                <input type="password" className="form-control" value={password}  onChange={handleChange('password')} />
            </div>
            <div className="form-group">
                <label className="text-muted">Email</label>
                <input type="email" className="form-control" value={email}  onChange={handleChange('email')} />
            </div>
            <div className="form-group">
                <label className="text-muted">About</label>
                <input type="text" className="form-control" value={about}  onChange={handleChange('about')} />
            </div>
            <div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </div>
        </form>
    )


    useEffect(() => {
        init()
    }, [])

    return (
        <>
            <div className="container">
                <div className="row">
                    <div className="col-md-4 mb-5">
                        image
                    </div>
                    <div className="col-md-8">
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
