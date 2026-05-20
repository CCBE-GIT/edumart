<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Investor Relations</p>
          <h1 class="page-hero__title">Investment <em>Overview</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Building the future of supply chain management in Sri Lanka</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Investors
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">

        <!-- Business Model -->
        <div class="inv-section" data-aos="fade-up">
          <p class="section-label">Business Model</p>
          <h2 class="section-title">How We <em>Operate</em></h2>
          <div class="divider"></div>

          <!-- ═══ IMAGE 1: Side-by-side split frame with content ═══ -->
          <div class="inv-img inv-img--split" data-aos="fade-up" data-aos-delay="80">
            <!-- Text column -->
            <div class="inv-img__split-text">
              <p style="font-size:.95rem; color:rgba(10,22,40,.65); line-height:1.85;">
                Edumart operates as a centralized supply chain and operational management company
                providing integrated services to institutional clients. Our model focuses on efficiency,
                cost control, supplier consolidation, and scalable logistics systems.
              </p>
            </div>
            <!-- Image column -->
            <div class="inv-img__split-visual">
              <!-- Back rotated card -->
              <div class="inv-img__split-back"></div>
              <!-- Main frame: clipped on left edge -->
              <div class="inv-img__split-frame">
                <img
                  src="https://ik.imagekit.io/kp5tixhur/Edumart/Investment1.jpg"
                  alt="Business operations"
                />
                <div class="inv-img__split-overlay"></div>
                <!-- Inside caption -->
                <div class="inv-img__split-caption">
                  <span class="inv-img__split-eye">Centralized Model</span>
                  <span class="inv-img__split-txt">Integrated &<br><em>Scalable Systems</em></span>
                </div>
              </div>
              <!-- Dot grid -->
              <div class="inv-img__split-dots"></div>
              <!-- Corner bracket TL -->
              <div class="inv-img__split-corner inv-img__split-corner--tl"></div>
            </div>
          </div>
        </div>

        <!-- Revenue Streams -->
        <div class="inv-section" data-aos="fade-up">
          <p class="section-label">Financial Model</p>
          <h2 class="section-title">Revenue <em>Streams</em></h2>
          <div class="divider"></div>
          <div class="revenue-grid">
            <div v-for="(stream, i) in revenueStreams" :key="stream.title" class="revenue-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
              <div class="revenue-card__icon">
                <svg :viewBox="stream.vb" width="20" height="20" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="stream.svg"></svg>
              </div>
              <span class="revenue-card__num">{{ String(i+1).padStart(2,'0') }}</span>
              <h4>{{ stream.title }}</h4>
              <p>{{ stream.desc }}</p>
            </div>
          </div>
        </div>

        <!-- ═══ IMAGE 2: Full-width panoramic ribbon — between Revenue and Advantage ═══ -->
        <div class="inv-img inv-img--ribbon" data-aos="fade-up">
          <div class="inv-img__ribbon-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/Investment2.jfif"
              alt="Investment growth"
            />
            <div class="inv-img__ribbon-overlay"></div>
            <!-- Left caption -->
            <div class="inv-img__ribbon-caption">
              <span class="inv-img__ribbon-eye">Our trajectory</span>
              <span class="inv-img__ribbon-title">Positioned for<br><em>Long-Term Growth</em></span>
            </div>
            <!-- Right stat cluster -->
            <div class="inv-img__ribbon-stats">
              <div class="inv-img__ribbon-stat">
                <span class="inv-img__ribbon-stat-num">6</span>
                <span class="inv-img__ribbon-stat-lbl">Revenue<br>Streams</span>
              </div>
              <div class="inv-img__ribbon-stat-div"></div>
              <div class="inv-img__ribbon-stat">
                <span class="inv-img__ribbon-stat-num">SL</span>
                <span class="inv-img__ribbon-stat-lbl">Country<br>Focus</span>
              </div>
            </div>
          </div>
          <!-- Wave notch bottom -->
          <div class="inv-img__ribbon-notch"></div>
          <div class="inv-img__ribbon-rule"></div>
        </div>

        <!-- Competitive Advantage -->
        <div class="inv-advantage" data-aos="fade-up">
          <p class="section-label light">Our Edge</p>
          <h2 class="section-title white">Competitive <em>Advantage</em></h2>
          <div class="divider"></div>
          <div class="advantage-grid">
            <div v-for="(adv, i) in advantages" :key="adv" class="advantage-item" :data-aos="'fade-up'" :data-aos-delay="i*80">
              <span class="advantage-check">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              </span>
              <span>{{ adv }}</span>
            </div>
          </div>

          <!-- ═══ IMAGE 3: Layered mosaic inside the dark advantage section ═══ -->
          <div class="inv-img inv-img--mosaic" data-aos="zoom-in" data-aos-delay="100">
            <!-- Spinning dashed ring -->
            <div class="inv-img__mosaic-ring"></div>
            <!-- Outer rotated border -->
            <div class="inv-img__mosaic-border-outer"></div>
            <!-- Photo -->
            <div class="inv-img__mosaic-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/Investment3.jfif"
                alt="Competitive edge"
              />
              <div class="inv-img__mosaic-wash"></div>
            </div>
            <!-- Floating badge -->
            <div class="inv-img__mosaic-badge">
              <span class="inv-img__mosaic-badge-num">6+</span>
              <span class="inv-img__mosaic-badge-txt">Key<br>Advantages</span>
            </div>
            <!-- Teal tag -->
            <div class="inv-img__mosaic-tag">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              Our Edge
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'InvestorsView',
  data() {
    return {
      revenueStreams: [
        { title: 'Procurement Management Fees',    desc: 'Service fees charged for end-to-end procurement and supplier management services.',                                             vb: '0 0 24 24', svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>' },
        { title: 'Logistics Coordination Margins', desc: 'Margin earned on logistics coordination, including freight forwarding and route optimization.',                                  vb: '0 0 24 24', svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>' },
        { title: 'Warehousing & Storage Income',   desc: 'Revenue from secure warehousing, inventory management, and storage services.',                                                  vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
        { title: 'Transportation Revenue',         desc: 'Income from inland cargo transportation and institutional delivery services.',                                                   vb: '0 0 24 24', svg: '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>' },
        { title: 'Consultancy Service Fees',       desc: 'Fee-based consultancy for supply chain strategy, procurement, and operational structuring.',                                     vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
        { title: 'Import and Distribution Margins',   desc: 'Planned revenue from direct import operations and distribution of educational materials and equipment.',                         vb: '0 0 24 24', svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>' },
      ],
      advantages: [
        'Established institutional client base in the education sector',
        'Structured operational systems ready for scaling',
        "Strong growth potential within Sri Lanka's education sector",
        'Expandable logistics infrastructure with low marginal cost',
        'Experienced management team with deep industry knowledge',
        'Clear roadmap to multi-industry expansion',
      ]
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
.section-label.light { color:rgba(45,184,154,.9); }
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; }
.section-title em { font-style:italic; color:#2DB89A; }
.section-title.white { color:#fff; }
.section-title.white em { color:#2DB89A; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }
.inv-section { margin-bottom:5rem; }

/* ─── Revenue Grid ─── */
.revenue-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:2.5rem; }
.revenue-card { padding:2rem; border-radius:14px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.05); transition:all .3s ease; position:relative; overflow:hidden; }
.revenue-card::before { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .35s ease; }
.revenue-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(27,111,191,.1); border-color:rgba(45,184,154,.2); }
.revenue-card:hover::before { transform:scaleX(1); }
.revenue-card__icon { width:40px; height:40px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.15); border-radius:10px; display:grid; place-items:center; color:#2DB89A; margin-bottom:1.2rem; }
.revenue-card__num { position:absolute; top:1.5rem; right:1.5rem; font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:2.5rem; font-weight:700; color:#E8EEF5; line-height:1; user-select:none; }
.revenue-card h4 { margin-bottom:.5rem; font-size:.95rem; color:#0B1929; font-weight:600; padding-right:3rem; }
.revenue-card p { font-size:.85rem; color:#637A95; line-height:1.7; }

/* ─── Competitive Advantage ─── */
.inv-advantage { border-radius:20px; padding:4rem; position:relative; overflow:hidden; margin-bottom:2rem; background:linear-gradient(135deg,#0F2236 0%,#0B1929 100%); }
.inv-advantage::before { content:''; position:absolute; top:0; left:0; right:0; height:2px; background:linear-gradient(90deg,transparent,#1B6FBF 30%,#2DB89A 70%,transparent); }
.inv-advantage::after { content:''; position:absolute; bottom:-100px; right:-100px; width:400px; height:400px; border-radius:50%; background:radial-gradient(ellipse,rgba(45,184,154,.06) 0%,transparent 65%); pointer-events:none; }
.advantage-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1rem; margin-top:2.5rem; position:relative; z-index:1; }
.advantage-item { display:flex; gap:.9rem; align-items:flex-start; padding:1.25rem; border-radius:10px; background:rgba(255,255,255,.04); border:1px solid rgba(255,255,255,.07); transition:all .25s ease; }
.advantage-item:hover { background:rgba(45,184,154,.07); border-color:rgba(45,184,154,.2); }
.advantage-check { width:24px; height:24px; background:rgba(45,184,154,.15); border:1px solid rgba(45,184,154,.3); border-radius:50%; display:grid; place-items:center; color:#2DB89A; flex-shrink:0; margin-top:.05rem; }
.advantage-item span:last-child { font-size:.875rem; color:rgba(255,255,255,.72); line-height:1.65; }

/* ════════════════════════════════════════════════════
   IMAGE 1 — Side-by-side split: text + photo
   (replaces the plain paragraph in Business Model)
   ════════════════════════════════════════════════════ */
.inv-img--split {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
  margin-top: 0;
}

.inv-img__split-text {
  /* the <p> inside inherits its own style */
}

.inv-img__split-visual {
  position: relative;
  padding: 14px 0 14px 14px;
}

/* Rotated back card */
.inv-img__split-back {
  position: absolute;
  inset: 0 -10px 0 22px;
  border-radius: 22px;
  background: linear-gradient(135deg, rgba(27,111,191,.1), rgba(45,184,154,.14));
  border: 1px solid rgba(45,184,154,.2);
  transform: rotate(-3deg);
  z-index: 0;
}

/* Main clipped photo */
.inv-img__split-frame {
  position: relative;
  width: 100%; height: 280px;
  /* Angled clip: top-left corner cut */
  clip-path: polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%, 0% 8%);
  border-radius: 6px;
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(10,22,40,.17);
  z-index: 1;
}
.inv-img__split-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.inv-img--split:hover .inv-img__split-frame img { transform: scale(1.05); }
.inv-img__split-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(10,22,40,.06) 0%,
    rgba(10,22,40,.55) 100%
  );
}

/* Inside bottom caption */
.inv-img__split-caption {
  position: absolute; bottom: 22px; left: 22px;
  display: flex; flex-direction: column; gap: .26rem; z-index: 2;
}
.inv-img__split-eye {
  font-size: .52rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.inv-img__split-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.95rem,1.8vw,1.2rem); font-weight: 300; color: #fff; line-height: 1.25;
}
.inv-img__split-txt em { font-style: italic; color: #2DB89A; }

/* Dot grid top-right */
.inv-img__split-dots {
  position: absolute;
  top: -4px; right: -18px;
  width: 70px; height: 70px;
  background-image: radial-gradient(circle, rgba(45,184,154,.45) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none; z-index: 0;
}

/* TL corner bracket */
.inv-img__split-corner {
  position: absolute;
  width: 28px; height: 28px;
  pointer-events: none; z-index: 3;
}
.inv-img__split-corner--tl {
  top: 20px; left: 20px;
  border-top: 2px solid rgba(45,184,154,.65);
  border-left: 2px solid rgba(45,184,154,.65);
}

/* ════════════════════════════════════════════════════
   IMAGE 2 — Full-width panoramic ribbon
   (between Revenue and Competitive Advantage)
   ════════════════════════════════════════════════════ */
.inv-img--ribbon {
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
}

.inv-img__ribbon-frame {
  position: relative;
  width: 100%; height: 220px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.13);
}
.inv-img__ribbon-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 40%; display: block;
  transition: transform .65s ease;
}
.inv-img--ribbon:hover .inv-img__ribbon-frame img { transform: scale(1.04); }
.inv-img__ribbon-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.84) 0%,
    rgba(10,22,40,.4) 52%,
    rgba(27,111,191,.26) 100%
  );
}

/* Left caption */
.inv-img__ribbon-caption {
  position: absolute; bottom: 28px; left: 36px;
  display: flex; flex-direction: column; gap: .3rem; z-index: 2;
}
.inv-img__ribbon-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.inv-img__ribbon-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1rem,2.5vw,1.6rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.inv-img__ribbon-title em { font-style: italic; color: #2DB89A; }

/* Right stat cluster */
.inv-img__ribbon-stats {
  position: absolute; right: 36px; bottom: 28px;
  display: flex; align-items: center; gap: 1.3rem; z-index: 2;
}
.inv-img__ribbon-stat { display: flex; flex-direction: column; gap: .2rem; text-align: right; }
.inv-img__ribbon-stat-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;
}
.inv-img__ribbon-stat-lbl {
  font-size: .52rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; color: rgba(255,255,255,.5); line-height: 1.45;
}
.inv-img__ribbon-stat-div {
  width: 1px; height: 36px;
  background: rgba(255,255,255,.18);
}

/* Wave notch cut from bottom */
.inv-img__ribbon-notch {
  width: 140px; height: 28px;
  background: #fff;
  clip-path: ellipse(50% 100% at 50% 100%);
  margin: 0 auto;
  margin-top: -2px;
  position: relative; z-index: 1;
}
.inv-img__ribbon-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -28px;
  position: relative; z-index: 0;
}

/* ════════════════════════════════════════════════════
   IMAGE 3 — Layered mosaic inside dark advantage box
   ════════════════════════════════════════════════════ */
.inv-img--mosaic {
  position: relative;
  width: 190px; height: 190px;
  margin: 2.5rem auto 0;
  z-index: 1;
}

/* Spinning dashed outer ring */
.inv-img__mosaic-ring {
  position: absolute;
  inset: -12px;
  border-radius: 50%;
  border: 1.5px dashed rgba(45,184,154,.35);
  animation: spin-slow 20s linear infinite;
  pointer-events: none;
}
@keyframes spin-slow { to { transform: rotate(360deg); } }

/* Outer rotated border square */
.inv-img__mosaic-border-outer {
  position: absolute; inset: 0;
  border: 1.5px solid rgba(45,184,154,.2);
  border-radius: 22px;
  transform: rotate(10deg);
}

/* Photo frame */
.inv-img__mosaic-frame {
  position: absolute;
  inset: 16px;
  border-radius: 16px;
  transform: rotate(6deg);
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(0,0,0,.5);
}
.inv-img__mosaic-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transform: rotate(-6deg) scale(1.2);
  transition: transform .55s ease;
}
.inv-img--mosaic:hover .inv-img__mosaic-frame img { transform: rotate(-6deg) scale(1.28); }
.inv-img__mosaic-wash {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(27,111,191,.3), rgba(45,184,154,.2));
  mix-blend-mode: multiply;
}

/* Floating gradient badge bottom-right */
.inv-img__mosaic-badge {
  position: absolute;
  bottom: -12px; right: -20px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 14px;
  padding: .6rem .95rem;
  display: flex; align-items: center; gap: .6rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.45);
  z-index: 5; white-space: nowrap;
}
.inv-img__mosaic-badge-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.4rem; font-weight: 700; color: #fff; line-height: 1;
}
.inv-img__mosaic-badge-txt {
  font-size: .56rem; font-weight: 700;
  color: rgba(255,255,255,.85);
  text-transform: uppercase; letter-spacing: .06em; line-height: 1.45;
}

/* Tag label top-left */
.inv-img__mosaic-tag {
  position: absolute;
  top: -12px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .58rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .36rem 1rem .36rem .78rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .4rem;
  box-shadow: 0 4px 14px rgba(27,111,191,.4);
  white-space: nowrap; z-index: 5;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .revenue-grid { grid-template-columns:1fr 1fr; }
  .advantage-grid { grid-template-columns:1fr; }
  .inv-advantage { padding:3rem 2rem; }
  /* Image 1 */
  .inv-img--split { grid-template-columns:1fr; gap:2.5rem; }
  .inv-img__split-frame { height:240px; }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .inv-advantage { padding:2.5rem 1.5rem; border-radius:14px; }
  /* Image 2 */
  .inv-img__ribbon-frame { height:185px; }
  .inv-img__ribbon-caption { left:22px; bottom:20px; }
  .inv-img__ribbon-stats { right:18px; bottom:20px; gap:1rem; }
  .inv-img__ribbon-stat-num { font-size:1.5rem; }
  /* Image 3 */
  .inv-img--mosaic { width:165px; height:165px; }
}
@media (max-width:580px) {
  .revenue-grid { grid-template-columns:1fr; }
  .revenue-card { padding:1.5rem; }
  .revenue-card__num { font-size:1.8rem; }
  .inv-advantage { padding:2rem 1.25rem; }
  /* Image 1 */
  .inv-img__split-frame { height:210px; }
  /* Image 2 */
  .inv-img__ribbon-frame { height:160px; }
  .inv-img__ribbon-stats { display:none; }
  /* Image 3 */
  .inv-img--mosaic { width:145px; height:145px; }
  .inv-img__mosaic-badge { right:-12px; padding:.5rem .75rem; gap:.5rem; }
  .inv-img__mosaic-badge-num { font-size:1.15rem; }
}
</style>