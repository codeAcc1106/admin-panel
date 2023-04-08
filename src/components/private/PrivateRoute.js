import React, { useCallback, useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createPromiseAction } from '@adobe/redux-saga-promise';
import { FETCH_PROFILE, GET_PROFILE, GET_PROFILE_SUCCESS } from './../../actions/profile';
import PropTypes from 'prop-types';
import { cookie } from './../../utils/cookies/cookies';
import MediaQuery from 'react-responsive';

import NavbarComponent from '../pages/navbarComponent';
import Sidebar from '../pages/sidebarComponent';
import SettingsPanel from '../pages/SettingsPanel';
import Footer from '../pages/Footer';
import { ToastContainer } from 'react-toastify';


export const PrivateRoute = ({ component: Component, roles, ...props }) => {
    const history = useHistory();
    const dispatch = useDispatch();
    const token = cookie.get('token');
    // console.log("tokennnn-->", token);
    const [isAllowed, setIsAllowed] = useState(false);
    // console.log("isallowed--->", isAllowed);
    const adminData = useSelector((state) => state.profile.adminProfile);

    // const getProfile = useCallback((data) => {
    //     dispatch({ type: GET_PROFILE, payload: data })
    // })

    const getProfile = useCallback((data) => {
        // console.log("data-->", data);
        const fetchPostAction = createPromiseAction(FETCH_PROFILE);
        // console.log('fetchPostAction(data)', fetchPostAction(data));
        return dispatch(fetchPostAction(data));
    }, []);

    const setUser = useCallback((data) => dispatch({ type: GET_PROFILE_SUCCESS, payload: data }), []);

    useEffect(() => {
        if (token) {
            // console.log("token---->", token);
            // getProfile();
            getProfile({})
                .then((res) => {
                    // console.log("in then function ==>", res.data);
                    const user2 = res.data;
                    setUser(user2);
                    setIsAllowed(true);
                })
                .catch((err) => {
                    setIsAllowed(false);
                    // console.log("in catch ==>", err);
                    console.error(err);
                    cookie.clean();
                });
        }
    }, [token])

    // useEffect(() => {
    //     if (token) {
    //         // console.log("if token==>", token);
    //         // setIsAllowed(true)
    //         // console.log("isallow==>", isAllowed);
    //         getProfile(token)
    //             .then((res) => {
    //                 console.log("in then");
    //                 const user2 = res.data;
    //                 setUser(user2);
    //                 setIsAllowed(true);
    //             })
    //             .catch((err) => {
    //                 setIsAllowed(true);
    //                 console.log("in catch");
    //                 console.error(err);
    //                 cookie.clean();
    //             });
    //     }
    // }, [token]);

    // if (!roles && token) {
    //     console.log("in if");
    //     getProfile()
    //         .then((res) => {
    //             console.log("in then");
    //             const user2 = res.data;
    //             setUser(user2);
    //             setIsAllowed(true);
    //         })
    //         .catch((err) => {
    //             setIsAllowed(true);
    //             console.log("in catch");
    //             console.error(err);
    //             cookie.clean();
    //         });
    //     console.log("true");
    // } else if (roles && !token) {
    //     console.log("in else if1");
    //     history.push('/login');
    // } else if (roles && token) {
    //     console.log("in elseif 2");
    //     if (!userData && !token && roles.length > 0) {
    //         history.push('/login');
    //     } else {
    //         console.log("in else");
    //         getProfile()
    //             .then((res) => {
    //                 const user2 = res.data;
    //                 if (roles.includes(user2.role)) {
    //                     setUser(user2);
    //                     setIsAllowed(true);
    //                 } else {
    //                     if (token) {
    //                         setIsAllowed(false);
    //                         history.push('/');
    //                     } else {
    //                         setIsAllowed(false);
    //                         history.push('/login');
    //                     }
    //                 }
    //             })
    //             .catch((err) => {
    //                 console.error(err);
    //                 cookie.clean();
    //                 history.push('/login');
    //             });
    //     }
    // } else {
    //     setIsAllowed(true);
    // }


    return token ? <AdminRoute {...props} component={Component} /> : <Redirect to="/" />;
};


PrivateRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.node]),
    roles: PropTypes.arrayOf(PropTypes.string),
};


export const AdminRoute = ({ component: Component, ...props }) => {
    return (
        <Route
            {...props}
            render={(props) => (
                <MediaQuery minWidth={800}>
                    {(matches) => {
                        return (
                            <React.Fragment>
                                <div className="container-scroller">
                                    <NavbarComponent />
                                    <div className="container-fluid page-body-wrapper">
                                        <Sidebar />
                                        <div className="main-panel">
                                            <div className="content-wrapper">
                                                {/* <MainLayout {...props} showToggle={!matches}> */}
                                                <Component {...props} />
                                                {/* </MainLayout> */}
                                                <SettingsPanel />
                                            </div>
                                            <Footer />
                                        </div>
                                    </div>
                                    <ToastContainer />
                                </div>
                            </React.Fragment>
                        );
                    }}
                </MediaQuery>
            )}
        />
    );
};
AdminRoute.propTypes = {
    component: PropTypes.oneOfType([PropTypes.object, PropTypes.func, PropTypes.node]),
};
