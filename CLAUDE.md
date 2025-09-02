# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Jekyll using a modified version of the agency-jekyll-theme. The site showcases AI/ML consulting services and portfolio projects, with bilingual support (English/French).

### Core Services Offered
- **On-Demand Consulting**: Flexible AI strategy and technical guidance
- **Data & AI Diagnostic Workshop**: Assessment of AI readiness and opportunities
- **Generative AI Workshop**: Hands-on training for teams and executives
- **Custom AI Solutions**: End-to-end AI system development and deployment

## Development Commands

### Local Development
```bash
# Install dependencies
bundle install

# Start local development server with verbose errors
bundle exec jekyll serve --trace

# Access site at http://localhost:4000
```

### Dependencies
- Ruby with Bundler
- Jekyll with remote theme support
- GitHub Pages compatible gems

## Architecture

### Site Structure
- **Jekyll Static Site**: Uses GitHub Pages with remote theme
- **Bilingual Support**: English (default) and French versions with separate layouts
- **Content Management**: YAML-driven content in `_data/sitetext.yml`
- **Collections**: Portfolio items in `_portfolio/` with language variants

### Key Directories
- `_data/`: Site configuration and content (sitetext.yml, navigation.yml, style.yml)
- `_layouts/`: Page templates with language variants (default.html, default_fr.html, etc.)
- `_includes/`: Reusable components (nav.html, footer.html, portfolio_grid.html, etc.)
- `_portfolio/`: Project case studies with English/French versions
- `_posts/`: Blog articles with language variants
- `_sass/`: SCSS styling organized by base/, components/, layout/
- `assets/`: Static assets (images, CSS, JS)

### Content Architecture
- **Multilingual Content**: Each content piece has English and French versions
- **YAML Configuration**: Site text and data centralized in `_data/sitetext.yml`
- **Portfolio Projects**: Markdown files with YAML frontmatter for project details
- **Remote Theme**: Uses `taiamiti/taiamiti.github.io` as remote theme

### Layout System
- Separate layouts for English (`default.html`, `home.html`) and French (`default_fr.html`, `home_fr.html`)
- Language-specific includes and footer components
- Responsive design with Bootstrap and custom SCSS

## Content Management

### Adding Portfolio Projects
1. Create markdown file in `_portfolio/` with YAML frontmatter
2. Include both English and French versions (suffix `_fr.md`)
3. Add corresponding images to `assets/img/portfolio/`

### Modifying Site Content
- Main content: Edit `_data/sitetext.yml` 
- Navigation: Edit `_data/navigation.yml`
- Styling: Modify SCSS files in `_sass/`

## Deployment

The site is deployed via GitHub Pages and builds automatically on push to master branch. Monitor builds at: https://github.com/taiamiti/taiamiti.github.io/actions