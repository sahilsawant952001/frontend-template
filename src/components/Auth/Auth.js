import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Spinner from '../../Spinner/Spinner';
import { loadingActions } from '../../store/loading';
import { userActions } from '../../store/user';
import AuthForm from './AuthForm';

function Auth() {

    const loading = useSelector(state => state.loading.loading);

    const history = useHistory();

    const dispatch = useDispatch();

    const [name, setname] = useState("");

    const [surname, setsurname] = useState("");

    const [email, setemail] = useState("");

    const [password, setpassword] = useState("");

    const [signIn, setsignIn] = useState(true);

    const [authMessage, setauthMessage] = useState(null);

    const nameChangeHandler = (event) => {
        setname(event.target.value);
    }

    const surnameChangeHandler = (event) => {
        setsurname(event.target.value);
    }

    const emailChangeHandler = (event) => {
        setemail(event.target.value);
    }

    const passwordChangeHandler = (event) =>{
        setpassword(event.target.value);
    }

    const authTypeHandler = (event) => {
        setname('');
        setsurname('');
        setemail('');
        setpassword('');
        setsignIn(!signIn);
    }

    async function formSubmitHandler(event){
        event.preventDefault();
        dispatch(loadingActions.startloading());
        let authBody = null,authUrl = null;
        if(signIn){
            authUrl = 'https://evening-stream-61734.herokuapp.com/signin';
            authBody = {
                email:email,
                password:password
            }
        }else{
            authUrl = 'https://evening-stream-61734.herokuapp.com/signup';
            authBody = {
                name:name,
                surname:surname,
                email:email,
                password:password,
                dob:new Date()
            }
        }
        
        fetch(authUrl,{
            method:'POST',
            body:JSON.stringify(authBody),
            headers:{
                'Content-Type':'application/json'
            }
        })
        .then(res => res.json())
        .then(data => {
            if(data.authenticatedUser){
                dispatch(loadingActions.stopLoading());
                dispatch(userActions.login({
                    token:data.id,
                    name:'Sahil',
                    surname:'Sawant',
                    email:'sahil.sawant3@spit.ac.in'
                }))
                history.replace('/');
            }else{
                setauthMessage(data.message);
            }
        })
        .catch(err => {
            dispatch(loadingActions.stopLoading());
            setauthMessage('Something went wrong')
        })
    }

    return (
        loading ===true ? 
        <Spinner/>
        :
        <AuthForm
            name={name}
            surname={surname}
            email={email}
            password={password}
            signIn={signIn}
            authMessage={authMessage}
            nameChangeHandler={nameChangeHandler}
            surnameChangeHandler={surnameChangeHandler}
            emailChangeHandler={emailChangeHandler}
            passwordChangeHandler={passwordChangeHandler}
            authTypeHandler={authTypeHandler}
            formSubmitHandler={formSubmitHandler}
        />
    )
}

export default Auth
