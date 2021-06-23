const publicRoute = require('./publicRoute');

const routes = function (app, express)
{
    app.use('/', publicRoute(express));
    return app;
}

module.exports = routes;