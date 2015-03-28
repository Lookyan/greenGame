define([
    'backbone'
], function(
    Backbone
){

    var Model = Backbone.Model.extend({
        defaults: {
            value: 0,
            suit: ''
        },
        initialize: function () {
            console.log("Card was created");
        }

    });

    return Model;
});