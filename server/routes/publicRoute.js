const HomeController = require('../controllers/HomeController')();

const routesGroup = function (express)
{
    const routes = express.Router();

    routes.route('/*')
        .get(HomeController.index);

    return routes;
}

module.exports = routesGroup;