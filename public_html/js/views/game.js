define([
    'backbone',
    'tmpl/game',
    'models/gametable',
    'views/playerCards'
], function(
    Backbone,
    tmpl,
    GameTable,
    PlayerCards
){

    var View = Backbone.View.extend({

        events: {
            'click .js-hitbutton': 'hitButtonClick',
            'click .js-standbutton': 'standButtonClick'
        },

        template: tmpl,
        className: 'gamefield',
        //playerCards1: new Cards(),
        //Cards: CardsArr,
        model: new GameTable,

        initialize: function () {
            $('body').append(this.el);
            this.playerCards1 = new PlayerCards({cards: this.model.get('player1Cards')});
            this.playerCards1.listenTo(this.model.get('player1Cards'), 'add remove reset', this.playerCards1.render);
            this.render();
            this.playerCards1.setElement('.js-cards');
            this.playerCards1.render();
        },
        
        render: function () {
            this.$el.html(this.template);
            return this;
        },

        hitButtonClick: function() {
            this.model.hit();
        },

        standButtonClick: function() {
            this.model.stand();
        },
        
        show: function () {
            this.$el.show();
            this.trigger("show", this);
        },
        
        hide: function () {
            this.$el.hide();
        }

    });

    return new View();
});