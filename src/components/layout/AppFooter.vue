<template>
  <footer class="footer">

    <!-- ── CTA Band ── -->
    <div class="footer__cta-band">
      <div class="footer__cta-glow"></div>
      <div class="container footer__cta-inner">
        <div class="footer__cta-text">
          <p class="footer__cta-label">Ready to Optimize?</p>
          <h3 class="footer__cta-heading">
            Let's build your supply chain <em>together</em>
          </h3>
        </div>
        <router-link to="/contact" class="footer__cta-btn">
          Get In Touch
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
        </router-link>
      </div>
    </div>

    <!-- ── Main Footer ── -->
    <div class="footer__main">
      <div class="container footer__grid">

        <!-- Brand -->
        <div class="footer__brand">
          <router-link to="/" class="footer__logo">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/logo"
              alt="Edumart"
              class="footer__logo-img"
              style="height:40px; width:auto; display:block;"
            />
          </router-link>

          <p class="footer__tagline">Managing Operations.<br/>Enabling Growth.</p>
          <p class="footer__desc">
            Integrated supply chain and operational solutions for educational institutions
            and corporate organizations across Sri Lanka.
          </p>

          <div class="footer__brand-divider"></div>

          <div class="footer__badge">
            <span class="footer__badge-dot"></span>
            Sri Lanka's Trusted Supply Chain Partner
          </div>

          <!-- Social Media Icons -->
          <div class="footer__social">
            <a v-for="social in socialLinks" :key="social.name" :href="social.url" :aria-label="social.name" target="_blank" rel="noopener noreferrer" class="footer__social-icon">
              <svg :viewBox="social.vb" width="15" height="15" :fill="social.fill ? 'currentColor' : 'none'" :stroke="social.fill ? 'none' : 'currentColor'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="social.svg"></svg>
            </a>
          </div>

        </div>

        <!-- Navigation -->
        <div class="footer__col">
          <h5 class="footer__col-title">Navigation</h5>
          <ul class="footer__links">
            <li v-for="item in quickLinks" :key="item.path">
              <router-link :to="item.path">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                {{ item.label }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Services -->
        <div class="footer__col">
          <h5 class="footer__col-title">Our Services</h5>
          <ul class="footer__services">
            <li v-for="service in services" :key="service.name">
              <div class="service-icon">
                <svg :viewBox="service.vb" width="12" height="12" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="service.svg"></svg>
              </div>
              <span>{{ service.name }}</span>
            </li>
          </ul>
        </div>

        <!-- Contact -->
        <div class="footer__col">
          <h5 class="footer__col-title">Get In Touch</h5>
          <ul class="footer__contact">
            <li>
              <div class="contact-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
              </div>
              <span>[Company Address],<br/>Sri Lanka</span>
            </li>
            <li>
              <div class="contact-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.15 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.07 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21 16.92z"/>
                </svg>
              </div>
              <a href="tel:+94000000000">[Phone Number]</a>
            </li>
            <li>
              <div class="contact-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                  <polyline points="22,6 12,13 2,6"/>
                </svg>
              </div>
              <a href="mailto:info@edumart.lk">[Email Address]</a>
            </li>
            <li>
              <div class="contact-icon-wrap">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <polyline points="12 6 12 12 16 14"/>
                </svg>
              </div>
              <span>Mon – Fri: 8:30 AM – 5:30 PM</span>
            </li>
          </ul>
        </div>

      </div>
    </div>

    <!-- ── Bottom Bar ── -->
    <div class="footer__bottom">
      <div class="container footer__bottom-inner">
        <p class="footer__copyright">
          © {{ new Date().getFullYear() }} Edumart (Pvt) Ltd. All rights reserved.
        </p>
        <p class="footer__reg">
          Registered in Sri Lanka · Supply Chain Excellence
        </p>
      </div>
    </div>

  </footer>
</template>

<script>
export default {
  name: 'AppFooter',
  data() {
    return {
      quickLinks: [
        { label: 'Home',          path: '/' },
        { label: 'About Us',      path: '/about' },
        { label: 'Our Services',  path: '/services' },
        { label: 'Industries',    path: '/industries' },
        { label: 'Our Clients',   path: '/clients' },
        { label: 'Future Growth', path: '/expansion' },
        { label: 'Investors',     path: '/investors' },
        { label: 'Contact',       path: '/contact' },
      ],
      services: [
        { name: 'Procurement & Purchasing', vb: '0 0 24 24', svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
        { name: 'Logistics Handling',       vb: '0 0 24 24', svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
        { name: 'Warehousing & Inventory',  vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
        { name: 'Cargo Transportation',     vb: '0 0 24 24', svg: '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>' },
        { name: 'Supply Chain Consultation',vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
      ],
      socialLinks: [
        {
          name: 'Facebook',
          url: '#',
          vb: '0 0 24 24',
          fill: true,
          svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>',
        },
        {
          name: 'Instagram',
          url: '#',
          vb: '0 0 24 24',
          fill: false,
          svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>',
        },
        {
          name: 'LinkedIn',
          url: '#',
          vb: '0 0 24 24',
          fill: true,
          svg: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>',
        },
        {
          name: 'X (Twitter)',
          url: '#',
          vb: '0 0 24 24',
          fill: true,
          svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>',
        },
        {
          name: 'YouTube',
          url: '#',
          vb: '0 0 24 24',
          fill: true,
          svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/>',
        },
      ],
    }
  }
}
</script>

<style scoped>
/* ─── Base ─── */
.footer {
  background: #fff;
  position: relative;
}

/* ─── CTA Band ─── */
.footer__cta-band {
  position: relative;
  overflow: hidden;
  padding: 4rem 0;
  border-top: 1px solid rgba(45,184,154,0.15);
  background: linear-gradient(135deg, #0F2236 0%, #0B1929 60%, #081523 100%);
}

.footer__cta-glow {
  position: absolute;
  top: -60%; left: 50%;
  transform: translateX(-50%);
  width: 800px; height: 400px;
  border-radius: 50%;
  background: radial-gradient(ellipse, rgba(45,184,154,0.07) 0%, transparent 70%);
  pointer-events: none;
}

.footer__cta-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 3rem;
  flex-wrap: wrap;
  position: relative;
  z-index: 1;
}

.footer__cta-label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: #2DB89A;
  margin-bottom: 0.6rem;
}

.footer__cta-heading {
  font-family: var(--font-display, 'Playfair Display', Georgia, serif);
  font-size: clamp(1.6rem, 3.5vw, 2.4rem);
  font-weight: 300;
  color: #fff;
  line-height: 1.2;
  margin: 0;
}

.footer__cta-heading em {
  font-style: italic;
  color: #2DB89A;
}

.footer__cta-btn {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  background: linear-gradient(135deg, #1B6FBF 0%, #2DB89A 100%);
  color: #fff;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  text-decoration: none;
  border-radius: 8px;
  flex-shrink: 0;
  transition: all 0.25s ease;
}

.footer__cta-btn:hover {
  background: linear-gradient(135deg, #155A9E 0%, #229D83 100%);
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(45,184,154,0.28);
}

.footer__cta-btn:hover svg { transform: translateX(3px); }
.footer__cta-btn svg { transition: transform 0.2s; }

/* ─── Main Grid ─── */
.footer__main {
  padding: 4rem 0 2.5rem;
  border-top: 1px solid rgba(255,255,255,0.05);
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1.2fr 1.3fr;
  gap: 3rem;
}

/* ─── Brand Column ─── */
.footer__logo {
  display: inline-flex;
  align-items: center;
  text-decoration: none;
  margin-bottom: 1.4rem;
  transition: opacity 0.2s;
}

.footer__logo:hover { opacity: 0.82; }

.footer__logo-img {
  height: 40px !important;
  width: auto !important;
  display: block !important;
  /* filter: brightness(0) invert(1) !important; */
}

.footer__tagline {
  font-family: var(--font-display, 'Playfair Display', Georgia, serif);
  font-size: 0.95rem;
  font-style: italic; 
  color: rgba(45,184,154,0.85);
  line-height: 1.55;
  margin-bottom: 0.9rem;
  font-weight: bold;
}

.footer__desc {
  font-size: 0.82rem;
  color: #0B1929;
  line-height: 1.8;
  max-width: 280px;
}

.footer__brand-divider {
  width: 32px; height: 1.5px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, transparent);
  margin: 1.3rem 0;
}

.footer__badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.68rem;
  font-weight: 500;
  letter-spacing: 0.06em;
  color: #081523;
}

.footer__badge-dot {
  width: 6px; height: 6px;
  background: #2DB89A;
  border-radius: 50%;
  opacity: 0.65;
  flex-shrink: 0;
}

/* ─── Social Media ─── */
.footer__social {
  display: flex;
  gap: 0.5rem;
  margin-top: 1.2rem;
  flex-wrap: wrap;
}

.footer__social-icon {
  width: 34px; height: 34px;
  background: rgba(45,184,154,0.07);
  border: 1px solid rgba(45,184,154,0.15);
  border-radius: 8px;
  display: grid;
  place-items: center;
  color: rgba(10,22,40,0.45);
  text-decoration: none;
  transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.2s;
}

.footer__social-icon:hover {
  background: #2DB89A;
  border-color: #2DB89A;
  color: #fff;
  transform: translateY(-2px);
}

/* ─── Column Titles ─── */
.footer__col-title {
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.22em;
  text-transform: uppercase;
  color: #2DB89A;
  margin-bottom: 1.4rem;
}

/* ─── Nav Links ─── */
.footer__links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.45rem;
}

.footer__links li a {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.82rem;
  color: #081523;
  text-decoration: none;
  transition: color 0.2s, gap 0.2s;
}

.footer__links li a svg {
  color: rgba(45,184,154,0.45);
  flex-shrink: 0;
  transition: transform 0.2s, color 0.2s;
}

.footer__links li a:hover {
  color: #2DB89A;
  gap: 0.7rem;
}

.footer__links li a:hover svg {
  transform: translateX(2px);
  color: #2DB89A;
}

/* ─── Services List ─── */
.footer__services {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer__services li {
  display: flex;
  align-items: center;
  gap: 0.65rem;
}

.service-icon {
  width: 24px; height: 24px;
  background: rgba(45,184,154,0.08);
  border: 1px solid rgba(45,184,154,0.15);
  border-radius: 6px;
  display: grid;
  place-items: center;
  color: rgba(45,184,154,0.7);
  flex-shrink: 0;
}

.footer__services li span:last-child {
  font-size: 0.82rem;
  color: #081523;
  line-height: 1.4;
}

/* ─── Contact ─── */
.footer__contact {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer__contact li {
  display: flex;
  gap: 0.75rem;
  align-items: flex-start;
}

.contact-icon-wrap {
  width: 28px; height: 28px;
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 7px;
  display: grid;
  place-items: center;
  color: rgba(45,184,154,0.65);
  flex-shrink: 0;
  margin-top: 0.05rem;
  background: rgba(45,184,154,0.04);
}

.footer__contact a,
.footer__contact span:last-child {
  font-size: 0.82rem;
  color: #081523;
  line-height: 1.6;
  text-decoration: none;
  transition: color 0.2s;
}

.footer__contact a:hover { color: rgba(45,184,154,0.9); }

/* ─── Bottom Bar ─── */
.footer__bottom {
  border-top: 1px solid rgba(255,255,255,0.05);
  padding: 1.4rem 0;
}

.footer__bottom-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.footer__copyright {
  font-size: 0.72rem;
  color: rgba(255,255,255,0.2);
}

.footer__reg {
  font-size: 0.68rem;
  color: rgba(255,255,255,0.13);
  letter-spacing: 0.05em;
}

/* ─── Responsive ─── */
@media (max-width: 1100px) {
  .footer__grid { grid-template-columns: 1.5fr 1fr 1fr 1.2fr; gap: 2rem; }
}

@media (max-width: 900px) {
  .footer__grid { grid-template-columns: 1fr 1fr; gap: 2rem 3rem; }
}

@media (max-width: 768px) {
  .footer__cta-band  { padding: 3rem 0; }
  .footer__cta-inner { flex-direction: column; text-align: center; gap: 1.5rem; }
  .footer__cta-btn   { width: 100%; max-width: 260px; justify-content: center; }
  .footer__main      { padding: 3rem 0 2rem; }
}

@media (max-width: 600px) {
  .footer__grid { grid-template-columns: 1fr; gap: 2rem; }
  .footer__desc { max-width: 100%; }
  .footer__bottom-inner { flex-direction: column; text-align: center; gap: 0.4rem; }
}

@media (max-width: 400px) {
  .footer__cta-btn { max-width: 100%; }
}
</style>