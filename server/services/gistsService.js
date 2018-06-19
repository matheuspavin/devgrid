const gistsGateway = require('../gateways/gistsGateway');
const config = require('../config/config');

const createGist = function (content) {
    const user = {};
    user.username = config.gistUser;
    user.password = config.password;
    const gist = {};
    gist.body ={
        description: content.description,
        public: content.public,
        files: {
            [content.name]: {
                content: content.gistContent
            }
        }
    };
    try {
        return gistsGateway.createGist(gist, user);
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