import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios'
class Login extends Component {
    state = {

    };
    emailRef = React.createRef();
    passwordRef = React.createRef();
    onSubmit = (e) =>{
        e.preventDefault();
        this.postLoginApi();
        
    }
    postLoginApi = () => {
        if(this.emailRef.current.value.length === 0 && this.passwordRef.current.value.length === 0) return null;
        const email = this.emailRef.current.value;
        const password = this.passwordRef.current.value;
        axios.post('http://localhost:8000/api/auth/login',{
            email,
            password
        }).then((res) => {
            localStorage.setItem('token',res.data.token)
            localStorage.setItem('name_user', res.data.user.name)
            this.props.history.push('/dashboard')
            return;
        }).catch(error => {
            
        })

    }
    render() {
        return (
        <div className="container vh-100">
            <div className="row justify-content-center h-100">
                <div className="col-sm-6 align-self-center">
                    <div className="card shadow rounded bg-light">
                        <div className="card-body">
                            <form method="post" onSubmit={this.onSubmit}>           
                                <p className="text-center display-4 lead text-black-50">Login</p>
                                <div className="form-group">
                                    <label htmlFor="email">Correo</label>
                                    <input ref={this.emailRef} type="email" name="email" id="email" className="form-control"/>
                                </div>        
                                <div className="form-group">
                                    <label htmlFor="password">Contraseña</label>
                                    <input ref={this.passwordRef} type="password" name="password" id="password" className="form-control"/>
                                </div>       
                                <div className="form-group">
                                    <input type="submit" value="Entrar" className="btn btn-dark btn-lg btn-block"/>
                                </div>
                            </form>       
                        </div>
                    </div>
                </div>
            </div>
        </div> 
        );
    }
}

export default Login;
