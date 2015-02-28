define([
    'backbone', 
    'views/scoreboard',
    'views/login',
    'views/main',
    'views/game',
    'views/manager'
], function(
    Backbone, scoreboardScreen, loginScreen, mainScreen, gameScreen, viewManager
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            '*default': 'defaultActions'
        },
        initialize: function () {
            viewManager.addView(scoreboardScreen);
            viewManager.addView(loginScreen);
            viewManager.addView(gameScreen);
            viewManager.addView(mainScreen);
        },
        defaultActions: function () {
            mainScreen.show();
        },
        scoreboardAction: function () {
            scoreboardScreen.show();
        },
        gameAction: function () {
            gameScreen.show();
        },
        loginAction: function () {
            loginScreen.show();
        }
    });

    return new Router();
});