<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Our Partners</p>
          <h1 class="page-hero__title">Our <em>Clients</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Long-term partnerships built on trust, reliability, and performance excellence</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Clients
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">

        <!-- ═══ IMAGE 1: Split overlap duo — sits above client cards ═══ -->
        <div class="cli-img cli-img--overlap" data-aos="fade-up">
          <!-- Back photo: slightly behind and offset -->
          <div class="cli-img__overlap-back">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/client1.jfif"
              alt="Partnership meeting"
            />
            <div class="cli-img__overlap-back-wash"></div>
          </div>
          <!-- Front photo: forward and overlapping -->
          <div class="cli-img__overlap-front">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/client2.jfif"
              alt="Client institution"
            />
            <div class="cli-img__overlap-front-wash"></div>
            <!-- Caption inside front photo -->
            <div class="cli-img__overlap-caption">
              <span class="cli-img__overlap-eye">Our partners</span>
              <span class="cli-img__overlap-title">Trusted by<br><em>Leading Institutions</em></span>
            </div>
          </div>
          <!-- Floating pill stat -->
          <div class="cli-img__overlap-pill">
            <span class="cli-img__overlap-pill-num">03</span>
            <span class="cli-img__overlap-pill-txt">Institutional<br>Partners</span>
          </div>
          <!-- Dot grid decoration -->
          <div class="cli-img__overlap-dots"></div>
        </div>

        <div class="clients-hero-grid">
          <div v-for="(client, i) in clients" :key="client.name" class="client-full-card" :data-aos="'fade-up'" :data-aos-delay="i*100">
            <div class="client-full-card__badge">{{ client.badge }}</div>
            <div class="client-full-card__body">
              <div class="client-full-card__icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
                  <path d="M6 12v5c3 3 9 3 12 0v-5"/>
                </svg>
              </div>
              <h3>{{ client.name }}</h3>
              <p>{{ client.desc }}</p>
            </div>
          </div>
        </div>

        <!-- ═══ IMAGE 2: Full-width ribbon banner — between cards and promise ═══ -->
        <div class="cli-img cli-img--ribbon" data-aos="fade-up">
          <div class="cli-img__ribbon-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/client3.jfif"
              alt="Team partnership"
            />
            <div class="cli-img__ribbon-overlay"></div>
            <!-- Left text -->
            <div class="cli-img__ribbon-caption">
              <span class="cli-img__ribbon-eye">What drives us</span>
              <span class="cli-img__ribbon-title">Relationships That<br><em>Last Beyond Contracts</em></span>
            </div>
            <!-- Right accent line cluster -->
            <div class="cli-img__ribbon-lines">
              <div class="cli-img__ribbon-line cli-img__ribbon-line--1"></div>
              <div class="cli-img__ribbon-line cli-img__ribbon-line--2"></div>
              <div class="cli-img__ribbon-line cli-img__ribbon-line--3"></div>
            </div>
          </div>
          <!-- Diagonal slice cut on the right edge -->
          <div class="cli-img__ribbon-slice"></div>
          <!-- Teal bottom rule -->
          <div class="cli-img__ribbon-rule"></div>
        </div>

        <div class="partner-values" data-aos="fade-up">
          <h2 class="section-title text-center">Our Partnership <em>Promise</em></h2>
          <div class="divider centered"></div>

          <!-- ═══ IMAGE 3: Rounded square mosaic — beside promise grid ═══ -->
          <div class="promise-with-img">
            <div class="cli-img cli-img--mosaic" data-aos="fade-left" data-aos-delay="100">
              <!-- Outer rotated border -->
              <div class="cli-img__mosaic-border-outer"></div>
              <!-- Inner rotated border -->
              <div class="cli-img__mosaic-border-inner"></div>
              <!-- Photo frame -->
              <div class="cli-img__mosaic-frame">
                <img
                  src="https://ik.imagekit.io/kp5tixhur/Edumart/client9.png"
                  alt="Trust and reliability"
                />
                <div class="cli-img__mosaic-wash"></div>
              </div>
              <!-- Corner tag -->
              <div class="cli-img__mosaic-tag">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
                Built on Trust
              </div>
            </div>

            <div class="promise-grid">
              <div v-for="p in promises" :key="p.title" class="promise-item">
                <div class="promise-icon">
                  <svg :viewBox="p.vb" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" v-html="p.svg"></svg>
                </div>
                <h4>{{ p.title }}</h4>
                <p>{{ p.desc }}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ClientsView',
  data() {
    return {
      clients: [
        {
          badge: 'Primary Client',
          name: 'Cambridge College of British English International (PVT) Ltd',
          desc: 'Our flagship institutional partner. We provide comprehensive supply chain management including procurement, logistics, and warehousing services to support their international operations.'
        },
        {
          badge: 'Key Client',
          name: 'Cambridge College of British English',
          desc: 'Providing integrated operational support to ensure smooth day-to-day institutional supply chain operations, from purchasing to delivery.'
        },
        {
          badge: 'Key Client',
          name: 'Cambridge College of Information Technology',
          desc: "Supporting IT and technology procurement, logistics coordination, and inventory management for one of Sri Lanka's leading technology institutions."
        },
      ],
      promises: [
        { title: 'Trust',       desc: 'Every relationship is built on a foundation of integrity and transparency.', vb: '0 0 24 24', svg: '<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>' },
        { title: 'Reliability', desc: 'Consistent delivery, every time, without compromise.',                       vb: '0 0 24 24', svg: '<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>' },
        { title: 'Performance', desc: 'Results-driven partnerships focused on measurable outcomes.',                vb: '0 0 24 24', svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>' },
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

/* ─── Client Cards ─── */
.clients-hero-grid { display:flex; flex-direction:column; gap:1.5rem; margin-bottom:5rem; }
.client-full-card { display:flex; gap:2rem; align-items:flex-start; padding:2.5rem; border-radius:14px; border:1px solid #E8EEF5; background:#fff; box-shadow:0 2px 8px rgba(11,25,41,.06); transition:all .3s ease; position:relative; overflow:hidden; }
.client-full-card::before { content:''; position:absolute; left:0; top:0; bottom:0; width:3px; background:linear-gradient(180deg,#1B6FBF,#2DB89A); transform:scaleY(0); transform-origin:top; transition:transform .3s ease; }
.client-full-card:hover { box-shadow:0 8px 32px rgba(27,111,191,.1); transform:translateX(6px); border-color:rgba(45,184,154,.25); }
.client-full-card:hover::before { transform:scaleY(1); }
.client-full-card__badge { background:linear-gradient(135deg,#1B6FBF,#2DB89A); color:#fff; padding:.35rem .9rem; border-radius:20px; font-size:.7rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; white-space:nowrap; flex-shrink:0; align-self:flex-start; margin-top:.3rem; }
.client-full-card__body { flex:1; }
.client-full-card__icon { width:44px; height:44px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:12px; display:grid; place-items:center; color:#2DB89A; margin-bottom:.9rem; }
.client-full-card__body h3 { margin-bottom:.75rem; color:#0B1929; font-family:var(--font-display,'Playfair Display',Georgia,serif); font-weight:400; font-size:1.25rem; }
.client-full-card__body p { font-size:.9rem; color:#637A95; line-height:1.75; }

/* ─── Promise Section ─── */
.partner-values { text-align:center; }
.promise-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:1.5rem; margin-top:3rem; }
.promise-item { padding:2rem; border-radius:14px; border:1px solid #E8EEF5; background:#F7F9FC; transition:all .3s ease; position:relative; overflow:hidden; }
.promise-item::after { content:''; position:absolute; bottom:0; left:0; right:0; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); transform:scaleX(0); transform-origin:left; transition:transform .3s ease; }
.promise-item:hover { border-color:rgba(45,184,154,.25); box-shadow:0 8px 28px rgba(27,111,191,.08); transform:translateY(-4px); background:#fff; }
.promise-item:hover::after { transform:scaleX(1); }
.promise-icon { width:52px; height:52px; background:rgba(45,184,154,.08); border:1px solid rgba(45,184,154,.18); border-radius:14px; display:grid; place-items:center; color:#2DB89A; margin:0 auto 1.1rem; transition:background .2s; }
.promise-item:hover .promise-icon { background:rgba(45,184,154,.14); }
.promise-item h4 { margin-bottom:.5rem; color:#0B1929; }
.promise-item p { font-size:.875rem; color:#637A95; line-height:1.7; }

/* ════════════════════════════════════════════════════
   IMAGE 1 — Split overlap duo (above client cards)
   ════════════════════════════════════════════════════ */
.cli-img--overlap {
  position: relative;
  height: 280px;
  margin-bottom: 3.5rem;
}

/* Back photo: slightly recessed, rotated */
.cli-img__overlap-back {
  position: absolute;
  top: 0; left: 0;
  width: 55%; height: 100%;
  border-radius: 20px;
  overflow: hidden;
  transform: rotate(-2deg) translateY(8px);
  box-shadow: 0 16px 40px rgba(10,22,40,.12);
  z-index: 0;
}
.cli-img__overlap-back img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
}
.cli-img__overlap-back-wash {
  position: absolute; inset: 0;
  background: rgba(10,22,40,.18);
}

/* Front photo: overlapping from the right */
.cli-img__overlap-front {
  position: absolute;
  top: 0; right: 0;
  width: 68%; height: 100%;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(10,22,40,.18), 0 4px 12px rgba(27,111,191,.1);
  z-index: 1;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 4% 100%);
}
.cli-img__overlap-front img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.cli-img--overlap:hover .cli-img__overlap-front img { transform: scale(1.05); }
.cli-img__overlap-front-wash {
  position: absolute; inset: 0;
  background: linear-gradient(110deg,
    rgba(10,22,40,.7) 0%,
    rgba(10,22,40,.35) 45%,
    rgba(27,111,191,.22) 100%
  );
}

/* Caption inside front photo */
.cli-img__overlap-caption {
  position: absolute; bottom: 26px; left: 32px;
  display: flex; flex-direction: column; gap: .28rem; z-index: 2;
}
.cli-img__overlap-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.cli-img__overlap-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1rem,2.4vw,1.55rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.cli-img__overlap-title em { font-style: italic; color: #2DB89A; }

/* Floating pill stat pinned top-right of front photo */
.cli-img__overlap-pill {
  position: absolute;
  top: -14px; right: -14px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 14px;
  padding: .65rem 1rem;
  display: flex; align-items: center; gap: .65rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.42);
  z-index: 4;
  white-space: nowrap;
}
.cli-img__overlap-pill-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.5rem; font-weight: 700; color: #fff; line-height: 1;
}
.cli-img__overlap-pill-txt {
  font-size: .56rem; font-weight: 700;
  color: rgba(255,255,255,.85);
  text-transform: uppercase; letter-spacing: .06em; line-height: 1.45;
}

/* Dot grid pinned behind back photo */
.cli-img__overlap-dots {
  position: absolute;
  top: -14px; left: -14px;
  width: 72px; height: 72px;
  background-image: radial-gradient(circle, rgba(45,184,154,.45) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none;
  z-index: 0;
}

/* ════════════════════════════════════════════════════
   IMAGE 2 — Full-width ribbon banner (between sections)
   ════════════════════════════════════════════════════ */
.cli-img--ribbon {
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
  overflow: visible;
}

.cli-img__ribbon-frame {
  position: relative;
  width: 100%; height: 220px;
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.13);
}
.cli-img__ribbon-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 35%; display: block;
  transition: transform .6s ease;
}
.cli-img--ribbon:hover .cli-img__ribbon-frame img { transform: scale(1.04); }
.cli-img__ribbon-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(105deg,
    rgba(10,22,40,.82) 0%,
    rgba(10,22,40,.38) 50%,
    rgba(27,111,191,.28) 100%
  );
}

/* Left text caption */
.cli-img__ribbon-caption {
  position: absolute; bottom: 28px; left: 36px;
  display: flex; flex-direction: column; gap: .3rem; z-index: 2;
}
.cli-img__ribbon-eye {
  font-size: .54rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.cli-img__ribbon-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1rem,2.6vw,1.65rem); font-weight: 300; color: #fff; line-height: 1.22;
}
.cli-img__ribbon-title em { font-style: italic; color: #2DB89A; }

/* Right decorative line cluster */
.cli-img__ribbon-lines {
  position: absolute; right: 36px; top: 50%; transform: translateY(-50%);
  display: flex; flex-direction: column; gap: .5rem; z-index: 2;
}
.cli-img__ribbon-line {
  height: 2px; border-radius: 2px;
  background: linear-gradient(90deg, rgba(45,184,154,.7), rgba(27,111,191,.4));
}
.cli-img__ribbon-line--1 { width: 64px; }
.cli-img__ribbon-line--2 { width: 40px; }
.cli-img__ribbon-line--3 { width: 52px; }

/* Diagonal slice on right edge (visual interest) */
.cli-img__ribbon-slice {
  position: absolute;
  top: 0; right: 0;
  width: 60px; height: 100%;
  background: linear-gradient(90deg, transparent, rgba(45,184,154,.06));
  clip-path: polygon(40% 0%, 100% 0%, 100% 100%, 0% 100%);
  pointer-events: none;
}

/* Teal bottom accent rule */
.cli-img__ribbon-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  border-radius: 0 0 4px 4px;
}

/* ════════════════════════════════════════════════════
   IMAGE 3 — Rotated square mosaic (beside promise grid)
   ════════════════════════════════════════════════════ */
.promise-with-img {
  display: grid;
  grid-template-columns: 240px 1fr;
  gap: 3rem;
  align-items: center;
  margin-top: 3rem;
}

.cli-img--mosaic {
  position: relative;
  width: 200px; height: 200px;
  margin: 0 auto;
  flex-shrink: 0;
}

.cli-img__mosaic-border-outer {
  position: absolute; inset: 0;
  border: 1.5px solid rgba(45,184,154,.22);
  border-radius: 22px;
  transform: rotate(10deg);
}
.cli-img__mosaic-border-inner {
  position: absolute; inset: 8px;
  border: 1px solid rgba(255,255,255,.06);
  border-radius: 18px;
  transform: rotate(20deg);
  background: rgba(27,111,191,.06);
}

.cli-img__mosaic-frame {
  position: absolute;
  inset: 16px;
  border-radius: 16px;
  transform: rotate(8deg);
  overflow: hidden;
  box-shadow: 0 16px 48px rgba(10,22,40,.22);
}
.cli-img__mosaic-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transform: rotate(-8deg) scale(1.2);
  transition: transform .55s ease;
}
.cli-img--mosaic:hover .cli-img__mosaic-frame img { transform: rotate(-8deg) scale(1.28); }
.cli-img__mosaic-wash {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(27,111,191,.25), rgba(45,184,154,.18));
  mix-blend-mode: multiply;
}

/* Corner tag label */
.cli-img__mosaic-tag {
  position: absolute;
  bottom: -12px; left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .58rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .38rem 1rem .38rem .78rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .4rem;
  box-shadow: 0 6px 18px rgba(27,111,191,.38);
  white-space: nowrap;
  z-index: 3;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .promise-grid { grid-template-columns:repeat(2,1fr); }
  .promise-with-img { grid-template-columns:1fr; gap:2.5rem; }
  .cli-img--mosaic { width:180px; height:180px; }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .client-full-card { flex-direction:column; gap:1rem; }
  .client-full-card__badge { align-self:flex-start; }
  .promise-grid { grid-template-columns:1fr; }
  /* Image 1 */
  .cli-img--overlap { height:230px; }
  .cli-img__overlap-back { width:50%; }
  .cli-img__overlap-front { width:72%; }
  .cli-img__overlap-caption { left:20px; bottom:18px; }
  /* Image 2 */
  .cli-img__ribbon-frame { height:185px; }
  .cli-img__ribbon-caption { left:22px; bottom:20px; }
  .cli-img__ribbon-lines { right:20px; }
  /* Image 3 */
  .cli-img--mosaic { width:160px; height:160px; }
}
@media (max-width:480px) {
  .client-full-card { padding:1.5rem; }
  .promise-item { padding:1.5rem; }
  /* Image 1 */
  .cli-img--overlap { height:195px; }
  .cli-img__overlap-pill { top:-10px; right:-10px; padding:.5rem .75rem; gap:.5rem; }
  .cli-img__overlap-pill-num { font-size:1.2rem; }
  /* Image 2 */
  .cli-img__ribbon-frame { height:160px; }
  .cli-img__ribbon-lines { display:none; }
  /* Image 3 */
  .cli-img--mosaic { width:140px; height:140px; }
}
</style>