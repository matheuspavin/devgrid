const rest = require("../infra/rest");

const url = "https://api.github.com/gists";

const createGist = async function (gist, user) {
    if (!user.username || !user.password) throw 'Needs username and password';
    const auth = 'Basic ' + new Buffer(user.username + ':' + user.password).toString('base64');
    const options = {
        url: url,
        method: "POST",
        body: gist.body,
        headers: { 'user-agent': 'node.js', Authorization: auth },
        json: true,
    };
    return await rest(options);
};

const getGistComments = async function (gist, user) {
    const headers = { 'user-agent': 'node.js'};
    if (user.username && user.password) {
        headers.Authorization = 'Basic ' + new Buffer(user.username + ':' + user.password).toString('base64');
    }
    const options = {
        url: url + `/${gist}/comments`,
        method: "GET",
        headers: headers,
        json: true,
    };
    return await rest.get(options);
}

module.exports = {
    createGist,
    getGistComments
};