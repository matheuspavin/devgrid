const rest = require("../infra/rest");

let url = "https://api.github.com/gists";

let createGist = async function (customer, gist) {
    var username = 'matheuspavin';
    var password = 'dialogys123';
    var auth = 'Basic ' + new Buffer(username + ':' + password).toString('base64');

    var header = { 'Host': 'www.example.com', 'Authorization': auth };


    let options = {
        url: url,
        method: "POST",
        body: {
            "description": "the description for this gist",
            "public": true,
            "files": {
                "file1.txt": {
                    "content": "String file contents"
                }
            }
        },
        files: {
            "file1.txt": {
                "content": "String file contents"
            }
        },
        headers: { 'user-agent': 'node.js', Authorization: auth },
        json: true,
    };
    return await rest(options);
};

let getGistComments = async function (gist) {
    let options = {
        url: url + `/${gist}/comments`,
        method: "GET",
        headers: { 'user-agent': 'node.js' },
        json: true,
    };
    return await rest.get(options);
}

module.exports = {
    createGist,
    getGistComments
};