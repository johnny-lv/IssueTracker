define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('underscore');
    var Backbone = require('backbone');

    var issueModel = Backbone.Model.extend({
        defaults: {
            Bug_No: "12345678",
            Category: "Search",
            Root_Cause: "This issue caused by ....",
            Resolution: "Code fix....",
            Tag: "MultiList, List"
        }
    });

    module.exports = issueModel;
});
