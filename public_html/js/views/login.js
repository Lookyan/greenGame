define([
    'backbone',
    'tmpl/login',
    'models/user'
], function(
    Backbone,
    tmpl,
    userModel
){

    var View = Backbone.View.extend({

        template: tmpl,
        className: 'menu',
        user: userModel,

        events: {
            "submit": "send",
            "input": "saveFormFields"
        },

        initialize: function () {
            $('body').append(this.el);
            this.render();
        },
        
        render: function () {
            this.$el.html(this.template);
            var loginInfo = JSON.parse(localStorage.getItem('loginInfo'));
            if(loginInfo) {
                this.$("input[name=name]").val(loginInfo.name);
                this.$("input[name=password]").val(loginInfo.password);
            }
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
            event.preventDefault();
            var username = this.$("input[name=name]").val(),
                password = this.$("input[name=password]").val();

            var btnSubmit = this.$("input[name=submit]");

            btnSubmit.prop('disabled', true).delay(2000).queue(
                function(next) {
                    $(this).prop('disabled', false);
                    next();
                }
            );

            this.user.login({
                login: username,
                passw: password
            });

            // event.preventDefault();
            // $('#login__submit').prop('disabled', true);

            // var data = $(event.target).serializeArray();
            // $.post({
            //     url: '/api/v1/signin',
            //     data: JSON.stringify(data),
            //     contentType: 'application/json',
            //     success: function () {
            //         console.log('test');
            //     }
            // })
            //     .fail(function () {
            //         console.log('sending troubles!!');
            //         $('#login__submit').prop('disabled', false);
            // });



            //console.log(data);
        },

        saveFormFields: function(event) {
            var loginInfoInd = this.$("form").serializeArray();
            var loginInfo = {};
            $.map(loginInfoInd, function(n, i) {
                loginInfo[n.name] = n.value;
            });
            localStorage.setItem("loginInfo", JSON.stringify(loginInfo));
        }

    });

    return new View();
});