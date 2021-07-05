import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

function Profile() {

    const user = useSelector(state => state.user);

    const [password, setpassword] = useState("");

    const [newPassword, setnewPassword] = useState("");

    const passwordChangeHandler = (event) => {
        setpassword(event.target.value);
    }

    const newPasswordChangeHandler = (event) => {
        setnewPassword(event.target.value);
    }

    const formSubmitHandler = (event) => {
        event.preventDefault();
        fetch('http://localhost:4000/user/change_password',{
            method:'POST',
            body:JSON.stringify({
                email:user.email,
                password:password,
                newPassword:newPassword,
                authToken:user.token
            }),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            alert(data.message)
            if(data.success){
                setpassword("");
                setnewPassword("");
            }
        })
        .catch(err => {
            alert('something went wrong');
            setpassword("");
            setnewPassword("");
        })
    }

    return (
        <div className={styles.profile}>
            <h1>This is Profile Page</h1>
            <h6>Email : {user.email}</h6>
            <div className='card' style={{margin:'3% auto',width:'50%',padding:'5%'}}>
                <h6>Change Password</h6>
                <form onSubmit={formSubmitHandler}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">Old Password</label>
                        <input value={password} onChange={passwordChangeHandler} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword" className="form-label">New Password</label>
                        <input value={newPassword} onChange={newPasswordChangeHandler} type="password" className="form-control" id="exampleInputPassword1" required />
                    </div>
                    <div className="mb-3">
                        <button className="btn btn-secondary col-12">Change Password</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Profile
