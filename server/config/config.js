var config = {};
if (process.env.NODE_ENV === 'test') {
    config.gistUser = 'test';
    config.password = 'password'
} else {
    config.gistUser = 'matheuspavin';
    config.password = 'dialogys123'
}

module.exports = config;