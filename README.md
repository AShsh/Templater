# Templater

Templater is plugin that replace custom tag, pass attributes from custom tag to template. Has an implementation realization for native js, jquery, node.js.

## Getting Started

`npm install`

Install dependencies

In the folder "src" are located sources.

`gulp build-jquery`

This task build "templater plugin" jquery version in folder "src" and minimize this file.

`gulp build-gulp`

This task build templater plugin gulp version in folder "src" and minimize this file.

`gulp build`

This task build "templater plugin" clean, gulp and jquery version in folder "src" and minimize this file.

## Usage

### Javascript 

You need add plugin file

`<script src="./path-to/templater.js"></script>`

And init tags

```javascript
templater.addTag('tag name', 'template');

templater.run();
```

Example

`
templater.addTag('bootstrap_button',
  '<button class="{{class}}" type="{{type}}"> {{html}} </button>'
);

templater.run();
`

### jquery

If you want use jquery version, you need add jquery to project before templater

`<script src="https://code.jquery.com/jquery-3.2.1.min.js"></script>`

add plugin file

`<script src="./path-to/templater.jquery-min.js"></script>`

init plugin

In jquery version you can encapsulate block where you want replace tags

`
$(selector block).templater({
  tags: {
    'tag name': 'template'
  }
});
`
Example

`
$(document).templater({
  tags: {
    'panel': '<div class="panel"><div class="panel-heading">{{heading}}</div><div class="panel-body">{{html}}</div></div>'
  }
});
`
### Node.js

If you want render page in server side you need create gulp like this

`
var gulp = require('gulp'),
    templater = require('./dist/templater.gulp-min.js');

gulp.task('templater', function() {
  return gulp.src(['./src/index.html'])

    .pipe(templater('panel','<div class="panel"></div>'))

    .pipe(gulp.dest('dist/'))
});
`