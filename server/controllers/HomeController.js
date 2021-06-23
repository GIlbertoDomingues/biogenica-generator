const HomeController = function()
{
    function index(req, res)
    {
        return res.render('index');
    }

    return {
        index
    }
}

module.exports = HomeController;