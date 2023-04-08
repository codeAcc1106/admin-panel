import { Field, Form, Formik } from 'formik';
import React from 'react'
import { Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import * as Yup from 'yup'


const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required('email must required !!')
})

const ForgotPass = () => {

    return (
        <div className="container-scroller">
            <div className="container-fluid page-body-wrapper">
                <div className="main-panel" style={{ width: "100%" }}>
                    <div className="content-wrapper">
                        <div>
                            <div className="d-flex align-items-center auth px-0">
                                <div className="row w-100 mx-0">
                                    <div className="col-lg-4 mx-auto">
                                        <div className="auth-form-light text-left py-5 px-4 px-sm-5">
                                            <div className="brand-logo">
                                                <img src={require("../../assets/images/logo.png")} alt="logo" />
                                            </div>
                                            <h2 className='text-secondary'> Forgot Password </h2>
                                            <h5 className="text-secondary"> You can reset your password here. </h5>

                                            <Formik
                                                initialValues={{ email: '' }}

                                                validationSchema={validationSchema}

                                                onSubmit={(values, { setSubmitting }) => {
                                                    console.log(values);
                                                    setSubmitting(false);
                                                    // loginData(values)
                                                    // const data = { ...values }
                                                    // dispatch({ type: LOGIN, payload: data })
                                                }}
                                            >
                                                {({ touched, errors, isSubmitting }) => (
                                                    <Form>
                                                        <div className='Container'>
                                                            <div className='row'>
                                                                <div className='form-group'>
                                                                    <Field
                                                                        className='form-control mt-3'
                                                                        style={{ width: '502px' }}
                                                                        type='email'
                                                                        name='email'
                                                                        placeholder='Enter your email '
                                                                    />
                                                                    {errors.email && touched.email ? (
                                                                        <div style={{ color: 'red' }}> {errors.email} </div>
                                                                    ) : null}
                                                                </div>
                                                            </div>
                                                            <button
                                                                type='submit'
                                                                className='btn btn-block btn-primary btn-sm font-weight-medium auth-form-btn'
                                                                disabled={isSubmitting}
                                                            >
                                                                RESET PASSWORD
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
        </div >
    )
}

export default ForgotPass;
