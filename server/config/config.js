var config = {};
if (process.env.NODE_ENV === 'test') {
    config.gistUser = 'test';
    config.password = 'password'
} else {
    config.gistUser = 'test';
    config.password = 'password'
}

module.exports = config;