const rest = require("../infra/rest");
const config = require("../config/config");

const url = config.url;

const createGist = async function (gist, user) {
    if (!user.username || !user.password) throw 'Needs username and password';
    const options = {
        url: url,
        method: "POST",
        body: gist.body,
        headers: { 'user-agent': 'node.js', Authorization: authorization(user) },
        json: true,
    };
    return await rest(options);
};

const getGistComments = async function (gist, user) {
    const options = {
        url: url + `/${gist}/comments`,
        method: "GET",
        headers: { 'user-agent': 'node.js'},
        json: true,
    };
    return await rest(options);
};

const authorization = function (user) {
   return 'Basic ' + new Buffer(user.username + ':' + user.password).toString('base64');
};

module.exports = {
    createGist,
    getGistComments
};