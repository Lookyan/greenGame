define([
    'backbone',
    'tmpl/signup'
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
            console.log("submit func signup");
            event.preventDefault();
            $('#signup__submit').prop('disabled', true);

            var data = $(event.target).serialize();
            $.post({
                url: '/api/v1/signup',
                data: data,
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