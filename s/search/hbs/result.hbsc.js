define(['beez'], function(beez) {
  var Handlebars = beez.vendor.Handlebars;
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['result'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n<p>Github Seach result</p>\n\n<p>Total : ";
  if (stack1 = helpers.total) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.total); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n";
  return buffer;
  }

function program3(depth0,data) {
  
  var buffer = "", stack1, stack2;
  buffer += "\n\n  <div class=\"panel panel-default\">\n    <div class=\"panel-heading\">\n      <a href=\"https://github.com/";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.full_name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\" target=\"_blank\">";
  if (stack1 = helpers.full_name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.full_name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a>\n    </div>\n    <div class=\"panel-body\">\n      <p>";
  if (stack1 = helpers.description) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.description); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</p>\n    </div>\n\n    <table class=\"table\">\n      <tbody>\n        <tr><td>name</td><td>";
  if (stack1 = helpers.name) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.name); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>clone_url</td><td>";
  if (stack1 = helpers.clone_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.clone_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>created_at</td><td>";
  if (stack1 = helpers.created_at) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.created_at); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>default_branch</td><td>";
  if (stack1 = helpers.default_branch) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.default_branch); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>fork</td><td>";
  if (stack1 = helpers.fork) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.fork); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>forks</td><td>";
  if (stack1 = helpers.forks) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.forks); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>forks_count</td><td>";
  if (stack1 = helpers.forks_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.forks_count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>git_url</td><td>";
  if (stack1 = helpers.git_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.git_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>has_downloads</td><td>";
  if (stack1 = helpers.has_downloads) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.has_downloads); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>has_issues</td><td>";
  if (stack1 = helpers.has_issues) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.has_issues); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>has_wiki</td><td>";
  if (stack1 = helpers.has_wiki) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.has_wiki); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>homepage</td><td>";
  if (stack1 = helpers.homepage) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.homepage); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>html_url</td><td><a href=\"";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.html_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\">";
  if (stack1 = helpers.html_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.html_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</a></td></tr>\n        <tr><td>id</td><td>";
  if (stack1 = helpers.id) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.id); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>language</td><td>";
  if (stack1 = helpers.language) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.language); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>master_branch</td><td>";
  if (stack1 = helpers.master_branch) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.master_branch); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>mirror_url</td><td>";
  if (stack1 = helpers.mirror_url) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.mirror_url); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>open_issues</td><td>";
  if (stack1 = helpers.open_issues) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.open_issues); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>open_issues_count</td><td>";
  if (stack1 = helpers.open_issues_count) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.open_issues_count); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "</td></tr>\n        <tr><td>owner avatar_url</td><td><img width=\"100px\" height=\"100px\" src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.avatar_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"></td></tr>\n        <tr><td>owner gravatar_id</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.gravatar_id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n        <tr><td>owner html_url</td><td><a href=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\">"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.html_url)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</a></td></tr>\n        <tr><td>owner id</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.id)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n        <tr><td>owner login</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.login)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n        <tr><td>owner site_admin</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.site_admin)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n        <tr><td>owner type</td><td>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.owner)),stack1 == null || stack1 === false ? stack1 : stack1.type)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</td></tr>\n        <tr><td>private</td><td>";
  if (stack2 = helpers['private']) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0['private']); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>pushed_at</td><td>";
  if (stack2 = helpers.pushed_at) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.pushed_at); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>score</td><td>";
  if (stack2 = helpers.score) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.score); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>size</td><td>";
  if (stack2 = helpers.size) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.size); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>ssh_url</td><td>";
  if (stack2 = helpers.ssh_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.ssh_url); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>svn_url</td><td>";
  if (stack2 = helpers.svn_url) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.svn_url); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>updated_at</td><td>";
  if (stack2 = helpers.updated_at) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.updated_at); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>watchers</td><td>";
  if (stack2 = helpers.watchers) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.watchers); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n        <tr><td>watchers_count</td><td>";
  if (stack2 = helpers.watchers_count) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.watchers_count); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "</td></tr>\n      </tbody>\n    </table>\n  </div>\n";
  return buffer;
  }

  buffer += "<hr>\n";
  stack1 = helpers['if'].call(depth0, (depth0 && depth0.author), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  stack1 = helpers.each.call(depth0, (depth0 && depth0.result), {hash:{},inverse:self.noop,fn:self.program(3, program3, data),data:data});
  if(stack1 || stack1 === 0) { buffer += stack1; }
  buffer += "\n";
  return buffer;
  });
    return templates['result'];});