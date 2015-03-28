define([
    'backbone',
    'tmpl/game',
    'views/cards'
], function(
    Backbone,
    tmpl,
    Cards
){

    var View = Backbone.View.extend({

        template: tmpl,
        className: 'gamefield',
        initialize: function () {
            $('body').append(this.el);
            this.cards1 = new Cards();
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template);
            return this;
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