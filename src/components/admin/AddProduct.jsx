import React, { useCallback, useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import * as _ from 'lodash';
import { Field, Formik, Form } from "formik";
import * as Yup from 'yup';
import { Button } from 'react-bootstrap';
import { useDispatch } from 'react-redux';
import { ADD_PRODUCT, GET_SINGLE_PRODUCT, UPDATE_PRODUCT } from '../../actions/product';
import { GET_CATEGORY } from '../../actions/category';
import axios from 'axios';
import { cookie } from '../../utils/cookies/cookies';
import { useParams } from 'react-router-dom';


const AddProduct = () => {
    const { cid } = useParams();
    const product = useSelector((state) => state.product.userSingleProduct);

    const dispatch = useDispatch();

    const getCategory = useCallback((data = {}) => {
        // dispatch({ type: GET_CATEGORY, payload: data });
    }, []);

    let intialValue =
        cid && !_.isEmpty(product)
            ? {
                ...product,
            }
            : {
                name: '',
                packageName: '',
                accountName: '',
                privacyPolicy: '',
                extraPage: '',
                otherURL: '',
                qreka: '',
                clickCounter: '',
                backClick: '',
                exitDialog: '',
                status: false,
                addStatus: false,
                googleAddStatus: false,
                facebookAddStatus: false,
                startPageStatus: false,
                startAddStatus: false,
                qurekaStatus: false,
                appLovin: false,
                googleAppId: '',
                googleBanner: '',
                googleNative: '',
                googleAppOpen: '',
                googleRewardVideo: '',
                googleIntrestial: '',
                googleNativeBanner: '',
                facebookBanner: '',
                facebookNative: '',
                facebookRewardVideo: '',
                facebookIntrestial: '',
                facebookNativeBanner: '',
                startAppId: '',
                startBanner: '',
                startNative: '',
                startIntrestial: '',
            };
    const [image, setImage] = useState('');
    // console.log('image ==>', image);

    // const [intialValue, setInitialValue] = useState({ ...intialValue1 });

    const addRecord = useCallback((data) => {
        if (cid) {
            dispatch({ type: UPDATE_PRODUCT, payload: data })
        } else {
            dispatch({ type: ADD_PRODUCT, payload: data })
        }
    })

    const productInfo = Yup.object().shape({
        name: Yup.string().required('name must be required'),
        packageName: Yup.string().required('packageName must be required'),
        accountName: Yup.string().required('accountName must be required'),
        privacyPolicy: Yup.string().required('privacyPolicy must be required'),
        extraPage: Yup.string().required('extraPage must be required'),
        otherURL: Yup.string().required('otherURL must be required'),
        qreka: Yup.string().required('qreka must be required'),
        clickCounter: Yup.string().required('clickCounter must be required'),
        backClick: Yup.string().required('backClick must be required'),
        exitDialog: Yup.string().required('exitDialog must be required'),
        status: Yup.string().required('status must be required'),
        addStatus: Yup.string().required('addStatus must be required'),
        googleAddStatus: Yup.string().required('googleAddStatus must be required'),
        facebookAddStatus: Yup.string().required('facebookAddStatus must be required'),
        startPageStatus: Yup.string().required('startPageStatus must be required'),
        startAddStatus: Yup.string().required('startAddStatus must be required'),
        qurekaStatus: Yup.string().required('qurekaStatus must be required'),
        appLovin: Yup.string().required('appLovin must be required'),
        googleAppId: Yup.string().required('googleAppId must be required'),
        googleBanner: Yup.string().required('googleBanner must be required'),
        googleNative: Yup.string().required('googleNative must be required'),
        googleAppOpen: Yup.string().required('googleAppOpen must be required'),
        googleRewardVideo: Yup.string().required('googleRewardVideo must be required'),
        googleIntrestial: Yup.string().required('googleIntrestial must be required'),
        googleNativeBanner: Yup.string().required('googleNativeBanner must be required'),
        facebookBanner: Yup.string().required('facebookBanner must be required'),
        facebookNative: Yup.string().required('facebookNative must be required'),
        facebookRewardVideo: Yup.string().required('facebookRewardVideo must be required'),
        facebookIntrestial: Yup.string().required('facebookIntrestial must be required'),
        facebookNativeBanner: Yup.string().required('facebookNativeBanner must be required'),
        startAppId: Yup.string().required('startAppId must be required'),
        startBanner: Yup.string().required('startBanner must be required'),
        startNative: Yup.string().required('startNative must be required'),
        startIntrestial: Yup.string().required('startIntrestial must be required'),
    })

    const onUploadFile = (event) => {
        if (event.target.files && event.target.files.length > 0) {
            var formData = new FormData();
            formData.append("image", event.target.files[0]);
            const token = cookie.get('token');
            axios.post(`${process.env.REACT_APP_API_URL}/product/upload`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Authorization: `Bearer ${token}`
                }
            }).then((res) => {
                setImage(res.data.file);
                // intialValue = { ...intialValue, image: res.data.file }
                // console.log('intialValue ==>', intialValue);
            }).catch((e) => {
                console.log('e ==>', e);
            })
        }
    };

    useEffect(() => {
        if (cid) {
            dispatch({ type: GET_SINGLE_PRODUCT, payload: { cid } })
        }
        getCategory();
    }, []);


    return (
        <div>
            <div className="page-header">
                <h3 className="page-title">Add Application </h3>
                <nav aria-label="breadcrumb">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="!#" onClick={event => event.preventDefault()}>Dashboard</a></li>
                        <li className="breadcrumb-item active" aria-current="page">Add Application</li>
                    </ol>
                </nav>
            </div>
            <div className="row">
                <div className="col-12 grid-margin">
                    <div className="card">
                        <div className="card-body">
                            {/* <div>
                                <input type="file" accept='image/*' onChange={(e) => onUploadFile(e)} />
                                <img src={`http://apexdryfruitstores.in/api/uploads/${_.get(product, 'image', '')}`} alt="product-image" height="200" width="300" />
                            </div> */}
                            <Formik
                                initialValues={intialValue}
                                enableReinitialize
                                validationSchema={productInfo}
                                onSubmit={(values, { setSubmitting }) => {
                                    setSubmitting(false)
                                    if (cid) {
                                        values = { ...values, id: cid }
                                    }
                                    if (image) {
                                        values = { ...values, image: image }
                                    }
                                    addRecord(values);
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
                                                <h1>GENERAL SETTING</h1>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Application Name</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='name'
                                                        placeholder=' Enter name'
                                                    />
                                                    {errors.name && touched.name ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.name}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Package Name</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='packageName'
                                                        placeholder=' Enter package name'
                                                    />
                                                    {errors.packageName && touched.packageName ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.packageName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Account Name</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='accountName'
                                                        placeholder=' Enter account name'
                                                    />
                                                    {errors.accountName && touched.accountName ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.accountName}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Privacy Policy</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='privacyPolicy'
                                                        placeholder=' Enter privacy policy link'
                                                    />
                                                    {errors.privacyPolicy && touched.privacyPolicy ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.privacyPolicy}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Extra Page</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='extraPage'
                                                        placeholder=' Enter extra page link'
                                                    />
                                                    {errors.extraPage && touched.extraPage ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.extraPage}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Other Application URL</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='otherURL'
                                                        placeholder=' Enter other app url'
                                                    />
                                                    {errors.otherURL && touched.otherURL ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.otherURL}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>QREKA</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='qreka'
                                                        placeholder=' Enter qreka url'
                                                    />
                                                    {errors.qreka && touched.qreka ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.qreka}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Click Counter</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='clickCounter'
                                                        placeholder=' Enter click counter'
                                                    />
                                                    {errors.clickCounter && touched.clickCounter ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.clickCounter}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Back Click</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='backClick'
                                                        placeholder=' Enter back click'
                                                    />
                                                    {errors.backClick && touched.backClick ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.backClick}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Exit Dialog</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='exitDialog'
                                                        placeholder=' Enter back click'
                                                    />
                                                    {errors.exitDialog && touched.exitDialog ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.exitDialog}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Application Status </label>
                                                    <Field className='form-control' as="select" name="status">
                                                        <option value="">Select</option>
                                                        <option value="true">Live</option>
                                                        <option value="false">Suspend</option>
                                                    </Field>
                                                    {errors.status && touched.status ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.status}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Add Status </label>
                                                    <Field className='form-control' as="select" name="addStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.addStatus && touched.addStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.addStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Google Add Status </label>
                                                    <Field className='form-control' as="select" name="googleAddStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.googleAddStatus && touched.googleAddStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleAddStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Facebook Add Status </label>
                                                    <Field className='form-control' as="select" name="facebookAddStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.facebookAddStatus && touched.facebookAddStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookAddStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Start Page Status </label>
                                                    <Field className='form-control' as="select" name="startPageStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.startPageStatus && touched.startPageStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startPageStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> Start App Add Status </label>
                                                    <Field className='form-control' as="select" name="startAddStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.startAddStatus && touched.startAddStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startAddStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> QUREKA Status </label>
                                                    <Field className='form-control' as="select" name="qurekaStatus">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.qurekaStatus && touched.qurekaStatus ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.qurekaStatus}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label> APP Lovin </label>
                                                    <Field className='form-control' as="select" name="appLovin">
                                                        <option value="">Select</option>
                                                        <option value="true">ON</option>
                                                        <option value="false">OFF</option>
                                                    </Field>
                                                    {errors.appLovin && touched.appLovin ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.appLovin}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h1>2. GOOGLE SETTING</h1>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>App ID</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleAppId'
                                                        placeholder=' Enter app id'
                                                    />
                                                    {errors.googleAppId && touched.googleAppId ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleAppId}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Banner</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleBanner'
                                                        placeholder=' Enter banner'
                                                    />
                                                    {errors.googleBanner && touched.googleBanner ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleBanner}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Native</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleNative'
                                                        placeholder=' Enter native'
                                                    />
                                                    {errors.googleNative && touched.googleNative ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleNative}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>App Open</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleAppOpen'
                                                        placeholder=' Enter app open'
                                                    />
                                                    {errors.googleAppOpen && touched.googleAppOpen ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleAppOpen}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Reward Video</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleRewardVideo'
                                                        placeholder=' Enter reward video'
                                                    />
                                                    {errors.googleRewardVideo && touched.googleRewardVideo ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleRewardVideo}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Intrestial</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleIntrestial'
                                                        placeholder=' Enter Intrestial'
                                                    />
                                                    {errors.googleIntrestial && touched.googleIntrestial ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleIntrestial}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Native Banner</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='googleNativeBanner'
                                                        placeholder=' Enter native banner'
                                                    />
                                                    {errors.googleNativeBanner && touched.googleNativeBanner ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.googleNativeBanner}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h1>3. FACEBOOK SETTING</h1>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label>Banner</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='facebookBanner'
                                                        placeholder=' Enter banner'
                                                    />
                                                    {errors.facebookBanner && touched.facebookBanner ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookBanner}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-6'>
                                                <div className='form-group'>
                                                    <label>Native</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='facebookNative'
                                                        placeholder=' Enter native'
                                                    />
                                                    {errors.facebookNative && touched.facebookNative ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookNative}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Reward Video</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='facebookRewardVideo'
                                                        placeholder=' Enter reward video'
                                                    />
                                                    {errors.facebookRewardVideo && touched.facebookRewardVideo ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookRewardVideo}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Intrestial</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='facebookIntrestial'
                                                        placeholder=' Enter Intrestial'
                                                    />
                                                    {errors.facebookIntrestial && touched.facebookIntrestial ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookIntrestial}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-4'>
                                                <div className='form-group'>
                                                    <label>Native Banner</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='facebookNativeBanner'
                                                        placeholder=' Enter native banner'
                                                    />
                                                    {errors.facebookNativeBanner && touched.facebookNativeBanner ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.facebookNativeBanner}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <div className='row'>
                                            <div className='col-md-12'>
                                                <h1>4. START APP SETTING</h1>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>App ID</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='startAppId'
                                                        placeholder=' Enter app id'
                                                    />
                                                    {errors.startAppId && touched.startAppId ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startAppId}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Banner</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='startBanner'
                                                        placeholder=' Enter banner'
                                                    />
                                                    {errors.startBanner && touched.startBanner ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startBanner}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Native</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='startNative'
                                                        placeholder=' Enter native'
                                                    />
                                                    {errors.startNative && touched.startNative ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startNative}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                            <div className='col-md-3'>
                                                <div className='form-group'>
                                                    <label>Intrestial</label>
                                                    <Field
                                                        className='form-control'
                                                        type='text'
                                                        name='startIntrestial'
                                                        placeholder=' Enter Intrestial'
                                                    />
                                                    {errors.startIntrestial && touched.startIntrestial ? (
                                                        <div style={{ color: 'rgb(220,37,43)', marginTop: 3 }}>{errors.startIntrestial}</div>
                                                    ) : null}
                                                </div>
                                            </div>
                                        </div>
                                        <Button type="submit" className="update-btn" disabled={isSubmitting}>
                                            {(cid) ? 'Update' : 'Add'} Record
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


export default AddProduct;
