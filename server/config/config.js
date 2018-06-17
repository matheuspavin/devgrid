var config = {};

config.database = process.env.DATABASE_ADDRESS || './server/database/devGrid.sqlite';
config.migration = '/devGrid.sqlite';

module.exports = config;