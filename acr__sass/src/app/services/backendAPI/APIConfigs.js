import axios from "axios";

export var baseURL = "https://jsonplaceholder.typicode.com";

var newbaseURLis = '';

var axiosConfig = ""

export const changeBaseURL = (newURL) => {
    newbaseURLis = newURL
    if (newURL == "") {
        console.log(`in if ${axiosConfig}`)
    }
    else {
        axios.defaults.baseURL = `http://${newbaseURLis}`;
    }
}

var newToken = ""
export const getToken = (token) => {
    newToken = token[0].token
     axios.defaults.headers.common['Authorization'] = `token ${newToken}`;
}



export default axiosConfig;