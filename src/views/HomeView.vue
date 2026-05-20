<template>
  <main>

    <!-- ══════════════════════════════ HERO ══════════════════════════════ -->
    <section class="hero">
      <div class="hero__video-wrap" v-if="videoReady">
        <video class="hero__video" autoplay muted loop playsinline preload="metadata" @error="videoReady = false">
          <source src="https://ik.imagekit.io/kp5tixhur/Edumart/cargo%20shipping1.mp4" type="video/mp4" />
        </video>
      </div>
      <div class="hero__overlay"></div>
      <div class="hero__noise"></div>
      <div class="hero__glow hero__glow--a"></div>
      <div class="hero__glow hero__glow--b"></div>

      <div class="container hero__inner">
        <div class="hero__content" data-aos="fade-right" data-aos-duration="900">
          <div class="hero__eyebrow">
            <span class="eyebrow-dot"></span>
            Sri Lanka's Trusted Partner
          </div>
          <h1 class="hero__title">
            Integrated<br>
            <em>Supply Chain</em><br>
            Solutions
          </h1>
          <div class="hero__divider"></div>
          <p class="hero__subtitle">
            Delivering reliable, efficient, and scalable operational services to
            educational institutions and corporate organizations across Sri Lanka.
          </p>
          <div class="hero__actions">
            <router-link to="/services" class="hero__btn hero__btn--primary">
              Explore Services
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </router-link>
            <router-link to="/about" class="hero__btn hero__btn--ghost">Learn More</router-link>
          </div>
        </div>

        <div class="hero__visual" data-aos="fade-left" data-aos-duration="900" data-aos-delay="200">
          <div class="hero__card-stack">
            <div v-for="(card, i) in heroCards" :key="'a'+i" class="hcard" :class="`hcard--${i+1}`">
              <div class="hcard__icon-wrap">
                <svg :viewBox="card.vb" width="22" height="22" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="card.svg"></svg>
              </div>
              <span class="hcard__label">{{ card.label }}</span>
            </div>
          </div>
          <div class="hero__cards-hint">auto scrolling →</div>
        </div>
      </div>

      <div class="hero__scroll-cue">
        <div class="scroll-pill"><div class="scroll-dot"></div></div>
        <span>Scroll</span>
      </div>
    </section>

    <!-- ══════════════════════════════ STATS ══════════════════════════════ -->
    <section class="stats-band">
      <div class="container stats-band__inner">
        <div v-for="stat in stats" :key="stat.label" class="stat-item" data-aos="fade-up">
          <span class="stat-num">{{ stat.num }}</span>
          <span class="stat-label">{{ stat.label }}</span>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ ABOUT SNIPPET ══════════════════════════════ -->
    <section class="section-pad about-snippet">
      <div class="container about-snippet__inner">
        <div class="about-snippet__text" data-aos="fade-right">
          <p class="section-eyebrow">Who We Are</p>
          <h2 class="section-heading">Managing Operations.<br><em>Enabling Growth.</em></h2>
          <div class="section-rule"></div>
          <p class="body-text">
            Edumart (Pvt) Ltd is an integrated logistics and supply chain solutions provider delivering reliable, efficient, and scalable operational services to institutions and corporate organizations.
          </p>
          <p class="body-text" style="margin-top:1rem;">
            We specialize in procurement management, logistics coordination, warehousing solutions, cargo transportation, and supply chain consultancy. Our structured operational systems help organizations streamline purchasing, logistics, and inventory management while maintaining transparency and cost efficiency.
          </p>
          <router-link to="/about" class="text-link" style="margin-top:2rem; display:inline-flex;">
            Discover Our Story
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
          </router-link>
        </div>
        <div class="about-snippet__pillars" data-aos="fade-left" data-aos-delay="150">

          <!-- ═══ IMAGE 1: Stacked split-frame in about column ═══ -->
          <div class="home-img home-img--split" data-aos="fade-up" data-aos-delay="80">
            <!-- Rotated back card -->
            <div class="home-img__split-back"></div>
            <!-- Main angled photo -->
            <div class="home-img__split-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/logistic1.jpg"
                alt="Warehouse operations"
              />
              <div class="home-img__split-overlay"></div>
              <div class="home-img__split-caption">
                <span class="home-img__split-eye">Since 2022</span>
                <span class="home-img__split-txt">Operational<br><em>Excellence</em></span>
              </div>
            </div>
            <!-- Floating circular thumb -->
            <div class="home-img__split-thumb">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/logistic3.jfif"
                alt="Team planning"
              />
              <div class="home-img__split-thumb-ring"></div>
            </div>
            <!-- Dot grid -->
            <div class="home-img__split-dots"></div>
            <!-- Pill tag -->
            <div class="home-img__split-pill">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Sri Lanka Wide
            </div>
          </div>

          <div v-for="pillar in pillars" :key="pillar.title" class="pillar-card">
            <div class="pillar-card__header">
              <div class="pillar-icon-ring">
                <svg :viewBox="pillar.vb" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="pillar.svg"></svg>
              </div>
              <h4 class="pillar-title">{{ pillar.title }}</h4>
            </div>
            <p class="pillar-desc">{{ pillar.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ SERVICES ══════════════════════════════ -->
    <section class="section-pad services-section">
      <div class="services-section__bg"></div>
      <div class="container" style="position:relative;z-index:1;">
        <div class="text-center" data-aos="fade-up">
          <p class="section-eyebrow">What We Offer</p>
          <h2 class="section-heading">Our Core <em>Services</em></h2>
          <div class="section-rule centered"></div>
        </div>

        <!-- ═══ IMAGE 2: Wide panoramic banner above service cards ═══ -->
        <div class="home-img home-img--banner" data-aos="fade-up" data-aos-delay="60">
          <div class="home-img__banner-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/container1.jfif"
              alt="Logistics services"
            />
            <div class="home-img__banner-overlay"></div>
            <!-- Left caption -->
            <div class="home-img__banner-caption">
              <span class="home-img__banner-eye">End-to-end solutions</span>
              <span class="home-img__banner-title">From Procurement<br><em>to Delivery</em></span>
            </div>
            <!-- Right stat cluster -->
            <div class="home-img__banner-stats">
              <div class="home-img__banner-stat">
                <span class="home-img__banner-stat-num">05</span>
                <span class="home-img__banner-stat-lbl">Core<br>Services</span>
              </div>
              <div class="home-img__banner-stat-div"></div>
              <div class="home-img__banner-stat">
                <span class="home-img__banner-stat-num">∞</span>
                <span class="home-img__banner-stat-lbl">Scalable<br>Growth</span>
              </div>
            </div>
          </div>
          <!-- Parallelogram notch bottom -->
          <div class="home-img__banner-notch"></div>
          <div class="home-img__banner-rule"></div>
        </div>

        <div class="services-grid">
          <div v-for="(service, i) in services" :key="service.title" class="service-card" :data-aos="'fade-up'" :data-aos-delay="i*70">
            <div class="service-card__icon-wrap">
              <svg :viewBox="service.vb" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="service.svg"></svg>
            </div>
            <h3 class="service-card__title">{{ service.title }}</h3>
            <p class="service-card__desc">{{ service.desc }}</p>
            <router-link to="/services" class="service-card__link">
              Learn more
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
        <div class="text-center" style="margin-top:3.5rem;" data-aos="fade-up">
          <router-link to="/services" class="outline-btn">View All Services</router-link>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ WHY US ══════════════════════════════ -->
    <section class="section-pad why-section">
      <div class="why-section__bg"></div>
      <div class="container" style="position:relative;z-index:1;">
        <div class="why-section__layout">
          <div class="why-section__left" data-aos="fade-right">
            <p class="section-eyebrow light">Our Advantage</p>
            <h2 class="section-heading light">Why Choose<br><em>Edumart?</em></h2>
            <div class="section-rule"></div>
            <p class="body-text light">
              We combine professional expertise with genuine dedication to deliver
              supply chain solutions that drive real, measurable results.
            </p>
            <router-link to="/about" class="ghost-btn" style="margin-top:2rem;">About Us →</router-link>
          </div>
          <div class="why-section__grid" data-aos="fade-left" data-aos-delay="100">
            <div v-for="(item, i) in whyUs" :key="item.title" class="why-card" :data-aos="'fade-up'" :data-aos-delay="i*55">
              <div class="why-card__tick">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <div>
                <h4 class="why-card__title">{{ item.title }}</h4>
                <p class="why-card__desc">{{ item.desc }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ══════════════════════════════ CLIENTS ══════════════════════════════ -->
    <section class="section-pad clients-section">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-eyebrow">Our Partners</p>
          <h2 class="section-heading">Primary Client <em>Partnerships</em></h2>
          <div class="section-rule centered"></div>
          <p class="intro-text">
            We proudly serve leading educational institutions, building long-term
            partnerships founded on trust, reliability, and performance excellence.
          </p>
        </div>

        <!-- ═══ IMAGE 3: Duo overlap side-by-side above client cards ═══ -->
        <div class="home-img home-img--duo" data-aos="fade-up" data-aos-delay="60">
          <!-- Back photo: rotated slightly, recessed -->
          <div class="home-img__duo-back">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/client2.jfif"
              alt="Education sector"
            />
            <div class="home-img__duo-back-wash"></div>
          </div>
          <!-- Front photo: forward, clipped left edge -->
          <div class="home-img__duo-front">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/team1.jfif"
              alt="Client partnerships"
            />
            <div class="home-img__duo-front-wash"></div>
            <div class="home-img__duo-caption">
              <span class="home-img__duo-eye">Trusted partners</span>
              <span class="home-img__duo-title">Institutions That<br><em>Rely on Us</em></span>
            </div>
          </div>
          <!-- Floating badge -->
          <div class="home-img__duo-badge">
            <span class="home-img__duo-badge-num">3+</span>
            <span class="home-img__duo-badge-txt">Active<br>Clients</span>
          </div>
          <!-- Dot grid -->
          <div class="home-img__duo-dots"></div>
        </div>

        <div class="clients-grid">
          <div v-for="client in clients" :key="client" class="client-card" data-aos="zoom-in">
            <div class="client-card__emblem">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                <path d="M6 12v5c3 3 9 3 12 0v-5"/>
              </svg>
            </div>
            <p class="client-card__name">{{ client }}</p>
          </div>
        </div>
        <div class="text-center" style="margin-top:3rem;" data-aos="fade-up">
          <router-link to="/clients" class="outline-btn">View All Clients</router-link>
        </div>
      </div>
    </section>

  </main>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      videoReady: true,
      heroCards: [
        { label: 'Procurement & Purchasing',   vb: '0 0 24 24', svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
        { label: 'Logistics & Transportation', vb: '0 0 24 24', svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
        { label: 'Warehousing & Inventory',    vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
        { label: 'Supply Chain Consultation',  vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
      ],
      stats: [
        { num: '5+',   label: 'Core Services' },
        { num: '3+',   label: 'Institutional Clients' },
        { num: '100%', label: 'Transparency' },
        { num: '2+',   label: 'Years Operating' },
      ],
      pillars: [
        { title: 'Our Vision',  desc: 'To become a trusted and innovative supply chain solutions provider in Sri Lanka with regional expansion capabilities.', vb: '0 0 24 24', svg: '<circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/><path d="M12 7V2"/><path d="m15 9 5-5"/>' },
        { title: 'Our Mission', desc: 'To deliver efficient, transparent, and scalable operational solutions that support long-term institutional and corporate growth.',  vb: '0 0 24 24', svg: '<circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>' },
      ],
      services: [
        { title: 'Procurement & Purchasing',  desc: 'Strategic sourcing, vendor negotiation, cost optimization, and import purchasing management.',                    vb: '0 0 24 24', svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
        { title: 'Logistics Handling',        desc: 'Local and international logistics coordination, import/export documentation, and route optimization.',           vb: '0 0 24 24', svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
        { title: 'Warehousing & Inventory',   desc: 'Secure storage, inventory control systems, stock monitoring, and distribution coordination.',                   vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
        { title: 'Cargo Transportation',      desc: 'Inland cargo transportation, institutional material distribution, and scheduled/urgent deliveries.',             vb: '0 0 24 24', svg: '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>' },
        { title: 'Supply Chain Consultation', desc: 'Process optimization, procurement strategy development, cost control, and operational structuring.',            vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
      ],
      whyUs: [
        { title: 'Professional & Structured Systems', desc: 'Methodically designed operational workflows built for institutional efficiency.' },
        { title: 'Dedicated Service Management',      desc: 'Hands-on account management and dedicated support for every client.' },
        { title: 'Strong Supplier Networks',          desc: 'Established relationships with reliable suppliers and logistics partners.' },
        { title: 'Transparent Procurement',           desc: 'Full visibility into purchasing decisions, costs, and supply chain activities.' },
        { title: 'Scalable Solutions',                desc: 'Flexible systems designed to grow alongside your expanding institution.' },
        { title: 'Long-Term Growth Strategy',         desc: 'Partnerships focused on your success for years to come.' },
      ],
      clients: [
        'Cambridge College of British English International (PVT) Ltd',
        'Cambridge College of British English',
        'Cambridge College of Information Technology',
      ]
    }
  },
}
</script>

<style scoped>
/* ── Shared Tokens ── */
.section-eyebrow { font-size:.62rem; font-weight:700; letter-spacing:.24em; text-transform:uppercase; color:#2DB89A; margin-bottom:.8rem; display:block; }
.section-eyebrow.light { color:rgba(45,184,154,.85); }
.section-heading { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(2rem,4vw,3rem); font-weight:300; color:#0A1628; line-height:1.12; margin-bottom:1.2rem; }
.section-heading em { font-style:italic; color:#2DB89A; }
.section-heading.light { color:#fff; }
.section-rule { width:40px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin-bottom:1.6rem; border-radius:2px; }
.section-rule.centered { margin:0 auto 2.5rem; }
.body-text { font-size:.95rem; color:rgba(10,22,40,.65); line-height:1.85; }
.body-text.light { color:rgba(255,255,255,.6); }
.text-link { display:inline-flex; align-items:center; gap:.5rem; font-size:.78rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#2DB89A; text-decoration:none; transition:gap .2s; }
.text-link:hover { gap:.75rem; }
.intro-text { max-width:520px; margin:0 auto 3rem; font-size:.95rem; color:rgba(10,22,40,.55); line-height:1.8; }
.outline-btn { display:inline-flex; align-items:center; padding:.75rem 1.8rem; border:1.5px solid rgba(10,22,40,.2); border-radius:8px; font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:#0A1628; text-decoration:none; transition:all .25s ease; }
.outline-btn:hover { border-color:#2DB89A; color:#2DB89A; background:rgba(45,184,154,.05); }
.ghost-btn { display:inline-flex; align-items:center; padding:.7rem 1.6rem; border:1.5px solid rgba(255,255,255,.25); border-radius:8px; font-size:.72rem; font-weight:700; letter-spacing:.1em; text-transform:uppercase; color:rgba(255,255,255,.75); text-decoration:none; transition:all .25s ease; }
.ghost-btn:hover { border-color:rgba(45,184,154,.6); color:#2DB89A; }
.text-center { text-align:center; }

/* ── Hero ── */
.hero { background:#0B1929; min-height:100svh; display:flex; flex-direction:column; position:relative; overflow-x:hidden; overflow-y:hidden; padding-top:54px; }
@supports not (min-height:100svh) { .hero { min-height:100vh; } }
.hero__video-wrap { position:absolute; inset:0; z-index:0; overflow:hidden; }
.hero__video { width:100%; height:100%; object-fit:cover; pointer-events:none; }
.hero__overlay { position:absolute; inset:0; z-index:1; background:linear-gradient(160deg,rgba(7,16,30,.92) 0%,rgba(7,16,30,.68) 50%,rgba(10,22,40,.78) 100%); }
.hero__noise { position:absolute; inset:0; z-index:2; background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E"); background-size:200px 200px; pointer-events:none; opacity:.4; }
.hero__glow { position:absolute; z-index:2; pointer-events:none; border-radius:50%; }
.hero__glow--a { bottom:-10%; left:-5%; width:600px; height:500px; background:radial-gradient(ellipse,rgba(45,184,154,.09) 0%,transparent 65%); }
.hero__glow--b { top:-20%; right:-10%; width:700px; height:600px; background:radial-gradient(ellipse,rgba(26,52,89,.4) 0%,transparent 60%); }
.hero__inner { display:grid; grid-template-columns:1.2fr 1fr; align-items:center; gap:4rem; flex:1; padding-top:3.5rem; padding-bottom:3.5rem; position:relative; z-index:3; }
.hero__eyebrow { display:inline-flex; align-items:center; gap:.55rem; font-size:.62rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:rgba(45,184,154,.9); margin-bottom:1.1rem; }
.eyebrow-dot { width:5px; height:5px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); border-radius:50%; }
.hero__title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(2.8rem,5.5vw,5rem); font-weight:300; color:#fff; line-height:1.06; margin-bottom:1.3rem; letter-spacing:-.01em; }
.hero__title em { font-style:italic; color:#2DB89A; }
.hero__divider { width:48px; height:1.5px; background:linear-gradient(90deg,#2DB89A,transparent); margin-bottom:1.4rem; }
.hero__subtitle { font-size:clamp(.9rem,1.8vw,1rem); color:rgba(255,255,255,.6); line-height:1.85; max-width:460px; margin-bottom:2.5rem; }
.hero__actions { display:flex; gap:1rem; flex-wrap:wrap; align-items:center; }
.hero__btn { display:inline-flex; align-items:center; gap:.55rem; padding:.8rem 1.6rem; border-radius:8px; font-size:.75rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; text-decoration:none; transition:all .25s ease; }
.hero__btn--primary { background:linear-gradient(90deg,#1B6FBF,#2DB89A); color:#0B1929; border:2px solid #2DB89A; }
.hero__btn--primary:hover { background:#229D83; border-color:#229D83; transform:translateY(-2px); box-shadow:0 8px 28px rgba(45,184,154,.35); }
.hero__btn--primary:hover svg { transform:translateX(3px); }
.hero__btn--primary svg { transition:transform .2s; }
.hero__btn--ghost { background:transparent; color:rgba(255,255,255,.75); border:1.5px solid rgba(255,255,255,.22); }
.hero__btn--ghost:hover { border-color:rgba(255,255,255,.5); color:#fff; background:rgba(255,255,255,.05); }
.hero__visual { display:flex; flex-direction:column; gap:.6rem; align-items:center; }
.hero__card-stack { display:grid; grid-template-columns:1fr 1fr; gap:.85rem; width:100%; max-width:380px; }
.hcard { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.1); border-radius:12px; padding:1.4rem 1.1rem 1.1rem; display:flex; flex-direction:column; gap:.7rem; backdrop-filter:blur(12px); -webkit-backdrop-filter:blur(12px); transition:all .3s ease; }
.hcard:hover { background:rgba(45,184,154,.08); border-color:rgba(45,184,154,.3); transform:translateY(-4px); }
.hcard__icon-wrap { width:36px; height:36px; background:rgba(255,255,255,.06); border-radius:8px; display:grid; place-items:center; color:#2DB89A; }
.hcard__label { font-size:.72rem; font-weight:600; color:rgba(255,255,255,.72); line-height:1.35; letter-spacing:.01em; }
.hcard--1 { animation:floatCard 5s ease-in-out infinite 0s; }
.hcard--2 { animation:floatCard 5s ease-in-out infinite 1.2s; }
.hcard--3 { animation:floatCard 5s ease-in-out infinite .6s; }
.hcard--4 { animation:floatCard 5s ease-in-out infinite 1.8s; }
@keyframes floatCard { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.hero__cards-hint { display:none; font-size:.6rem; font-weight:600; letter-spacing:.12em; text-transform:uppercase; color:rgba(255,255,255,.3); align-self:flex-start; padding-left:2px; }
.hero__scroll-cue { position:relative; z-index:3; display:flex; flex-direction:column; align-items:center; gap:.5rem; padding-bottom:2.5rem; color:rgba(255,255,255,.3); font-size:.6rem; letter-spacing:.18em; text-transform:uppercase; }
.scroll-pill { width:22px; height:36px; border:1.5px solid rgba(255,255,255,.18); border-radius:12px; display:flex; justify-content:center; padding-top:6px; }
.scroll-dot { width:3px; height:8px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); border-radius:2px; animation:scrollBounce 2s ease-in-out infinite; }
@keyframes scrollBounce { 0%,100%{opacity:.4;transform:translateY(0)} 50%{opacity:1;transform:translateY(6px)} }

/* ── Stats Band ── */
.stats-band { background:linear-gradient(90deg,#1B6FBF,#2DB89A); padding:0; position:relative; z-index:4; }
.stats-band__inner { display:grid; grid-template-columns:repeat(4,1fr); }
.stat-item { display:flex; flex-direction:column; align-items:center; padding:2.2rem 1rem; gap:.25rem; border-right:1px solid rgba(10,22,40,.12); }
.stat-item:last-child { border-right:none; }
.stat-num { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(2.2rem,4vw,3rem); font-weight:600; color:#0B1929; line-height:1; letter-spacing:-.01em; }
.stat-label { font-size:.63rem; font-weight:700; letter-spacing:.15em; text-transform:uppercase; color:rgba(10,22,40,.55); }

/* ── About Snippet ── */
.about-snippet { background:#fff; }
.about-snippet__inner { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
.pillar-card { padding:1.8rem; border:1px solid rgba(10,22,40,.08); border-radius:14px; background:#FAFAF8; transition:all .3s ease; margin-bottom:1rem; }
.pillar-card:last-child { margin-bottom:0; }
.pillar-card:hover { border-color:rgba(45,184,154,.35); background:#fff; transform:translateX(6px); box-shadow:0 8px 30px rgba(45,184,154,.1); }
.pillar-card__header { display:flex; align-items:center; gap:1rem; margin-bottom:.8rem; }
.pillar-icon-ring { width:40px; height:40px; border-radius:10px; background:rgba(45,184,154,.1); border:1px solid rgba(45,184,154,.2); display:grid; place-items:center; color:#2DB89A; flex-shrink:0; }
.pillar-title { font-size:1rem; font-weight:700; color:#0B1929; }
.pillar-desc { font-size:.875rem; color:rgba(10,22,40,.55); line-height:1.75; }

/* ── Services ── */
.services-section { position:relative; overflow:hidden; }
.services-section__bg { position:absolute; inset:0; background:#F4F6F9; z-index:0; }
.services-section__bg::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(45,184,154,.3),transparent); }
.services-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:3rem; }
.services-grid > *:last-child:nth-child(3n+1) { grid-column:2; }
.service-card { background:#fff; border:1px solid rgba(10,22,40,.07); border-radius:16px; padding:2.2rem 1.8rem; transition:all .3s ease; position:relative; overflow:hidden; }
.service-card::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
.service-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(10,22,40,.08); border-color:rgba(45,184,154,.2); }
.service-card:hover::before { transform:scaleX(1); }
.service-card__icon-wrap { width:48px; height:48px; background:rgba(45,184,154,.08); border-radius:12px; display:grid; place-items:center; margin-bottom:1.2rem; color:#2DB89A; border:1px solid rgba(45,184,154,.15); }
.service-card__title { font-size:1rem; font-weight:700; color:#0B1929; margin-bottom:.7rem; line-height:1.3; }
.service-card__desc { font-size:.855rem; color:rgba(10,22,40,.55); line-height:1.78; margin-bottom:1.5rem; }
.service-card__link { display:inline-flex; align-items:center; gap:.4rem; font-size:.7rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; color:#2DB89A; text-decoration:none; transition:gap .2s; }
.service-card__link:hover { gap:.65rem; }

/* ── Why Section ── */
.why-section { position:relative; overflow:hidden; }
.why-section__bg { position:absolute; inset:0; background:linear-gradient(135deg,#0F2236 0%,#0B1929 50%,#081523 100%); z-index:0; }
.why-section__bg::before { content:''; position:absolute; top:50%; left:-200px; transform:translateY(-50%); width:500px; height:500px; border-radius:50%; background:radial-gradient(ellipse,rgba(45,184,154,.06) 0%,transparent 65%); }
.why-section__layout { display:grid; grid-template-columns:1fr 1.4fr; gap:5rem; align-items:start; position:relative; z-index:1; }
.why-section__grid { display:grid; grid-template-columns:1fr 1fr; gap:1rem; }
.why-card { display:flex; gap:.85rem; align-items:flex-start; padding:1.3rem; border:1px solid rgba(255,255,255,.06); border-radius:12px; background:rgba(255,255,255,.025); transition:all .25s ease; }
.why-card:hover { background:rgba(45,184,154,.06); border-color:rgba(45,184,154,.18); }
.why-card__tick { width:26px; height:26px; background:rgba(45,184,154,.15); border:1px solid rgba(45,184,154,.3); border-radius:50%; display:grid; place-items:center; color:#2DB89A; flex-shrink:0; margin-top:.05rem; }
.why-card__title { font-size:.88rem; font-weight:700; color:#fff; margin-bottom:.35rem; line-height:1.3; }
.why-card__desc { font-size:.8rem; color:rgba(255,255,255,.45); line-height:1.65; }

/* ── Clients ── */
.clients-section { background:#fff; }
.clients-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; }
.client-card { padding:2.5rem 2rem; border:1px solid rgba(10,22,40,.08); border-radius:16px; background:#F8F9FB; text-align:center; transition:all .3s ease; }
.client-card:hover { border-color:rgba(45,184,154,.4); background:#fff; transform:translateY(-6px); box-shadow:0 16px 40px rgba(27,111,191,.12); }
.client-card__emblem { width:52px; height:52px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:12px; display:grid; place-items:center; margin:0 auto 1.2rem; color:#2DB89A; transition:background .2s; }
.client-card:hover .client-card__emblem { background:rgba(45,184,154,.15); }
.client-card__name { font-size:.9rem; font-weight:600; color:#0B1929; line-height:1.55; }

/* ═══════════════════════════════════════════════════════
   IMAGE 1 — Stacked split-frame (About column)
   ═══════════════════════════════════════════════════════ */
.home-img--split {
  position: relative;
  width: 100%;
  margin-bottom: 1.8rem;
  padding-bottom: 34px;
}

/* Rotated back card */
.home-img__split-back {
  position: absolute;
  inset: 8px -10px 24px 10px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(27,111,191,.1), rgba(45,184,154,.15));
  border: 1px solid rgba(45,184,154,.2);
  transform: rotate(-3deg);
  z-index: 0;
}

/* Main photo clipped on bottom-right corner */
.home-img__split-frame {
  position: relative;
  width: 100%; height: 240px;
  clip-path: polygon(0 0, 100% 0, 100% 80%, 86% 100%, 0 100%);
  border-radius: 4px;
  overflow: hidden;
  box-shadow: 0 22px 52px rgba(10,22,40,.18);
  z-index: 1;
}
.home-img__split-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.home-img--split:hover .home-img__split-frame img { transform: scale(1.05); }
.home-img__split-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(10,22,40,.06) 0%, rgba(10,22,40,.52) 100%);
}

/* Caption inside */
.home-img__split-caption {
  position: absolute; bottom: 22px; left: 20px;
  display: flex; flex-direction: column; gap: .24rem; z-index: 2;
}
.home-img__split-eye {
  font-size: .5rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.home-img__split-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.05rem; font-weight: 300; color: #fff; line-height: 1.25;
}
.home-img__split-txt em { font-style: italic; color: #2DB89A; }

/* Floating circular thumb */
.home-img__split-thumb {
  position: absolute;
  bottom: 0; left: -14px;
  width: 88px; height: 88px;
  z-index: 4;
}
.home-img__split-thumb img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 8px 24px rgba(10,22,40,.2);
}
.home-img__split-thumb-ring {
  position: absolute; inset: -7px;
  border-radius: 50%;
  border: 1.5px dashed rgba(45,184,154,.5);
  animation: spin-slow 18s linear infinite;
  pointer-events: none;
}
@keyframes spin-slow { to { transform: rotate(360deg); } }

/* Dot grid top-right */
.home-img__split-dots {
  position: absolute; top: -14px; right: -14px;
  width: 68px; height: 68px;
  background-image: radial-gradient(circle, rgba(45,184,154,.46) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none; z-index: 0;
}

/* Bottom pill */
.home-img__split-pill {
  position: absolute;
  bottom: 8px; right: 10px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .58rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .36rem .9rem .36rem .7rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .38rem;
  box-shadow: 0 5px 16px rgba(27,111,191,.36);
  white-space: nowrap; z-index: 4;
}

/* ═══════════════════════════════════════════════════════
   IMAGE 2 — Wide panoramic banner (Services section)
   ═══════════════════════════════════════════════════════ */
.home-img--banner {
  position: relative;
  width: 100%;
  margin-bottom: 0;
}

.home-img__banner-frame {
  position: relative;
  width: 100%; height: 220px;
  /* Diagonal clips both ends */
  clip-path: polygon(2% 0%, 98% 0%, 100% 100%, 0% 100%);
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.13);
}
.home-img__banner-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 40%; display: block;
  transition: transform .65s ease;
}
.home-img--banner:hover .home-img__banner-frame img { transform: scale(1.04); }
.home-img__banner-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.82) 0%,
    rgba(10,22,40,.38) 50%,
    rgba(27,111,191,.26) 100%
  );
}

/* Left caption */
.home-img__banner-caption {
  position: absolute; bottom: 28px; left: 40px;
  display: flex; flex-direction: column; gap: .3rem; z-index: 2;
}
.home-img__banner-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.home-img__banner-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.1rem,2.4vw,1.6rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.home-img__banner-title em { font-style: italic; color: #2DB89A; }

/* Right stat cluster */
.home-img__banner-stats {
  position: absolute; right: 40px; bottom: 26px;
  display: flex; align-items: center; gap: 1.3rem; z-index: 2;
}
.home-img__banner-stat { display: flex; flex-direction: column; gap: .2rem; text-align: right; }
.home-img__banner-stat-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;
}
.home-img__banner-stat-lbl {
  font-size: .52rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; color: rgba(255,255,255,.5); line-height: 1.45;
}
.home-img__banner-stat-div {
  width: 1px; height: 36px;
  background: rgba(255,255,255,.18);
}

/* Parallelogram notch from bottom */
.home-img__banner-notch {
  width: 120px; height: 26px;
  background: #F4F6F9; /* matches services-section bg */
  clip-path: polygon(10% 0%, 90% 0%, 100% 100%, 0% 100%);
  margin: 0 auto; margin-top: -2px;
  position: relative; z-index: 1;
}
.home-img__banner-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -26px; position: relative; z-index: 0;
}

/* ═══════════════════════════════════════════════════════
   IMAGE 3 — Overlap duo (Clients section)
   ═══════════════════════════════════════════════════════ */
.home-img--duo {
  position: relative;
  height: 260px;
  margin-bottom: 3rem;
}

/* Back photo: rotated, recessed */
.home-img__duo-back {
  position: absolute;
  top: 0; left: 0;
  width: 52%; height: 100%;
  border-radius: 20px;
  overflow: hidden;
  transform: rotate(-2.5deg) translateY(10px);
  box-shadow: 0 14px 36px rgba(10,22,40,.1);
  z-index: 0;
}
.home-img__duo-back img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.home-img__duo-back-wash {
  position: absolute; inset: 0;
  background: rgba(10,22,40,.2);
}

/* Front photo: overlapping, clipped diagonal left edge */
.home-img__duo-front {
  position: absolute;
  top: 0; right: 0;
  width: 70%; height: 100%;
  border-radius: 20px;
  overflow: hidden;
  clip-path: polygon(5% 0%, 100% 0%, 100% 100%, 0% 100%);
  box-shadow: 0 24px 56px rgba(10,22,40,.18), 0 4px 12px rgba(27,111,191,.1);
  z-index: 1;
}
.home-img__duo-front img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.home-img--duo:hover .home-img__duo-front img { transform: scale(1.04); }
.home-img__duo-front-wash {
  position: absolute; inset: 0;
  background: linear-gradient(110deg,
    rgba(10,22,40,.72) 0%,
    rgba(10,22,40,.3) 48%,
    rgba(27,111,191,.2) 100%
  );
}

/* Caption inside front photo */
.home-img__duo-caption {
  position: absolute; bottom: 24px; left: 28px;
  display: flex; flex-direction: column; gap: .26rem; z-index: 2;
}
.home-img__duo-eye {
  font-size: .52rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.home-img__duo-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.95rem,2vw,1.3rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.home-img__duo-title em { font-style: italic; color: #2DB89A; }

/* Floating gradient badge top-right */
.home-img__duo-badge {
  position: absolute;
  top: -14px; right: -12px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 14px;
  padding: .65rem 1rem;
  display: flex; align-items: center; gap: .6rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.42);
  z-index: 4; white-space: nowrap;
}
.home-img__duo-badge-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.45rem; font-weight: 700; color: #fff; line-height: 1;
}
.home-img__duo-badge-txt {
  font-size: .54rem; font-weight: 700;
  color: rgba(255,255,255,.85);
  text-transform: uppercase; letter-spacing: .06em; line-height: 1.45;
}

/* Dot grid bottom-left */
.home-img__duo-dots {
  position: absolute; bottom: -12px; left: -12px;
  width: 68px; height: 68px;
  background-image: radial-gradient(circle, rgba(45,184,154,.42) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none; z-index: 0;
}

/* ── Responsive ── */
@media (max-width:1024px) {
  .hero__inner { gap:2.5rem; }
  .services-grid { grid-template-columns:repeat(2,1fr); }
  .services-grid > *:last-child:nth-child(3n+1) { grid-column:auto; }
  .why-section__layout { gap:3rem; }
  .clients-grid { grid-template-columns:repeat(2,1fr); }
  .about-snippet__inner { gap:3rem; }
}
@media (max-width:768px) {
  .hero { padding-top:54px; }
  .hero__inner { grid-template-columns:1fr; gap:2.5rem; padding-top:2rem; padding-bottom:2rem; }
  .hero__title { font-size:clamp(3rem,9vw,3rem); }
  .hero__subtitle { font-size:.92rem; max-width:100%; }
  .hero__actions { flex-direction:column; align-items:stretch; }
  .hero__btn { justify-content:center; max-width:100%; }
  .hero__visual { width:100%; align-items:flex-start; overflow:hidden; }
  .hero__card-stack {
    display: flex; flex-wrap: nowrap; gap: .75rem; padding-bottom: .5rem;
    animation: cardMarquee 12s linear infinite; width: max-content;
  }
  .hero__card-stack:hover { animation-play-state: paused; }
  @keyframes cardMarquee { 0% { transform:translateX(0); } 100% { transform:translateX(-608px); } }
  .hcard { flex:0 0 140px; width:140px; backdrop-filter:none; -webkit-backdrop-filter:none; }
  .hcard--1,.hcard--2,.hcard--3,.hcard--4 { animation:none; }
  .hero__cards-hint { display:block; }
  .hero__scroll-cue { display:none; }
  .stats-band__inner { grid-template-columns:repeat(2,1fr); }
  .stat-item { border-right:none; border-bottom:1px solid rgba(10,22,40,.1); padding:1.6rem 1rem; }
  .stat-item:nth-child(odd) { border-right:1px solid rgba(10,22,40,.12); }
  .stat-item:nth-last-child(-n+2) { border-bottom:none; }
  .about-snippet__inner { grid-template-columns:1fr; gap:2.5rem; }
  .services-grid { grid-template-columns:1fr; margin-top:2rem; }
  .services-grid > *:last-child:nth-child(3n+1) { grid-column:auto; }
  .why-section__layout { grid-template-columns:1fr; gap:2.5rem; }
  .why-section__grid { grid-template-columns:1fr; }
  .clients-grid { grid-template-columns:1fr; gap:1.2rem; }
  /* Image 1 */
  .home-img--split { margin-bottom: 1.4rem; }
  .home-img__split-frame { height:210px; }
  .home-img__split-thumb { width:76px; height:76px; left:-10px; }
  /* Image 2 */
  .home-img__banner-frame { height:185px; clip-path:polygon(1% 0%,99% 0%,100% 100%,0% 100%); }
  .home-img__banner-caption { left:22px; bottom:20px; }
  .home-img__banner-stats { right:20px; bottom:20px; gap:1rem; }
  .home-img__banner-stat-num { font-size:1.5rem; }
  /* Image 3 */
  .home-img--duo { height:210px; margin-bottom:2.2rem; }
  .home-img__duo-front { width:74%; }
}
@media (max-width:480px) {
  .hcard { width:125px; }
  .services-grid { gap:1rem; }
  .service-card { padding:1.6rem 1.4rem; }
  .client-card { padding:1.8rem 1.4rem; }
  /* Image 1 */
  .home-img__split-frame { height:185px; }
  .home-img__split-pill { font-size:.52rem; }
  /* Image 2 */
  .home-img__banner-frame { height:160px; }
  .home-img__banner-stats { display:none; }
  /* Image 3 */
  .home-img--duo { height:185px; }
  .home-img__duo-badge { top:-10px; right:-8px; padding:.5rem .75rem; gap:.5rem; }
  .home-img__duo-badge-num { font-size:1.15rem; }
}
@media (prefers-reduced-motion:reduce) {
  .hero__video { display:none; }
  .hcard--1,.hcard--2,.hcard--3,.hcard--4 { animation:none; }
  .scroll-dot { animation:none; }
  .home-img__split-thumb-ring { animation:none; }
}
</style>