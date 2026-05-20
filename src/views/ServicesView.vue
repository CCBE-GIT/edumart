<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">What We Do</p>
          <h1 class="page-hero__title">Our <em>Services</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">End-to-end operational support tailored to institutional requirements</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Services
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">
        <div v-for="(service, i) in services" :key="service.title" class="service-block" :class="{ 'service-block--rev': i % 2 !== 0 }" :data-aos="'fade-up'">
          <div class="service-block__icon-col">
            <div class="service-block__icon-wrap">
              <svg :viewBox="service.vb" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" v-html="service.svg"></svg>
              <span class="service-block__num">0{{ i + 1 }}</span>
            </div>
          </div>
          <div class="service-block__content">
            <p class="section-label">Service {{ `0${i+1}` }}</p>
            <h2 class="section-title">{{ service.title }}</h2>
            <div class="divider"></div>
            <p>{{ service.description }}</p>
            <ul class="service-features">
              <li v-for="feat in service.features" :key="feat">
                <span class="feat-check">
                  <svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
                </span>
                {{ feat }}
              </li>
            </ul>
          </div>

          <!-- ═══ IMAGE A: after service 01 (Procurement) ═══ -->
          <div v-if="i === 0" class="svc-img svc-img--arch" data-aos="fade-up" data-aos-delay="120">
            <div class="svc-img__arch-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/service1.jfif"
                alt="Procurement operations"
              />
              <div class="svc-img__arch-overlay"></div>
            </div>
            <!-- offset teal border -->
            <div class="svc-img__arch-border"></div>
            <!-- floating dot grid -->
            <div class="svc-img__arch-dots"></div>
            <!-- label pill -->
            <div class="svc-img__arch-pill">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
              Smart Sourcing
            </div>
          </div>

          <!-- ═══ IMAGE B: after service 03 (Warehousing) ═══ -->
          <div v-if="i === 2" class="svc-img svc-img--wave" data-aos="fade-up" data-aos-delay="120">
            <div class="svc-img__wave-frame">
              <img
                src="https://ik.imagekit.io/kp5tixhur/Edumart/service2.jfif"
                alt="Warehouse inventory"
              />
              <div class="svc-img__wave-overlay"></div>
              <!-- inline caption -->
              <div class="svc-img__wave-caption">
                <span class="svc-img__wave-caption-eye">In-house systems</span>
                <span class="svc-img__wave-caption-txt">Full inventory<br>visibility, always</span>
              </div>
            </div>
            <!-- wave cutout bottom -->
            <div class="svc-img__wave-bottom"></div>
            <!-- teal rule -->
            <div class="svc-img__wave-rule"></div>
          </div>

          <!-- ═══ IMAGE C: after service 05 (Consultation) ═══ -->
          <div v-if="i === 4" class="svc-img svc-img--skew" data-aos="fade-up" data-aos-delay="120">
            <div class="svc-img__skew-stack">
              <!-- back card -->
              <div class="svc-img__skew-back"></div>
              <!-- main photo -->
              <div class="svc-img__skew-main">
                <img
                  src="https://ik.imagekit.io/kp5tixhur/Edumart/service3.jfif"
                  alt="Supply chain consulting"
                />
                <div class="svc-img__skew-overlay"></div>
              </div>
              <!-- stats badge -->
              <div class="svc-img__skew-badge">
                <span class="svc-img__skew-badge-num">100%</span>
                <span class="svc-img__skew-badge-txt">Client<br>Satisfaction</span>
              </div>
              <!-- corner accent -->
              <div class="svc-img__skew-corner"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'ServicesView',
  data() {
    return {
      services: [
        {
          vb: '0 0 24 24',
          svg: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"/><line x1="3" y1="6" x2="21" y2="6"/><path d="M16 10a4 4 0 0 1-8 0"/>',
          title: 'Procurement & Purchasing Management',
          description: 'We ensure high quality products at competitive pricing while maintaining strong and reliable supplier networks. Our strategic approach to procurement reduces costs and improves supply reliability.',
          features: [
            'Strategic Sourcing and Supplier Evaluation',
            'Vendor Negotiation and Pricing Optimization',
            'Institutional Purchasing Coordination',
            'Import Purchasing Management',
            'Vendor Relationship Development',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<rect x="1" y="3" width="15" height="13" rx="1"/><path d="M16 8h4l3 3v5h-7V8z"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>',
          title: 'Logistics Handling Services',
          description: 'Our logistics solutions are designed to reduce delays and improve operational efficiency. We coordinate both local and international freight with full documentation support.',
          features: [
            'Local and International Logistics Coordination',
            'Import and Export Documentation Management',
            'Shipment Tracking and Monitoring',
            'Delivery Scheduling and Route Planning',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>',
          title: 'Warehousing & Inventory Management',
          description: 'We provide scalable and organized warehousing solutions tailored to institutional growth. Our inventory systems ensure accurate stock visibility at all times.',
          features: [
            'Secure Storage Facilities',
            'Inventory Monitoring Systems',
            'Stock Reporting and Control',
            'Distribution Coordination',
            'Asset and Materials Management',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<path d="M5 17H3a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11a2 2 0 0 1 2 2v3"/><rect x="9" y="11" width="14" height="10" rx="1"/><circle cx="12" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>',
          title: 'Cargo Transportation Services',
          description: 'Our transportation network ensures timely and secure movement of goods. We handle everything from routine scheduled deliveries to urgent institutional requirements.',
          features: [
            'Inland Cargo Transportation',
            'Institutional Material Distribution',
            'Safe Handling Procedures',
            'Scheduled and Urgent Deliveries Services',
          ]
        },
        {
          vb: '0 0 24 24',
          svg: '<line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/>',
          title: 'Supply Chain Consultation Services',
          description: 'We help organizations build structured, efficient, and future-ready operational systems. Our consultancy is grounded in practical experience and best-practice frameworks.',
          features: [
            'Supply Chain Process Optimization',
            'Procurement Strategy Development',
            'Cost Control Advisory',
            'Import and Logistics Planning',
            'Operational System Structuring',
          ]
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
.section-title { font-family:var(--font-display,'Playfair Display',Georgia,serif); font-size:clamp(1.8rem,3.5vw,2.6rem); font-weight:400; color:#0B1929; line-height:1.15; margin-bottom:.5rem; }
.divider { width:48px; height:2px; background:linear-gradient(90deg,#1B6FBF,#2DB89A); margin:1.5rem 0; border-radius:2px; }

/* ─── Service Blocks ─── */
.service-block { display:grid; grid-template-columns:200px 1fr; gap:4rem; align-items:start; padding:4rem 0; border-bottom:1px solid #E8EEF5; }
.service-block:last-child { border-bottom:none; }
.service-block--rev { direction:rtl; }
.service-block--rev > * { direction:ltr; }
.service-block__icon-col { display:flex; justify-content:center; }
.service-block__icon-wrap { position:relative; width:120px; height:120px; background:#F4F6F9; border-radius:20px; display:grid; place-items:center; border:1px solid #E8EEF5; transition:all .3s ease; box-shadow:0 4px 16px rgba(27,111,191,.06); color:#1B6FBF; }
.service-block:hover .service-block__icon-wrap { border-color:rgba(45,184,154,.3); box-shadow:0 8px 28px rgba(45,184,154,.12); background:#fff; color:#2DB89A; }
.service-block__num { position:absolute; bottom:-.6rem; right:-.6rem; width:32px; height:32px; background:linear-gradient(135deg,#1B6FBF,#2DB89A); color:#fff; font-size:.7rem; font-weight:700; border-radius:50%; display:grid; place-items:center; box-shadow:0 2px 8px rgba(27,111,191,.25); }

/* ─── Feature List ─── */
.service-features { list-style:none; display:flex; flex-direction:column; gap:.55rem; margin-top:1.5rem; }
.service-features li { display:flex; align-items:center; gap:.85rem; font-size:.9rem; color:#2C3E55; padding:.3rem 0; }
.feat-check { width:20px; height:20px; background:rgba(45,184,154,.1); border:1px solid rgba(45,184,154,.22); border-radius:50%; display:grid; place-items:center; color:#2DB89A; flex-shrink:0; }

/* ════════════════════════════════════════════════════
   IMAGE SHARED BASE
   Images span full grid width (col 1–3) and sit
   between service blocks as full-row visual breaks.
   ════════════════════════════════════════════════════ */
.svc-img {
  grid-column: 1 / -1;
  width: 100%;
}

/* ════════════════════════════════════════════════════
   IMAGE A — Arched portrait frame (after Procurement)
   ════════════════════════════════════════════════════ */
.svc-img--arch {
  position: relative;
  max-width: 380px;
  margin: 0 auto 1rem;
  padding-bottom: 16px;
}

.svc-img__arch-frame {
  position: relative;
  width: 100%;
  height: 300px;
  /* Arch top: full rounded top, straight bottom */
  border-radius: 999px 999px 28px 28px;
  overflow: hidden;
  box-shadow: 0 28px 60px rgba(10,22,40,.16), 0 4px 16px rgba(27,111,191,.1);
}
.svc-img__arch-frame img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s cubic-bezier(.25,.46,.45,.94);
}
.svc-img--arch:hover .svc-img__arch-frame img { transform: scale(1.06); }
.svc-img__arch-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(180deg, rgba(27,111,191,.12) 0%, rgba(45,184,154,.2) 55%, rgba(10,22,40,.3) 100%);
}

/* Offset teal border behind */
.svc-img__arch-border {
  position: absolute;
  top: 12px; left: 12px;
  width: 100%; height: 100%;
  border-radius: 999px 999px 28px 28px;
  border: 1.5px solid rgba(45,184,154,.3);
  pointer-events: none;
  z-index: 0;
}

/* Dot grid top-right */
.svc-img__arch-dots {
  position: absolute;
  top: -14px; right: -14px;
  width: 80px; height: 80px;
  background-image: radial-gradient(circle, rgba(45,184,154,.5) 1.5px, transparent 1.5px);
  background-size: 10px 10px;
  pointer-events: none;
  z-index: 2;
}

/* Pill label bottom-center */
.svc-img__arch-pill {
  position: absolute;
  bottom: 0;
  left: 50%; transform: translateX(-50%);
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  color: #fff;
  font-size: .62rem; font-weight: 700; letter-spacing: .1em; text-transform: uppercase;
  padding: .42rem 1.1rem .42rem .85rem;
  border-radius: 999px;
  display: flex; align-items: center; gap: .45rem;
  box-shadow: 0 6px 20px rgba(27,111,191,.38);
  white-space: nowrap;
  z-index: 3;
}

/* ════════════════════════════════════════════════════
   IMAGE B — Wave-bottom panoramic banner (Warehousing)
   ════════════════════════════════════════════════════ */
.svc-img--wave {
  position: relative;
  width: 100%;
  border-radius: 20px 20px 0 0;
  overflow: visible;
  margin-bottom: 2rem;
}

.svc-img__wave-frame {
  position: relative;
  width: 100%; height: 240px;
  border-radius: 20px 20px 0 0;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.13);
}
.svc-img__wave-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 60%; display: block;
  transition: transform .6s ease;
}
.svc-img--wave:hover .svc-img__wave-frame img { transform: scale(1.04); }
.svc-img__wave-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(90deg,
    rgba(10,22,40,.75) 0%,
    rgba(10,22,40,.35) 50%,
    rgba(27,111,191,.22) 100%
  );
}

/* Caption inside the banner */
.svc-img__wave-caption {
  position: absolute; bottom: 26px; left: 32px;
  display: flex; flex-direction: column; gap: .28rem; z-index: 2;
}
.svc-img__wave-caption-eye {
  font-size: .56rem; font-weight: 700; letter-spacing: .22em;
  text-transform: uppercase; color: #2DB89A;
}
.svc-img__wave-caption-txt {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1rem,2.2vw,1.45rem); font-weight: 300; color: #fff; line-height: 1.25;
}

/* Wave SVG cutout at the bottom via clip-path */
.svc-img__wave-bottom {
  width: 100%; height: 36px;
  background: #fff; /* matches section bg */
  clip-path: ellipse(55% 100% at 50% 100%);
  margin-top: -2px;
}

/* Teal gradient rule */
.svc-img__wave-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -36px; /* sits just above the wave cutout */
  position: relative; z-index: 1;
}

/* ════════════════════════════════════════════════════
   IMAGE C — Skewed stacked card (Consultation)
   ════════════════════════════════════════════════════ */
.svc-img--skew {
  max-width: 420px;
  margin: 0 auto 1rem;
}

.svc-img__skew-stack {
  position: relative;
  width: 100%;
  padding-bottom: 28px;
}

/* Back card — rotated slightly, teal-tinted */
.svc-img__skew-back {
  position: absolute;
  inset: 10px 10px 0 -10px;
  border-radius: 24px;
  background: linear-gradient(135deg, rgba(27,111,191,.18), rgba(45,184,154,.22));
  border: 1px solid rgba(45,184,154,.2);
  transform: rotate(-3deg);
  z-index: 0;
}

/* Main photo */
.svc-img__skew-main {
  position: relative;
  width: 100%; height: 260px;
  border-radius: 24px;
  overflow: hidden;
  box-shadow: 0 24px 56px rgba(10,22,40,.18);
  z-index: 1;
}
.svc-img__skew-main img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .6s ease;
}
.svc-img--skew:hover .svc-img__skew-main img { transform: scale(1.05); }
.svc-img__skew-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(160deg, rgba(27,111,191,.14) 0%, rgba(45,184,154,.2) 60%, rgba(10,22,40,.25) 100%);
}

/* Floating stats badge */
.svc-img__skew-badge {
  position: absolute;
  bottom: 0; right: 20px;
  background: linear-gradient(135deg, #1B6FBF, #2DB89A);
  border-radius: 16px;
  padding: .7rem 1.1rem;
  display: flex; align-items: center; gap: .7rem;
  box-shadow: 0 8px 24px rgba(27,111,191,.4);
  z-index: 3;
  white-space: nowrap;
}
.svc-img__skew-badge-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 1.5rem; font-weight: 700; color: #fff; line-height: 1;
}
.svc-img__skew-badge-txt {
  font-size: .58rem; font-weight: 700;
  color: rgba(255,255,255,.85);
  text-transform: uppercase; letter-spacing: .07em; line-height: 1.45;
}

/* Teal corner accent top-left */
.svc-img__skew-corner {
  position: absolute;
  top: -10px; left: -10px;
  width: 56px; height: 56px;
  border-top: 2.5px solid #2DB89A;
  border-left: 2.5px solid #2DB89A;
  border-radius: 12px 0 0 0;
  z-index: 2;
  pointer-events: none;
}

/* ─── Responsive ─── */
@media (max-width:900px) {
  .service-block { grid-template-columns:140px 1fr; gap:2.5rem; }
}
@media (max-width:768px) {
  .page-hero { padding:100px 0 60px; }
  .service-block { grid-template-columns:1fr; gap:1.75rem; padding:2.5rem 0; }
  .service-block--rev { direction:ltr; }
  .service-block__icon-col { justify-content:flex-start; }
  .service-block__icon-wrap { width:90px; height:90px; }
  /* Image A */
  .svc-img--arch { max-width:100%; }
  .svc-img__arch-frame { height:260px; }
  /* Image B */
  .svc-img__wave-frame { height:200px; }
  .svc-img__wave-caption { left:22px; bottom:20px; }
  /* Image C */
  .svc-img--skew { max-width:100%; }
  .svc-img__skew-main { height:220px; }
}
@media (max-width:480px) {
  .service-block { padding:2rem 0; }
  .service-features li { font-size:.85rem; }
  /* Image A */
  .svc-img__arch-frame { height:220px; }
  .svc-img__arch-pill { font-size:.56rem; }
  /* Image B */
  .svc-img__wave-frame { height:170px; }
  .svc-img__wave-caption-txt { font-size:1rem; }
  .svc-img__wave-caption { left:16px; bottom:14px; }
  /* Image C */
  .svc-img__skew-main { height:190px; }
  .svc-img__skew-badge { right:12px; padding:.55rem .8rem; gap:.5rem; }
  .svc-img__skew-badge-num { font-size:1.2rem; }
}
</style>