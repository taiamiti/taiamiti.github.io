# Task: Redesign Services Grid to Match CTAs

## Status: COMPLETED ✅

## Objective
Restructure the services section grid to perfectly align with the 4 call-to-action offerings, replacing the current 5-service layout with a focused 4-service layout that matches the CTA buttons.

## Completed Implementation
- ✅ Replaced 5 generic services with 4 focused offerings
- ✅ Added inline CTA buttons within each service cell
- ✅ Updated responsive grid layout (col-md-6 col-lg-3)
- ✅ Applied consistent styling and proper spacing
- ✅ Implemented bilingual content with correct form URLs
- ✅ Removed separate CTA section to eliminate duplication

## Current Services (to be replaced)
1. Consulting (generic)
2. Prototyping  
3. Deployment
4. Skills Transfer
5. Teaching

## New Services Grid (matching CTAs)
1. **On-Demand Consulting**
2. **Data & AI Diagnostic Workshop**
3. **Generative AI Workshop** 
4. **Custom AI Solutions**

## Implementation Details

### 1. Update Services Content in sitetext.yml

**Key Change**: Each service item will include its corresponding CTA button data for inline display.

#### 1.1 English Services Section
**File**: `_data/sitetext.yml`

Replace current services list with:
```yaml
services:
  title: "Services"
  text: "Core AI consulting offerings"
  section: services
  list:
    - title: "On-Demand Consulting"
      desc: "Flexible AI strategy and technical guidance when you need it. Get expert advice on AI implementation, technology selection, and problem-solving through phone, video, or email consultations."
      icon: fas fa-lightbulb
      cta:
        title: "Get Consulting"
        url: "https://forms.gle/DhZVHqiKvFXUrsDY6"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Data & AI Diagnostic Workshop"
      desc: "Comprehensive assessment of your organization's AI readiness. Identify opportunities, evaluate data quality, and create a roadmap for AI adoption with actionable recommendations."
      icon: fas fa-chart-line
      cta:
        title: "Book Diagnostic"
        url: "https://forms.gle/DhZVHqiKvFXUrsDY6"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Generative AI Workshop"
      desc: "Hands-on training for teams and executives on leveraging generative AI tools. Learn practical applications for content creation, automation, and decision support with ethical considerations."
      icon: fas fa-robot
      cta:
        title: "Book Workshop"
        url: "https://forms.gle/DhZVHqiKvFXUrsDY6"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Custom AI Solutions"
      desc: "End-to-end development of tailored AI systems for your specific needs. From data preparation through deployment, we build production-ready solutions that deliver measurable business value."
      icon: fas fa-cogs
      cta:
        title: "Start Project"
        url: "https://forms.gle/DhZVHqiKvFXUrsDY6"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
```

#### 1.2 French Services Section
**File**: `_data/sitetext.yml`

Replace current French services with:
```yaml
services:
  title: "Services"
  text: "Mes Prestations"
  section: services
  list:
    - title: "Consulting à la Demande"
      desc: "Conseils stratégiques et techniques en IA selon vos besoins. Obtenez l'expertise d'un spécialiste pour l'implémentation, le choix technologique et la résolution de problèmes par téléphone, visio ou email."
      icon: fas fa-lightbulb
      cta:
        title: "Demander Conseil"
        url: "https://forms.gle/s9sQJUrQRasrGXtg9"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Diagnostic IA & Données"
      desc: "Évaluation complète de la maturité IA de votre organisation. Identifiez les opportunités, évaluez la qualité des données et créez une roadmap d'adoption avec des recommandations concrètes."
      icon: fas fa-chart-line
      cta:
        title: "Réserver Diagnostic"
        url: "https://forms.gle/s9sQJUrQRasrGXtg9"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Atelier IA Générative"
      desc: "Formation pratique pour équipes et dirigeants sur l'utilisation des outils d'IA générative. Apprenez les applications concrètes pour la création de contenu, l'automatisation et l'aide à la décision."
      icon: fas fa-robot
      cta:
        title: "Réserver Atelier"
        url: "https://forms.gle/s9sQJUrQRasrGXtg9"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
    - title: "Solutions IA Sur-Mesure"
      desc: "Développement complet de systèmes IA adaptés à vos besoins spécifiques. De la préparation des données au déploiement, nous créons des solutions prêtes pour la production."
      icon: fas fa-cogs
      cta:
        title: "Démarrer Projet"
        url: "https://forms.gle/s9sQJUrQRasrGXtg9"
        class: "btn btn-primary btn-lg text-uppercase mt-3"
```

### 2. Update Services Template

#### 2.1 Modify services.html to include inline CTA buttons
**File**: `_includes/services.html`

Update the service item template to include CTA buttons within each service cell:
```html
<!-- Replace the service item display (around lines 17-26) -->
{% for service in site.data.sitetext[include.lang].services.list %}
<div class="col-md-6 col-lg-3 mb-4">
  <div class="service-item text-center h-100 p-4">
    <span class="fa-stack fa-4x">
      <i class="fas fa-circle fa-stack-2x text-primary"></i>
      <i class="{{ service.icon | default: 'fas fa-cogs' }} fa-stack-1x fa-inverse"></i>
    </span>
    <h4 class="service-heading">{{ service.title | markdownify }}</h4>
    {% if service.desc %}<div class="text-muted mb-3">{{ service.desc | markdownify }}</div>{% endif %}
    {% if service.cta %}
    <a class="{{ service.cta.class }}" href="{{ service.cta.url }}" target="_blank" rel="noopener">{{ service.cta.title }}</a>
    {% endif %}
  </div>
</div>
{% endfor %}
```

#### 2.2 Grid Layout
- Change from 5 services to 4 services in clean responsive grid
- Use `col-md-6 col-lg-3` for 2x2 on tablets, 4x1 on desktop
- Add proper spacing with `mb-4` and padding on service items

#### 2.2 Service Icons
Update icons to better represent each service:
- **On-Demand Consulting**: `fas fa-lightbulb` (ideas/strategy)
- **Data & AI Diagnostic**: `fas fa-chart-line` (analysis/metrics)
- **Generative AI Workshop**: `fas fa-robot` (AI/automation)
- **Custom AI Solutions**: `fas fa-cogs` (development/engineering)

### 3. Content Strategy

#### 3.1 Service Descriptions
Each service description should:
- Clearly explain what the client receives
- Mention target audience (executives, teams, organizations)
- Include timeframe or format expectations
- Connect to business value/outcomes

#### 3.2 Consistency with CTAs
- Service titles must exactly match CTA button text
- Descriptions should prepare visitors for the form questions
- Order should match CTA button priority (consulting first, custom solutions last)

### 4. Implementation Steps

1. **Update sitetext.yml services content** (both English and French) with inline CTA data
2. **Modify services.html template** to display inline CTA buttons within each service cell
3. **Remove separate CTA section** after services (no longer needed)
4. **Test responsive design** on mobile/tablet with new grid layout
5. **Validate build** with `bundle exec jekyll build --trace`

### 5. Template Changes Required

#### 5.1 Remove Separate CTA Section
**File**: `_includes/services.html`

Remove the separate "Ready to get started?" CTA section since CTAs are now inline:
```html
<!-- REMOVE this entire section -->
<div class="row mt-5">
  <div class="col-lg-12 text-center">
    <h3 class="section-subheading text-muted mb-4">Ready to get started?</h3>
    <!-- CTA buttons section -->
  </div>
</div>
```

### 6. Testing Checklist

- [ ] Services grid displays 4 items in clean 2x2 or 4x1 layout
- [ ] Each service cell contains its own CTA button
- [ ] CTA buttons use consistent styling (btn-primary btn-lg)
- [ ] Service titles and descriptions align with CTA offerings
- [ ] Both English and French versions work correctly
- [ ] Mobile responsive design looks good (2x2 grid on mobile)
- [ ] Separate CTA section removed (no duplication)
- [ ] Build completes without errors
- [ ] All Google Form links work correctly

### 6. Success Criteria

- Clear visual connection between services and CTAs
- Consistent messaging from service description to form
- Professional, focused presentation of core offerings
- Improved user journey from learning about services to taking action

## Notes

This redesign eliminates confusion by presenting exactly 4 services that directly correspond to the 4 CTA options, creating a seamless user experience from service discovery to lead capture.