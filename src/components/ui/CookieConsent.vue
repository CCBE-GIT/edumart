<template>
  <div>
    <!-- Floating Trigger Badge (shown when banner is closed) -->
    <transition name="fade">
      <button 
        v-if="!showBanner && consentChecked" 
        class="cookie-trigger" 
        @click="openBanner"
        aria-label="Manage cookie settings"
        id="cookie-settings-trigger"
      >
        <svg class="cookie-trigger__icon" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/>
          <path d="M8.5 8.5h.01M11.5 11.5h.01M8.5 14.5h.01M14.5 14.5h.01M15.5 9.5h.01"/>
        </svg>
        <span class="cookie-trigger__tooltip">Cookie Preferences</span>
      </button>
    </transition>

    <!-- Cookie Consent Banner -->
    <transition name="slide-up">
      <div 
        v-if="showBanner" 
        class="cookie-banner" 
        role="dialog" 
        aria-labelledby="cookie-banner-title" 
        aria-describedby="cookie-banner-desc"
        id="cookie-consent-banner"
      >
        <!-- Shimmer gradient bar at top -->
        <div class="cookie-banner__shimmer"></div>

        <div class="cookie-banner__header">
          <div class="cookie-banner__icon-wrap">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="cookie-banner__icon">
              <path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5Z"/>
              <path d="M8.5 8.5h.01M11.5 11.5h.01M8.5 14.5h.01M14.5 14.5h.01M15.5 9.5h.01"/>
            </svg>
          </div>
          <h3 id="cookie-banner-title" class="cookie-banner__title">Cookie Policy</h3>
        </div>

        <p id="cookie-banner-desc" class="cookie-banner__desc">
          We use cookies to optimize your browsing experience, analyze site traffic, and serve personalized content. You can accept all or customize your preferences below.
        </p>

        <!-- Preference Customizer (Expandable panel) -->
        <transition name="expand">
          <div v-if="showCustomizer" class="cookie-customizer" id="cookie-customizer-panel">
            <div class="cookie-option">
              <div class="cookie-option__info">
                <span class="cookie-option__title">Necessary Cookies</span>
                <span class="cookie-option__desc">Required for basic site operation, security, and theme preference.</span>
              </div>
              <div class="cookie-switch-wrap">
                <input 
                  type="checkbox" 
                  id="cookie-necessary" 
                  checked 
                  disabled 
                  class="cookie-switch"
                />
                <label for="cookie-necessary" class="cookie-switch-label"></label>
              </div>
            </div>

            <div class="cookie-option">
              <div class="cookie-option__info">
                <span class="cookie-option__title">Analytics & Performance</span>
                <span class="cookie-option__desc">Anonymously monitor traffic and usage patterns to help us improve Edumart.</span>
              </div>
              <div class="cookie-switch-wrap">
                <input 
                  type="checkbox" 
                  id="cookie-analytics" 
                  v-model="preferences.analytics" 
                  class="cookie-switch"
                />
                <label for="cookie-analytics" class="cookie-switch-label"></label>
              </div>
            </div>

            <div class="cookie-option">
              <div class="cookie-option__info">
                <span class="cookie-option__title">Marketing & Ads</span>
                <span class="cookie-option__desc">Enable personalized offers, advertisements, and social integrations tailored to your interests.</span>
              </div>
              <div class="cookie-switch-wrap">
                <input 
                  type="checkbox" 
                  id="cookie-marketing" 
                  v-model="preferences.marketing" 
                  class="cookie-switch"
                />
                <label for="cookie-marketing" class="cookie-switch-label"></label>
              </div>
            </div>
          </div>
        </transition>

        <!-- Action Buttons -->
        <div class="cookie-banner__actions">
          <div class="cookie-banner__actions-row">
            <button 
              class="btn-cookie btn-cookie--customize" 
              @click="toggleCustomizer"
              id="cookie-btn-customize"
            >
              {{ showCustomizer ? 'Hide Settings' : 'Customize' }}
            </button>
            <button 
              class="btn-cookie btn-cookie--reject" 
              @click="rejectAll"
              id="cookie-btn-reject"
            >
              Reject All
            </button>
          </div>
          
          <button 
            v-if="showCustomizer" 
            class="btn-cookie btn-cookie--save" 
            @click="savePreferences"
            id="cookie-btn-save"
          >
            Save Preferences
          </button>
          <button 
            v-else 
            class="btn-cookie btn-cookie--accept" 
            @click="acceptAll"
            id="cookie-btn-accept-all"
          >
            Accept All
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'CookieConsent',
  data() {
    return {
      showBanner: false,
      showCustomizer: false,
      consentChecked: false,
      preferences: {
        necessary: true,
        analytics: true,
        marketing: true
      }
    }
  },
  mounted() {
    // Small delay before showing the banner for elegant visual transition
    setTimeout(this.checkConsent, 1000)
  },
  methods: {
    checkConsent() {
      const savedConsent = localStorage.getItem('edumart_cookie_consent')
      if (savedConsent) {
        try {
          const parsed = JSON.parse(savedConsent)
          this.preferences.analytics = !!parsed.analytics
          this.preferences.marketing = !!parsed.marketing
          // Set the cookies again just to keep them active
          this.setCookies(parsed)
          this.dispatchConsentEvent(parsed)
        } catch (e) {
          console.error('Error parsing cookie consent:', e)
        }
      } else {
        this.showBanner = true
      }
      this.consentChecked = true
    },
    openBanner() {
      this.showBanner = true
      this.showCustomizer = false
    },
    toggleCustomizer() {
      this.showCustomizer = !this.showCustomizer
    },
    acceptAll() {
      this.preferences.analytics = true
      this.preferences.marketing = true
      this.saveConsent()
    },
    rejectAll() {
      this.preferences.analytics = false
      this.preferences.marketing = false
      this.saveConsent()
    },
    savePreferences() {
      this.saveConsent()
    },
    saveConsent() {
      const consentPayload = {
        necessary: true,
        analytics: this.preferences.analytics,
        marketing: this.preferences.marketing,
        timestamp: new Date().toISOString()
      }
      localStorage.setItem('edumart_cookie_consent', JSON.stringify(consentPayload))
      this.setCookies(consentPayload)
      this.dispatchConsentEvent(consentPayload)
      this.showBanner = false
    },
    setCookies(payload) {
      const maxAge = 365 * 24 * 60 * 60 // 1 year
      document.cookie = `edumart_consent_necessary=true; max-age=${maxAge}; path=/; SameSite=Lax`
      document.cookie = `edumart_consent_analytics=${payload.analytics}; max-age=${maxAge}; path=/; SameSite=Lax`
      document.cookie = `edumart_consent_marketing=${payload.marketing}; max-age=${maxAge}; path=/; SameSite=Lax`
    },
    dispatchConsentEvent(payload) {
      window.dispatchEvent(new CustomEvent('edumart-cookie-consent-updated', {
        detail: payload
      }))
    }
  }
}
</script>

<style scoped>
/* ─── Cookie Trigger Button ─── */
.cookie-trigger {
  position: fixed;
  left: 2rem;
  bottom: 2rem;
  z-index: 990;
  width: 48px;
  height: 48px;
  background: var(--bg-card);
  color: var(--teal);
  border: 1px solid var(--border-color);
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: var(--shadow-md);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  overflow: visible;
}

.cookie-trigger:hover {
  transform: scale(1.08) rotate(15deg);
  border-color: var(--teal);
  color: var(--teal-light);
  box-shadow: 0 8px 24px rgba(45, 184, 154, 0.25);
}

.cookie-trigger__icon {
  display: block;
}

.cookie-trigger__tooltip {
  position: absolute;
  left: calc(100% + 12px);
  background: var(--navy);
  color: var(--white);
  padding: 6px 12px;
  border-radius: var(--radius-sm);
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.05em;
  white-space: nowrap;
  opacity: 0;
  pointer-events: none;
  transform: translateX(-8px);
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--shadow-sm);
}

.cookie-trigger:hover .cookie-trigger__tooltip {
  opacity: 1;
  transform: translateX(0);
}

/* ─── Cookie Banner Card ─── */
.cookie-banner {
  position: fixed;
  right: 2rem;
  bottom: 2rem;
  z-index: 1000;
  width: 100%;
  max-width: 420px;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.1rem;
  overflow: hidden;
  transition: max-height 0.4s ease, transform 0.4s ease, opacity 0.4s ease;
}

/* Elegant shimmering top accent bar */
.cookie-banner__shimmer {
  position: absolute;
  top: 0; left: 0; right: 0; height: 3px;
  background: linear-gradient(90deg, var(--blue), var(--teal));
}

.cookie-banner__header {
  display: flex;
  align-items: center;
  gap: 0.75rem;
}

.cookie-banner__icon-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(45, 184, 154, 0.08);
  border: 1px solid rgba(45, 184, 154, 0.15);
  color: var(--teal);
}

.cookie-banner__icon {
  display: block;
}

.cookie-banner__title {
  font-family: var(--font-display);
  font-size: 1.4rem;
  font-weight: 600;
  margin: 0;
  color: var(--text-main);
}

.cookie-banner__desc {
  font-family: var(--font-body);
  font-size: 0.84rem;
  line-height: 1.6;
  color: var(--text-body-color);
  margin: 0;
}

/* ─── Preference Customizer ─── */
.cookie-customizer {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  border-top: 1px solid var(--border-color);
  padding-top: 1rem;
  margin-top: 0.2rem;
}

.cookie-option {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 1rem;
}

.cookie-option__info {
  display: flex;
  flex-direction: column;
  gap: 0.15rem;
}

.cookie-option__title {
  font-family: var(--font-body);
  font-size: 0.82rem;
  font-weight: 600;
  color: var(--text-main);
}

.cookie-option__desc {
  font-family: var(--font-body);
  font-size: 0.72rem;
  line-height: 1.4;
  color: var(--text-muted-color);
}

/* Custom switch checkbox */
.cookie-switch-wrap {
  position: relative;
  width: 40px;
  height: 20px;
  flex-shrink: 0;
  margin-top: 2px;
}

.cookie-switch {
  opacity: 0;
  width: 0;
  height: 0;
}

.cookie-switch-label {
  position: absolute;
  cursor: pointer;
  top: 0; left: 0; right: 0; bottom: 0;
  background-color: var(--border-color);
  transition: .3s;
  border-radius: 20px;
}

.cookie-switch-label:before {
  position: absolute;
  content: "";
  height: 14px;
  width: 14px;
  left: 3px;
  bottom: 3px;
  background-color: var(--bg-card);
  transition: .3s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0,0,0,0.15);
}

.cookie-switch:checked + .cookie-switch-label {
  background-color: var(--teal);
}

.cookie-switch:checked + .cookie-switch-label:before {
  transform: translateX(20px);
}

.cookie-switch:disabled + .cookie-switch-label {
  opacity: 0.65;
  cursor: not-allowed;
}

/* ─── Actions & Buttons ─── */
.cookie-banner__actions {
  display: flex;
  flex-direction: column;
  gap: 0.65rem;
  margin-top: 0.4rem;
}

.cookie-banner__actions-row {
  display: flex;
  gap: 0.65rem;
}

.btn-cookie {
  font-family: var(--font-body);
  font-size: 0.76rem;
  font-weight: 600;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: var(--radius-sm);
  padding: 0.65rem 1rem;
  cursor: pointer;
  transition: all 0.25s ease;
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.btn-cookie--customize {
  flex: 1;
  background: transparent;
  color: var(--text-main);
  border: 1px solid var(--border-color);
}

.btn-cookie--customize:hover {
  border-color: var(--blue);
  background: rgba(27, 111, 191, 0.05);
}

.btn-cookie--reject {
  flex: 1;
  background: transparent;
  color: var(--text-muted-color);
  border: 1px solid var(--border-color);
}

.btn-cookie--reject:hover {
  border-color: #e06c75;
  color: #e06c75;
  background: rgba(224, 108, 117, 0.05);
}

.btn-cookie--accept {
  width: 100%;
  background: linear-gradient(135deg, var(--blue) 0%, var(--teal) 100%);
  color: #ffffff;
}

.btn-cookie--accept:hover {
  background: linear-gradient(135deg, var(--blue-dark) 0%, var(--teal-dark) 100%);
  box-shadow: 0 4px 15px rgba(45, 184, 154, 0.25);
  transform: translateY(-1px);
}

.btn-cookie--save {
  width: 100%;
  background: var(--teal);
  color: #ffffff;
}

.btn-cookie--save:hover {
  background: var(--teal-dark);
  box-shadow: 0 4px 15px rgba(45, 184, 154, 0.2);
  transform: translateY(-1px);
}

/* ─── Transitions ─── */
.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}

.slide-up-enter-from,
.slide-up-leave-to {
  opacity: 0;
  transform: translateY(24px) scale(0.98);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
  transform: scale(0.92);
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  max-height: 250px;
  overflow: hidden;
}

.expand-enter-from,
.expand-leave-to {
  max-height: 0;
  opacity: 0;
  overflow: hidden;
  padding-top: 0 !important;
  margin-top: 0 !important;
  border-top-color: transparent !important;
}

/* ─── Responsive Styles ─── */
@media (max-width: 768px) {
  .cookie-banner {
    right: 1rem;
    left: 1rem;
    bottom: 1rem;
    width: auto;
    max-width: none;
    padding: 1.25rem;
    gap: 0.9rem;
  }
  
  .cookie-trigger {
    left: 1rem;
    bottom: 1rem;
    width: 44px;
    height: 44px;
  }
  
  .cookie-trigger__tooltip {
    display: none; /* Hide tooltip on small screens */
  }
}
</style>
