var Templater=function(){function e(e,t){for(var n=/{{(.*?)}}/g,r=[];r=n.exec(t);)e.getAttribute(r[1])&&(t=t.replace(r[0],e.getAttribute(r[1]))),"{{html}}"===r[0]&&(t=t.replace(r[0],e.innerHTML));return t}var t={};this.addTag=function(e,n){t[e]=n},this.run=function(n){n||(n=document);for(tagName in t){[].slice.call(n.getElementsByTagName(tagName)).reverse().forEach(function(n){n.outerHTML=e(n,t[tagName])})}if("undefined"==typeof window)return n.documentElement.outerHTML}},templater=new Templater,through=require("through2"),jsdom=require("jsdom"),{JSDOM:JSDOM}=jsdom;module.exports=function(e,t){return through.obj(function(n,r,o){var u=new JSDOM(n.contents.toString()),a=new Templater;a.addTag(e,t),n.contents=new Buffer(a.run(u.window.document).toString()),this.push(n)})};
