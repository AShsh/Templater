var through = require('through2'),
    jsdom = require("jsdom"),
    {JSDOM} = jsdom;

module.exports = function (tagName, template) {
  return through.obj(function (file, enc, cb) {
    var dom = new JSDOM(file.contents.toString()),
        templater = new Templater();

    templater.addTag(tagName, template);
    file.contents = new Buffer(templater.run(dom.window.document).toString());

    this.push(file);

  });
};
