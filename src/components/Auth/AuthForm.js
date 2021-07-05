import React from 'react'

function AuthForm(props) {

    let authType = 'Sign in',changeAuth = 'Switch To Sign up',authMessage =null;
    if(!props.signIn){
        authType = 'Sign up';
        changeAuth = 'Switch To Sign in'
    }

    if(props.authMessage){
        authMessage = <div className="mb-3">
                        <h6>{props.authMessage}</h6>
                      </div>
    }

    return (
        <div className='card' style={{margin:'5% auto',width:'50%',padding:'5%'}}>
            <div className="mb-3">
                <h1>{authType}</h1>
            </div>
            {authMessage}
            <form onSubmit={props.formSubmitHandler}>
                {
                    !props.signIn &&
                    <div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputName" className="form-label">Name</label>
                            <input value={props.name} onChange={props.nameChangeHandler} type="text" className="form-control" id="exampleInputEmail1" required />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="exampleInputSurname" className="form-label">Surname</label>
                            <input value={props.surname} onChange={props.surnameChangeHandler} type="text" className="form-control" id="exampleInputEmail1" required />
                        </div>
                    </div>
                }
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail" className="form-label">Email address</label>
                    <input value={props.email} onChange={props.emailChangeHandler} type="email" className="form-control" id="exampleInputEmail1" required />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword" className="form-label">Password</label>
                    <input value={props.password} onChange={props.passwordChangeHandler} type="password" className="form-control" id="exampleInputPassword1" required />
                </div>
                <div className="mb-3">
                    <button className="btn btn-secondary col-12">{authType}</button>
                </div>
            </form>
            <div className="mb-3">
                <button onClick={props.authTypeHandler}  className="btn btn-outline-secondary col-12">{changeAuth}</button>
            </div>
        </div>
    )
}

export default AuthForm
