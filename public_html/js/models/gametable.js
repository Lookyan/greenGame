define([
    'backbone',
    'collections/cardArr'
], function(
    Backbone,
    CardsArr
){

    var Model = Backbone.Model.extend({
        //defaults: {
        //    //value: 0
        //},

        //allCards: new CardsArr(),
        //dealerCards: new CardsArr(),
        //player1Cards: new CardsArr(),
        //player2Cards: new CardsArr(),
        //player3Cards: new CardsArr(),


        initialize: function () {
            //console.log("Game table was created");
            this.set({
                allCards: new CardsArr(),
                dealerCards: new CardsArr(),
                player1Cards: new CardsArr()
            });

            this.listenTo(this.get('allCards'), 'add', this.spreadNewCards);

            // 0 - dealer, 1 - player1, etc
            this.get('allCards').add([
                {value: 6, suit: 'd', player: 0},
                {value: 10, suit: 'p', player: 1},
                {value: 2, suit: 'c', player: 1}
            ]);
        },

        spreadNewCards: function(card) {
            switch(card.get('player')) {
                case 0:
                    this.get('dealerCards').add(card);
                    break;
                case 1:
                    this.get('player1Cards').add(card);
                    break;
            }
        },

        hit: function() {
            this.get('player1Cards').add({value: 3, suit: 'p', player: 1});
        },

        stand: function() {

        }

    });

    return Model;
});