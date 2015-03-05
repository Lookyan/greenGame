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
            console.log("submit func login");
            event.preventDefault();
            $('#login__submit').prop('disabled', true);

            var data = $(event.target).serializeArray();
            $.post({
                url: '/api/v1/signin',
                data: JSON.stringify(data),
                contentType: 'application/json',
                success: function () {
                    console.log('test');
                }
            })
                .fail(function () {
                    console.log('sending troubles!!');
                    $('#login__submit').prop('disabled', false);
            });



            //console.log(data);
        }

    });

    return new View();
});