import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useHistory } from "react-router-dom";
import { userActions } from '../../store/user';
import styles from './Navbar.module.css';

function Navbar() {
    
    const history = useHistory();

    const dispatch = useDispatch();

    const userToken = useSelector(state => state.user.token);

    const logoutHandler = (event) => {
        event.preventDefault();
        dispatch(userActions.logout());
        history.replace('/');
    }

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid">
                    <NavLink className='navbar-brand' to='/'>Navbar</NavLink>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav mr-auto">
                            {
                                !userToken && 
                                <li className="nav-item">
                                    <NavLink to='/auth' className='nav-link' activeClassName={styles.activeNav}>Sign in</NavLink>
                                </li>
                            }
                            {
                                userToken && 
                                <li className="nav-item">
                                    <NavLink to='/profile' className='nav-link' activeClassName={styles.activeNav}>Profile</NavLink>
                                </li>
                            }
                        </ul>
                        <ul className="navbar-nav ms-auto">
                            {
                                userToken && 
                                <li className="nav-item">
                                    <button className='btn btn-secondary' onClick={logoutHandler}>Logout</button>
                                </li>
                            }
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
