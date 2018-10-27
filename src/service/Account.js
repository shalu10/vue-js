// var oauthServerLocation= 'http://localhost:9088';
var oauthServerLocation = 'http://localhost:9085';


export default {




    login(user) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });

        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: 'oauth/token',
                headers: {
                    'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    'grant_type': 'password',
                    'username': user.contact,
                    'password': user.password
                }
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                localStorage.setItem('isAuthenticated', true);
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    userLogin(user) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });

        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: 'oauth/token',
                headers: {
                    'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    'grant_type': 'password',
                    'username': user.contact,
                    'password': user.password
                }
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                localStorage.setItem('isAuthenticated', true);
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    register(user) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });

        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: 'account/register',
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    contact: user.contact,
                    username: user.username,
                    firstname: user.firstName,
                    lastname: user.lastName
                },
            }).then((response) => {
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },



    getAccessToken(refreshToken) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });

        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: 'oauth/token',
                headers: {
                    'Authorization': 'Basic ' + btoa("barClientIdPassword:password"),
                    'Accept': 'application/json',
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                params: {
                    'grant_type': 'refresh_token',
                    'client_id': 'barClientIdPassword',
                    'refresh_token': refreshToken
                }
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access_token;
                console.log('The obtained access token after page refresh', response.data.access_token)
                localStorage.setItem('isAuthenticated', true);
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },
    logout(accessToken) {
        var authAxios = axios.create({
            baseURL: oauthServerLocation,
        });

        return new Promise((resolve, reject) => {
            authAxios({
                method: 'post',
                url: 'oauth/token/revokeById/' + accessToken,
            }).then((response) => {
                axios.defaults.headers.common['Authorization'] = 'Bearer ';
                localStorage.setItem('isAuthenticated', false);
                resolve(response);
            }).catch((err) => {
                reject(err);
            });
        });
    },

    onPageRefresh(session) {
        return new Promise((resolve, reject) => {
            console.log("Page Refreshing", session.exists("refresh_token"));
            if (session.exists("refresh_token")) {
                console.log(
                    "Refresh token available",
                    session.get("refresh_token")
                );
                this.getAccessToken(session.get("refresh_token"))
                    .then((response) => {
                        console.log(response);
                        session.set("access_token", response.data.access_token);
                        session.set("refresh_token", response.data.refresh_token);
                        resolve(response);
                    })
                    .catch((err) => {
                        console.log(err);
                        reject(err);
                    });
            }
        });
    }


}