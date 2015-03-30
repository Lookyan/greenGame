define([
    'backbone', 
    'views/scoreboard',
    'views/login',
    'views/main',
    'views/game',
    'views/signup',
    'views/manager'
], function(
    Backbone,
    scoreboardScreen,
    loginScreen,
    mainScreen,
    gameScreen,
    signupScreen,
    viewManager
){

    var Router = Backbone.Router.extend({
        routes: {
            'scoreboard': 'scoreboardAction',
            'game': 'gameAction',
            'login': 'loginAction',
            'signup': 'signupAction',
            '*default': 'defaultActions'
        },
        initialize: function () {
            viewManager.addView(scoreboardScreen);
            viewManager.addView(loginScreen);
            viewManager.addView(gameScreen);
            viewManager.addView(mainScreen);
            viewManager.addView(signupScreen);
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
        },
        signupAction: function () {
            signupScreen.show();
        }
    });

    return new Router();
});