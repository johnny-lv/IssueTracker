define(function(require, exports, module) {

    var $ = require('$');
    var _ = require('underscore');
    var Backbone = require('backbone');
    var issueModel = require('issue-model');

    var issueView = Backbone.View.extend({
        el: "#main-content",

        model: new issueModel(),

        //template: _.template("<%=Bug_No%><p><%=Category%><p><%=Root_Cause%><p><%=Resolution%><p><%=Tag%>"),
        template: _.template($("templates/issue-view.html").html()),

        render: function() {
            alert(this.template.html);
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        },

        beforeRender: function() {
            alert("before Render of issue view");
        }

    });

    module.exports = issueView;
});
