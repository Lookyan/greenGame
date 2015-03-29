define([
    'backbone',
    'tmpl/cards',
    'collections/cardArr'
], function(
    Backbone,
    tmpl,
    CardsArr
){

    var View = Backbone.View.extend({

        template: tmpl,
        //className: 'wrap',
        initialize: function (options) {
            this.cards = options.cards;
        },

        render: function () {
            this.$el.html(this.template(this.cards.toJSON()));
            //console.log('cards view render');

            return this;
        }

    });

    return View;
});