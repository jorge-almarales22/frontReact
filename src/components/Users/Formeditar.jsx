import React, { Component } from 'react';

class Formeditar extends Component {
    state = {
        nombre: this.props.nombre,
        apellido: this.props.apellido,
        telefono: this.props.telefono,
        email: this.props.email,
        direccion: this.props.direccion,
    }

    render() {
        return (
            <form method="post" onSubmit={this.onSubmit} id="formulario">           
                                        
            <div className="form-group">
                <label htmlFor="nombre">Nombre para editar</label>
                <input ref={this.nombreRef} value={this.state.nombre} type="text" name="nombre" id="nombre" className="form-control"/>
            </div>        
            <div className="form-group">
                <label htmlFor="apellido">Apellido</label>
                <input ref={this.apellidoRef} value={this.state.apellido} type="text" name="apellido" id="apellido" className="form-control"/>
            </div>        
            <div className="form-group">
                <label htmlFor="telefono">Telefono</label>
                <input ref={this.telefonoRef} value={this.state.telefono} type="text" name="telefono" id="telefono" className="form-control"/>
            </div>        
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input ref={this.emailRef} value={this.state.email} type="email" name="email" id="email" className="form-control"/>
            </div>        
            <div className="form-group">
                <label htmlFor="direccion">Dirección</label>
                <input ref={this.direccionRef} value={this.state.direccion} type="text" name="direccion" id="direccion" className="form-control"/>
            </div>        
                   
            <div className="form-group">
                <input type="submit" value="Entrar" className="btn btn-dark btn-lg btn-block"/>
            </div>
            </form>
        );
    }
}

export default Formeditar;
