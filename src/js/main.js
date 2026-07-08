document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFormValidation();
  initGtmTracking();
  initDni();
  initDetailsAccordion();
  initScrollReveal();
  initStickyHeader();
  initProcessTimeline();
  initFloatingContactCard();
});

/**
 * Mobile Navigation Toggle
 */
function initMobileNav() {
  const toggleBtn = document.querySelector('.nav-toggle');
  const navPanel = document.querySelector('.mobile-nav-panel');

  if (toggleBtn && navPanel) {
    toggleBtn.addEventListener('click', () => {
      const isOpen = navPanel.classList.toggle('open');
      toggleBtn.classList.toggle('active');
      
      // Update accessibility attributes
      toggleBtn.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
      
      // Disable background scrolling when nav panel is open
      document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    // Close nav on panel link click
    navPanel.addEventListener('click', (e) => {
      if (e.target.tagName === 'A') {
        navPanel.classList.remove('open');
        toggleBtn.classList.remove('active');
        toggleBtn.setAttribute('aria-expanded', 'false');
        document.body.style.overflow = '';
      }
    });
  }
}

/**
 * Interactive Form Validation & Submission
 */
function initFormValidation() {
  const forms = document.querySelectorAll('form');

  forms.forEach(form => {
    // Intercept form submissions
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Basic client-side check
      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      const formData = new FormData(form);
      const data = Object.fromEntries(formData.entries());
      
      // Log submission for debugging/analytics
      console.log(`[Form Submission Tracked] Form ID: ${form.id || 'anonymous-form'}`, data);
      
      // Trigger GTM event
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'form_submission',
          formId: form.id || 'anonymous-form',
          formPlacement: form.getAttribute('data-placement') || 'general',
          pestCategory: data.pest_needed || 'general'
        });
      }

      // Show a premium confirmation toast or inline card swap
      showSubmissionConfirmation(form);
    });

    // Native validation feedback on exiting input
    const inputs = form.querySelectorAll('.form-input');
    inputs.forEach(input => {
      input.addEventListener('blur', () => {
        // Run validation check upon exiting field
        if (!input.validity.valid) {
          input.setAttribute('aria-invalid', 'true');
        } else {
          input.removeAttribute('aria-invalid');
        }
      });

      input.addEventListener('input', () => {
        // Clear errors immediately when typing starts
        input.removeAttribute('aria-invalid');
      });
    });
  });
}

function showSubmissionConfirmation(form) {
  const container = form.parentElement;
  if (!container) return;

  // Save dimensions to prevent visual layout shifts
  const originalWidth = container.offsetWidth;
  const originalHeight = container.offsetHeight;

  container.style.minWidth = `${originalWidth}px`;
  container.style.minHeight = `${originalHeight}px`;

  // Create a stunning transition visual card
  container.innerHTML = `
    <div class="form-success-card" style="text-align: center; padding: 2rem; display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%;">
      <div class="success-icon-badge" style="width: 64px; height: 64px; background-color: rgba(23, 74, 54, 0.08); border-radius: 50%; display: flex; align-items: center; justify-content: center; color: #174A36; font-size: 2rem; margin-bottom: 1.5rem;">✓</div>
      <h3 style="color: #174A36; margin-bottom: 1rem; font-family: 'Outfit', sans-serif;">Request Received!</h3>
      <p style="color: #66736C; font-size: 0.95rem; margin-bottom: 1.5rem;">Thank you for contacting Florida Pest Control Center. One of our local pest specialists will contact you shortly to schedule your free inspection.</p>
      <div style="font-family: 'Outfit', sans-serif; font-weight: 700; color: #174A36; font-size: 1.1rem; border-top: 1px dashed #E3E0D8; width: 100%; padding-top: 1rem; margin-top: 1rem;">
        Need immediate help? <br>
        <a href="tel:+19549455050" style="color: #2A7C6F; text-decoration: underline;">Call (954) 945-5050</a>
      </div>
    </div>
  `;
}

/**
 * Click tracking for analytics (GA4/GTM hooks)
 */
function initGtmTracking() {
  document.body.addEventListener('click', (e) => {
    const target = e.target.closest('a, button');
    if (!target) return;

    const dataLayer = window.dataLayer || [];

    // Click to Call Clicks
    if (target.tagName === 'A' && target.getAttribute('href')?.startsWith('tel:')) {
      const phoneNum = target.getAttribute('href');
      console.log(`[Click-to-Call Tracked]: ${phoneNum}`);
      dataLayer.push({
        event: 'click_to_call',
        phoneNumber: phoneNum,
        clickPlacement: target.getAttribute('data-placement') || 'unknown'
      });
    }

    // CTA Button Clicks
    if (target.classList.contains('btn') || target.classList.contains('sticky-cta-btn')) {
      const ctaText = target.textContent.trim();
      const ctaId = target.id || 'anonymous-cta';
      console.log(`[CTA Click Tracked]: ${ctaText} (${ctaId})`);
      dataLayer.push({
        event: 'cta_click',
        ctaText: ctaText,
        ctaId: ctaId,
        ctaPlacement: target.getAttribute('data-placement') || 'unknown'
      });
    }
  });
}

/**
 * Dynamic Number Insertion (DNI) hook
 * Allows a single configuration file to be swapped at traffic routing stage
 */
function initDni() {
  // Configured with global hook ready for CallRail or other tracking code
  window.FPCC_DNI = {
    originalNumber: '(954) 945-5050',
    originalTel: 'tel:+19549455050',
    
    // Call this function to update the visible phone numbers across the site
    swapNumber: function(newNumberText, newNumberTel) {
      console.log(`[DNI Active] Swapping phone numbers to: ${newNumberText}`);
      const phoneLinks = document.querySelectorAll('.dni-phone');
      phoneLinks.forEach(link => {
        if (link.tagName === 'A') {
          link.setAttribute('href', `tel:${newNumberTel.replace(/[^+\d]/g, '')}`);
        }
        
        // Update child node contents if matching standard text formats
        const textNode = Array.from(link.childNodes).find(node => node.nodeType === Node.TEXT_NODE);
        if (textNode) {
          textNode.nodeValue = textNode.nodeValue.replace(this.originalNumber, newNumberText);
        } else {
          link.textContent = newNumberText;
        }
      });
    }
  };

  // Example hook detection (simulated query parameter search tracking)
  const urlParams = new URLSearchParams(window.location.search);
  if (urlParams.has('utm_source') && urlParams.get('utm_source') === 'google-ads') {
    // If google ads traffic is detected, we could fire swapNumber automatically
    console.log('[DNI Demo Detection]: Google Ads UTM parameters detected. DNI hook ready to inject.');
    // window.FPCC_DNI.swapNumber('(954) 555-0199', '+19545550199');
  }
}

/**
 * Accordion Helper for FAQ section height transition
 */
class Accordion {
  constructor(el) {
    this.el = el;
    this.summary = el.querySelector('summary');
    this.content = el.querySelector('.disclosure-content');

    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    
    this.summary.addEventListener('click', (e) => this.onClick(e));
  }

  onClick(e) {
    e.preventDefault();
    this.el.style.overflow = 'hidden';
    if (this.isClosing || !this.el.open) {
      this.open();
    } else if (this.isExpanding || this.el.open) {
      this.shrink();
    }
  }

  shrink() {
    this.isClosing = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 250,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    });

    this.animation.onfinish = () => this.onAnimationFinish(false);
    this.animation.oncancel = () => this.isClosing = false;
  }

  open() {
    this.el.style.height = `${this.el.offsetHeight}px`;
    this.el.open = true;
    window.requestAnimationFrame(() => this.expand());
  }

  expand() {
    this.isExpanding = true;
    const startHeight = `${this.el.offsetHeight}px`;
    const endHeight = `${this.summary.offsetHeight + this.content.offsetHeight}px`;

    if (this.animation) {
      this.animation.cancel();
    }

    this.animation = this.el.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 250,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)'
    });

    this.animation.onfinish = () => this.onAnimationFinish(true);
    this.animation.oncancel = () => this.isExpanding = false;
  }

  onAnimationFinish(open) {
    this.el.open = open;
    this.animation = null;
    this.isClosing = false;
    this.isExpanding = false;
    this.el.style.height = '';
    this.el.style.overflow = '';
  }
}

function initDetailsAccordion() {
  const detailsList = document.querySelectorAll('details.disclosure');
  if (detailsList.length === 0) return;

  // Exclusive accordion behavior using details 'name' support/fallback
  const supportsNameAttribute = 'name' in HTMLDetailsElement.prototype;

  detailsList.forEach(details => {
    new Accordion(details);

    // Exclusive toggle logic
    details.addEventListener('toggle', (e) => {
      if (details.open) {
        const groupName = details.getAttribute('name');
        if (!groupName) return;
        
        detailsList.forEach(otherDetails => {
          if (otherDetails !== details && otherDetails.getAttribute('name') === groupName && otherDetails.open) {
            // Close other details with transition
            const accordionInstance = otherDetails._accordion || new Accordion(otherDetails);
            otherDetails._accordion = accordionInstance;
            accordionInstance.shrink();
          }
        });
      }
    });
    details._accordion = details._accordion || new Accordion(details);
  });
}

/**
 * Scroll entry and reveal animations using IntersectionObserver
 */
function initScrollReveal() {
  // Check if browser supports reduced motion preference
  const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  if (mediaQuery.matches) {
    // Instantly reveal all elements
    document.querySelectorAll('.reveal-on-scroll').forEach(el => {
      el.classList.add('revealed');
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        observer.unobserve(entry.target); // Trigger once per page load
      }
    });
  }, {
    rootMargin: '0px 0px -8% 0px', // trigger slightly after entering viewport
    threshold: 0.05
  });

  document.querySelectorAll('.reveal-on-scroll').forEach(el => {
    observer.observe(el);
  });
}

/**
 * Sticky Header scrolled shadow and compact style
 */
function initStickyHeader() {
  const header = document.querySelector('.header');
  if (!header) return;

  const handleScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  window.addEventListener('scroll', handleScroll);
  handleScroll();
}

/**
 * Process Timeline growing progress bar
 */
function initProcessTimeline() {
  const container = document.querySelector('.process-grid-container');
  const progressLine = document.querySelector('.process-timeline-progress');
  const steps = document.querySelectorAll('.process-step');
  if (!container || !progressLine || steps.length === 0) return;

  const isDesktop = () => window.innerWidth >= 768;

  const updateProgressLine = () => {
    let maxRevealedIdx = -1;
    steps.forEach((step, idx) => {
      if (step.classList.contains('revealed')) {
        maxRevealedIdx = Math.max(maxRevealedIdx, idx);
      }
    });

    // Progression mapped cleanly from index:
    // 0 -> 0%
    // 1 -> 25%
    // 2 -> 50%
    // 3 -> 75%
    // 4 -> 100%
    const percent = maxRevealedIdx <= 0 ? 0 : (maxRevealedIdx / 4) * 100;

    if (isDesktop()) {
      progressLine.style.width = `${percent}%`;
      progressLine.style.height = '100%';
    } else {
      progressLine.style.height = `${percent}%`;
      progressLine.style.width = '100%';
    }
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('revealed');
        updateProgressLine();
      }
    });
  }, {
    // Trigger when step bubble gets within the bottom 20% of viewport
    rootMargin: '0px 0px -15% 0px',
    threshold: 0.1
  });

  steps.forEach(step => {
    observer.observe(step);
  });

  window.addEventListener('resize', updateProgressLine);
  updateProgressLine();
}

/**
 * Desktop Floating Contact Card (lower-right panel)
 */
function initFloatingContactCard() {
  const card = document.getElementById('desktop-floating-card');
  const closeBtn = document.getElementById('close-floating-card');
  const footer = document.querySelector('footer');
  if (!card || !closeBtn) return;

  if (sessionStorage.getItem('floating-card-dismissed') === 'true') {
    return;
  }

  const checkVisibility = () => {
    if (window.innerWidth < 768) {
      card.classList.remove('visible');
      return;
    }

    if (window.scrollY > 400) {
      card.classList.add('visible');
    } else {
      card.classList.remove('visible');
    }
  };

  closeBtn.addEventListener('click', () => {
    card.classList.remove('visible');
    sessionStorage.setItem('floating-card-dismissed', 'true');
  });

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('resize', checkVisibility);
  checkVisibility();

  if (footer) {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      if (entry.isIntersecting) {
        card.classList.add('hidden-by-footer');
      } else {
        card.classList.remove('hidden-by-footer');
      }
    }, {
      rootMargin: '0px 0px 50px 0px',
      threshold: 0
    });
    observer.observe(footer);
  }
}


