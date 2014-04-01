define(['beez'], function(beez) {
  var Handlebars = beez.vendor.Handlebars;
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['header'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<nav class=\"navbar navbar-inverse navbar-static-top\" role=\"navigation\">\n  <div class=\"navbar-header\">\n    <a class=\"navbar-brand\" href=\"#search\">Github API with Beez</a>\n  </div>\n\n  <div class=\"collapse navbar-collapse\">\n    <ul class=\"nav navbar-nav navbar-right\">\n\n      <form class=\"navbar-form navbar-left\" role=\"search\" action=\"https://www.google.com/search\" method=\"GET\" target=\"_blank\">\n        <input type=\"hidden\" name=\"as_sitesearch\" value=\"github.com\">\n        <div class=\"form-group\">\n          <input type=\"text\" class=\"form-control\" placeholder=\"Search github.com\" name=\"as_q\">\n        </div>\n        <button type=\"submit\" class=\"btn btn-info btn-sm\">\n          <i class=\"glyphicon glyphicon-new-window\"></i>\n          Search\n        </button>\n      </form>\n\n\n    </ul>\n  </div><!-- /.navbar-collapse -->\n  </nav>\n";
  });
    return templates['header'];});