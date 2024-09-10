# prettier-plugin-tt2-template

Formatter plugin for Template Toolkit (TT2) template files.

## Install

```bash
npm install --save-dev https://github.com/3w36zj6/prettier-plugin-tt2-template
```

Add the plugin to your `.prettierrc`:
```json
{
  "plugins": ["prettier-plugin-tt2-template"]
}
```

## Use

To format basic .html files, you'll have to override the used parser inside your `.prettierrc`:
```json
{
  "overrides": [
    {
      "files": ["*.html"],
      "options": {
        "parser": "tt2-template"
      }
    }
  ]
}
```

Run it on all html files in your project:
```bash
npx prettier --write **/*.html
```

If you don't have a prettier config you can run the plugin with this command:
```bash
npx prettier --plugin=prettier-plugin-tt2-template --parser=tt2-template --write **/*.html
```

### Ignoring Code

Using range ignores is the best way to tell prettier to igone part of files. Most of the time this is necessary for TT2 tags inside `script` or `style` tags:

```html
<!-- prettier-ignore-start -->
  <script>
    window.someData = [% data | safe %]
  </script>
<!-- prettier-ignore-end -->

<!-- prettier-ignore-start -->
  <style>
    :root { --accent-color: [% theme_accent_color %] }
  </style>
<!-- prettier-ignore-end -->
```

Or using TT2 comments:
```tt2
[%# prettier-ignore-start #%]
  <script>
    window.someData = [% data | safe %]
  </script>
[%# prettier-ignore-end #%]

[%# prettier-ignore-start #%]
  <style>
    :root { --accent-color: [% theme_accent_color %] }
  </style>
[%# prettier-ignore-end #%]
```

## LICENSE

This repository is a fork of [@davidodenwald/prettier-plugin-jinja-template](https://github.com/davidodenwald/prettier-plugin-jinja-template). The license will continue to be the original MIT.

