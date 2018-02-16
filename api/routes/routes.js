'use strick';
module.exports = function(app) {
    var controller = require('../controllers/controller');

    app.route('/instagramLocationScraper/')
        .get(controller.instagramLocationScraper);

    app.route('/instaImages/')
        .get(controller.instaImages);

    app.route('/instagramHandleScraper/')
        .get(controller.instagramHandleScraper);

    app.route('/instagramProfileScraper/')
        .get(controller.instagramProfileScraper);

    

};
