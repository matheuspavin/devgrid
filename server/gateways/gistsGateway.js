const rest = require("../infra/rest");

let url = "https://api.github.com/gists";

let createGist = async function (user, gist) {
    var auth = 'Basic ' + new Buffer(user.username + ':' + user.password).toString('base64');
    if (!user.username || !user.password) throw 'Needs username and password';
    let options = {
        url: url,
        method: "POST",
        body: gist.body,
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