<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Sectors We Serve</p>
          <h1 class="page-hero__title">Industries <em>We Serve</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Specialized operational solutions for multiple sectors</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Industries
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">

        <!-- ═══ IMAGE 1: Wide cinematic strip — above the grid ═══ -->
        <div class="ind-img ind-img--strip" data-aos="fade-up">
          <div class="ind-img__strip-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/industry1.jfif"
              alt="Industries we serve"
            />
            <div class="ind-img__strip-overlay"></div>
            <!-- Left caption -->
            <div class="ind-img__strip-caption">
              <span class="ind-img__strip-eye">Across every sector</span>
              <span class="ind-img__strip-title">Where Operations<br><em>Meet Excellence</em></span>
            </div>
            <!-- Right stats cluster -->
            <div class="ind-img__strip-stats">
              <div class="ind-img__strip-stat">
                <span class="ind-img__strip-stat-num">03</span>
                <span class="ind-img__strip-stat-lbl">Active<br>Sectors</span>
              </div>
              <div class="ind-img__strip-stat-divider"></div>
              <div class="ind-img__strip-stat">
                <span class="ind-img__strip-stat-num">SL</span>
                <span class="ind-img__strip-stat-lbl">Sri Lanka<br>Wide</span>
              </div>
            </div>
          </div>
          <!-- Parallelogram notch cut from bottom-center -->
          <div class="ind-img__strip-notch"></div>
          <!-- Teal bottom rule -->
          <div class="ind-img__strip-rule"></div>
        </div>

        <div class="industries-grid">
          <div v-for="(ind, i) in industries" :key="ind.title" class="industry-card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="industry-card__icon">
              <svg :viewBox="ind.vb" width="28" height="28" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="ind.svg"></svg>
            </div>
            <h3>{{ ind.title }}</h3>
            <p>{{ ind.desc }}</p>
            <div class="industry-card__status" :class="ind.active ? 'status--active' : 'status--future'">
              <svg v-if="ind.active" width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
              <svg v-else width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
              {{ ind.active ? 'Currently Serving' : 'Future Expansion' }}
            </div>
          </div>
        </div>

        <!-- ═══ IMAGE 2 + IMAGE 3: Side-by-side duo below grid ═══ -->
        <div class="ind-img-duo" data-aos="fade-up" data-aos-delay="100">

          <!-- Image 2: Tilted polaroid -->
          <div class="ind-img ind-img--polaroid">
            <div class="ind-img__polaroid-back"></div>
            <div class="ind-img__polaroid-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/industry2.jfif"
                alt="Corporate sector"
              />
              <div class="ind-img__polaroid-overlay"></div>
            </div>
            <div class="ind-img__polaroid-label">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
              Corporate & Institutional
            </div>
            <!-- Dot grid accent -->
            <div class="ind-img__polaroid-dots"></div>
          </div>

          <!-- Image 3: Diagonal clipped tall frame -->
          <div class="ind-img ind-img--diagonal">
            <div class="ind-img__diag-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/industry3.jpg"
                alt="Education sector"
              />
              <div class="ind-img__diag-overlay"></div>
              <!-- Inside caption -->
              <div class="ind-img__diag-caption">
                <span class="ind-img__diag-eye">Education First</span>
                <span class="ind-img__diag-txt">Building tomorrow's<br>supply chains</span>
              </div>
            </div>
            <!-- Corner bracket accents -->
            <div class="ind-img__diag-corner ind-img__diag-corner--tl"></div>
            <div class="ind-img__diag-corner ind-img__diag-corner--br"></div>
            <!-- Badge -->
            <div class="ind-img__diag-badge">
              <span class="ind-img__diag-badge-num">2+</span>
              <span class="ind-img__diag-badge-txt">Years<br>Serving</span>
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'IndustriesView',
  data() {
    return {
      industries: [
        {
          vb: '0 0 24 24',
          svg: '<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>',
          title: 'Education Sector',
          desc: 'Comprehensive supply chain solutions for educational institutions including procurement, logistics, and warehousing.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="16"/><line x1="10" y1="14" x2="14" y2="14"/>',
          title: 'Institutional Organizations',
          desc: 'Operational support for institutional bodies requiring structured procurement and inventory management systems.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
          title: 'Corporate Entities',
          desc: 'End-to-end supply chain services tailored for corporate environments with scalable logistics infrastructure.',
          active: true
        },
        {
          vb: '0 0 24 24',
          svg: '<circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>',
          title: 'Multi-Industry Expansion',
          desc: 'Edumart is strategically positioned to expand into new industries, bringing proven operational systems to new sectors.',
          active: false
        },
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

/* ─── Grid ─── */
.industries-grid { display:grid; grid-template-columns:repeat(2,1fr); gap:1.75rem; }
.industry-card { padding:2.5rem; border-radius:16px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.06); transition:all .3s ease; position:relative; overflow:hidden; }
.industry-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .35s ease; }
.industry-card:hover { transform:translateY(-6px); box-shadow:0 16px 40px rgba(27,111,191,.1); border-color:rgba(45,184,154,.2); }
.industry-card:hover::before { transform:scaleX(1); }
.industry-card__icon { width:56px; height:56px; background:rgba(27,111,191,.07); border:1px solid rgba(27,111,191,.15); border-radius:14px; display:grid; place-items:center; color:#1B6FBF; margin-bottom:1.3rem; transition:all .3s ease; }
.industry-card:hover .industry-card__icon { background:rgba(45,184,154,.08); border-color:rgba(45,184,154,.2); color:#2DB89A; }
.industry-card h3 { margin-bottom:.75rem; font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:1.4rem; font-weight:400; color:#0B1929; }
.industry-card p { font-size:.9rem; color:#637A95; margin-bottom:1.5rem; line-height:1.75; }
.industry-card__status { display:inline-flex; align-items:center; gap:.45rem; padding:.4rem 1rem; border-radius:20px; font-size:.73rem; font-weight:600; letter-spacing:.04em; }
.status--active { background:rgba(45,184,154,.1); color:#1A8A72; border:1px solid rgba(45,184,154,.25); }
.status--future { background:rgba(27,111,191,.08); color:#1B6FBF; border:1px solid rgba(27,111,191,.2); }

/* ════════════════════════════════════════════════════
   IMAGE 1 — Wide cinematic strip above the grid
   ════════════════════════════════════════════════════ */
.ind-img--strip {
  position: relative;
  width: 100%;
  margin-bottom: 3rem;
  border-radius: 24px 24px 0 0;
  overflow: visible;
}

.ind-img__strip-frame {
  position: relative;
  width: 100%;
  height: 260px;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.14);
}
.ind-img__strip-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 40%; display: block;
  transition: transform .7s cubic-bezier(.25,.46,.45,.94);
}
.ind-img--strip:hover .ind-img__strip-frame img { transform: scale(1.04); }
.ind-img__strip-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(100deg,
    rgba(10,22,40,.82) 0%,
    rgba(10,22,40,.4) 48%,
    rgba(27,111,191,.3) 100%
  );
}

/* Left caption */
.ind-img__strip-caption {
  position: absolute; bottom: 30px; left: 36px;
  display: flex; flex-direction: column; gap: .32rem; z-index: 2;
}
.ind-img__strip-eye {
  font-size: .56rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.ind-img__strip-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.2rem,2.8vw,1.8rem); font-weight: 300; color: #fff; line-height: 1.2;
}
.ind-img__strip-title em { font-style: italic; color: #2DB89A; }

/* Right stats cluster */
.ind-img__strip-stats {
  position: absolute; bottom: 28px; right: 36px;
  display: flex; align-items: center; gap: 1.4rem;
  z-index: 2;
}
.ind-img__strip-stat { display: flex; flex-direction: column; gap: .22rem; text-align: right; }
.ind-img__strip-stat-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;
}
.ind-img__strip-stat-lbl {
  font-size: .54rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; color: rgba(255,255,255,.55); line-height: 1.45;
}
.ind-img__strip-stat-divider {
  width: 1px; height: 36px;
  background: rgba(255,255,255,.18);
}

/* Parallelogram notch cut from bottom-center */
.ind-img__strip-notch {
  width: 120px; height: 28px;
  background: #fff; /* matches page bg */
  clip-path: polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%);
  margin: 0 auto;
  margin-top: -2px;
  position: relative; z-index: 1;
}

/* Teal gradient rule */
.ind-img__strip-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -28px;
  position: relative; z-index: 0;
}

/* ════════════════════════════════════════════════════
   Duo wrapper — images side by side below grid
   ════════════════════════════════════════════════════ */
.ind-img-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3rem;
  align-items: start;
}

/* ════════════════════════════════════════════════════
   IMAGE 2 — Tilted polaroid card
   ════════════════════════════════════════════════════ */
.ind-img--polaroid {
  position: relative;
  padding-bottom: 40px;
}

/* Rotated card behind */
.ind-img__polaroid-back {
  position: absolute;
  inset: 8px -8px 28px 8px;
  background: linear-gradient(135deg, rgba(27,111,191,.12), rgba(45,184,154,.16));
  border: 1px solid rgba(45,184,154,.22);
  border-radius: 18px;
  transform: rotate(3.5deg);
  z-index: 0;
}

/* Main photo */
.ind-img__polaroid-frame {
  position: relative;
  width: 100%; height: 280px;
  border-radius: 18px;
  overflow: hidden;
  box-shadow: 0 22px 50px rgba(10,22,40,.16);
  z-index: 1;
}
.ind-img__polaroid-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.ind-img--polaroid:hover .ind-img__polaroid-frame img { transform: scale(1.05); }
.ind-img__polaroid-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(170deg, rgba(27,111,191,.1), rgba(45,184,154,.18), rgba(10,22,40,.25));
}

/* Bottom label pill */
.ind-img__polaroid-label {
  position: absolute;
  bottom: 10px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .4rem 1.1rem .4rem .85rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .42rem;
  box-shadow: 0 6px 20px rgba(27,111,191,.38);
  white-space: nowrap;
  z-index: 3;
}

/* Dot grid top-left */
.ind-img__polaroid-dots {
  position: absolute;
  top: -14px; left: -14px;
  width: 70px; height: 70px;
  background-image: radial-gradient(circle, rgba(45,184,154,.48) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none;
  z-index: 2;
}

/* ════════════════════════════════════════════════════
   IMAGE 3 — Diagonal-clipped tall frame
   ════════════════════════════════════════════════════ */
.ind-img--diagonal {
  position: relative;
}

.ind-img__diag-frame {
  position: relative;
  width: 100%;
  height: 320px;
  /* Angled cut: top-left and bottom-right corners clipped */
  clip-path: polygon(6% 0%, 100% 0%, 94% 100%, 0% 100%);
  overflow: hidden;
  box-shadow: 0 22px 50px rgba(10,22,40,.16);
}
.ind-img__diag-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 30%; display: block;
  transition: transform .6s ease;
}
.ind-img--diagonal:hover .ind-img__diag-frame img { transform: scale(1.05); }
.ind-img__diag-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(10,22,40,.15) 0%,
    rgba(10,22,40,.55) 100%
  );
}

/* Inside bottom caption */
.ind-img__diag-caption {
  position: absolute; bottom: 26px; left: 28px;
  display: flex; flex-direction: column; gap: .28rem; z-index: 2;
}
.ind-img__diag-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.ind-img__diag-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.95rem,1.8vw,1.25rem); font-weight: 300; color: #fff; line-height: 1.3;
}

/* Corner bracket accents */
.ind-img__diag-corner {
  position: absolute;
  width: 30px; height: 30px;
  pointer-events: none;
  z-index: 3;
}
.ind-img__diag-corner--tl {
  top: 12px; left: 14px;
  border-top: 2px solid rgba(45,184,154,.7);
  border-left: 2px solid rgba(45,184,154,.7);
}
.ind-img__diag-corner--br {
  bottom: 12px; right: 14px;
  border-bottom: 2px solid rgba(45,184,154,.7);
  border-right: 2px solid rgba(45,184,154,.7);
}

/* Floating stats badge — top right, outside the clip frame */
.ind-img__diag-badge {
  position: absolute;
  top: -14px; right: -14px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 14px;
  padding: .65rem .95rem;
  display: flex; align-items: center; gap: .6rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.42);
  z-index: 4;
  white-space: nowrap;
}
.ind-img__diag-badge-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.4rem; font-weight: 700; color: #fff; line-height: 1;
}
.ind-img__diag-badge-txt {
  font-size: .56rem; font-weight: 700;
  color: rgba(255,255,255,.85);
  text-transform: uppercase; letter-spacing: .06em; line-height: 1.45;
}

/* ─── Responsive ─── */
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .industries-grid { grid-template-columns:1fr; }
  /* Strip */
  .ind-img__strip-frame { height:210px; }
  .ind-img__strip-caption { left:22px; bottom:22px; }
  .ind-img__strip-stats { right:20px; bottom:22px; gap:1rem; }
  .ind-img__strip-stat-num { font-size:1.5rem; }
  /* Duo */
  .ind-img-duo { grid-template-columns:1fr; gap:2.5rem; }
  .ind-img__polaroid-frame { height:240px; }
  .ind-img__diag-frame { height:260px; }
}
@media (max-width:480px) {
  .industry-card { padding:1.75rem 1.5rem; }
  /* Strip */
  .ind-img__strip-frame { height:185px; }
  .ind-img__strip-stats { display:none; } /* hide stats on very small, caption enough */
  .ind-img__strip-caption { left:18px; bottom:18px; }
  /* Polaroid */
  .ind-img__polaroid-frame { height:210px; }
  .ind-img__polaroid-label { font-size:.54rem; }
  /* Diagonal */
  .ind-img__diag-frame { height:230px; }
  .ind-img__diag-badge { top:-10px; right:-8px; padding:.5rem .75rem; }
  .ind-img__diag-badge-num { font-size:1.15rem; }
}
</style>