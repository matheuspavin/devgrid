const request = require('request');

function get (options) {
    // options.gzip = true;
    return new Promise(function (resolve, reject) {
        request(options, function (error, response, body) {
            if (error) {
                return reject(error);
            }
            if (response && (response.statusCode !== 200 && response.statusCode !== 201 && response.statusCode !== 204)) {
                return reject(body);
            }
            return resolve(body);
        });
    });
};

module.exports = get;