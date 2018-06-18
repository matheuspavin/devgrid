const gistsGateway = require('../gateways/gistsGateway');
const config = require('../config/config');

const createGist = function (content) {
    const customer = {};
    customer.user = config.gistUser;
    customer.password = config.password;
    try {
        return gistsGateway.createGist(customer, content);
    } catch (err) {
        console.log(err);
    }
};

const getGistComments = async function (gist) {
    return await gistsGateway.getGistComments(gist);
};


module.exports = {
    createGist,
    getGistComments
}