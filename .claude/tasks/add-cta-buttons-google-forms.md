# Task: Add Clear Calls-to-Action with Google Forms Integration

## Status: COMPLETED ✅

## Objective
Implement prominent CTA buttons on the homepage that link to Google Forms for lead capture and client inquiries, with email notifications enabled. Additionally, restructure the services grid to align with the 4 CTA offerings for consistency.

## Completed Implementation
- ✅ Removed CTA buttons from header (overlapping layout issue resolved)
- ✅ Integrated CTA buttons directly into services grid cells
- ✅ Updated services content to match 4 core offerings
- ✅ Implemented bilingual support with proper Google Forms URLs
- ✅ Applied consistent primary button styling throughout

## Implementation Details

### 1. Google Forms Setup (External - Manual Step)
Create four Google Forms with email notifications:

#### Form 1: On-Demand Consulting Request
- **URL Pattern**: `https://forms.gle/[form-id]`
- **Fields**:
  - Name (required)
  - Email (required)
  - Company/Organization (required)
  - Industry sector (dropdown: Technology, Healthcare, Manufacturing, Retail, Finance, Government, Other)
  - Consulting need (multiple choice: Strategy & Planning, Technical Review, Implementation Guidance, Problem-Solving, Other)
  - Brief description of challenge/question (paragraph)
  - Urgency level (multiple choice: Same day, Within week, Within month, No rush)
  - Preferred consultation format (multiple choice: Phone call, Video call, Email exchange, In-person if in Tahiti)
- **Notification**: Enable email notifications to taiamiti.edmunds@ml4everyone.com

#### Form 2: Data & AI Diagnostic Workshop
- **URL Pattern**: `https://forms.gle/[form-id]`
- **Fields**:
  - Name (required)
  - Email (required)
  - Company/Organization (required)
  - Company size (dropdown: 1-10, 11-50, 51-200, 200+)
  - Current data/AI maturity (multiple choice: No AI experience, Basic analytics, Some AI tools, Advanced AI systems)
  - Main business challenges (checkboxes: Data organization, Process automation, Decision making, Customer insights, Cost reduction, Other)
  - Workshop format preference (multiple choice: Half-day remote, Full-day remote, Multi-day engagement, In-person if possible)
  - Timeline to get started (dropdown: Within 2 weeks, Within month, Within quarter, Just exploring)
- **Notification**: Enable email notifications to taiamiti.edmunds@ml4everyone.com

#### Form 3: Generative AI Workshop Request
- **URL Pattern**: `https://forms.gle/[form-id]`
- **Fields**:
  - Name (required)
  - Email (required)
  - Company/Organization (required)
  - Target audience (multiple choice: Executives, Marketing team, Development team, General staff, Mixed audience)
  - Current GenAI usage (multiple choice: None, Basic tools like ChatGPT, Advanced tools, Custom implementations)
  - Workshop focus areas (checkboxes: Content creation, Customer service, Process automation, Code generation, Decision support, Ethics & governance)
  - Group size (dropdown: 1-5, 6-15, 16-30, 30+)
  - Preferred delivery (multiple choice: Interactive demo, Hands-on training, Strategic planning session, Technical deep-dive)
  - Timeline (dropdown: Within 2 weeks, Within month, Within quarter, Just exploring)
- **Notification**: Enable email notifications to taiamiti.edmunds@ml4everyone.com

#### Form 4: Custom AI Solution Development
- **URL Pattern**: `https://forms.gle/[form-id]`
- **Fields**:
  - Name (required)
  - Email (required)
  - Company/Organization (required)
  - Industry sector (dropdown)
  - Project description (paragraph - business problem to solve)
  - Data availability (multiple choice: Rich datasets ready, Some data available, Limited data, Need data strategy)
  - Technical requirements (checkboxes: Real-time processing, Mobile deployment, Cloud deployment, On-premise, API integration)
  - Budget range (dropdown: Under $10k, $10k-$50k, $50k-$100k, $100k+, To be discussed)
  - Project timeline (dropdown: 1-3 months, 3-6 months, 6-12 months, Ongoing partnership)
  - Success metrics (paragraph - how you'll measure success)
- **Notification**: Enable email notifications to taiamiti.edmunds@ml4everyone.com

### 2. Website Implementation

#### 2.1 Update Header Section CTAs
**File**: `_data/sitetext.yml`

Add new CTA buttons to header section:
```yaml
header:
  title: Make AI accessible
  text: Taiamiti Edmunds
  button: Tell Me More
  buttonlink: "#services"
  cta_buttons:
    - title: "On-Demand Consulting"
      url: "https://forms.gle/[consulting-form-id]"
      class: "btn btn-primary btn-xl text-uppercase mr-3"
    - title: "Data & AI Diagnostic"
      url: "https://forms.gle/[diagnostic-form-id]"
      class: "btn btn-outline-primary btn-xl text-uppercase mr-3"
    - title: "GenAI Workshop"
      url: "https://forms.gle/[genai-workshop-form-id]"
      class: "btn btn-outline-primary btn-xl text-uppercase mr-3"
    - title: "Custom AI Solutions"
      url: "https://forms.gle/[custom-solution-form-id]"
      class: "btn btn-secondary btn-xl text-uppercase"
```

#### 2.2 Update Header Template
**File**: `_includes/navheader.html`

Modify header section to include CTA buttons after existing button:
```html
<!-- Add after existing button (around line 73 and 89) -->
{% if site.data.sitetext[include.lang].header.cta_buttons %}
<div class="mt-4">
  {% for cta in site.data.sitetext[include.lang].header.cta_buttons %}
  <a class="{{ cta.class }}" href="{{ cta.url }}" target="_blank" rel="noopener">{{ cta.title }}</a>
  {% endfor %}
</div>
{% endif %}
```

#### 2.3 Add CTAs to Services Section
**File**: `_includes/services.html`

Add CTA section after services list (around line 28):
```html
<!-- Add after services list -->
<div class="row mt-5">
  <div class="col-lg-12 text-center">
    <h3 class="section-subheading text-muted mb-4">Ready to get started?</h3>
    {% if include.lang and include.lang != "" and include.lang != nil %}
    {% if site.data.sitetext[include.lang].header.cta_buttons %}
    {% for cta in site.data.sitetext[include.lang].header.cta_buttons %}
    <a class="{{ cta.class }} mb-2" href="{{ cta.url }}" target="_blank" rel="noopener">{{ cta.title }}</a>
    {% endfor %}
    {% endif %}
    {% else %}
    {% if site.data.sitetext.header.cta_buttons %}
    {% for cta in site.data.sitetext.header.cta_buttons %}
    <a class="{{ cta.class }} mb-2" href="{{ cta.url }}" target="_blank" rel="noopener">{{ cta.title }}</a>
    {% endfor %}
    {% endif %}
    {% endif %}
  </div>
</div>
```

#### 2.4 Add French Translation
**File**: `_data/sitetext.yml`

Add French CTA buttons:
```yaml
fr:
  header:
    title: Rendre l'IA accessible
    text: Taiamiti Edmunds
    button: Plus d'infos
    buttonlink: "#services"
    cta_buttons:
      - title: "Consulting à la Demande"
        url: "https://forms.gle/[consulting-form-id]"
        class: "btn btn-primary btn-xl text-uppercase mr-3"
      - title: "Diagnostic IA & Données"
        url: "https://forms.gle/[diagnostic-form-id]"
        class: "btn btn-outline-primary btn-xl text-uppercase mr-3"
      - title: "Atelier IA Générative"
        url: "https://forms.gle/[genai-workshop-form-id]"
        class: "btn btn-outline-primary btn-xl text-uppercase mr-3"
      - title: "Solutions IA Sur-Mesure"
        url: "https://forms.gle/[custom-solution-form-id]"
        class: "btn btn-secondary btn-xl text-uppercase"
```

### 3. Styling Considerations

#### 3.1 Button Styling
Ensure proper spacing and responsiveness:
```scss
/* Add to _sass/components/_buttons.scss if needed */
.btn-xl {
  margin-bottom: 1rem;
}

@media (max-width: 768px) {
  .btn-xl {
    display: block;
    width: 100%;
    margin-bottom: 1rem;
  }
}
```

#### 3.2 Header Layout
Adjust header layout to accommodate multiple buttons without overwhelming the design.

### 4. Testing Checklist

#### 4.1 Form Testing
- [ ] Test each Google Form submits successfully
- [ ] Verify email notifications are received
- [ ] Check form validation works properly
- [ ] Test on mobile devices

#### 4.2 Website Testing
- [ ] Verify CTAs appear correctly on both English and French versions
- [ ] Test button links open Google Forms in new tabs
- [ ] Check responsive design on mobile/tablet
- [ ] Validate with `bundle exec jekyll serve --trace`

#### 4.3 User Experience
- [ ] Ensure CTAs don't overwhelm the design
- [ ] Verify proper contrast and accessibility
- [ ] Test loading performance impact

### 5. Implementation Order

1. **Manual Setup**: Create Google Forms and enable notifications
2. **Update sitetext.yml**: Add CTA button data for both languages
3. **Restructure services grid**: Update services content to match 4 CTA offerings (see redesign-services-grid.md task)
4. **Update services.html**: Add CTAs after services list
5. **Test locally**: Verify appearance and functionality
6. **Deploy**: Push changes and test live site

### 6. Related Tasks
- See `redesign-services-grid.md` for detailed services section restructuring
- Services grid must be updated to match CTA offerings for consistency

### 6. Success Metrics to Track

- Form submission rates
- Conversion from visitor to lead
- Email notifications received per week
- Which CTA performs best (track via Google Forms responses)

### 7. Future Enhancements

- Add Google Analytics event tracking for CTA clicks
- A/B test different CTA text and placement
- Create thank-you pages after form submission
- Set up automated email sequences for form submissions

## Notes

- Google Forms provides built-in spam protection
- Forms will work across all devices and browsers
- Email notifications provide immediate lead alerts
- Can easily modify form questions without code changes
- Consider creating backup contact method in case Google Forms is blocked in some regions