<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Reach Out</p>
          <h1 class="page-hero__title">Contact <em>Us</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Let's discuss how Edumart can streamline your operations</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Contact
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">

        <!-- ═══ IMAGE 1: Wide cinematic ribbon — above the contact grid ═══ -->
        <div class="con-img con-img--ribbon" data-aos="fade-up">
          <div class="con-img__ribbon-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/contact1.jpg"
              alt="Contact our team"
            />
            <div class="con-img__ribbon-overlay"></div>
            <!-- Left caption -->
            <div class="con-img__ribbon-caption">
              <span class="con-img__ribbon-eye">Start a conversation</span>
              <span class="con-img__ribbon-title">We're Ready to<br><em>Work With You</em></span>
            </div>
            <!-- Right decorative line trio -->
            <div class="con-img__ribbon-lines">
              <div class="con-img__ribbon-line con-img__ribbon-line--a"></div>
              <div class="con-img__ribbon-line con-img__ribbon-line--b"></div>
              <div class="con-img__ribbon-line con-img__ribbon-line--c"></div>
            </div>
          </div>
          <!-- Arch notch from bottom -->
          <div class="con-img__ribbon-notch"></div>
          <div class="con-img__ribbon-rule"></div>
        </div>

        <div class="contact-grid">

          <!-- Info -->
          <div data-aos="fade-right">
            <p class="section-label">Get In Touch</p>
            <h2 class="section-title">We'd love to <em>hear</em> from you</h2>
            <div class="divider"></div>
            <p class="intro-text">
              Whether you're looking to streamline your procurement, optimize your logistics,
              or consult on your supply chain strategy our team is ready to help.
            </p>

            <!-- ═══ IMAGE 2: Arch portrait above contact details ═══ -->
            <div class="con-img con-img--arch" data-aos="fade-up" data-aos-delay="60">
              <div class="con-img__arch-frame">
                <img
                  src="https://ik.imagekit.io/kp5tixhur/Edumart/contact3.jfif"
                  alt="Our team"
                />
                <div class="con-img__arch-overlay"></div>
                <!-- Caption inside -->
                <div class="con-img__arch-caption">
                  <span class="con-img__arch-eye">Our team</span>
                  <span class="con-img__arch-txt">Here to help<br><em>every step</em></span>
                </div>
              </div>
              <!-- Offset teal border -->
              <div class="con-img__arch-border"></div>
              <!-- Dot grid -->
              <div class="con-img__arch-dots"></div>
              <!-- Floating response badge -->
              <div class="con-img__arch-badge">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
                <span>Responds within 24 hrs</span>
              </div>
            </div>

            <div class="contact-details">
              <div v-for="detail in contactDetails" :key="detail.label" class="contact-detail">
                <div class="contact-detail__icon">
                  <svg :viewBox="detail.vb" width="18" height="18" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="detail.svg"></svg>
                </div>
                <div>
                  <span class="contact-detail__label">{{ detail.label }}</span>
                  <span class="contact-detail__value">{{ detail.value }}</span>
                </div>
              </div>
            </div>

            <!-- Social Media Icons -->
            <div class="social-media">
              <span class="social-media__label">Follow Us</span>
              <div class="social-media__icons">
                <a v-for="social in socialLinks" :key="social.name" :href="social.url" :aria-label="social.name" target="_blank" rel="noopener noreferrer" class="social-icon">
                  <svg :viewBox="social.vb" width="18" height="18" :fill="social.fill ? 'currentColor' : 'none'" :stroke="social.fill ? 'none' : 'currentColor'" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="social.svg"></svg>
                </a>
              </div>
            </div>

          </div>

          <!-- Form -->
          <div class="contact-form-col" data-aos="fade-left" data-aos-delay="150">

            <!-- ═══ IMAGE 3: Skewed stack pinned above the form card ═══ -->
            <div class="con-img con-img--skew" data-aos="fade-up" data-aos-delay="80">
              <div class="con-img__skew-back"></div>
              <div class="con-img__skew-frame">
                <img
                  src="https://ik.imagekit.io/kp5tixhur/Edumart/contact2.jpg"
                  alt="Get in touch"
                />
                <div class="con-img__skew-overlay"></div>
                <!-- Inside caption -->
                <div class="con-img__skew-caption">
                  <span class="con-img__skew-eye">Let's connect</span>
                  <span class="con-img__skew-txt">Your goals are<br><em>our mission</em></span>
                </div>
              </div>
              <!-- TL corner bracket -->
              <div class="con-img__skew-corner con-img__skew-corner--tl"></div>
              <!-- BR corner bracket -->
              <div class="con-img__skew-corner con-img__skew-corner--br"></div>
              <!-- Pill tag -->
              <div class="con-img__skew-pill">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                Send us a message
              </div>
            </div>

            <div class="contact-form-wrap">
              <form class="contact-form" @submit.prevent="sendMessage">
                <div class="form-row">
                  <div class="form-group">
                    <label>Full Name</label>
                    <input v-model="form.name" type="text" placeholder="Your full name" required />
                  </div>
                  <div class="form-group">
                    <label>Email Address</label>
                    <input v-model="form.email" type="email" placeholder="your@email.com" required />
                  </div>
                </div>
                <div class="form-group">
                  <label>Subject</label>
                  <input v-model="form.subject" type="text" placeholder="How can we help?" required />
                </div>
                <div class="form-group">
                  <label>Service Interest</label>
                  <select v-model="form.service">
                    <option value="">Select a service (optional)</option>
                    <option v-for="s in serviceOptions" :key="s" :value="s">{{ s }}</option>
                  </select>
                </div>
                <div class="form-group">
                  <label>Message</label>
                  <textarea v-model="form.message" rows="5" placeholder="Tell us about your needs..." required></textarea>
                </div>
                <button type="submit" class="submit-btn" :disabled="sending">
                  <span v-if="!sending">Send Message
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                  </span>
                  <span v-else>Sending...</span>
                </button>
                <transition name="fade">
                  <div v-if="successMsg" class="form-success">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ successMsg }}
                  </div>
                </transition>
                <transition name="fade">
                  <div v-if="errorMsg" class="form-error">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>
                    {{ errorMsg }}
                  </div>
                </transition>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
import emailjs from '@emailjs/browser'

export default {
  name: 'ContactView',
  data() {
    return {
      sending: false,
      successMsg: '',
      errorMsg: '',
      form: { name: '', email: '', subject: '', service: '', message: '' },
      serviceOptions: [
        'Procurement & Purchasing Management',
        'Logistics Handling Services',
        'Warehousing & Inventory Management',
        'Cargo Transportation Services',
        'Supply Chain Consultation',
      ],
      contactDetails: [
        { label: 'Address', value: '[Company Address], Sri Lanka', vb: '0 0 24 24', svg: '<path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/>' },
        { label: 'Phone',   value: '[Phone Number]',              vb: '0 0 24 24', svg: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>' },
        { label: 'Email',   value: '[Email Address]',             vb: '0 0 24 24', svg: '<path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/>' },
        { label: 'Hours',   value: 'Mon – Fri: 8:30 AM – 5:30 PM', vb: '0 0 24 24', svg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
      ],
      socialLinks: [
        { name: 'Facebook',   url: '#', vb: '0 0 24 24', fill: true,  svg: '<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>' },
        { name: 'Instagram',  url: '#', vb: '0 0 24 24', fill: false, svg: '<rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>' },
        { name: 'LinkedIn',   url: '#', vb: '0 0 24 24', fill: true,  svg: '<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/>' },
        { name: 'X (Twitter)',url: '#', vb: '0 0 24 24', fill: true,  svg: '<path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>' },
        { name: 'YouTube',    url: '#', vb: '0 0 24 24', fill: true,  svg: '<path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.95C5.12 20 12 20 12 20s6.88 0 8.59-.47a2.78 2.78 0 0 0 1.95-1.95A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z"/><polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="#fff"/>' },
      ],
    }
  },
  methods: {
    async sendMessage() {
      this.sending = true
      this.successMsg = ''
      this.errorMsg = ''
      try {
        await emailjs.send(
          'YOUR_SERVICE_ID',
          'YOUR_TEMPLATE_ID',
          { from_name: this.form.name, from_email: this.form.email, subject: this.form.subject, service: this.form.service, message: this.form.message },
          'YOUR_PUBLIC_KEY'
        )
        this.successMsg = "Your message has been sent! We'll get back to you shortly."
        this.form = { name: '', email: '', subject: '', service: '', message: '' }
      } catch (err) {
        console.error(err)
        this.errorMsg = 'Something went wrong. Please try again or contact us directly.'
      } finally {
        this.sending = false
      }
    }
  }
}
</script>

<style scoped>
/* ─── Hero ─── */
.page-hero { position:relative; overflow:hidden; padding:120px 0 80px; }
.page-hero__bg { position:absolute; inset:0; z-index:0; background:linear-gradient(135deg,#0F2236 0%,#0B1929 60%,#081523 100%); }
.page-hero__bg::after { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#1B6FBF 30%,#2DB89A 70%,transparent); }
.page-hero__glow { position:absolute; z-index:1; top:0; right:0; width:600px; height:500px; border-radius:50%; background:radial-gradient(ellipse,rgba(45,184,154,.07) 0%,transparent 65%); pointer-events:none; }
.page-hero__inner { position:relative; z-index:2; display:flex; flex-direction:column; gap:1rem; }
.page-hero__title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(3rem,6vw,4.5rem); font-weight:300; color:#fff; margin-bottom:1rem; }
.page-hero__title em { font-style:italic; color:#2DB89A; }
.hero-rule { width:48px; height:1.5px; background:linear-gradient(90deg,rgba(45,184,154,.8),transparent); margin-bottom:1.2rem; }
.page-hero__sub { color:rgba(255,255,255,.6); font-size:1.1rem; margin-top:1rem; }
.page-hero__crumbs { display:flex; align-items:center; gap:.4rem; font-size:.72rem; color:rgba(255,255,255,.3); margin-top:2rem; letter-spacing:.05em; }
.page-hero__crumbs a { color:rgba(255,255,255,.45); text-decoration:none; transition:color .2s; }
.page-hero__crumbs a:hover { color:rgba(45,184,154,.9); }
.page-hero__crumbs svg { opacity:.3; }

/* ─── Shared ─── */
.section-label { display:inline-block; font-size:.72rem; font-weight:600; letter-spacing:.22em; text-transform:uppercase; color:#2DB89A; margin-bottom:.75rem; }
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; }
.section-title em { font-style:italic; color:#2DB89A; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }
.intro-text { font-size:.95rem; color:rgba(10,22,40,.65); line-height:1.8; margin-bottom:2rem; }

/* ─── Layout ─── */
.contact-grid { display:grid; grid-template-columns:1fr 1.4fr; gap:5rem; align-items:start; }
.contact-form-col { display:flex; flex-direction:column; gap:0; }

/* ─── Contact Details ─── */
.contact-details { display:flex; flex-direction:column; gap:1.25rem; }
.contact-detail { display:flex; gap:1rem; align-items:flex-start; }
.contact-detail__icon { width:44px; height:44px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:12px; display:grid; place-items:center; color:#2DB89A; flex-shrink:0; }
.contact-detail__label { display:block; font-size:.68rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#2DB89A; margin-bottom:.25rem; }
.contact-detail__value { display:block; font-size:.95rem; color:rgba(10,22,40,.75); }

/* ─── Social ─── */
.social-media { margin-top:2rem; }
.social-media__label { display:block; font-size:.68rem; font-weight:700; letter-spacing:.14em; text-transform:uppercase; color:#2DB89A; margin-bottom:.85rem; }
.social-media__icons { display:flex; gap:.65rem; flex-wrap:wrap; }
.social-icon { width:40px; height:40px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:10px; display:grid; place-items:center; color:rgba(10,22,40,.55); text-decoration:none; transition:background .2s, border-color .2s, color .2s, transform .2s; }
.social-icon:hover { background:#2DB89A; border-color:#2DB89A; color:#fff; transform:translateY(-3px); }

/* ─── Form ─── */
.contact-form-wrap { background:#fff; border-radius:20px; border:1px solid #E8EEF5; box-shadow:0 8px 40px rgba(11,25,41,.08); padding:3rem; }
.contact-form { display:flex; flex-direction:column; gap:1.25rem; }
.form-row { display:grid; grid-template-columns:1fr 1fr; gap:1.25rem; }
.form-group { display:flex; flex-direction:column; gap:.5rem; }
.form-group label { font-size:.75rem; font-weight:700; letter-spacing:.06em; text-transform:uppercase; color:#0B1929; }
.form-group input,
.form-group select,
.form-group textarea { padding:.85rem 1rem; border:1.5px solid #E8EEF5; border-radius:10px; font-family:var(--font-body,inherit); font-size:.92rem; color:#0B1929; background:#F8F9FB; transition:border-color .2s, box-shadow .2s; outline:none; resize:vertical; }
.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus { border-color:#2DB89A; background:#fff; box-shadow:0 0 0 3px rgba(45,184,154,.1); }
.form-group input::placeholder,
.form-group textarea::placeholder { color:rgba(10,22,40,.35); }
.submit-btn { display:flex; align-items:center; justify-content:center; gap:.55rem; width:100%; padding:1rem 2rem; background:linear-gradient(90deg,#1B6FBF,#2DB89A); color:#fff; font-size:.8rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; border:none; border-radius:10px; cursor:pointer; transition:all .25s ease; }
.submit-btn:hover { opacity:.88; transform:translateY(-2px); box-shadow:0 8px 28px rgba(27,111,191,.3); }
.submit-btn:hover svg { transform:translateX(3px); }
.submit-btn svg { transition:transform .2s; }
.submit-btn:disabled { opacity:.55; cursor:not-allowed; transform:none; }
.form-success { display:flex; align-items:center; gap:.6rem; padding:1rem; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.25); border-radius:10px; font-size:.9rem; color:#1A8A72; }
.form-error   { display:flex; align-items:center; gap:.6rem; padding:1rem; background:#fef2f2; border:1px solid #fecaca; border-radius:10px; font-size:.9rem; color:#991b1b; }
.fade-enter-active, .fade-leave-active { transition:opacity .3s; }
.fade-enter-from, .fade-leave-to { opacity:0; }

/* ════════════════════════════════════════════════════
   IMAGE 1 — Full-width cinematic ribbon (top of page)
   ════════════════════════════════════════════════════ */
.con-img--ribbon {
  position: relative;
  width: 100%;
  margin-bottom: 3.5rem;
}

.con-img__ribbon-frame {
  position: relative;
  width: 100%; height: 220px;
  /* Diagonal cut: top-left corner clipped sharply */
  clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
  overflow: hidden;
  box-shadow: 0 22px 52px rgba(10,22,40,.14);
}
.con-img__ribbon-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 30%; display: block;
  transition: transform .65s ease;
}
.con-img--ribbon:hover .con-img__ribbon-frame img { transform: scale(1.04); }
.con-img__ribbon-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.82) 0%,
    rgba(10,22,40,.38) 50%,
    rgba(27,111,191,.25) 100%
  );
}

/* Left caption */
.con-img__ribbon-caption {
  position: absolute; bottom: 28px; left: 40px;
  display: flex; flex-direction: column; gap: .3rem; z-index: 2;
}
.con-img__ribbon-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.con-img__ribbon-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.1rem,2.5vw,1.65rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.con-img__ribbon-title em { font-style: italic; color: #2DB89A; }

/* Right decorative line trio */
.con-img__ribbon-lines {
  position: absolute; right: 44px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: .55rem; z-index: 2;
}
.con-img__ribbon-line {
  height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, rgba(45,184,154,.8), rgba(27,111,191,.4));
}
.con-img__ribbon-line--a { width: 70px; }
.con-img__ribbon-line--b { width: 44px; }
.con-img__ribbon-line--c { width: 58px; }

/* Arch notch from bottom center */
.con-img__ribbon-notch {
  width: 130px; height: 26px;
  background: #fff;
  clip-path: ellipse(50% 100% at 50% 100%);
  margin: 0 auto; margin-top: -2px;
  position: relative; z-index: 1;
}
.con-img__ribbon-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -26px; position: relative; z-index: 0;
}

/* ════════════════════════════════════════════════════
   IMAGE 2 — Arch portrait in the info column
   ════════════════════════════════════════════════════ */
.con-img--arch {
  position: relative;
  width: 100%;
  margin-bottom: 2rem;
  padding-bottom: 18px;
}

.con-img__arch-frame {
  position: relative;
  width: 100%; height: 210px;
  /* Full arch top */
  border-radius: 999px 999px 20px 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.15), 0 4px 12px rgba(27,111,191,.1);
}
.con-img__arch-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 15%; display: block;
  transition: transform .6s ease;
}
.con-img--arch:hover .con-img__arch-frame img { transform: scale(1.05); }
.con-img__arch-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(27,111,191,.1) 0%,
    rgba(10,22,40,.0) 35%,
    rgba(10,22,40,.55) 100%
  );
}

/* Caption inside */
.con-img__arch-caption {
  position: absolute; bottom: 22px; left: 22px;
  display: flex; flex-direction: column; gap: .24rem; z-index: 2;
}
.con-img__arch-eye {
  font-size: .5rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.con-img__arch-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1rem; font-weight: 300; color: #fff; line-height: 1.25;
}
.con-img__arch-txt em { font-style: italic; color: #2DB89A; }

/* Offset teal border behind */
.con-img__arch-border {
  position: absolute;
  top: 10px; left: 10px;
  width: 100%; height: calc(100% - 18px);
  border-radius: 999px 999px 20px 20px;
  border: 1.5px solid rgba(45,184,154,.28);
  pointer-events: none; z-index: 0;
}

/* Dot grid top-right */
.con-img__arch-dots {
  position: absolute; top: -12px; right: -12px;
  width: 64px; height: 64px;
  background-image: radial-gradient(circle, rgba(45,184,154,.46) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none; z-index: 0;
}

/* Floating response badge bottom-right */
.con-img__arch-badge {
  position: absolute;
  bottom: 0; right: -8px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .6rem; font-weight: 700; letter-spacing: .08em; text-transform: uppercase;
  padding: .4rem 1rem .4rem .75rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .42rem;
  box-shadow: 0 6px 20px rgba(27,111,191,.38);
  white-space: nowrap; z-index: 4;
}

/* ════════════════════════════════════════════════════
   IMAGE 3 — Skewed stack pinned above the form
   ════════════════════════════════════════════════════ */
.con-img--skew {
  position: relative;
  width: 100%;
  margin-bottom: 0;
  padding-top: 12px;
  padding-bottom: 28px;
}

/* Rotated back card */
.con-img__skew-back {
  position: absolute;
  inset: 0 -10px 18px 10px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(27,111,191,.1), rgba(45,184,154,.14));
  border: 1px solid rgba(45,184,154,.2);
  transform: rotate(2.5deg);
  z-index: 0;
}

/* Main photo */
.con-img__skew-frame {
  position: relative;
  width: 100%; height: 200px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.16);
  z-index: 1;
}
.con-img__skew-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 40%; display: block;
  transition: transform .6s ease;
}
.con-img--skew:hover .con-img__skew-frame img { transform: scale(1.05); }
.con-img__skew-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.72) 0%,
    rgba(10,22,40,.3) 55%,
    rgba(27,111,191,.2) 100%
  );
}

/* Inside caption */
.con-img__skew-caption {
  position: absolute; bottom: 20px; left: 22px;
  display: flex; flex-direction: column; gap: .24rem; z-index: 2;
}
.con-img__skew-eye {
  font-size: .5rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.con-img__skew-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.9rem,1.6vw,1.1rem); font-weight: 300; color: #fff; line-height: 1.25;
}
.con-img__skew-txt em { font-style: italic; color: #2DB89A; }

/* Corner brackets */
.con-img__skew-corner {
  position: absolute; width: 26px; height: 26px;
  pointer-events: none; z-index: 3;
}
.con-img__skew-corner--tl {
  top: 20px; left: 8px;
  border-top: 2px solid rgba(45,184,154,.7);
  border-left: 2px solid rgba(45,184,154,.7);
}
.con-img__skew-corner--br {
  bottom: 36px; right: 8px;
  border-bottom: 2px solid rgba(45,184,154,.7);
  border-right: 2px solid rgba(45,184,154,.7);
}

/* Bottom pill label */
.con-img__skew-pill {
  position: absolute;
  bottom: 8px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .38rem 1rem .38rem .78rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .42rem;
  box-shadow: 0 6px 18px rgba(27,111,191,.38);
  white-space: nowrap; z-index: 4;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .contact-grid { grid-template-columns:1fr; gap:3rem; }
  .form-row { grid-template-columns:1fr; }
  /* Image 1 */
  .con-img__ribbon-frame { height:185px; clip-path:polygon(2% 0%,100% 0%,98% 100%,0% 100%); }
  .con-img__ribbon-caption { left:26px; bottom:20px; }
  /* Image 2 */
  .con-img--arch { max-width:400px; }
  /* Image 3 */
  .con-img__skew-frame { height:175px; }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .contact-form-wrap { padding:2rem 1.5rem; }
  /* Image 1 */
  .con-img__ribbon-frame { height:165px; }
  .con-img__ribbon-lines { display:none; }
  /* Image 2 */
  .con-img--arch { max-width:100%; }
  .con-img__arch-frame { height:185px; }
}
@media (max-width:480px) {
  .contact-form-wrap { padding:1.5rem 1rem; border-radius:14px; }
  .contact-detail__icon { width:38px; height:38px; }
  /* Image 1 */
  .con-img__ribbon-frame { height:148px; }
  .con-img__ribbon-caption { left:18px; bottom:16px; }
  /* Image 2 */
  .con-img__arch-frame { height:165px; }
  .con-img__arch-badge { font-size:.54rem; right:-4px; }
  /* Image 3 */
  .con-img__skew-frame { height:155px; }
  .con-img__skew-pill { font-size:.54rem; }
}
</style>