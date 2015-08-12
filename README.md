This is a prototype of our site redesign in [Jekyll](http://jekyllrb.com). It can be seen at http://brigleb.github.io/needmore-jekyll/ while in development.

When launching it locally, use `jekyll serve --baseurl ''` since it is being hosted as a GitHub Pages [project page](http://jekyllrb.com/docs/github-pages/).

## Formatting assets

We need assets delivered in three pieces.

First, the logo, as an SVG file, named like `logo_lamarzocco.svg` where the lamarzocco part is just the client name. This should be a clean and simple vector, in pure white (#fff).

Second, the graphic, as an SVG file, named like `work_lamarzocco.svg` like above. A few lines in, you'll see a `<path>` section, and its `id` needs to be unique and is used three times in the document. So I'd just go with `path-clientname` for example, since that will always be unique. You will have to change any occurence of `path-1` to match that, or whatever you are given. (Your best bet is just to replace the quoted path garbage string!)

Third, the JPEG image that is cropped by the path of that graphic. It should be compressed to 100kb or less if possible, and should be named similarly: like `work_lamarzocco.jpg`.

I need these all delivered in a single folder.
