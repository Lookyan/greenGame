define([
    'backbone'
], function(
    Backbone
){

    var Model = Backbone.Model.extend({
        defaults: {
            balance: 0
        },
        initialize: function () {
            console.log("Player was created");
        },
        url: 'auth',
        sync: apiSync
    });

    return Model;
});