import { Field, Form, Formik } from 'formik';
import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';


const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('username is required !!'),
  email: Yup.string()
    .required('email is required !!'),
  password: Yup.string()
    .required('password is required !!'),
  contry: Yup.string()
    .required('select the contry !!') 

})

export class Register extends Component {
  render() {
    return (
      <React.Fragment>
        <div className="container-scroller">
          <div className="container-fluid page-body-wrapper">
            <div className="main-panel" style={{ width: "100%" }} >
              <div className="content-wrapper">
                <div>
                  <div className="d-flex align-items-center auth px-0">
                    <div className="row w-100 mx-0">
                      <div className="col-lg-4 mx-auto">
                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                          <div className="brand-logo">
                            <img src={require("../../assets/images/logo.png")} alt="logo" />
                          </div>
                          <h2 className='text-secondary'>New here?</h2>
                          <h5 className="text-secondary">Signing up is easy. It only takes a few steps</h5>

                          <Formik

                            initialValues={{ username: '', email: '', password: '', contry: '' }}

                            validationSchema={validationSchema}

                            onSubmit={(values, { setSubmitting }) => {
                              console.log(values);
                              setSubmitting(false);
                            }}
                          >
                            {({ touched, errors, isSubmitting }) => (
                              <Form>
                                <div className='Container'>
                                  <div className='row'>
                                    <div className='form-group mt-3'>
                                      <Field
                                        className='form-control'
                                        style={{ width: '502px' }}
                                        type='text'
                                        name='username'
                                        placeholder='Enter your userName '
                                      />
                                      {errors.username && touched.username ? (
                                        <div style={{ color: 'red' }}> {errors.username} </div>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='form-group'>
                                      <Field
                                        className='form-control'
                                        style={{ width: '500px' }}
                                        type='email'
                                        name='email'
                                        placeholder='Enter your email'
                                      />
                                      {errors.email && touched.email ? (
                                        <div style={{ color: 'red' }}> {errors.email} </div>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className='row'>
                                    <div className='form-group'>
                                      <Field
                                        className='form-control'
                                        style={{ width: '500px' }}
                                        type='password'
                                        name='password'
                                        placeholder='Enter your password'
                                      />
                                      {errors.password && touched.password ? (
                                        <div style={{ color: 'red' }}> {errors.password} </div>
                                      ) : null}
                                    </div>
                                  </div>

                                  <div className="form-group">
                                    <select
                                      name='contry'
                                      className="form-control form-control-xl"
                                      id="exampleFormControlSelect2"
                                    >
                                      <option value='1'>Country</option>
                                      <option value='2'>United States of America</option>
                                      <option value='3'>United Kingdom</option>
                                      <option value='4'>India</option>
                                      <option value='5'>Germany</option>
                                      <option value='6'>Argentina</option>
                                    </select>
                                    {errors.contry && touched.contry ? (
                                      <div style={{ color: 'red' }}> {errors.contry} </div>
                                    ) : null}
                                  </div>

                                  <div className="mb-4">
                                    <div className="form-check">
                                      <label className="form-check-label text-muted">
                                        <input type="checkbox" className="form-check-input" />
                                        <i className="input-helper"></i>
                                        I agree to all Terms & Conditions
                                      </label>
                                    </div>
                                  </div>

                                  <button
                                    type='submit'
                                    className='btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn'
                                    disabled={isSubmitting}
                                  >
                                    SIGN UP 
                                  </button>
                                  <div className='container'>
                                    <div className='row'>
                                      <Col className='text-center mt-4'>
                                        Back to Login ..? <Link to='/'> login </Link>
                                      </Col>
                                    </div>
                                  </div>
                                </div>
                              </Form>
                            )}
                          </Formik>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default Register;
