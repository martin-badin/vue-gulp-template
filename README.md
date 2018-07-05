# vue-gulp-template

## Instalation

```js
vue init martin-badin/vue-gulp-template project-name
```

## Introduction

* the template using for watching files the [Browsersync](https://browsersync.io/)
* the template is set for [vuejs](https://vuejs.org) but it can be used for some other js frameworks
* the template is set for [sass](https://sass-lang.com/)
* add support for [flow](https://flow.org/en/)

## Setup

### Update setting in [gulp.config.yml](https://github.com/martin-badin/vue-gulp-template/blob/master/gulp.config.yml)

* add path for output and update name if required
* update the proxy and add or remove path for watching files

```yaml
javascript:
  sources:
    - ./src/js/app.js
  output:
    path: ./themes/theme_name/assets/js
    name: main.min.js
style:
  sources:
    - ./src/styles/style.scss
  output:
    path: ./themes/theme_name/assets/css
    name: style.min.css
browser_sync:
  proxy: theme_name.l
  browser: google chrome
  baseDir: ./
  files:
    - ./themes/theme_name/**/*
```

## Using [postcss-env-replace](https://github.com/stehefan/postcss-env-replace)

input

```css
.foo {
  background-image: url(env_replace(BASE_URL)/myAwesomeImage.jpg);
}
```

output

```css
.foo {
  background-image: url(http://localhost/myAwesomeImage.jpg);
}
```

BASE_URL is contains in postcss.config.js file

```js
require('postcss-env-replace')({
  environment: process.env.NODE_ENV || 'development',
  replacements: {
    BASE_URL: {
      production: 'http://example.com',
      development: 'http://localhost',
    },
  },
}),
```
