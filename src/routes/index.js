const accountRoutes = require('./account-routes');

module.exports = (app) => {
    accountRoutes(app);
}