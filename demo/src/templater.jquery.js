(function ($) {
  jQuery.fn.templater = function (data) {
    var templater = new Templater();

    for (tagName in data.tags) {
      templater.addTag(tagName, data.tags[tagName]);
    }

    templater.run(this[0]);
  };
}(jQuery));
