// import { useState } from 'react';
import ReactDOM from 'react-dom';
import classes from './index.module.css';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faSignOutAlt, faEnvelope, faLock } from '@fortawesome/free-solid-svg-icons';
import Login from '../../Login';
import { productDataActions } from '../../../Store/product-slice';
import React from 'react';

const User = (props) => {

    const isLogin = useSelector(state => state.isLogin);
    const isLoginPage = useSelector(state => state.isLoginPage);
    // const email = localStorage.getItem("email");

    let email = null;
    if (typeof window !== 'undefined') {
        // Perform localStorage action
        email = localStorage.getItem("email");
    }
    const signUpClickHandler = () => {
        dispatch(productDataActions.setIsLoginPage());
    }
    const dispatch = useDispatch();
    let portalElement = null;
    if(typeof window !== 'undefined') {

        portalElement = document.getElementById("overlays");
    }

    const logutClickHandle = () => {
        dispatch(productDataActions.removeToken());
        if (typeof window !== 'undefined') {
            // Perform localStorage action
            localStorage.removeItem('token');
            localStorage.removeItem('email');
        }
    }

    return (
        <>
            {isLoginPage && ReactDOM.createPortal(<Login closeLogin={signUpClickHandler} FontAwesomeIcon={FontAwesomeIcon} faLock={faLock} faEnvelope={faEnvelope} />, portalElement)}
            {isLogin &&
                <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="navbarScrollingDropdown">

                    <div className={`${classes.message}`} >You are logged in with :</div>
                    <div className={`${classes.username}`} > <h6>{email}</h6></div>

                    <NavDropdown.Divider />
                    <div className={`${classes.logout_option}`}>
                        <FontAwesomeIcon className={`${classes.logout_icon}`} icon={faSignOutAlt} />
                        <NavDropdown.Item onClick={logutClickHandle} > Logout </NavDropdown.Item>
                    </div>
                </NavDropdown>
            }
            {!isLogin &&
                <NavDropdown title={<FontAwesomeIcon icon={faUser} />} id="navbarScrollingDropdown">

                    <div className={`${classes.username}`}> <h6 >Hello User</h6></div>
                    <NavDropdown.Divider />

                    <div className=''>
                        <span className={`${classes.message}`}> To access your account</span>

                    </div>
                    <NavDropdown.Item ><button className={`${classes.authBtn}`} onClick={signUpClickHandler}>Sign Up</button></NavDropdown.Item>

                </NavDropdown>
            }
        </>

    )
}

export default User;