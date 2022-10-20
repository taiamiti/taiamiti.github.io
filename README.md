# My personal website

This website is built from the agency jekyll theme from [this](https://github.com/raviriley/agency-jekyll-theme) Github project. The theme was modified to :
- replace the Formspree contact form
- change layout in the "about me" section
- remove the team section
- add an aknowledgement page  

For more information on the original template, visit the original theme projects page.

[![RubyGems Downloads](https://img.shields.io/gem/dt/jekyll-agency?label=gem%20downloads)](https://rubygems.org/gems/jekyll-agency)
[![LICENSE](https://img.shields.io/badge/license-MIT-blue)](/LICENSE.txt)

## Installation as a remote theme for github pages


Update your `_config.yml` file and your `Gemfile` to 


### 1. Build locally to test your site

Install gems.

```sh
$ bundle install
```

To test the theme, run this. (Using the `--trace` flag for verbose errors.)

```sh
$ bundle exec jekyll serve --trace
```

Then open your browser at:

- http://localhost:4000

### 2. Build for Github pages

Follow this [tutorial](https://docs.github.com/en/pages/setting-up-a-github-pages-site-with-jekyll/creating-a-github-pages-site-with-jekyll) to understand how to setup github pages.

Key sections are :
- Creating a repo with the proper name and settings for publishing
- Understanding Github Actions for building the site when the repo is updated and view build/action status [here](https://github.com/taiamiti/taiamiti.github.io/actions)

## License

The theme is available as open source under the terms of the [MIT License](https://opensource.org/licenses/MIT).
