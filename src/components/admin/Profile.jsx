import React, { Component, useState } from 'react';
// import { Form } from 'react-bootstrap';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import bsCustomFileInput from 'bs-custom-file-input'
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { UPDATE_PROFILE } from '../../actions/profile';
import { useCallback } from 'react';
import { useEffect } from 'react';


const Profile = () => {

    const [intialValue, setInitialValue] = useState({
        firstName: '',
        lastName: '',
        email: '',
        dob: '',
        displayName: ''
    });

    const adminProfile = useSelector((state) => state.profile.adminProfile);
    const dispatch = useDispatch();

    const updateProfile = useCallback((data) => {
        dispatch({ type: UPDATE_PROFILE, payload: data })
    })

    const personalInfo = Yup.object().shape({
        firstName: Yup.string()
            .required('firstName must required !!'),
        lastName: Yup.string()
            .required('lastName must required !!'),
        displayName: Yup.string()
            .required('displayName must required !!'),
        email: Yup.string()
            .required('Email must required !!').email('Email address is invalid'),
        dob: Yup.string()
            .required("DOB is Required")
    })

    useEffect(() => {
        setInitialValue({
            ..._.omit(adminProfile, ['role', 'id', 'privacy', 'deviceToken'])
        })
    }, [adminProfile])

    console.log("get-----intialValue", intialValue);

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title">Profile </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Setting</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Profile</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <h4 className="card-title">Horizontal Two column</h4>
                            <Formik
                                initialValues={intialValue}
                                enableReinitialize
                                validationSchema={personalInfo}
                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(false)
                                    updateProfile(values);
                                }}>
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleSubmit,
                                    setFieldValue,
                                    isSubmitting,
                                }) =>
                                (
                                    <Form onSubmit={handleSubmit} className="mt-4">
                                        <p className="card-description"> Personal info </p>
                                        <div className='row'>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> First Name </label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='firstName'
                                                        placeholder=' Enter firstName'
                                                    />
                                                    {errors.firstName && touched.firstName ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.firstName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> Last Name </label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='lastName'
                                                        onChange={handleChange}
                                                        placeholder=' Enter lastName'
                                                    />
                                                    {errors.lastName && touched.lastName ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.lastName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>

                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> Display Name </label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='displayName'
                                                        onChange={handleChange}
                                                        placeholder=' Enter displayName'
                                                    />
                                                    {errors.displayName && touched.displayName ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.displayName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> Email </label>
                                                    <Field
                                                        className='form-control'
                                                        type='email'
                                                        name='email'
                                                        onChange={handleChange}
                                                        placeholder=' Enter Your EmailId'
                                                    />
                                                    {errors.email && touched.email ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.email}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <label id="MainLabel"> Date of Birth </label>
                                                <div>
                                                    <div>
                                                        <Field
                                                            className='form-control'
                                                            type='date'
                                                            name='dob'
                                                            value={values.dob}
                                                            onChange={handleChange}
                                                            placeholder=' Enter Your EmailId'
                                                        />
                                                        {errors.dob && touched.dob ? (
                                                            <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.dob}</div>
                                                        ) : null}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <Button type="submit" className="update-btn" disabled={isSubmitting}>
                                            Update Details
                                        </Button>
                                    </Form>
                                )}
                            </Formik>










                            {/* <form className="form-sample">
                                <p className="card-description"> Personal info </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">First Name</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text"
                                                />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Last Name</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Gender</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>Male</option>
                                                    <option>Female</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Date of Birth</label>
                                            <div className="col-sm-9">
                                                <DatePicker className="form-control w-100"
                                                />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Image</label>
                                            <div className="col-sm-9">
                                                <div className="custom-file">
                                                    <Form.Control type="file" className="form-control visibility-hidden" id="customFileLang" lang="es" />
                                                    <label className="custom-file-label" htmlFor="customFileLang">Upload image</label>
                                                </div>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <p className="card-description"> Address </p>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Address 1</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">State 1</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Address 2</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Postcode</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Cirt</label>
                                            <div className="col-sm-9">
                                                <Form.Control type="text" />
                                            </div>
                                        </Form.Group>
                                    </div>
                                    <div className="col-md-6">
                                        <Form.Group className="row">
                                            <label className="col-sm-3 col-form-label">Country</label>
                                            <div className="col-sm-9">
                                                <select className="form-control">
                                                    <option>America</option>
                                                    <option>Italy</option>
                                                    <option>Russia</option>
                                                    <option>Britain</option>
                                                </select>
                                            </div>
                                        </Form.Group>
                                    </div>
                                </div>
                            </form> */}
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default Profile;
