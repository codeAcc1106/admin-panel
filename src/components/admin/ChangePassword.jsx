import React, { Component, useState } from 'react';
// import { Form } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { UPDATE_PASSWORD } from '../../actions/profile';
import { useCallback } from 'react';
import { useEffect } from 'react';


const ChangePassword = () => {

    const [intialValue, setInitialValue] = useState({
        currentPassword: '',
        password: '',
        repassword: '',
    });

    const dispatch = useDispatch();

    const updatePassword = useCallback((data) => {
        dispatch({ type: UPDATE_PASSWORD, payload: data })
    })

    const personalInfo = Yup.object().shape({
        currentPassword: Yup.string().required('Please enter current password'),
        password: Yup.string().required('Please enter new password'),
        repassword: Yup.string().required('Please enter new password').oneOf([Yup.ref('password'), null], 'Passwords must match'),
    })

    useEffect(() => {
        
    }, [])

    return (
        <div>
            <div className="page-header">
                <h3 className="page-title">Change Password </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Setting</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Change Password</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            <Formik
                                initialValues={intialValue}
                                enableReinitialize
                                validationSchema={personalInfo}
                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(false)
                                    values = { ..._.omit(values,['repassword']) }
                                    updatePassword(values);
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
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> Current Password </label>
                                                    <Field
                                                        className='form-control'
                                                        type='password'
                                                        name='currentPassword'
                                                        placeholder=' Enter currentPassword'
                                                    />
                                                    {errors.currentPassword && touched.currentPassword ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.currentPassword}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> New Password </label>
                                                    <Field
                                                        className='form-control'
                                                        type='password'
                                                        name='password'
                                                        onChange={handleChange}
                                                        placeholder=' Enter new password'
                                                    />
                                                    {errors.password && touched.password ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.password}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>

                                            <div className='col-md-12'>
                                                <div className='form-group'>
                                                    <label id="MainLabel"> Re-enter New Password </label>
                                                    <Field
                                                        className='form-control'
                                                        type='password'
                                                        name='repassword'
                                                        onChange={handleChange}
                                                        placeholder='Re-enter password'
                                                    />
                                                    {errors.repassword && touched.repassword ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.repassword}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            
                                        </div>
                                        <Button type="submit" className="update-btn" disabled={isSubmitting}>
                                            Update Password
                                        </Button>
                                    </Form>
                                )}
                            </Formik>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}


export default ChangePassword;