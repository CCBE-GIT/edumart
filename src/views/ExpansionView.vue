<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Looking Ahead</p>
          <h1 class="page-hero__title">Future <em>Growth</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Strategically positioned for expansion across Sri Lanka and beyond</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Growth
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div class="text-center intro-block" data-aos="fade-up">
          <p class="section-label">Our Roadmap</p>
          <h2 class="section-title">Expansion <em>Strategy</em></h2>
          <div class="divider centered"></div>
          <p class="intro-text">Edumart's long-term vision is to evolve into a fully integrated supply chain management company serving multiple industries while maintaining strong institutional partnerships.</p>
        </div>

        <!-- ═══ IMAGE 1: Wide horizon banner with angled right edge — above the grid ═══ -->
        <div class="grw-img grw-img--horizon" data-aos="fade-up">
          <div class="grw-img__horizon-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/growth1.jfif"
              alt="Strategic expansion planning"
            />
            <div class="grw-img__horizon-overlay"></div>
            <!-- Left caption -->
            <div class="grw-img__horizon-caption">
              <span class="grw-img__horizon-eye">Where we're headed</span>
              <span class="grw-img__horizon-title">Building Tomorrow's<br><em>Supply Chain</em></span>
            </div>
            <!-- Right milestone badges -->
            <div class="grw-img__horizon-milestones">
              <div class="grw-img__horizon-milestone">
                <span class="grw-img__horizon-milestone-num">6</span>
                <span class="grw-img__horizon-milestone-lbl">Growth<br>Initiatives</span>
              </div>
              <div class="grw-img__horizon-divider"></div>
              <div class="grw-img__horizon-milestone">
                <span class="grw-img__horizon-milestone-num">∞</span>
                <span class="grw-img__horizon-milestone-lbl">Scalable<br>Vision</span>
              </div>
            </div>
          </div>
          <!-- Angled slice on bottom-right -->
          <div class="grw-img__horizon-slice"></div>
          <!-- Teal bottom rule -->
          <div class="grw-img__horizon-rule"></div>
        </div>

        <div class="expansion-grid">
          <div v-for="(item, i) in expansionItems" :key="item.title" class="expansion-card" :data-aos="'fade-up'" :data-aos-delay="i*80">
            <div class="expansion-card__icon">
              <svg :viewBox="item.vb" width="26" height="26" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="item.svg"></svg>
            </div>
            <h3>{{ item.title }}</h3>
            <p>{{ item.desc }}</p>
          </div>
        </div>

        <!-- ═══ IMAGE 2 + IMAGE 3: Side-by-side below the grid ═══ -->
        <div class="grw-img-duo" data-aos="fade-up" data-aos-delay="80">

          <!-- Image 2: Tall arch with floating thumb -->
          <div class="grw-img grw-img--arch">
            <div class="grw-img__arch-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/growth4.jpg"
                alt="Regional expansion"
              />
              <div class="grw-img__arch-overlay"></div>
              <div class="grw-img__arch-caption">
                <span class="grw-img__arch-eye">Sri Lanka & Beyond</span>
                <span class="grw-img__arch-txt">Regional<br>Expansion</span>
              </div>
            </div>
            <!-- Offset teal border behind -->
            <div class="grw-img__arch-border"></div>
            <!-- Dot grid -->
            <div class="grw-img__arch-dots"></div>
            <!-- Floating stat circle -->
            <div class="grw-img__arch-circle">
              <span class="grw-img__arch-circle-num">02+</span>
              <span class="grw-img__arch-circle-lbl">Years</span>
            </div>
          </div>

          <!-- Image 3: Skewed stack with corner bracket -->
          <div class="grw-img grw-img--skew">
            <div class="grw-img__skew-back"></div>
            <div class="grw-img__skew-main">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/growth3.jfif"
                alt="Digital supply chain"
              />
              <div class="grw-img__skew-overlay"></div>
              <!-- Inside bottom caption -->
              <div class="grw-img__skew-caption">
                <span class="grw-img__skew-eye">Future-ready</span>
                <span class="grw-img__skew-txt">Digital Systems<br><em>Powering Growth</em></span>
              </div>
            </div>
            <!-- TL corner bracket -->
            <div class="grw-img__skew-corner grw-img__skew-corner--tl"></div>
            <!-- BR corner bracket -->
            <div class="grw-img__skew-corner grw-img__skew-corner--br"></div>
            <!-- Floating pill -->
            <div class="grw-img__skew-pill">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              Scalable Infrastructure
            </div>
          </div>

        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ExpansionView',
  data() {
    return {
      expansionItems: [
        { title: 'Educational Materials Import and Distribution',    desc: 'Establishing direct import channels for educational materials to serve institutions across Sri Lanka at competitive pricing.',    vb: '0 0 24 24', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
        { title: 'Printing and Stationery Supply Solutions',   desc: 'Developing a dedicated printing and stationery supply vertical to serve our institutional client base comprehensively.',           vb: '0 0 24 24', svg: '<polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/>' },
        { title: 'IT And Technology Equipment Procurement',    desc: 'Building specialized procurement capabilities for IT equipment, software, and technology infrastructure for educational institutions.', vb: '0 0 24 24', svg: '<rect x="2" y="3" width="20" height="14" rx="2"/><line x1="8" y1="21" x2="16" y2="21"/><line x1="12" y1="17" x2="12" y2="21"/>' },
        { title: 'Digital Supply Chain Management Systems',   desc: 'Investing in digital platforms and technology to bring real-time supply chain visibility and automation to our clients.',           vb: '0 0 24 24', svg: '<rect x="2" y="2" width="20" height="8" rx="2"/><rect x="2" y="14" width="20" height="8" rx="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>' },
        { title: 'Regional Logistics Partnerships',desc: 'Forming strategic partnerships with regional logistics providers to expand our geographic reach and service capability.',             vb: '0 0 24 24', svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { title: 'Warehouse Infrastructure Development',       desc: 'Developing owned warehouse infrastructure to reduce dependency on third parties and improve service consistency.',                  vb: '0 0 24 24', svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>' },
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
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; }
.section-title em { font-style:italic; color:#2DB89A; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }
.divider.centered { margin-left:auto; margin-right:auto; }
.text-center { text-align:center; }
.intro-block { max-width:640px; margin:0 auto 4rem; }
.intro-text { font-size:.95rem; color:rgba(10,22,40,.6); line-height:1.8; margin-top:.5rem; }

/* ─── Grid ─── */
.expansion-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:2rem; }
.expansion-card { padding:2.5rem 2rem; border-radius:16px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.05); transition:all .3s ease; position:relative; overflow:hidden; }
.expansion-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .35s ease; }
.expansion-card:hover { transform:translateY(-8px); box-shadow:0 20px 45px rgba(27,111,191,.1); border-color:rgba(45,184,154,.2); }
.expansion-card:hover::before { transform:scaleX(1); }
.expansion-card__icon { width:54px; height:54px; background:rgba(27,111,191,.07); border:1px solid rgba(27,111,191,.14); border-radius:14px; display:grid; place-items:center; color:#1B6FBF; margin-bottom:1.3rem; transition:all .3s ease; }
.expansion-card:hover .expansion-card__icon { background:rgba(45,184,154,.08); border-color:rgba(45,184,154,.2); color:#2DB89A; }
.expansion-card h3 { font-size:1.05rem; margin-bottom:.75rem; color:#0B1929; font-weight:700; }
.expansion-card p { font-size:.875rem; color:#637A95; line-height:1.75; }

/* ════════════════════════════════════════════════════
   IMAGE 1 — Wide horizon banner with angled slice
   ════════════════════════════════════════════════════ */
.grw-img--horizon {
  position: relative;
  width: 100%;
  margin-bottom: 3.5rem;
  overflow: visible;
}

.grw-img__horizon-frame {
  position: relative;
  width: 100%; height: 240px;
  border-radius: 22px;
  overflow: hidden;
  box-shadow: 0 22px 52px rgba(10,22,40,.14);
  /* Clip angled notch into bottom-right corner */
  clip-path: polygon(0 0, 100% 0, 100% 72%, 94% 100%, 0 100%);
}
.grw-img__horizon-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 30%; display: block;
  transition: transform .65s cubic-bezier(.25,.46,.45,.94);
}
.grw-img--horizon:hover .grw-img__horizon-frame img { transform: scale(1.04); }
.grw-img__horizon-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.84) 0%,
    rgba(10,22,40,.38) 52%,
    rgba(27,111,191,.26) 100%
  );
}

/* Left caption */
.grw-img__horizon-caption {
  position: absolute; bottom: 30px; left: 36px;
  display: flex; flex-direction: column; gap: .3rem; z-index: 2;
}
.grw-img__horizon-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.grw-img__horizon-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.1rem,2.6vw,1.7rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.grw-img__horizon-title em { font-style: italic; color: #2DB89A; }

/* Right milestone badges */
.grw-img__horizon-milestones {
  position: absolute; right: 36px; bottom: 30px;
  display: flex; align-items: center; gap: 1.4rem; z-index: 2;
}
.grw-img__horizon-milestone { display: flex; flex-direction: column; gap: .2rem; text-align: right; }
.grw-img__horizon-milestone-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;
}
.grw-img__horizon-milestone-lbl {
  font-size: .52rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; color: rgba(255,255,255,.5); line-height: 1.45;
}
.grw-img__horizon-divider {
  width: 1px; height: 38px;
  background: rgba(255,255,255,.18);
}

/* Teal glow slice accent bottom-right */
.grw-img__horizon-slice {
  position: absolute;
  bottom: 0; right: 0;
  width: 80px; height: 80px;
  background: radial-gradient(ellipse at bottom right, rgba(45,184,154,.22), transparent 70%);
  pointer-events: none;
}

/* Teal bottom rule */
.grw-img__horizon-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  border-radius: 0 0 4px 4px;
  margin-top: -3px;
}

/* ════════════════════════════════════════════════════
   Duo row — images side by side below the grid
   ════════════════════════════════════════════════════ */
.grw-img-duo {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  margin-top: 3.5rem;
  align-items: start;
}

/* ════════════════════════════════════════════════════
   IMAGE 2 — Tall arch with floating stat circle
   ════════════════════════════════════════════════════ */
.grw-img--arch {
  position: relative;
  padding-bottom: 20px;
}

.grw-img__arch-frame {
  position: relative;
  width: 100%; height: 320px;
  /* Full arch top */
  border-radius: 999px 999px 22px 22px;
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(10,22,40,.16), 0 4px 14px rgba(27,111,191,.1);
}
.grw-img__arch-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 20%; display: block;
  transition: transform .6s cubic-bezier(.25,.46,.45,.94);
}
.grw-img--arch:hover .grw-img__arch-frame img { transform: scale(1.05); }
.grw-img__arch-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(27,111,191,.12) 0%,
    rgba(10,22,40,.0) 40%,
    rgba(10,22,40,.58) 100%
  );
}

/* Inside bottom caption */
.grw-img__arch-caption {
  position: absolute; bottom: 26px; left: 24px;
  display: flex; flex-direction: column; gap: .26rem; z-index: 2;
}
.grw-img__arch-eye {
  font-size: .52rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.grw-img__arch-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.95rem,1.8vw,1.2rem); font-weight: 300; color: #fff; line-height: 1.25;
}

/* Offset teal border behind */
.grw-img__arch-border {
  position: absolute;
  top: 12px; left: 12px;
  width: 100%; height: calc(100% - 20px);
  border-radius: 999px 999px 22px 22px;
  border: 1.5px solid rgba(45,184,154,.28);
  pointer-events: none;
  z-index: 0;
}

/* Dot grid top-right */
.grw-img__arch-dots {
  position: absolute;
  top: -14px; right: -14px;
  width: 72px; height: 72px;
  background-image: radial-gradient(circle, rgba(45,184,154,.48) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none;
  z-index: 0;
}

/* Floating gradient circle stat — bottom-right */
.grw-img__arch-circle {
  position: absolute;
  bottom: 0; right: -14px;
  width: 80px; height: 80px;
  border-radius: 50%;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  display: flex; flex-direction: column;
  align-items: center; justify-content: center; gap: .1rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.45);
  z-index: 4;
}
.grw-img__arch-circle-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.15rem; font-weight: 700; color: #fff; line-height: 1;
}
.grw-img__arch-circle-lbl {
  font-size: .48rem; font-weight: 700; color: rgba(255,255,255,.82);
  text-transform: uppercase; letter-spacing: .08em;
}

/* ════════════════════════════════════════════════════
   IMAGE 3 — Skewed stack with corner brackets & pill
   ════════════════════════════════════════════════════ */
.grw-img--skew {
  position: relative;
  padding-top: 14px;
  padding-bottom: 32px;
}

/* Rotated back card */
.grw-img__skew-back {
  position: absolute;
  inset: 0 -10px 22px 10px;
  border-radius: 20px;
  background: linear-gradient(135deg, rgba(27,111,191,.1), rgba(45,184,154,.14));
  border: 1px solid rgba(45,184,154,.2);
  transform: rotate(3deg);
  z-index: 0;
}

/* Main photo */
.grw-img__skew-main {
  position: relative;
  width: 100%; height: 300px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 22px 52px rgba(10,22,40,.17);
  z-index: 1;
}
.grw-img__skew-main img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.grw-img--skew:hover .grw-img__skew-main img { transform: scale(1.05); }
.grw-img__skew-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg,
    rgba(10,22,40,.08) 0%,
    rgba(10,22,40,.62) 100%
  );
}

/* Inside bottom caption */
.grw-img__skew-caption {
  position: absolute; bottom: 26px; left: 26px;
  display: flex; flex-direction: column; gap: .26rem; z-index: 2;
}
.grw-img__skew-eye {
  font-size: .52rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.grw-img__skew-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(.95rem,1.8vw,1.2rem); font-weight: 300; color: #fff; line-height: 1.25;
}
.grw-img__skew-txt em { font-style: italic; color: #2DB89A; }

/* Corner bracket accents */
.grw-img__skew-corner {
  position: absolute;
  width: 28px; height: 28px;
  pointer-events: none; z-index: 3;
}
.grw-img__skew-corner--tl {
  top: 22px; left: 8px;
  border-top: 2px solid rgba(45,184,154,.7);
  border-left: 2px solid rgba(45,184,154,.7);
}
.grw-img__skew-corner--br {
  bottom: 40px; right: 8px;
  border-bottom: 2px solid rgba(45,184,154,.7);
  border-right: 2px solid rgba(45,184,154,.7);
}

/* Bottom pill label */
.grw-img__skew-pill {
  position: absolute;
  bottom: 10px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .6rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .4rem 1.05rem .4rem .8rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .42rem;
  box-shadow: 0 6px 20px rgba(27,111,191,.38);
  white-space: nowrap;
  z-index: 4;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .expansion-grid { grid-template-columns:repeat(2,1fr); }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  /* Image 1 */
  .grw-img__horizon-frame { height:200px; clip-path:polygon(0 0,100% 0,100% 78%,92% 100%,0 100%); }
  .grw-img__horizon-caption { left:22px; bottom:22px; }
  .grw-img__horizon-milestones { right:18px; bottom:22px; gap:1rem; }
  .grw-img__horizon-milestone-num { font-size:1.5rem; }
  /* Duo */
  .grw-img-duo { grid-template-columns:1fr; gap:2.5rem; }
  .grw-img__arch-frame { height:270px; }
  .grw-img__skew-main { height:250px; }
}
@media (max-width:580px) {
  .expansion-grid { grid-template-columns:1fr; }
  .expansion-card { padding:1.75rem 1.5rem; }
  /* Image 1 */
  .grw-img__horizon-frame { height:175px; }
  .grw-img__horizon-milestones { display:none; }
  /* Image 2 */
  .grw-img__arch-frame { height:240px; }
  .grw-img__arch-circle { width:66px; height:66px; right:-10px; }
  .grw-img__arch-circle-num { font-size:1rem; }
  /* Image 3 */
  .grw-img__skew-main { height:220px; }
  .grw-img__skew-pill { font-size:.54rem; }
}
</style>