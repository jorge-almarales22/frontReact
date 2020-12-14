import React, { Component } from 'react';
import Nav from '../Nav.jsx';
import Footer from '../Footer.jsx';
import Formguardar from './Formguardar.jsx'
// import Formeditar from './Formeditar.jsx'
class Home extends Component {
   
    render() {
        return (
            <>
                <Nav/>
                <Formguardar/>
                <Footer/>
            </>
        );
    }
}

export default Home;
