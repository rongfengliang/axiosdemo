// Optionally the request above could also be done as
const axios = require("axios");
const fs = require("fs");
function demo() {
    axios.get('http://localhost:8080/user.json')
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        });
}

function userget(){

    return axios.get("http://localhost:8080/user.json");
}

function apppost() {
    return axios.get("http://localhost:8080/app.json");
}
axios.all([userget(),apppost()])
.then(axios.spread(function(user,app){
    let appdata = {
        userinfo:user.data,
        appinfo:app.data
    }
    console.log(app.data);
}))