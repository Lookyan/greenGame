define([
    'backbone',
    'tmpl/signup'
], function(
    Backbone,
    tmpl
){

    var View = Backbone.View.extend({

        template: tmpl,

        events: {
            "submit": "send"
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

        send: function (event) {
            console.log("submit func signup");
            event.preventDefault();
            //TODO: remove this shit
            this.$('.signup__submit').prop('disabled', true);

            var data = $(event.target).serializeArray();
            $.post({
                url: '/api/v1/signup',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function () {
                    console.log('test');
                }
            })
                .fail(function () {
                    console.log('sending troubles!!');
                    $('#signup__submit').prop('disabled', false);
                });



            //console.log(data);
        }

    });

    return new View();
});