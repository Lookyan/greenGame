define([
    'backbone'
], function(
    Backbone
){

    var Model = Backbone.Model.extend({
        defaults: {
            value: 0,
            suit: '',
            player: 0
        }
        //initialize: function () {
        //    console.log("Card was created");
        //}

    });

    return Model;
});