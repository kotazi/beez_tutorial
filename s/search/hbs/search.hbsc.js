define(['beez'], function(beez) {
  var Handlebars = beez.vendor.Handlebars;
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['search'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, options, helperMissing=helpers.helperMissing, escapeExpression=this.escapeExpression;


  buffer += "<form role=\"form\" action=\"#\">\n  <div id=\"query\" class=\"form-group\">\n    <label for=\"exampleInputEmail1\">";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.__ || (depth0 && depth0.__)),stack1 ? stack1.call(depth0, "search.label", options) : helperMissing.call(depth0, "__", "search.label", options)))
    + "</label>\n    <input type=\"text\" class=\"form-control\" id=\"word\" placeholder=\"";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.__ || (depth0 && depth0.__)),stack1 ? stack1.call(depth0, "search.text", options) : helperMissing.call(depth0, "__", "search.text", options)))
    + "\">\n  </div>\n  <button type=\"submit\" class=\"btn btn-primary\">\n    <i class=\"glyphicon glyphicon-search\"></i>\n    ";
  options = {hash:{},data:data};
  buffer += escapeExpression(((stack1 = helpers.__ || (depth0 && depth0.__)),stack1 ? stack1.call(depth0, "search", options) : helperMissing.call(depth0, "__", "search", options)))
    + "\n  </button>\n</form>";
  return buffer;
  });
    return templates['search'];});