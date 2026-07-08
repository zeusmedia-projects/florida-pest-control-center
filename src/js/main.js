document.addEventListener('DOMContentLoaded', () => {
  initMobileNav();
  initFormValidation();
  initGtmTracking();
  initDni();
  initDetailsFallback();
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
 * Fallback for <details> exclusive accordions on older browsers
 */
function initDetailsFallback() {
  const detailsList = document.querySelectorAll('details.disclosure');
  if (detailsList.length === 0) return;

  // Native 'name' support check on details
  const supportsNameAttribute = 'name' in HTMLDetailsElement.prototype;

  if (!supportsNameAttribute) {
    console.log('[Accordion Fallback active]: Browser does not support native details name attribute. Injecting JS exclusive toggle.');
    detailsList.forEach(details => {
      details.addEventListener('toggle', (e) => {
        if (details.open) {
          const groupName = details.getAttribute('name');
          if (!groupName) return;
          
          detailsList.forEach(otherDetails => {
            if (otherDetails !== details && otherDetails.getAttribute('name') === groupName) {
              otherDetails.open = false;
            }
          });
        }
      });
    });
  }
}


