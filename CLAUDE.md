# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a personal portfolio website built with Jekyll using a modified version of the agency-jekyll-theme. The site showcases AI/ML consulting services and portfolio projects, with bilingual support (English/French).

### Core Services Offered
- **On-Demand Consulting**: Flexible AI strategy and technical guidance ($350-500)
- **Data & AI Diagnostic Workshop**: Assessment of AI readiness and opportunities ($5,000)
- **Generative AI Workshop**: Hands-on training for teams and executives ($5,000)
- **Custom AI Solutions**: End-to-end AI system development and deployment ($10K-150K+)

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
- GitHub Pages compatible gems (see Gemfile for specifics)

### Bundle Management
```bash
# Update dependencies after any Gemfile changes
bundle update

# Force clean install if needed
bundle clean --force && bundle install
```

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
- **Service Pages**: Dedicated pages for each service with professional templates
- **Blog Posts**: Language-specific posts in `_posts/` with `_fr.md` suffix pattern
- **Remote Theme**: Uses `taiamiti/taiamiti.github.io` as remote theme

### Portfolio Structure
Each portfolio item follows this pattern:
- **English version**: `_portfolio/YYYY-project-name.md`
- **French version**: `_portfolio/YYYY-project-name_fr.md` 
- **Required frontmatter**: `lang`, `caption` (title/subtitle/thumbnail), `title`, `subtitle`, `image`, `year`, `category`, `client`
- **Assets**: Corresponding images in `assets/img/portfolio/`

### Service Pages Structure
Each service has dedicated pages in both languages:
- **English**: `services/[service-name].html` with permalink `/services/[service-name]/`
- **French**: `fr/services/[service-name].html` with permalink `/fr/services/[service-name]/`
- **Template**: Professional hero section + overview + detailed sections + pricing
- **Navigation**: Includes `{% include nav.html lang="[lang]" %}` for site navigation
- **Assets**: Use absolute paths (`/assets/css/...`) for proper loading from nested URLs

### Layout System
- Separate layouts for English (`default.html`, `home.html`) and French (`default_fr.html`, `home_fr.html`)
- Language-specific includes and footer components
- Service navigation via `nav.html` include (not `navheader.html` to avoid duplicate headers)
- Responsive design with Bootstrap and custom SCSS

### Asset Path Management
**CRITICAL**: All image references in templates must use the `| relative_url` filter to ensure proper loading from French pages:
- **Portfolio images**: `{{ project.caption.thumbnail | relative_url }}` in `portfolio_grid.html`
- **Modal images**: `{{ project.image | relative_url }}` in `modals.html`  
- **About photos**: `{{ site.data.sitetext[include.lang].about.photo | relative_url }}` in `about.html`
- **Timeline images**: `{{ event.image | relative_url }}` in `timeline.html`
- **Team images**: `{{ person.image | relative_url }}` in `team.html`

Without `relative_url` filter, French pages (`/fr/`) incorrectly resolve `assets/img/...` paths as `/fr/assets/img/...` causing 404 errors.

## Content Management

### Adding Portfolio Projects
1. Create markdown file in `_portfolio/` with YAML frontmatter
2. Include both English and French versions (suffix `_fr.md`)
3. Add corresponding images to `assets/img/portfolio/`

### Modifying Site Content
- Main content: Edit `_data/sitetext.yml` 
- Navigation: Edit `_data/navigation.yml`
- Styling: Modify SCSS files in `_sass/`
- Site-wide styling variables: `_data/style.yml`

### Adding Blog Posts
1. Create markdown file in `_posts/` with date prefix: `YYYY-MM-DD-title.md`
2. Include French version with `_fr.md` suffix
3. Use standard Jekyll post frontmatter with `lang` field

### Managing Service Pages
Service pages use a consistent template structure:
1. **Navigation**: Always include `{% include nav.html lang="[lang]" %}` at the top
2. **Hero Section**: Service-specific hero with clear value proposition and CTA buttons
3. **Overview Section**: Main description with key details in info cards
4. **Detailed Sections**: Service-specific content (process, features, case studies, etc.)
5. **Pricing Section**: Clear pricing structure with packages and CTAs
6. **Links**: Navigation links in `_data/sitetext.yml` must use permalink URLs (not .html files)

## Deployment

The site is deployed via GitHub Pages and builds automatically on push to master branch. Monitor builds at: https://github.com/taiamiti/taiamiti.github.io/actions