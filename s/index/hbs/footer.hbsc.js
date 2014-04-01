define(['beez'], function(beez) {
  var Handlebars = beez.vendor.Handlebars;
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['footer'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<div class=\"container\">\n  <div\">\n    <ul>\n      <li>Powered by CyberAgent Inc.</li>\n    </ul>\n  </div>\n</div>\n";
  });
    return templates['footer'];});