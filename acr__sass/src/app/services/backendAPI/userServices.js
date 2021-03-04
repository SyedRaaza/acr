import FuseUtils from '@fuse/utils/FuseUtils';
import axios from 'axios';
import jwtDecode from 'jwt-decode';
import {configHeaders} from "./APIConfigs";
/* eslint-disable camelcase */



// var newToken = ""
// export const getToken = (token) => {
//     newToken = token[0].token
//      alert(`${JSON.stringify(newToken)} $$$$$im new token`)
//      alert(`${JSON.stringify(token[0].token)} $$$$$im old token`)
// }

class userServices extends FuseUtils.EventEmitter {
	init() {
		this.setInterceptors();
		this.handleAuthentication();
	}


	setInterceptors = () => {
		axios.interceptors.response.use(
			response => {
				return response;
			},
			err => {
				return new Promise((resolve, reject) => {
					if (err.response.status === 401 && err.config && !err.config.__isRetryRequest) {
						// if you ever get an unauthorized response, logout the user
						this.emit('onAutoLogout', 'Invalid access_token');
						this.setSession(null);
					}
					throw err;
				});
			}
		);
	};

	handleAuthentication = () => {
		const access_token = this.getAccessToken();

		if (!access_token) {
			this.emit('onNoAccessToken');

			return;
		}

		if (this.isAuthTokenValid(access_token)) {
			this.setSession(access_token);
			this.emit('onAutoLogin', true);
		} else {
			this.setSession(null);
			this.emit('onAutoLogout', 'access_token expired');
		}
	};

	// createUser = data => {
	// 	return new Promise((resolve, reject) => {
	// 		axios.post('/api/auth/register', data).then(response => {
	// 			if (response.data.user) {
	// 				this.setSession(response.data.access_token);
	// 				resolve(response.data.user);
	// 			} else {
	// 				reject(response.data.error);
	// 			}
	// 		});
	// 	});
	// };



	createUser = data => {
		return new Promise((resolve, reject) => {
			axios.post('http://pligence-acr.com/tenant/signup/', 
			data,
			)
			.then(response => {
				if (response) {
					//this.setSession(response.data.access_token);
					resolve(response);
				} else {
					reject(response.data.error);
				}
			});
		});
	};

    inviteMembers = data => {
        return new Promise((resolve , reject) => {
            axios.post('/user/invite/' , 
            {"members":data},
            //configHeaders
            )
            .then(res => {
                if (res) {
                    resolve(res)
                    console.log(res)
                }
                else {
                    reject(res.data.error)
                    console.log(res.data.error)
                }
            })
        })
    };

    resetPassword = (email , password ) => {
        return new Promise((resolve , reject) => {
            axios.post('/user/reset-password/' ,
            {
                email: email,
                password : password
            },
            )
            .then(res => {
                if (res) {
                    resolve(res)
                }
                else {
                    reject(res.data.error)
                }
            })
        })
    };
    ////This Call is not in Use
    getCISControlData = () => {
        return new Promise ((resolve , reject) => {
            axios.get('/controls/',
            )
            .then(res => {
                if(res) {
                    resolve(res)
                }
                else {
                    reject(res)
                }
            })
        })
    };
///////////signWithEmail&PassWord is in redux/userData
	signInWithEmailAndPassword = (email) => {
		return new Promise((resolve, reject) => {
			axios
				.post('http://pligence-acr.com/tenant/domain/',
					{"email": email}
					, {
						headers: {
							"Content-type":"application/json"
						}
					}
				)
				.then(response => {
					if (response) {
						//this.setSession(response.data.access_token);
						resolve(response);
						console.log(response)
					} else {
						reject(response.data.error);
					}
				});
		});
	};


	signInWithToken = () => {
		return new Promise((resolve, reject) => {
			axios
				.get('/api/auth/access-token', {
					data: {
						access_token: this.getAccessToken()
					}
				})
				.then(response => {
					if (response.data.user) {
						this.setSession(response.data.access_token);
						resolve(response.data.user);
					} else {
						this.logout();
						reject(new Error('Failed to login with token.'));
					}
				})
				.catch(error => {
					this.logout();
					reject(new Error('Failed to login with token.'));
				});
		});
	};

	updateUserData = user => {
		return axios.post('/api/auth/user/update', {
			user
		});
	};

	setSession = access_token => {
		if (access_token) {
			localStorage.setItem('jwt_access_token', access_token);
			axios.defaults.headers.common.Authorization = `Bearer ${access_token}`;
		} else {
			localStorage.removeItem('jwt_access_token');
			delete axios.defaults.headers.common.Authorization;
		}
	};

	logout = () => {
		this.setSession(null);
	};

	isAuthTokenValid = access_token => {
		if (!access_token) {
			return false;
		}
		const decoded = jwtDecode(access_token);
		const currentTime = Date.now() / 1000;
		if (decoded.exp < currentTime) {
			console.warn('access token expired');
			return false;
		}

		return true;
	};

	getAccessToken = () => {
		return window.localStorage.getItem('jwt_access_token');
	};
}

const instance = new userServices();

export default instance ;
