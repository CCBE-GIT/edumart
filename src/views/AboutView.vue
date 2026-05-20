<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-eyebrow">Our Story</p>
          <h1 class="page-hero__title">About <em>Edumart</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Delivering integrated supply chain excellence across Sri Lanka</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          About Us
        </div>
      </div>
    </section>

    <!-- Overview -->
    <section class="section-pad overview-section">
      <div class="container overview-grid">
        <div data-aos="fade-right">
          <p class="section-eyebrow">Company Overview</p>
          <h2 class="section-heading">Who We <em>Are</em></h2>
          <div class="section-rule"></div>
          <p class="body-text">
            Edumart (Pvt) Ltd was established to provide structured supply chain management and operational solutions with a focus on reliability, cost efficiency, and strategic expansion. We specialize in procurement, logistics, warehousing, cargo transportation, and supply chain consultancy.
          </p>
          <p class="body-text" style="margin-top:1rem;">
            Through structured systems and professional service management, we ensure smooth operational workflows for institutions and corporate clients across Sri Lanka and beyond.
          </p>
        </div>
        <div class="overview-visual" data-aos="fade-left" data-aos-delay="150">

          <!-- ═══ IMAGE 1: Stacked split-frame with floating thumb ═══ -->
          <div class="img-split-frame">
            <div class="img-split-frame__main">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/logistic1.jpg"
                alt="Warehouse operations"
              />
              <div class="img-split-frame__main-overlay"></div>
            </div>
            <div class="img-split-frame__thumb">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/logistic3.jfif"
                alt="Logistics planning"
              />
              <div class="img-split-frame__thumb-ring"></div>
            </div>
            <div class="img-split-frame__dots"></div>
            <div class="img-split-frame__tag">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              Sri Lanka Operations
            </div>
          </div>

          <div class="years-badge">
            <div class="years-badge__inner">
              <span class="years-num">02+</span>
              <span class="years-label">Years of<br>Excellence</span>
            </div>
          </div>
          <div class="spec-list">
            <div v-for="spec in specializations" :key="spec" class="spec-item">
              <div class="spec-check">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <span>{{ spec }}</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision & Mission -->
    <section class="section-pad vm-section">
      <div class="vm-section__bg"></div>
      <div class="container" style="position:relative;z-index:1;">
        <div class="text-center" data-aos="fade-up">
          <p class="section-eyebrow light">Our Foundation</p>
          <h2 class="section-heading light">Vision & <em>Mission</em></h2>
          <div class="section-rule centered"></div>
        </div>

        <!-- ═══ IMAGE 2: Layered diamond mosaic ═══ -->
        <div class="img-diamond-mosaic" data-aos="zoom-in" data-aos-delay="80">
          <div class="img-diamond-mosaic__border-back"></div>
          <div class="img-diamond-mosaic__frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/container1.jfif"
              alt="Supply chain logistics"
            />
            <div class="img-diamond-mosaic__wash"></div>
          </div>
          <div class="img-diamond-mosaic__border-front"></div>
          <div class="img-diamond-mosaic__pill">
            <span class="img-diamond-mosaic__pill-num">500+</span>
            <span class="img-diamond-mosaic__pill-txt">Shipments<br>Handled</span>
          </div>
        </div>

        <div class="vm-grid">
          <div class="vm-card vm-card--vision" data-aos="fade-up">
            <div class="vm-card__icon-ring">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="2"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10"/><path d="M12 7V2"/><path d="m15 9 5-5"/>
              </svg>
            </div>
            <p class="vm-card__label">Our Vision</p>
            <h3 class="vm-card__title">Trusted & Innovative</h3>
            <p class="vm-card__body">
              To become a trusted and innovative supply chain solutions provider
              in Sri Lanka with regional expansion capabilities.
            </p>
          </div>
          <div class="vm-card vm-card--mission" data-aos="fade-up" data-aos-delay="120">
            <div class="vm-card__icon-ring vm-card__icon-ring--light">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
              </svg>
            </div>
            <p class="vm-card__label vm-card__label--dark">Our Mission</p>
            <h3 class="vm-card__title vm-card__title--dark">Efficient & Transparent</h3>
            <p class="vm-card__body vm-card__body--dark">
              To deliver efficient, transparent, and scalable operational solutions
              that support long-term institutional and corporate growth.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values -->
    <section class="section-pad values-section">
      <div class="container">
        <div class="text-center" data-aos="fade-up">
          <p class="section-eyebrow">Our Foundation</p>
          <h2 class="section-heading">Core <em>Values</em></h2>
          <div class="section-rule centered"></div>
        </div>

        <!-- ═══ IMAGE 3: Panoramic arc banner ═══ -->
        <div class="img-arc-banner" data-aos="fade-up" data-aos-delay="60">
          <div class="img-arc-banner__frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/team1.jfif"
              alt="Team collaboration"
            />
            <div class="img-arc-banner__overlay"></div>
            <div class="img-arc-banner__caption">
              <span class="img-arc-banner__caption-eyebrow">Built on trust</span>
              <span class="img-arc-banner__caption-text">People Behind Our Excellence</span>
            </div>
          </div>
          <div class="img-arc-banner__arc-top"></div>
          <div class="img-arc-banner__arc-bottom"></div>
        </div>

        <div class="values-grid">
          <div v-for="(val, i) in values" :key="val.title" class="value-card" :data-aos="'fade-up'" :data-aos-delay="i*70">
            <div class="value-card__icon">
              <svg :viewBox="val.vb" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="val.svg"></svg>
            </div>
            <h4 class="value-card__title">{{ val.title }}</h4>
            <p class="value-card__desc">{{ val.desc }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      specializations: [
        'Procurement and Purchasing Management',
        'Logistics Coordination and Shipment Monitoring',
        'Warehouse and Inventory Management',
        'Cargo Transportation Services',
        'Supply Chain Consultation and Planning',
      ],
      values: [
        { title: 'Reliability',  desc: 'Consistent, dependable service delivery you can count on every time.', vb: '0 0 24 24', svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { title: 'Transparency', desc: 'Open communication and full visibility across all operations.',       vb: '0 0 24 24', svg: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/>' },
        { title: 'Efficiency',   desc: 'Optimized processes that deliver more value at lower cost.',            vb: '0 0 24 24', svg: '<polyline points="13 2 13 9 20 9"/><path d="M22 12A10 10 0 1 1 3.34 7"/><path d="M13 2 2 13.5"/>' },
        { title: 'Partnership',  desc: 'Long-term relationships built on mutual trust and shared success.',     vb: '0 0 24 24', svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { title: 'Scalability',  desc: 'Systems designed to grow seamlessly with your organization.',           vb: '0 0 24 24', svg: '<polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/>' },
        { title: 'Innovation',   desc: 'Continuously improving our systems, technology, and service standards.', vb: '0 0 24 24', svg: '<line x1="12" y1="2" x2="12" y2="6"/><line x1="12" y1="18" x2="12" y2="22"/><line x1="4.93" y1="4.93" x2="7.76" y2="7.76"/><line x1="16.24" y1="16.24" x2="19.07" y2="19.07"/><line x1="2" y1="12" x2="6" y2="12"/><line x1="18" y1="12" x2="22" y2="12"/><line x1="4.93" y1="19.07" x2="7.76" y2="16.24"/><line x1="16.24" y1="7.76" x2="19.07" y2="4.93"/>' },
      ]
    }
  }
}
</script>

<style scoped>
/* ─── Base tokens ─── */
.section-eyebrow { font-size:.62rem; font-weight:700; letter-spacing:.24em; text-transform:uppercase; color:#2DB89A; margin-bottom:.8rem; display:block; }
.section-eyebrow.light { color:rgba(45,184,154,.85); }
.section-heading { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(2rem,4vw,3rem); font-weight:300; color:#0B1929; line-height:1.12; margin-bottom:1.2rem; }
.section-heading em { font-style:italic; color:#2DB89A; }
.section-heading.light { color:#fff; }
.section-rule { width:40px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin-bottom:1.6rem; border-radius:2px; }
.section-rule.centered { margin:0 auto 2.5rem; }
.body-text { font-size:.95rem; color:rgba(10,22,40,.6); line-height:1.85; }
.text-center { text-align:center; }

/* ─── Hero ─── */
.page-hero { position:relative; overflow:hidden; padding:120px 0 90px; }
.page-hero__bg { position:absolute; inset:0; z-index:0; background:linear-gradient(135deg,#0D1E36 0%,#0A1628 60%,#07101E 100%); }
.page-hero__glow { position:absolute; z-index:1; top:-20%; right:-10%; width:700px; height:600px; border-radius:50%; background:radial-gradient(ellipse,rgba(45,184,154,.07) 0%,transparent 65%); pointer-events:none; }
.page-hero__inner { position:relative; z-index:2; display:flex; flex-direction:column; gap:1rem; }
.page-hero__title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(2.8rem,6vw,4.5rem); font-weight:300; color:#fff; line-height:1.08; margin-bottom:1rem; }
.page-hero__title em { font-style:italic; color:#2DB89A; }
.hero-rule { width:48px; height:1.5px; background:linear-gradient(90deg,rgba(45,184,154,.8),transparent); margin-bottom:1.2rem; }
.page-hero__sub { font-size:1.05rem; color:rgba(255,255,255,.55); line-height:1.7; }
.page-hero__crumbs { display:flex; align-items:center; gap:.4rem; font-size:.72rem; color:rgba(255,255,255,.3); margin-top:2rem; letter-spacing:.05em; }
.page-hero__crumbs a { color:rgba(255,255,255,.45); text-decoration:none; transition:color .2s; }
.page-hero__crumbs a:hover { color:rgba(45,184,154,.9); }
.page-hero__crumbs svg { opacity:.3; }

/* ─── Overview ─── */
.overview-section { background:#fff; }
.overview-grid { display:grid; grid-template-columns:1fr 1fr; gap:5rem; align-items:center; }
.overview-visual { display:flex; flex-direction:column; gap:2rem; }
.years-badge { display:inline-block; align-self:flex-start; border-radius:16px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); padding:2px; }
.years-badge__inner { display:flex; align-items:center; gap:1.5rem; background:linear-gradient(90deg,#1B6FBF,#2DB89A); border-radius:14px; padding:2rem 2.5rem; }
.years-num { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:4rem; font-weight:700; color:#0B1929; line-height:1; }
.years-label { font-size:.82rem; font-weight:700; color:rgba(10,22,40,.7); line-height:1.45; text-transform:uppercase; letter-spacing:.07em; }
.spec-list { display:flex; flex-direction:column; gap:.65rem; }
.spec-item { display:flex; align-items:center; gap:.85rem; font-size:.9rem; color:rgba(10,22,40,.7); font-weight:500; }
.spec-check { width:22px; height:22px; border-radius:50%; background:rgba(45,184,154,.12); border:1px solid rgba(45,184,154,.25); display:grid; place-items:center; color:#2DB89A; flex-shrink:0; }

/* ════════════════════════════════════════
   IMAGE 1 — Split-frame with floating thumb
   ════════════════════════════════════════ */
.img-split-frame {
  position: relative;
  width: 100%;
  max-width: 340px;
  padding-bottom: 38px; /* room for the floating thumb */
}

.img-split-frame__main {
  position: relative;
  width: 100%;
  height: 260px;
  clip-path: polygon(0 0, 100% 0, 100% 82%, 85% 100%, 0 100%);
  overflow: hidden;
  border-radius: 20px;
  box-shadow: 0 24px 56px rgba(10,22,40,.18), 0 4px 12px rgba(27,111,191,.12);
}
.img-split-frame__main img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s cubic-bezier(.25,.46,.45,.94);
}
.img-split-frame:hover .img-split-frame__main img { transform: scale(1.05); }
.img-split-frame__main-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(200deg, rgba(27,111,191,.15) 0%, rgba(45,184,154,.22) 60%, rgba(10,22,40,.28) 100%);
}

.img-split-frame__thumb {
  position: absolute;
  bottom: 0;
  left: -18px;
  width: 96px; height: 96px;
  z-index: 3;
}
.img-split-frame__thumb img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  border-radius: 50%;
  border: 3px solid #fff;
  box-shadow: 0 8px 28px rgba(10,22,40,.22);
}
.img-split-frame__thumb-ring {
  position: absolute; inset: -7px;
  border-radius: 50%;
  border: 1.5px dashed rgba(45,184,154,.55);
  animation: spin-slow 18s linear infinite;
  pointer-events: none;
}
@keyframes spin-slow { to { transform:rotate(360deg); } }

.img-split-frame__dots {
  position: absolute;
  top: -16px; right: -16px;
  width: 72px; height: 72px;
  background-image: radial-gradient(circle, rgba(45,184,154,.5) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none;
}

.img-split-frame__tag {
  position: absolute;
  top: 20px; right: -4px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .62rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase;
  padding: .38rem 1rem .38rem .72rem;
  border-radius: 20px 0 0 20px;
  display: flex; align-items: center; gap: .4rem;
  box-shadow: 0 4px 14px rgba(45,184,154,.4);
  z-index: 4;
}

/* ─── Vision & Mission ─── */
.vm-section { position:relative; overflow:hidden; }
.vm-section__bg { position:absolute; inset:0; z-index:0; background:linear-gradient(135deg,#0F2236 0%,#0B1929 100%); }
.vm-section__bg::before { content:''; position:absolute; top:0; left:0; right:0; height:1px; background:linear-gradient(90deg,transparent,rgba(45,184,154,.25),transparent); }
.vm-grid { display:grid; grid-template-columns:1fr 1fr; gap:1.5rem; margin-top:1rem; }
.vm-card { padding:3rem; border-radius:20px; position:relative; overflow:hidden; }
.vm-card--vision { background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.08); }
.vm-card--mission { background:#fff; border:1px solid rgba(10,22,40,.08); }
.vm-card__icon-ring { width:52px; height:52px; border-radius:14px; background:rgba(45,184,154,.1); border:1px solid rgba(45,184,154,.2); display:grid; place-items:center; color:#2DB89A; margin-bottom:1.4rem; }
.vm-card__icon-ring--light { background:rgba(45,184,154,.08); }
.vm-card__label { font-size:.6rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:rgba(45,184,154,.8); margin-bottom:.5rem; }
.vm-card__label--dark { color:#2DB89A; }
.vm-card__title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:1.5rem; font-weight:400; color:#fff; margin-bottom:.9rem; }
.vm-card__title--dark { color:#0B1929; }
.vm-card__body { font-size:.9rem; color:rgba(255,255,255,.55); line-height:1.8; }
.vm-card__body--dark { color:rgba(10,22,40,.6); }

/* ════════════════════════════════════════
   IMAGE 2 — Layered diamond mosaic
   ════════════════════════════════════════ */
.img-diamond-mosaic {
  position: relative;
  width: 220px; height: 220px;
  margin: 0 auto 3.2rem;
}

.img-diamond-mosaic__border-back {
  position: absolute; inset: 0;
  border: 1.5px solid rgba(45,184,154,.22);
  border-radius: 20px;
  transform: rotate(8deg);
}

.img-diamond-mosaic__frame {
  position: absolute;
  inset: 18px;
  border-radius: 16px;
  transform: rotate(12deg);
  overflow: hidden;
  box-shadow: 0 20px 60px rgba(0,0,0,.55), 0 0 0 1px rgba(45,184,154,.15);
}
.img-diamond-mosaic__frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transform: rotate(-12deg) scale(1.25);
  transition: transform .55s ease;
}
.img-diamond-mosaic:hover .img-diamond-mosaic__frame img { transform: rotate(-12deg) scale(1.32); }
.img-diamond-mosaic__wash {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(27,111,191,.28), rgba(45,184,154,.18));
  mix-blend-mode: multiply;
}

.img-diamond-mosaic__border-front {
  position: absolute; inset: 6px;
  border: 1px solid rgba(255,255,255,.1);
  border-radius: 14px;
  transform: rotate(18deg);
  pointer-events: none;
}

.img-diamond-mosaic__pill {
  position: absolute;
  bottom: -12px; right: -20px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 14px;
  padding: .65rem 1rem;
  display: flex; align-items: center; gap: .65rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.45);
  z-index: 5;
  white-space: nowrap;
}
.img-diamond-mosaic__pill-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.45rem; font-weight:700; color:#fff; line-height:1;
}
.img-diamond-mosaic__pill-txt {
  font-size: .58rem; font-weight:700;
  color: rgba(255,255,255,.82);
  line-height:1.45; text-transform:uppercase; letter-spacing:.06em;
}

/* ─── Values ─── */
.values-section { background:#F4F6F9; }
.values-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:3rem; }
.value-card { padding:2.2rem 1.8rem; border-radius:16px; border:1px solid rgba(10,22,40,.07); background:#fff; text-align:center; transition:all .3s ease; position:relative; overflow:hidden; }
.value-card::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:center; transition:transform .3s ease; }
.value-card:hover { transform:translateY(-6px); border-color:rgba(45,184,154,.18); box-shadow:0 16px 40px rgba(10,22,40,.07); }
.value-card:hover::after { transform:scaleX(1); }
.value-card__icon { width:52px; height:52px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.15); border-radius:14px; display:grid; place-items:center; color:#2DB89A; margin:0 auto 1.1rem; }
.value-card__title { font-size:1rem; font-weight:700; color:#0B1929; margin-bottom:.6rem; }
.value-card__desc { font-size:.855rem; color:rgba(10,22,40,.55); line-height:1.75; }

/* ════════════════════════════════════════
   IMAGE 3 — Panoramic arc banner
   ════════════════════════════════════════ */
.img-arc-banner {
  position: relative;
  width: 100%;
  border-radius: 24px;
  overflow: hidden;
  margin-bottom: 3rem;
  box-shadow: 0 20px 50px rgba(10,22,40,.12);
}

.img-arc-banner__frame {
  position: relative;
  width: 100%; height: 220px;
  overflow: hidden;
}
.img-arc-banner__frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 35%; display: block;
  transition: transform .6s ease;
}
.img-arc-banner:hover .img-arc-banner__frame img { transform: scale(1.04); }
.img-arc-banner__overlay {
  position: absolute; inset: 0;
  background: linear-gradient(90deg,
    rgba(10,22,40,.8) 0%,
    rgba(10,22,40,.42) 50%,
    rgba(27,111,191,.28) 100%
  );
}

.img-arc-banner__caption {
  position: absolute;
  bottom: 28px; left: 36px;
  display: flex; flex-direction: column; gap: .3rem;
  z-index: 2;
}
.img-arc-banner__caption-eyebrow {
  font-size: .58rem; font-weight:700; letter-spacing:.22em; text-transform:uppercase; color:#2DB89A;
}
.img-arc-banner__caption-text {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.1rem,2.5vw,1.6rem); font-weight:300; color:#fff; line-height:1.2;
}

/* Arched notch cut from the top-center */
.img-arc-banner__arc-top {
  position: absolute;
  top: -1px; left: 50%; transform: translateX(-50%);
  width: 150px; height: 30px;
  background: #F4F6F9;
  border-radius: 0 0 75px 75px;
  z-index: 3;
}

/* Teal line at bottom */
.img-arc-banner__arc-bottom {
  position: absolute; bottom:0; left:0; right:0;
  height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  z-index: 3;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .vm-grid { grid-template-columns:1fr; }
  .vm-card { padding:2.5rem; }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .overview-grid { grid-template-columns:1fr; gap:3rem; }
  .values-grid { grid-template-columns:repeat(2,1fr); }
  .years-badge__inner { padding:1.5rem 2rem; gap:1.2rem; }
  .years-num { font-size:3rem; }
  /* Image 1 */
  .img-split-frame { max-width:100%; }
  .img-split-frame__main { height:220px; }
  /* Image 2 */
  .img-diamond-mosaic { width:190px; height:190px; }
  /* Image 3 */
  .img-arc-banner__frame { height:180px; }
  .img-arc-banner__caption { left:24px; bottom:20px; }
}
@media (max-width:540px) {
  .values-grid { grid-template-columns:1fr; }
  .years-badge__inner { flex-direction:column; gap:.5rem; text-align:center; align-self:stretch; }
  .value-card { padding:1.8rem 1.4rem; }
  /* Image 1 */
  .img-split-frame__main { height:195px; }
  .img-split-frame__thumb { width:78px; height:78px; left:-12px; }
  .img-split-frame__tag { font-size:.56rem; }
  /* Image 2 */
  .img-diamond-mosaic { width:165px; height:165px; }
  .img-diamond-mosaic__pill { bottom:-8px; right:-12px; padding:.5rem .75rem; gap:.5rem; }
  .img-diamond-mosaic__pill-num { font-size:1.15rem; }
  /* Image 3 */
  .img-arc-banner__frame { height:155px; }
  .img-arc-banner__caption { left:18px; bottom:16px; }
  .img-arc-banner__arc-top { width:100px; height:22px; }
}
</style>