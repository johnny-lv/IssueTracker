define(function(require, exports, module) {
    var $ = require("$");
    var Backbone = require("backbone");
    var issueView = require("issue-view");

    var mainRouter = Backbone.Router.extend({

        initialize: function() {
        },

        routes: {
            '': 'home'
        },

        home: function() {
            new issueView().render();
        }
    });

    module.exports = mainRouter;
});
