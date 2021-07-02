import React from 'react';
import { useSelector } from 'react-redux';
import styles from './Profile.module.css';

function Profile() {

    const user = useSelector(state => state.user);

    return (
        <div className={styles.profile}>
            <h1>This is Profile Page</h1>
            <h6>Name : {user.name}</h6>
            <h6>Surname : {user.surname}</h6>
            <h6>Email : {user.email}</h6>
        </div>
    )
}

export default Profile
