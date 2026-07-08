const fs = require('fs');
const path = require('path');

// Load Data Modules
const siteConfig = require('./data/siteConfig');
const services = require('./data/services');
const locations = require('./data/locations');

// Output directories
const distDir = path.join(__dirname, '..'); // Output directly in the workspace root

// Create directories helper
function ensureDirExists(dirPath) {
  if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath, { recursive: true });
  }
}

// Escape HTML for template rendering
function escapeHtml(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

// Retrieve nested properties
function getProp(obj, keyPath) {
  if (keyPath === 'this') {
    return (obj && typeof obj === 'object' && 'this' in obj) ? obj.this : obj;
  }
  return keyPath.split('.').reduce((acc, part) => acc && acc[part], obj);
}

// Extremely simple compiler with loops and conditionals
function compileTemplate(templateStr, data) {
  let result = templateStr;

  // Handle loops: {{#each arrayName}} ... {{/each}}
  const eachRegex = /\{\{#each\s+([\w.]+)\}\}([\s\S]*?)\{\{\/each\}\}/g;
  let eachMatch;
  while ((eachMatch = eachRegex.exec(result)) !== null) {
    const fullMatch = eachMatch[0];
    const arrayPath = eachMatch[1];
    const innerContent = eachMatch[2];
    
    const arr = getProp(data, arrayPath);
    let loopHtml = '';
    
    if (arr && Array.isArray(arr)) {
      loopHtml = arr.map(item => {
        // If array item is a string/primitive, wrap it
        const context = typeof item === 'object' ? { ...item, parent: data } : { this: item, parent: data };
        return compileTemplate(innerContent, context);
      }).join('');
    }
    
    result = result.replace(fullMatch, loopHtml);
    eachRegex.lastIndex = 0; // Reset index since string length changed
  }

  // Handle times loop: {{#times stars}} ... {{/times}}
  const timesRegex = /\{\{#times\s+(\w+)\}\}([\s\S]*?)\{\{\/times\}\}/g;
  let timesMatch;
  while ((timesMatch = timesRegex.exec(result)) !== null) {
    const fullMatch = timesMatch[0];
    const countKey = timesMatch[1];
    const innerContent = timesMatch[2];
    
    const count = parseInt(data[countKey], 10);
    let timesHtml = '';
    if (!isNaN(count) && count > 0) {
      timesHtml = innerContent.repeat(count);
    }
    
    result = result.replace(fullMatch, timesHtml);
    timesRegex.lastIndex = 0;
  }

  // Handle triple braces: {{{key}}} (unescaped HTML)
  const tripleBraceRegex = /\{\{\{([\s\S]*?)\}\}\}/g;
  result = result.replace(tripleBraceRegex, (match, key) => {
    const val = getProp(data, key.trim());
    return val !== undefined && val !== null ? val : '';
  });

  // Handle double braces: {{key}} (escaped HTML)
  const doubleBraceRegex = /\{\{([\s\S]*?)\}\}/g;
  result = result.replace(doubleBraceRegex, (match, key) => {
    const val = getProp(data, key.trim());
    if (val === undefined || val === null) return '';
    return escapeHtml(String(val));
  });

  return result;
}

// Generate JSON-LD Schema wrapper
function wrapSchema(schemaObj) {
  return `<script type="application/ld+json">\n${JSON.stringify(schemaObj, null, 2)}\n</script>`;
}

// Generate Organization Schema
function getOrgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": siteConfig.company.name,
    "url": `https://${siteConfig.company.domain}`,
    "logo": `https://${siteConfig.company.domain}/images/logo.png`,
    "sameAs": [
      siteConfig.company.facebookUrl,
      siteConfig.company.twitterUrl
    ]
  };
}

// Generate LocalBusiness Schema
function getLocalBusinessSchema(cityName) {
  return {
    "@context": "https://schema.org",
    "@type": "PestControl",
    "name": siteConfig.company.name,
    "image": `https://${siteConfig.company.domain}/images/office.jpg`,
    "telephone": siteConfig.company.phone,
    "url": `https://${siteConfig.company.domain}/`,
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "3900 SW 2nd Court",
      "addressLocality": "Fort Lauderdale",
      "addressRegion": "FL",
      "postalCode": "33312",
      "addressCountry": "US"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "26.113279",
      "longitude": "-80.187311"
    },
    "openingHoursSpecification": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": [
        "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
      ],
      "opens": "07:00",
      "closes": "20:00"
    },
    "areaServed": {
      "@type": "AdministrativeArea",
      "name": cityName || "South Florida"
    },
    "priceRange": "$$"
  };
}

// Generate FAQ Schema
function getFaqSchema(faqs) {
  if (!faqs || faqs.length === 0) return null;
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };
}

// Generate Breadcrumbs HTML & Schema
function buildBreadcrumbs(crumbs) {
  // Crumbs = array of { name, path }
  let html = `<div class="breadcrumbs">\n  <div class="container">\n    <ol class="breadcrumbs-list" aria-label="Breadcrumb">\n`;
  html += `      <li><a href="/">Home</a></li>\n`;
  
  crumbs.forEach((crumb, index) => {
    if (index === crumbs.length - 1) {
      html += `      <li aria-current="page">${crumb.name}</li>\n`;
    } else {
      html += `      <li><a href="${crumb.path}">${crumb.name}</a></li>\n`;
    }
  });
  html += `    </ol>\n  </div>\n</div>`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": `https://${siteConfig.company.domain}/`
      },
      ...crumbs.map((crumb, index) => ({
        "@type": "ListItem",
        "position": index + 2,
        "name": crumb.name,
        "item": `https://${siteConfig.company.domain}${crumb.path}`
      }))
    ]
  };

  return { html, schemaXml: wrapSchema(schema) };
}

// Master compilation method
function renderPage(templateName, pageData, outPath, crumbs = []) {
  const layoutTemplate = fs.readFileSync(path.join(__dirname, 'templates', 'layout.html'), 'utf8');
  const pageTemplate = fs.readFileSync(path.join(__dirname, 'templates', `${templateName}.html`), 'utf8');

  // Render the page body contents
  const bodyContent = compileTemplate(pageTemplate, pageData);

  // Compile active tab styles
  const activeStates = {
    homeActive: templateName === 'homepage' ? 'active' : '',
    servicesActive: templateName === 'services' || pageData.isServiceHub || templateName === 'protection-plan' ? 'active' : '',
    termiteActive: pageData.slug === 'termite-control' ? 'active' : '',
    resActive: pageData.slug === 'residential-pest-control' ? 'active' : '',
    comActive: pageData.slug === 'commercial-pest-control' ? 'active' : '',
    areasActive: templateName === 'service-areas' || pageData.isAreaPage ? 'active' : '',
    specialsActive: templateName === 'specials' ? 'active' : '',
    aboutActive: templateName === 'about' ? 'active' : '',
    contactActive: templateName === 'contact' ? 'active' : '',
  };

  // Compile Breadcrumbs
  let breadcrumbsHtml = '';
  let breadcrumbSchema = '';
  if (crumbs.length > 0) {
    const breadcrumbResult = buildBreadcrumbs(crumbs);
    breadcrumbsHtml = breadcrumbResult.html;
    breadcrumbSchema = breadcrumbResult.schemaXml;
  }

  // Aggregate schemas
  let pageSchemas = wrapSchema(getOrgSchema());
  if (pageData.schemaList && Array.isArray(pageData.schemaList)) {
    pageData.schemaList.forEach(s => {
      pageSchemas += '\n' + wrapSchema(s);
    });
  }
  if (breadcrumbSchema) {
    pageSchemas += '\n' + breadcrumbSchema;
  }

  // Combine into Master layout
  const masterData = {
    ...siteConfig,
    ...activeStates,
    domain: siteConfig.company.domain,
    title: pageData.title || `${siteConfig.company.name} | Extermination Specialists`,
    metaDescription: pageData.metaDescription || `Professional, family-owned pest control in Fort Lauderdale and Broward County.`,
    canonicalPath: pageData.canonicalPath || '/',
    schema: pageSchemas,
    breadcrumbs: breadcrumbsHtml,
    body: bodyContent
  };

  const finalHtml = compileTemplate(layoutTemplate, masterData);
  
  // Write to destination
  const destDir = path.dirname(outPath);
  ensureDirExists(destDir);
  fs.writeFileSync(outPath, finalHtml, 'utf8');
  console.log(`[Compiled]: ${path.relative(path.join(__dirname, '..'), outPath)}`);
}

// ----------------------------------------------------
// BUILD SCRIPT EXECUTION
// ----------------------------------------------------

console.log('Starting Florida Pest Control Center site build...');

// Ensure output directories exist in the web root
ensureDirExists(path.join(distDir, 'css'));
ensureDirExists(path.join(distDir, 'js'));

// Copy static assets
fs.copyFileSync(
  path.join(__dirname, 'css', 'main.css'),
  path.join(distDir, 'css', 'main.css')
);
fs.copyFileSync(
  path.join(__dirname, 'js', 'main.js'),
  path.join(distDir, 'js', 'main.js')
);
console.log('[Copied Assets]: css/main.css, js/main.js');

// 1. Compile Homepage
const homepageData = {
  title: "Florida Pest Control Center | Exterminator Fort Lauderdale, FL",
  metaDescription: "Fort Lauderdale's trusted family-owned pest control provider. Expert termite inspections, rodent exclusion, mosquito control, & Home Protection plans.",
  canonicalPath: "/",
  reviews: siteConfig.reviews,
  locations: locations.map(l => ({ name: l.name, slug: l.slug })),
  schemaList: [getLocalBusinessSchema("Fort Lauderdale")]
};
renderPage('homepage', homepageData, path.join(distDir, 'index.html'));

// 2. Compile Services Hub
const servicesHubData = {
  title: "Professional Extermination Services | Fort Lauderdale, FL",
  metaDescription: "Explore our specialized pest control services including termite inspections, rodent exclusions, mosquito sprays, cockroach eradication, and landscape care.",
  canonicalPath: "/services/",
  services: services,
  isServiceHub: true,
  schemaList: [getLocalBusinessSchema("South Florida")]
};
renderPage('services', servicesHubData, path.join(distDir, 'services', 'index.html'), [
  { name: "Services", path: "/services/" }
]);

// 3. Compile Individual Service Pages
services.forEach(service => {
  // Aggregate adjacent services
  const relatedServiceDetails = services
    .filter(s => service.relatedServices.includes(s.slug))
    .map(s => ({ name: s.name, slug: s.slug, metaDescription: s.metaDescription }));

  const serviceData = {
    ...service,
    canonicalPath: `/${service.slug}/`,
    locations: locations.map(l => ({ name: l.name, slug: l.slug })),
    relatedServiceDetails: relatedServiceDetails,
    schemaList: [
      {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": service.name,
        "description": service.metaDescription,
        "provider": {
          "@type": "LocalBusiness",
          "name": siteConfig.company.name,
          "telephone": siteConfig.company.phone,
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "3900 SW 2nd Court",
            "addressLocality": "Fort Lauderdale",
            "addressRegion": "FL",
            "postalCode": "33312"
          }
        }
      }
    ]
  };

  const faqSchema = getFaqSchema(service.faqs);
  if (faqSchema) {
    serviceData.schemaList.push(faqSchema);
  }

  renderPage('service', serviceData, path.join(distDir, service.slug, 'index.html'), [
    { name: "Services", path: "/services/" },
    { name: service.name, path: `/${service.slug}/` }
  ]);
});

// 4. Compile Service Areas Hub
const areasHubData = {
  title: "Pest Control Service Areas | Broward County & Fort Lauderdale",
  metaDescription: "We provide professional pest protection across Fort Lauderdale and surrounding Broward County cities, including Plantation, Davie, Weston, and Hollywood.",
  canonicalPath: "/service-areas/",
  locations: locations,
  isAreaPage: true,
  schemaList: [getLocalBusinessSchema("Broward County")]
};
renderPage('service-areas', areasHubData, path.join(distDir, 'service-areas', 'index.html'), [
  { name: "Service Areas", path: "/service-areas/" }
]);

// 5. Compile Individual Location Pages
locations.forEach(loc => {
  const locData = {
    ...loc,
    canonicalPath: `/${loc.slug}/`,
    servicesList: services.map(s => ({ name: s.name, slug: s.slug })),
    reviewsList: siteConfig.reviews, // Fallback to general reviews
    isAreaPage: true,
    schemaList: [getLocalBusinessSchema(loc.name)]
  };

  const faqSchema = getFaqSchema(loc.faqs);
  if (faqSchema) {
    locData.schemaList.push(faqSchema);
  }

  renderPage('location', locData, path.join(distDir, loc.slug, 'index.html'), [
    { name: "Service Areas", path: "/service-areas/" },
    { name: loc.name, path: `/${loc.slug}/` }
  ]);
});

// 6. Compile Specials Page
const specialsData = {
  title: "Pest Control Specials Fort Lauderdale | Florida Pest Control Center",
  metaDescription: "View current pest control specials from Florida Pest Control Center. Save on pest control, termite inspections, mosquito treatment, rodent service, and year-round protection in Fort Lauderdale and South Florida.",
  canonicalPath: "/specials/",
  reviews: siteConfig.reviews,
  schemaList: [getLocalBusinessSchema("South Florida")]
};
renderPage('specials', specialsData, path.join(distDir, 'specials', 'index.html'), [
  { name: "Specials", path: "/specials/" }
]);

// 7. Compile About Page
const aboutData = {
  title: "About Florida Pest Control Center | Family-Owned Pest Defense",
  metaDescription: "Learn about Florida Pest Control Center's family-owned history, our commitment to punctual service, eco-responsible products, and licensed credentials.",
  canonicalPath: "/about/",
  schemaList: [getLocalBusinessSchema("South Florida")]
};
renderPage('about', aboutData, path.join(distDir, 'about', 'index.html'), [
  { name: "About Us", path: "/about/" }
]);

// 8. Compile Contact Page
const contactData = {
  title: "Contact Florida Pest Control Center | Request Free Inspection",
  metaDescription: "Get in touch with our Fort Lauderdale office. Call (954) 945-5050 or fill out our online request form to schedule your free pest inspection.",
  canonicalPath: "/contact/",
  schemaList: [getLocalBusinessSchema("Fort Lauderdale")]
};
renderPage('contact', contactData, path.join(distDir, 'contact', 'index.html'), [
  { name: "Contact", path: "/contact/" }
]);

// 8.1 Compile Florida Home Protection Plan Page
const planData = {
  title: "Florida Home Protection Plan | Year-Round Pest Prevention",
  metaDescription: "Subtropical pests are active year-round. Get complete home protection from ants, roaches, spiders, and silverfish with our quarterly perimeter treatments.",
  canonicalPath: "/florida-home-protection-plan/",
  schemaList: [getLocalBusinessSchema("South Florida")]
};
renderPage('protection-plan', planData, path.join(distDir, 'florida-home-protection-plan', 'index.html'), [
  { name: "Services", path: "/services/" },
  { name: "Florida Home Protection Plan", path: "/florida-home-protection-plan/" }
]);

// 9. Generate XML Sitemap
function buildSitemap() {
  const urls = [
    '',
    'services/',
    'florida-home-protection-plan/',
    'service-areas/',
    'specials/',
    'about/',
    'contact/'
  ];
  
  services.forEach(s => urls.push(`${s.slug}/`));
  locations.forEach(l => urls.push(`${l.slug}/`));

  let xml = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  xml += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;
  
  urls.forEach(url => {
    xml += `  <url>\n`;
    xml += `    <loc>https://${siteConfig.company.domain}/${url}</loc>\n`;
    xml += `    <changefreq>monthly</changefreq>\n`;
    xml += `    <priority>${url === '' ? '1.0' : '0.8'}</priority>\n`;
    xml += `  </url>\n`;
  });
  
  xml += `</urlset>\n`;
  
  fs.writeFileSync(path.join(distDir, 'sitemap.xml'), xml, 'utf8');
  console.log('[Generated]: sitemap.xml');
}
buildSitemap();

// 10. Generate Robots.txt (Blocking indexing & AI crawling for demo)
function buildRobotsTxt() {
  const content = `User-agent: *
Disallow: /

# Block specific AI crawlers
User-agent: GPTBot
Disallow: /

User-agent: ChatGPT-User
Disallow: /

User-agent: Google-Extended
Disallow: /

User-agent: Anthropic-AI
Disallow: /

User-agent: Claude-Web
Disallow: /

User-agent: cohere-ai
Disallow: /

# Sitemap path
Sitemap: https://${siteConfig.company.domain}/sitemap.xml
`;
  
  fs.writeFileSync(path.join(distDir, 'robots.txt'), content, 'utf8');
  console.log('[Generated]: robots.txt (Crawler Protected)');
}
buildRobotsTxt();

// 11. Generate 301 Redirect Mapping & Netlify _redirects file
function buildRedirects() {
  const redirectRules = [
    { from: '/reviews', to: '/specials/' },
    { from: '/reviews/', to: '/specials/' },
    { from: '/pest-control/ant-control', to: '/ant-control/' },
    { from: '/pest-control/mosquito-control', to: '/mosquito-control/' },
    { from: '/pest-control/termite-control', to: '/termite-control/' },
    { from: '/pest-control/rodent-control', to: '/rodent-control/' },
    { from: '/pest-control/cockroach-control', to: '/cockroach-control/' },
    { from: '/pest-control/bed-bug-control', to: '/bed-bug-control/' },
    { from: '/service-location/fort-lauderdale', to: '/pest-control-fort-lauderdale/' },
    { from: '/service-location/plantation', to: '/pest-control-plantation/' },
    { from: '/service-location/davie', to: '/pest-control-davie/' },
    { from: '/about/blog', to: '/blog/' }, // Blog mapping placeholder
    { from: '/general-pest-control', to: '/residential-pest-control/' },
    { from: '/general-pest-control/', to: '/residential-pest-control/' }
  ];

  // Write redirects.json
  fs.writeFileSync(
    path.join(distDir, 'redirects.json'),
    JSON.stringify({ redirects: redirectRules }, null, 2),
    'utf8'
  );
  console.log('[Generated]: redirects.json');

  // Write Netlify _redirects format
  const netlifyContent = redirectRules
    .map(r => `${r.from}  ${r.to}  301`)
    .join('\n');
  fs.writeFileSync(path.join(distDir, '_redirects'), netlifyContent, 'utf8');
  console.log('[Generated]: _redirects (Netlify Format)');
}
buildRedirects();

console.log('Build completed successfully!');
