import React, { Component } from 'react';
import Nav from './Nav.jsx'
import imgDashboard from '../assets/imagenes.js';
import Footer from './Footer.jsx'
class Dashboard extends Component {
    render() {
        return (
            <>
                <Nav/>
                <div className="container">
                    <div className="row vh-100 justify-content-center align-items-center">
                        <div className="col-md-6">
                        <h1 class="display-4 text-primary">REACT.JS & LARAVEL</h1>
                        <p class="lead text-secondary">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                            tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                            cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                            proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                        </div>
                        <div className="col-md-6">
                            <img src={imgDashboard.dashboardImg} className="img-fluid"/>
                        </div>
                    </div>
                </div>
                <Footer/>
            </>
        );
    }
}

export default Dashboard;
