var controllers = require('./controllers');

module.exports = function (router) {
    router.get('/', controllers.index);
    router.get('/meh', controllers.meh);
    router.get('/setLocale/:locale', controllers.setLocale);
};