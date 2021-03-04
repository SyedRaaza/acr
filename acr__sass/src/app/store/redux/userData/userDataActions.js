import {NEW_USER} from "./userDataTypes";
import axios from 'axios';
import history from '@history';


export const setNewUser = user => {
    return {
        type: NEW_USER,
        payload: user

    }
}



export const setUser = (data) => {
    return (dispatch) => {
        axios.post(`/user/login/` , data ,
		 { headers: {"Content-type":"application/json"}})
		.then(res => {
            dispatch(setNewUser(res.data))
            if (res.data.data[0].type === "admin" && res.data.data[0].first_logging_in === true) {
                history.push({
                    pathname: "/home/invitemembers"
                })
            }
            else {
                history.push({
                    pathname: "/apps/dashboards/analytics"
                })
            }
        })
		.catch(err => console.log(`form set user ${err}`))
    }
}