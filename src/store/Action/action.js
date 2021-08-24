import axios from 'axios';
import baseURL from '../../config/config';
import { Alert } from 'react-native'

/* Actions for signin */
export function signin(user, props) {
    return dispatch => {
        // console.log('user', props, user);
        // loader start 
        dispatch({ type: "ISLOADER" })
        var bodyFormData = new FormData();
        bodyFormData.append('email', user.Email);
        bodyFormData.append('password', user.Password);
        var options = {
            method: 'POST',
            url: `${baseURL.baseURL}/login`,
            headers: { 'cache-control': 'no-cache', "Allow-Cross-Origin": '*', },
            data: bodyFormData
        };
        axios(options)
            .then((data) => {
                console.log(data, data.data.success.token, "fetch_signin_api");
                //loader close 
                dispatch({ type: "ISLOADER" })
                dispatch({ type: "TOKENSET", payload: data.data.success.token })
                props.func()
            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_signin");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message ? error.response.data.message : error.response.data.error })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })
    }
}

/* Actions for signup */
export function signup(newUser, navigation) {
    return dispatch => {
        // console.log('new_user', newUser);
        //loader start 
        dispatch({ type: "ISLOADER" })
        var bodyFormData = new FormData();
        bodyFormData.append('name', newUser.UserName);
        bodyFormData.append('email', newUser.Email.toLowerCase());
        bodyFormData.append('password', newUser.Password);
        bodyFormData.append('c_password', newUser.C_Password);
        bodyFormData.append('designation_name', newUser.DesignationName);
        bodyFormData.append('company_name', newUser.CompanyName);
        bodyFormData.append('number_of_workshop', newUser.NumberOfWorkShopAttentd);
        var options = {
            method: 'POST',
            url: `${baseURL.baseURL}/register`,
            headers: { 'cache-control': 'no-cache', "Allow-Cross-Origin": '*', },
            data: bodyFormData
        };
        axios(options)
            .then((data) => {
                console.log(data, "fetch_signup_api");
                //loader close 
                dispatch({ type: "ISLOADER" })
                //set error
                if (data.data.Failed) {
                    dispatch({ type: "ISERROR", payload: data.data.Failed })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
                navigation.navigate("Login")
            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_signup");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })
    }
}

/* Actions for get trainings */
export function getTrainings(token) {
    return dispatch => {
        // console.log('user_token', token);
        //loader start 
        dispatch({ type: "ISLOADER" })
        var options = {
            method: 'GET',
            url: `${baseURL.baseURL}/trainings`,
            headers: { 'Authorization': 'Bearer ' + token },
        };
        axios(options)
            .then((data) => {
                // console.log(data.data.data, "fetch_training");
                //loader close 
                dispatch({ type: "ISLOADER" })
                dispatch({ type: "TRAINING", payload: data.data.data })

            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_get_trainings");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })



    }
}

/* Actions for register training */
export function registerTraining(id, token) {
    return dispatch => {
        // console.log('id_and_token', id, token);
        // //loader start 
        dispatch({ type: "ISLOADER" })
        var bodyFormData = new FormData();
        bodyFormData.append('training_name_id', id);
        var options = {
            method: 'POST',
            url: `${baseURL.baseURL}/trainingusers`,
            headers: { 'Authorization': 'Bearer ' + token },
            data: bodyFormData
        };
        axios(options)
            .then((data) => {
                console.log(data, "fetch_enroll_training_api");
                //loader close 
                dispatch({ type: "ISLOADER" })
                if (data.data.Failed) {
                    Alert.alert(data.data.Failed)
                }

                if (data.data.data.status === "pending") {
                    Alert.alert("Training register successfully")
                }
                dispatch(getTrainings(token));

            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_register_training");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })
    }
}

/* Actions for my training */
export function myTraining(token) {
    return dispatch => {
        console.log('token', token);
        // //loader start 
        dispatch({ type: "ISLOADER" })
        var options = {
            method: 'GET',
            url: `${baseURL.baseURL}/trainingusers`,
            headers: { 'Authorization': 'Bearer ' + token },
            // data: bodyFormData
        };
        axios(options)
            .then((data) => {
                // console.log(data.data.data, "fetch_my_training_api");
                //loader close 
                dispatch({ type: "ISLOADER" })
                dispatch({ type: "MYTRAININGS", payload: data.data.data })

            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_my_training");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })
    }
}


/* Actions for user profile */
export function userProfile(token) {
    return dispatch => {
        // console.log('token', token);
        // //loader start 
        dispatch({ type: "ISLOADER" })
        var options = {
            method: 'GET',
            url: `${baseURL.baseURL}/users`,
            headers: { 'Authorization': 'Bearer ' + token },
            // data: bodyFormData
        };
        axios(options)
            .then((data) => {
                // console.log(data.data.data, "fetch_user_profile");
                //loader close 
                dispatch({ type: "ISLOADER" })
                dispatch({ type: "USERPROFILE", payload: data.data.data })

            }).catch((error) => {
                //loader close
                dispatch({ type: "ISLOADER" })
                if (error.response) {
                    console.log(error.response, "error_on_user_profile");
                    //set error
                    dispatch({ type: "ISERROR", payload: error.response.data.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                } else {
                    console.log(error.message);
                    //set error
                    dispatch({ type: "ISERROR", payload: error.message })
                    setTimeout(() => {
                        dispatch({ type: "ISERROR", payload: null })
                    }, 3000)
                }
            })
    }
}