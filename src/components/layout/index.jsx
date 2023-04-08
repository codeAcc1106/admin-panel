import React, { Component } from 'react'

import NavbarComponent from '../pages/navbarComponent';
import Sidebar from '../pages/sidebarComponent';
import SettingsPanel from '../pages/SettingsPanel';
import Footer from '../pages/Footer';
import Dashboard from '../Dashboard';

class MainLayout extends Component {
    // constructor(props){
    //     super(props);
    //     const { view }=this.props;
    //     console.log('view==>',view);
    // }
    render() {
        return (
            <div className="container-scroller">
                <NavbarComponent />
                <div className="container-fluid page-body-wrapper">
                    <Sidebar />
                    <div className="main-panel">
                        <div className="content-wrapper">
                            <Dashboard />
                            <SettingsPanel />
                        </div>
                        <Footer />
                    </div>
                </div>
            </div>
        )
    }
}

export default MainLayout;