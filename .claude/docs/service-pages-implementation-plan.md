# Service Pages Implementation Plan - Phase 1.2b

## Overview
Implement dedicated service pages for the 4 core AI consulting offerings, based on the updated content document. Each service will have both English and French versions following the existing site architecture.

## Key Changes Identified from Updated Content:
- **On-Demand Consulting**: More realistic 3-hour sessions, added in-person option, data analysis expertise, adjusted pricing ($350 starting)
- **Data & AI Diagnostic**: Restructured as 3×2-hour sessions with 7-day prep, increased pricing to $5,000
- **Generative AI Workshop**: Renamed to "Corporate Course", partnership with L'agence, structured as 2×3-hour sessions
- **Custom AI Solutions**: More conservative pricing ($10K-$20K small projects), updated case studies, added GenerativeAI tech stack

## Implementation Plan

### Phase 1: Create Service Page Templates (2 tasks)
#### Task 1.1: Create Service Page Layout Template
- **File**: `_layouts/service.html` (English version)
- **Components**:
  - Hero section with headline/subheadline
  - Navigation breadcrumbs
  - Service overview section
  - Detailed content sections (What You Get, Pricing, Process, etc.)
  - CTA sections throughout
  - Footer with contact info

#### Task 1.2: Create French Service Page Layout Template
- **File**: `_layouts/service_fr.html` (French version)
- **Components**: Mirror of English template with French-specific includes

### Phase 2: Implement Individual Service Pages (8 tasks)
#### Task 2.1: On-Demand Consulting - English Page
- **File**: `services/on-demand-consulting.html`
- **Content**: 3-hour sessions, $350 pricing, in-person option, data analysis focus
- **Layout**: service.html
- **Key sections**: Service options, expertise areas, industries served

#### Task 2.2: On-Demand Consulting - French Page
- **File**: `services/consultation-sur-demande.html`
- **Content**: French translation of updated content
- **Layout**: service_fr.html

#### Task 2.3: Data & AI Diagnostic - English Page
- **File**: `services/data-ai-diagnostic.html`
- **Content**: 3×2-hour format, $5,000 pricing, 7-day prep emphasis
- **Key sections**: 3-session breakdown, deliverables, follow-up support

#### Task 2.4: Data & AI Diagnostic - French Page
- **File**: `services/diagnostic-donnees-ia.html`
- **Content**: French translation with cultural adaptations

#### Task 2.5: Generative AI Corporate Course - English Page
- **File**: `services/generative-ai-course.html`
- **Content**: Corporate focus, L'agence partnership, 2-day structure
- **Key sections**: Course structure, interactive learning, pricing packages

#### Task 2.6: Generative AI Corporate Course - French Page
- **File**: `services/cours-ia-generative.html`
- **Content**: French version with L'agence integration

#### Task 2.7: Custom AI Solutions - English Page
- **File**: `services/custom-ai-solutions.html`
- **Content**: 4-phase process, updated pricing ($10K-$150K range), case studies
- **Key sections**: Process phases, solution types, success stories, guarantees

#### Task 2.8: Custom AI Solutions - French Page
- **File**: `services/solutions-ia-personnalisees.html`
- **Content**: French translation with localized examples

### Phase 3: Update Site Navigation & Integration (4 tasks)
#### Task 3.1: Update Service Grid CTAs
- **File**: `_data/sitetext.yml`
- **Action**: Update service CTA buttons to link to dedicated service pages instead of forms
- **Pattern**: Change from "https://forms.gle/..." to "/services/service-name.html"

#### Task 3.2: Update Header CTA Buttons
- **File**: `_data/sitetext.yml`
- **Action**: Update header CTA buttons to link to service pages with anchor to pricing sections
- **Pattern**: "/services/service-name.html#pricing"

#### Task 3.3: Add Services to Main Navigation (Optional)
- **File**: `_data/navigation.yml`
- **Action**: Consider adding "Services" dropdown to main nav with links to individual service pages
- **Implementation**: Add dropdown menu structure if desired

#### Task 3.4: Update French Navigation
- **File**: `_data/navigation.yml` (French section)
- **Action**: Mirror English navigation updates for French version

### Phase 4: Styling & Responsive Design (3 tasks)
#### Task 4.1: Create Service Page Styles
- **File**: `_sass/layout/_services-detail.scss`
- **Components**:
  - Hero section styling
  - Content section layout (2-column where appropriate)
  - Pricing table/card styles
  - CTA button variations
  - Process timeline/steps styling

#### Task 4.2: Responsive Breakpoints
- **Action**: Ensure service pages work well on mobile, tablet, desktop
- **Key areas**: Hero sections, pricing tables, process diagrams
- **Testing**: Bootstrap grid system integration

#### Task 4.3: Typography & Visual Hierarchy
- **Action**: Establish consistent typography scale for service pages
- **Elements**: Headlines, subheadings, body text, pricing emphasis
- **Integration**: Match existing site typography patterns

### Phase 5: Content Integration & SEO (3 tasks)
#### Task 5.1: Add Schema Markup
- **Action**: Implement structured data for services
- **Types**: Service schema, LocalBusiness, Organization
- **Benefits**: Improved search visibility

#### Task 5.2: Meta Tags & SEO Optimization
- **Action**: Add service-specific meta descriptions, titles, keywords
- **Pattern**: Follow existing Jekyll SEO plugin structure
- **Implementation**: Use frontmatter for meta data

#### Task 5.3: Internal Linking Strategy
- **Action**: Add contextual links between services and portfolio projects
- **Examples**: Link coral reef projects to Custom AI Solutions, etc.
- **Benefit**: Improved SEO and user journey

### Phase 6: Testing & Quality Assurance (3 tasks)
#### Task 6.1: Cross-browser Testing
- **Browsers**: Chrome, Firefox, Safari, Edge
- **Focus**: Layout consistency, CTA functionality, responsive design
- **Tools**: Browser dev tools, responsive design mode

#### Task 6.2: Performance Testing
- **Metrics**: Page load times, image optimization, CSS/JS minification
- **Tools**: Lighthouse, PageSpeed Insights
- **Target**: Maintain current site performance levels

#### Task 6.3: Content Review & Proofreading
- **English**: Grammar, consistency, CTA clarity
- **French**: Translation accuracy, cultural appropriateness
- **Technical**: Pricing accuracy, contact form links

## File Structure After Implementation
```
/services/
  ├── on-demand-consulting.html
  ├── consultation-sur-demande.html
  ├── data-ai-diagnostic.html
  ├── diagnostic-donnees-ia.html
  ├── generative-ai-course.html
  ├── cours-ia-generative.html
  ├── custom-ai-solutions.html
  └── solutions-ia-personnalisees.html

/_layouts/
  ├── service.html (new)
  └── service_fr.html (new)

/_sass/layout/
  └── _services-detail.scss (new)
```

## Success Metrics
- [ ] All 8 service pages load correctly
- [ ] Navigation flows work from homepage → service page → contact form
- [ ] Mobile responsiveness across all service pages
- [ ] French/English language switching maintains service context
- [ ] CTA conversion tracking setup (forms still capture service source)
- [ ] Page load times under 3 seconds
- [ ] SEO meta data properly implemented

## Implementation Priority Order
1. **Highest Priority**: Create layouts and On-Demand Consulting pages (most requested service)
2. **High Priority**: Data & AI Diagnostic and Custom AI Solutions pages
3. **Medium Priority**: Generative AI Corporate Course pages
4. **Low Priority**: Navigation updates, SEO optimization, advanced styling

## Rollback Plan
- Keep existing service grid CTAs functional during development
- Implement service pages in staging/development branch first
- Test all navigation flows before deploying changes
- Maintain current form links as backup during transition

## Resources Required
- Design decisions for pricing tables and process visualizations
- French translation review for technical terms
- Final content approval for pricing and service descriptions
- Form integration testing to ensure lead capture continues working