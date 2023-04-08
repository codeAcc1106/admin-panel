import React from 'react'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { useCallback } from 'react';
import { dispatch } from '@adobe/redux-saga-promise';
import { LOGIN } from '../../actions/authAction';
import { useEffect } from 'react';
import { UPDATE_PROFILE } from '../../actions/profile';


function NavbarComponent() {

  const adminProfile = useSelector((state) => state.profile.adminProfile);

  // const updateProfile = useCallback((data) => {
  //     dispatch({ type: UPDATE_PROFILE, payload: data })
  // })

  const toggleOffcanvas = () => {
    document.querySelector('.sidebar-offcanvas').classList.toggle('active');
  }

  return (
    <nav className="navbar default-layout-navbar col-lg-12 col-12 p-0 fixed-top d-flex flex-row">
      <div className="text-center navbar-brand-wrapper d-flex align-items-center justify-content-center">
        <Link className="navbar-brand brand-logo" to="/"><img src={require('../../assets/images/logo.png')} alt="logo" /></Link>
        <Link className="navbar-brand brand-logo-mini" to="/"><img src={require('../../assets/images/logo.png')} alt="logo" /></Link>
      </div>
      <div className="navbar-menu-wrapper d-flex align-items-stretch">
        <button className="navbar-toggler navbar-toggler align-self-center" type="button" onClick={() => document.body.classList.toggle('sidebar-icon-only')}>
          <span className="mdi mdi-menu"></span>
        </button>
        {/* <div className="search-field d-none d-md-block">
          <form className="d-flex align-items-center h-100" action="#">
            <div className="input-group">
              <div className="input-group-prepend bg-transparent">
                <i className="input-group-text border-0 mdi mdi-magnify"></i>
              </div>
              <input type="text" className="form-control bg-transparent border-0" placeholder="Search products" />
            </div>
          </form>
        </div> */}
        <ul className="navbar-nav navbar-nav-right">


          <li className="nav-item nav-profile nav-language">
            {/* <Dropdown alignRight>
              <Dropdown.Toggle className="nav-link count-indicator">
                <div className="nav-profile-img">
                  <img src={require("../../assets/images/faces/face28.png")} alt="profile" />
                </div>
                <div className="nav-profile-text">
                  <p className="mb-1 text-black">{(_.get(adminProfile, 'displayName'))}</p>
                </div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="preview-list navbar-dropdown">
                <div className="p-3 text-center bg-primary">
                  <img className="img-avatar img-avatar48 img-avatar-thumb" src={require("../../assets/images/faces/face28.png")} alt="" />
                </div>
                <div className="p-2">
                  <h5 className="dropdown-header text-uppercase pl-2 text-dark">User Options</h5>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt => evt.preventDefault()}>
                    <span>Inbox</span>
                    <span className="p-0">
                      <span className="badge badge-primary">3</span>
                      <i className="mdi mdi-email-open-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt => evt.preventDefault()}>
                    <span>Profile</span>
                    <span className="p-0">
                      <span className="badge badge-success">1</span>
                      <i className="mdi mdi-account-outline ml-1"></i>
                    </span>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt => evt.preventDefault()}>
                    <span>Settings</span>
                    <i className="mdi mdi-settings"></i>
                  </Dropdown.Item>
                  <div role="separator" className="dropdown-divider"></div>
                  <h5 className="dropdown-header text-uppercase  pl-2 text-dark mt-2">Actions</h5>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt => evt.preventDefault()}>
                    <span>Lock Account</span>
                    <i className="mdi mdi-lock ml-1"></i>
                  </Dropdown.Item>
                  <Dropdown.Item className="dropdown-item d-flex align-items-center justify-content-between" href="!#" onClick={evt => evt.preventDefault()}>
                    <span>Log Out</span>
                    <i className="mdi mdi-logout ml-1"></i>
                  </Dropdown.Item>
                </div>
              </Dropdown.Menu>
            </Dropdown> */}
          </li>
        </ul>
        <button className="navbar-toggler navbar-toggler-right d-lg-none align-self-center" type="button" onClick={toggleOffcanvas}>
          <span className="mdi mdi-menu"></span>
        </button>
      </div>
    </nav>
  )
}

export default NavbarComponent;