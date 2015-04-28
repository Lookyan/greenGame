define([
    'backbone',
    'tmpl/signup',
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
            var signupInfo = JSON.parse(localStorage.getItem('signupInfo'));
            if(signupInfo) {
                this.$("input[name=name]").val(signupInfo.name);
                this.$("input[name=password]").val(signupInfo.password);
                this.$("input[name=email]").val(signupInfo.email);
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
                password = this.$("input[name=password]").val(),
                email = this.$("input[name=email]").val();

            var btnSubmit = this.$("input[name=submit]");

            btnSubmit.prop('disabled', true).delay(2000).queue(
                function(next) {
                    $(this).prop('disabled', false);
                    next();
                }
            );

            this.user.register({
                login: username,
                passw: password,
                email: email
            });
            // event.preventDefault();
            // //TODO: remove this shit
            // this.$('.signup__submit').prop('disabled', true);

            // var data = $(event.target).serializeArray();
            // $.post({
            //     url: '/api/v1/signup',
            //     data: JSON.stringify(data),
            //     contentType: 'application/json',
            //     success: function () {
            //         console.log('test');
            //     }
            // })
            //     .fail(function () {
            //         console.log('sending troubles!!');
            //         $('#signup__submit').prop('disabled', false);
            //     });



            //console.log(data);
        },

        saveFormFields: function(event) {
            var loginInfoInd = this.$("form").serializeArray();
            var loginInfo = {};
            $.map(loginInfoInd, function(n, i) {
                loginInfo[n.name] = n.value;
            });
            localStorage.setItem("signupInfo", JSON.stringify(loginInfo));
        }

    });

    return new View();
});