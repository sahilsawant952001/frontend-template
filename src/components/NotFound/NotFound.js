import React from 'react';
import styles from './NotFound.module.css';

function NotFound() {
    return (
        <div className={styles.notFound}>
            <img src='https://colorlib.com/wp/wp-content/uploads/sites/2/404-error-template-3.png' alt='404 page not found'/>
        </div>
    )
}

export default NotFound
