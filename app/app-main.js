define(function(require, exports, module) {
    var $ = require("$");
    var _ = require("underscore");
    var Backbone = require("backbone");
    var mainRouter = require("app-router");

    module.exports = {
        init: function() {

            var app = {
                ROOT: "/",
                APP_ROUTERS: [
                    new mainRouter()
                ]
            };

            Backbone.history.start({
                root: app.ROOT,
                pushState: false,
                hashChange: true
            });
        }
    };
});
