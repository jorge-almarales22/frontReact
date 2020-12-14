import React, { Component } from 'react';
import axios from 'axios';
import './user.css'
import Formeditar from './Formeditar.jsx'
class Formguardar extends Component {
    state = {
        data: [],
        token: '',
        nombre: '',
        apellido: '',
        telefono: '',
        email: '',
        direccion: '',
        form: true,
        idedit: ''
    }
    componentDidMount()
    {
        const token = localStorage.getItem('token');
        axios.get('http://localhost:8000/api/auth/users', { headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            this.setState({data: res.data.personas, token});
        }).catch((errors) => console.log(errors));
    }
    
    emailRef = React.createRef();
    nombreRef = React.createRef();
    apellidoRef = React.createRef();
    telefonoRef = React.createRef();
    direccionRef = React.createRef();

    emailRefEdit = React.createRef();
    nombreRefEdit = React.createRef();
    apellidoRefEdit = React.createRef();
    telefonoRefEdit = React.createRef();
    direccionRefEdit = React.createRef();
    onSubmit = (e) =>{
        e.preventDefault();
        this.postStoreUserApi();
        
    }
    postStoreUserApi = () => {
        if(this.emailRef.current.value.length === 0 && this.nombreRef.current.value.length === 0 && this.apellidoRef.current.value.length === 0 && this.telefonoRef.current.value.length === 0 && this.direccionRef.current.value.length === 0) return null;
        const email = this.emailRef.current.value;
        const nombre = this.nombreRef.current.value;
        const apellido = this.apellidoRef.current.value;
        const telefono = this.telefonoRef.current.value;
        const direccion = this.direccionRef.current.value;
        const token = this.state.token;

        axios.post('http://localhost:8000/api/auth/users', {
            //...data
            email,
            nombre,
            apellido,
            telefono,
            direccion
          }, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          }).then((res) => {
            this.setState({data: res.data.personas});
            document.getElementById('formulario__mensaje-exito').style.display = 'block';
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').style.display = 'none';                
            }, 3000);
            document.getElementById('formulario').reset();
          }).catch((error)=> {
              console.log(error)
          })

    }
    onEdit = (e) =>
    {
        e.preventDefault();
        const email = this.emailRefEdit.current.value;
        const nombre = this.nombreRefEdit.current.value;
        const apellido = this.apellidoRefEdit.current.value;
        const telefono = this.telefonoRefEdit.current.value;
        const direccion = this.direccionRefEdit.current.value;
        const token = localStorage.getItem('token');
        const id = this.state.idedit
        // console.log(persona,email,nombre,apellido,telefono,direccion,token)
        axios.post(`http://localhost:8000/api/auth/users/update`, {
            //...data
            email,
            nombre,
            apellido,
            telefono,
            direccion,
            id
          }, {
            headers: {
              'Authorization': `Bearer ${token}` 
            }
          }).then((res) => {
            this.setState({data: res.data.personas});
            document.getElementById('formulario__mensaje-exito').style.display = 'block';
            document.getElementById('formularioedit').reset();
            this.setState({form:true})
            setTimeout(() => {
                document.getElementById('formulario__mensaje-exito').style.display = 'none';
            }, 3000);
            document.getElementById('formulario').reset();
          }).catch((error)=> {
              console.log(error)
          })
    }

    eliminarPersona = (e) => {
        e.preventDefault();
        const persona = e.target.attributes[0].value;
        const token = localStorage.getItem('token');
        axios.get(`http://localhost:8000/api/auth/users/${persona}`, 
        { headers: {"Authorization" : `Bearer ${token}`} })
        .then((res)=>{
            this.setState({data: res.data.personas});
            document.getElementById('formulario__mensaje-borrado').style.display = 'block';
            setTimeout(() => {
                document.getElementById('formulario__mensaje-borrado').style.display = 'none';                
            }, 3000);
        }).catch((errors) => console.log(errors));
    }
    editarPersona = (e) => 
    {
        e.preventDefault();
        const id = e.target.attributes[0].value;
        let personas = this.state.data;
        const persona = personas.filter((persona) =>{
            return persona.id == id;
        })
        
        this.setState({nombre: persona[0].nombre, apellido: persona[0].apellido, telefono: persona[0].telefono, email: persona[0].email, direccion: persona[0].direccion})
        this.setState({form: false, idedit: id})
        // console.log(this.state.nombre,this.state.apellido,this.state.telefono,this.state.email,this.state.direccion)
    }
   
    render() {
        return (
            <div>
                
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-sm-6 align-self-center">
                        <div class="formulario__mensaje-exito" id="formulario__mensaje-exito">
                            <p>Formulario Enviado Exitosamente</p>
                        </div>
                        <div class="formulario__mensaje-borrado" id="formulario__mensaje-borrado">
                            <p>Persona Eliminada Exitosamente</p>
                        </div>
                            <div className="card shadow rounded bg-light">
                                <div className="card-body">
                                    <h1 className="display-3 text-primary text-center">Usuarios</h1>
                                    {(this.state.form == true) ? 
                                        <form method="post" onSubmit={this.onSubmit} id="formulario">           
                                        
                                        <div className="form-group">
                                            <label htmlFor="nombre">Nombre</label>
                                            <input ref={this.nombreRef}  type="text" name="nombre" id="nombre" className="form-control"/>
                                        </div>        
                                        <div className="form-group">
                                            <label htmlFor="apellido">Apellido</label>
                                            <input ref={this.apellidoRef}  type="text" name="apellido" id="apellido" className="form-control"/>
                                        </div>        
                                        <div className="form-group">
                                            <label htmlFor="telefono">Telefono</label>
                                            <input ref={this.telefonoRef}  type="text" name="telefono" id="telefono" className="form-control"/>
                                        </div>        
                                        <div className="form-group">
                                            <label htmlFor="email">Email</label>
                                            <input ref={this.emailRef}  type="email" name="email" id="email" className="form-control"/>
                                        </div>        
                                        <div className="form-group">
                                            <label htmlFor="direccion">Dirección</label>
                                            <input ref={this.direccionRef}  type="text" name="direccion" id="direccion" className="form-control"/>
                                        </div>        
                                               
                                        <div className="form-group">
                                            <input type="submit" value="Entrar" className="btn btn-dark btn-lg btn-block"/>
                                        </div>
                                        </form>
                                    : (<form method="post" onSubmit={this.onEdit} id="formularioedit">           
                                        
                                    <div className="form-group">
                                        <label htmlFor="nombre">Nombre para editar</label>
                                        <input ref={this.nombreRefEdit} placeholder={this.state.nombre} type="text" name="nombre" id="nombre" className="form-control"/>
                                    </div>        
                                    <div className="form-group">
                                        <label htmlFor="apellido">Apellido</label>
                                        <input ref={this.apellidoRefEdit} placeholder={this.state.apellido} type="text" name="apellido" id="apellido" className="form-control"/>
                                    </div>        
                                    <div className="form-group">
                                        <label htmlFor="telefono">Telefono</label>
                                        <input ref={this.telefonoRefEdit} placeholder={this.state.telefono} type="text" name="telefono" id="telefono" className="form-control"/>
                                    </div>        
                                    <div className="form-group">
                                        <label htmlFor="email">Email</label>
                                        <input ref={this.emailRefEdit} placeholder={this.state.email} type="email" name="email" id="email" className="form-control"/>
                                    </div>        
                                    <div className="form-group">
                                        <label htmlFor="direccion">Dirección</label>
                                        <input ref={this.direccionRefEdit} placeholder={this.state.direccion} type="text" name="direccion" id="direccion" className="form-control"/>
                                    </div>        
                                           
                                    <div className="form-group">
                                        <input type="submit" value="Editar" className="btn btn-dark btn-lg btn-block"/>
                                    </div>
                                    </form>)
                                    }       
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-center align-items-center">
                        <table className="table table-striped">
                            <thead className="thead-inverse">
                                <tr>
                                    <th>Id</th>
                                    <th>Nombre de usuario</th>
                                    <th>Apellido</th>
                                    <th>Telefono</th>
                                    <th>Email</th>
                                    <th>Direccion</th>
                                    <th>Acciones</th>
                                    <th></th>
                                </tr>
                                </thead>
                                <tbody>
                                   {(this.state.data.length !== 0) ? this.state.data.map((user) => {
                                        return (
                                            <tr>
                                                <td>{user.id}</td>
                                                <td>{user.nombre}</td>
                                                <td>{user.apellido}</td>
                                                <td>{user.telefono}</td>
                                                <td>{user.email}</td>
                                                <td>{user.direccion}</td>
                                                <td><button onClick={this.editarPersona} data-object={user.id}>Editar</button></td>
                                                <td><button  onClick={this.eliminarPersona} data-object={user.id}>Eliminar</button></td>
                                            </tr>
                                        )
                                    }) : 'Cargando..'
                                   }

                                </tbody>
                        </table>
                    </div>
                </div>
                
            </div>
        );
    }
}

export default Formguardar;
