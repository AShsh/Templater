var Templater = function () {
  var listTags = {};

  this.addTag = function (tagName, template) {
    listTags[tagName] = template;
  };

  function render (element, template) {
    var regex = /{{(.*?)}}/g,
        matches = [];

    while (matches = regex.exec(template)) {
      if (element.getAttribute(matches[1])) {
        template = template.replace(matches[0], element.getAttribute(matches[1]));
      }

      if (matches[0] === "{{html}}") {
        template = template.replace(matches[0], element.innerHTML);
      }
    }
    return template;
  };

  this.run = function (wrap) {
    if (!wrap) {
      wrap = document;
    }

    for (tagName in listTags) {
      var tags = [].slice.call(wrap.getElementsByTagName(tagName)).reverse();
      tags.forEach(function (el) {
        el.outerHTML = render(el, listTags[tagName]);
      });
    }

    if (typeof window === "undefined") {
      return wrap.documentElement.outerHTML;
    }
  };
};

var templater = new Templater();
