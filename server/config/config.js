var config = {};

const user = 'xxxx';
const password = 'xxxx';

config.url = 'https://api.github.com/gists';

if (process.env.NODE_ENV === 'test') {
    config.gistUser = 'test';
    config.password = 'password';
} else {
    config.gistUser = user;
    config.password = password;
}

module.exports = config;