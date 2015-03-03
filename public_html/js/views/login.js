define([
    'backbone',
    'tmpl/login'
], function(
    Backbone,
    tmpl
){

    var View = Backbone.View.extend({

        template: tmpl,
        className: 'wrap',

        events: {
            "submit": "subm"
        },

        initialize: function () {
            $('body').append(this.el);
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
        },

        subm: function (event) {
            console.log("submit func login")
            event.preventDefault()
            var data = $(event.target).serialize()
            console.log(data)
        }

    });

    return new View();
});