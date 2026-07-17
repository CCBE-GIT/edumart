<template>
  <main>
    <!-- Page Hero -->
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">Our Network</p>
          <h1 class="page-hero__title">Distribution <em>Centers</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Delivering logistics, warehousing, and procurement solutions to educational colleges and hubs islandwide.</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Distribution Centers
        </div>
      </div>
    </section>

    <!-- Main Content Section -->
    <section class="section-pad distribution-section">
      <div class="container">

        <!-- Cinematic Ribbon Banner -->
        <div class="con-img con-img--ribbon" data-aos="fade-up">
          <div class="con-img__ribbon-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/logistics4.jpg"
              alt="Edumart Distribution and Logistics Network"
            />
            <div class="con-img__ribbon-overlay"></div>
            <!-- Left caption -->
            <div class="con-img__ribbon-caption">
              <span class="con-img__ribbon-eye">Islandwide Distribution</span>
              <span class="con-img__ribbon-title">Strategic Network<br><em>Connecting Communities</em></span>
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

        <div class="distribution-grid-layout">
          <!-- Left side: Filters & Info -->
          <div class="sidebar-col" data-aos="fade-right">
            <p class="section-label">Search & Filter</p>
            <h2 class="section-title">Find a <em>Hub</em> Near You</h2>
            <div class="divider"></div>
            <p class="intro-text">
              We coordinate safe storage, secure inventory systems, and inland cargo transportation across Sri Lanka's leading educational colleges. Use the filters to find specific centers.
            </p>

            <!-- Search Bar -->
            <div class="search-box">
              <div class="search-box__input-wrap">
                <svg class="search-icon" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                  <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
                <input
                  v-model="searchQuery"
                  type="text"
                  placeholder="Search by center name or town..."
                  aria-label="Search distribution centers"
                />
                <button v-if="searchQuery" class="clear-btn" @click="searchQuery = ''" aria-label="Clear search">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
                </button>
              </div>
            </div>

            <!-- Region Filter Tabs -->
            <div class="region-filters">
              <span class="filters-label">Regions</span>
              <div class="filters-group">
                <button
                  v-for="region in regions"
                  :key="region"
                  :class="['filter-tab', { 'filter-tab--active': activeRegion === region }]"
                  @click="activeRegion = region"
                >
                  {{ region }}
                </button>
              </div>
            </div>

            <!-- Statistics Panel -->
            <div class="stats-panel">
              <div class="stats-panel__card">
                <span class="stats-num">{{ filteredCenters.length }}</span>
                <span class="stats-label">Matching Hubs</span>
              </div>
              <div class="stats-panel__card">
                <span class="stats-num">24/7</span>
                <span class="stats-label">Operations Support</span>
              </div>
            </div>
          </div>

          <!-- Right side: Cards Grid -->
          <div class="cards-col" data-aos="fade-left" data-aos-delay="100">
            <transition-group name="card-list" tag="div" class="centers-grid">
              <div
                v-for="center in filteredCenters"
                :key="center.name"
                class="card center-card"
              >
                <!-- Card Header -->
                <div class="center-card__header">
                  <div class="center-card__icon-wrap">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                  </div>
                  <span class="center-card__tag">{{ center.region }}</span>
                </div>

                <!-- Card Body -->
                <div class="center-card__body">
                  <h3 class="center-card__title">{{ center.name }}</h3>
                  
                  <div class="center-card__detail">
                    <span class="center-card__label">Address</span>
                    <p class="center-card__value">{{ center.address }}</p>
                  </div>

                  <div class="center-card__detail">
                    <span class="center-card__label">Contact Numbers</span>
                    <div class="center-card__phones">
                      <a :href="'tel:' + center.phone1.replace(/\s+/g, '')" class="center-card__link center-card__phone">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        {{ center.phone1 }}
                      </a>
                      <a :href="'tel:' + center.phone2.replace(/\s+/g, '')" class="center-card__link center-card__phone">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                        </svg>
                        {{ center.phone2 }}
                      </a>
                    </div>
                  </div>
                </div>

                <!-- Card Footer (Actions) -->
                <div class="center-card__footer">
                  <a
                    :href="center.mapUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="btn-maps"
                  >
                    View on Google Maps
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
                      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
                      <polyline points="15 3 21 3 21 9"/>
                      <line x1="10" y1="14" x2="21" y2="3"/>
                    </svg>
                  </a>
                </div>
              </div>
            </transition-group>

            <!-- No results message -->
            <div v-if="filteredCenters.length === 0" class="no-results" data-aos="fade-up">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="8" y1="12" x2="16" y2="12"/>
              </svg>
              <h4>No Centers Found</h4>
              <p>Try searching for a different keyword or resetting the region filter.</p>
              <button class="btn btn-primary btn-sm" @click="resetFilters">Reset Filters</button>
            </div>
          </div>
        </div>

      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'DistributionView',
  data() {
    return {
      searchQuery: '',
      activeRegion: 'All Regions',
      regions: ['All Regions', 'Western Province', 'Southern Province'],
      centers: [
        {
          name: 'Kalutara Center',
          address: 'No 85, Maha Waskaduwa, Waskaduwa, 12580',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://maps.app.goo.gl/XyQqiD5g3hwMpMtXA?g_st=com.google.maps.preview.copy',
          region: 'Western Province'
        },
        {
          name: 'Piliyandala Center',
          address: 'No 119, Moratuwa Rd, Suwarapola, Piliyandala, 10300',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/Cambridge+College+of+British+English+-+Piliyandala+Branch/@6.7976862,79.9104188,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae24f66c70e2e1f:0x2c68479dd8418786!8m2!3d6.7976862!4d79.9129937!16s%2Fg%2F11y63j2s3q?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
          region: 'Western Province'
        },
        {
          name: 'Matugama Center',
          address: 'No 57/D, Aluthgama Rd, Matugama, 12100',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/Cambridge+College+of+British+English+-+Matugama+Branch+(CCBE+-+Matugama)/@6.5188635,80.1137881,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae3cdeac2cafabd:0xf09b386262c9fa5d!8m2!3d6.5188635!4d80.116363!16s%2Fg%2F11zb48c7ql?entry=ttu&g_ep=EgoyMDI2MDUyMC4wIKXMDSoASAFQAw%3D%3D',
          region: 'Western Province'
        },
        {
          name: 'Horana Center',
          address: 'No 149, Graceland Circular Rd, Horana, 12400',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/CAMBRIDGE+COLLEGE+OF+BRITISH+ENGLISH+-+HORANA/@6.7164033,80.0575963,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae24b0b0effc743:0xd8743653d2d47685!8m2!3d6.7164033!4d80.0601712!16s%2Fg%2F11y6h97s0y?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
          region: 'Western Province'
        },
        {
          name: 'Ambalangoda Center',
          address: 'No 97, New Rd, Ambalangoda, 80300',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/Cambridge+College+of+British+English-Ambalangoda+Branch/@6.2385847,80.0514462,17z/data=!4m15!1m8!3m7!1s0x3ae18182adb4c185:0x5d72bb258aff3f49!2s97+Galle+Rd,+Ambalangoda+80300!3b1!8m2!3d6.2385847!4d80.0540211!16s%2Fg%2F11vkct126h!3m5!1s0x3ae181ec02cee8a1:0xe4f738a14e81be9d!8m2!3d6.2385847!4d80.0540211!16s%2Fg%2F11k266tzpd?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
          region: 'Southern Province'
        },
        {
          name: 'Galle Center',
          address: 'No 118, Old Matara Rd, Galle, 80000',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/Cambridge+College+of+British+English+-+Galle+Branch/@6.0369992,80.2230931,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae177054ce6cb81:0x6b25fdfd39d5b3a3!8m2!3d6.0369992!4d80.2230931!16s%2Fg%2F11sq_6v78w?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
          region: 'Southern Province'
        },
        {
          name: 'Matara Center',
          address: 'No: 352, Kumarathunga Mw, Matara, 81000',
          phone1: '+94 71 399 9666',
          phone2: '+94 71 264 6600',
          mapUrl: 'https://www.google.com/maps/place/Cambridge+College+of+British+English+-+Matara+Branch/@5.9462457,80.5332676,17z/data=!3m1!4b1!4m6!3m5!1s0x3ae13fc54e40cd0f:0x4f157d7ce1ff2d01!8m2!3d5.9462457!4d80.5358425!16s%2Fg%2F11kk73mbnd?entry=ttu&g_ep=EgoyMDI1MDEyMi4wIKXMDSoASAFQAw%3D%3D',
          region: 'Southern Province'
        }
      ]
    }
  },
  computed: {
    filteredCenters() {
      return this.centers.filter(center => {
        const matchesSearch = center.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          center.address.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          center.phone1.includes(this.searchQuery) ||
          center.phone2.includes(this.searchQuery);
        const matchesRegion = this.activeRegion === 'All Regions' || center.region === this.activeRegion;
        return matchesSearch && matchesRegion;
      });
    }
  },
  methods: {
    resetFilters() {
      this.searchQuery = '';
      this.activeRegion = 'All Regions';
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

/* ─── Ribbon Banner ─── */
.con-img--ribbon {
  position: relative;
  width: 100%;
  margin-bottom: 4rem;
}
.con-img__ribbon-frame {
  position: relative;
  width: 100%; height: 220px;
  clip-path: polygon(3% 0%, 100% 0%, 97% 100%, 0% 100%);
  overflow: hidden;
  box-shadow: 0 22px 52px rgba(10,22,40,.14);
}
.con-img__ribbon-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 50%; display: block;
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
.con-img__ribbon-notch {
  width: 130px; height: 26px;
  background: var(--bg-primary);
  clip-path: ellipse(50% 100% at 50% 100%);
  margin: 0 auto; margin-top: -2px;
  position: relative; z-index: 1;
  transition: background-color var(--transition);
}
.con-img__ribbon-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -26px; position: relative; z-index: 0;
}

/* ─── Grid Layout ─── */
.distribution-grid-layout {
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 4rem;
  align-items: start;
}

/* ─── Sidebar ─── */
.sidebar-col {
  display: flex;
  flex-direction: column;
}

/* Search Box */
.search-box {
  margin-bottom: 2rem;
}
.search-box__input-wrap {
  position: relative;
  display: flex;
  align-items: center;
}
.search-icon {
  position: absolute;
  left: 1.1rem;
  color: var(--text-muted-color);
  pointer-events: none;
}
.search-box input {
  width: 100%;
  padding: 0.85rem 2.8rem;
  border: 1.5px solid var(--border-color);
  border-radius: 10px;
  font-family: var(--font-body, inherit);
  font-size: 0.92rem;
  color: var(--text-main);
  background: var(--bg-card-alt2);
  transition: border-color 0.2s, box-shadow 0.2s, background-color 0.3s;
  outline: none;
}
.search-box input:focus {
  border-color: var(--teal);
  background: var(--bg-primary);
  box-shadow: 0 0 0 3px rgba(45,184,154,0.1);
}
.clear-btn {
  position: absolute;
  right: 1rem;
  background: none;
  border: none;
  color: var(--text-muted-color);
  cursor: pointer;
  display: grid;
  place-items: center;
  padding: 4px;
  border-radius: 50%;
  transition: background-color 0.2s;
}
.clear-btn:hover {
  background-color: var(--border-color);
  color: var(--text-main);
}

/* Filters */
.region-filters {
  margin-bottom: 2rem;
}
.filters-label {
  display: block;
  font-size: 0.68rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
  color: var(--teal);
  margin-bottom: 0.85rem;
}
.filters-group {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}
.filter-tab {
  width: 100%;
  text-align: left;
  padding: 0.75rem 1.1rem;
  background: transparent;
  border: 1.5px solid var(--border-color);
  border-radius: 8px;
  font-family: var(--font-body, inherit);
  font-size: 0.85rem;
  font-weight: 600;
  color: var(--text-body-color);
  cursor: pointer;
  transition: all 0.2s ease;
}
.filter-tab:hover {
  border-color: var(--teal);
  color: var(--teal);
  background: rgba(45, 184, 154, 0.04);
}
.filter-tab--active {
  background: var(--teal) !important;
  color: var(--white) !important;
  border-color: var(--teal) !important;
}

/* Stats Panel */
.stats-panel {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 2rem;
}
.stats-panel__card {
  padding: 1.5rem;
  background: var(--bg-card-alt2);
  border: 1px solid var(--border-color);
  border-radius: 12px;
  text-align: center;
}
.stats-num {
  display: block;
  font-family: var(--font-display, serif);
  font-size: 2.2rem;
  font-weight: 700;
  color: var(--teal);
  line-height: 1;
  margin-bottom: 0.4rem;
}
.stats-label {
  font-size: 0.68rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--text-muted-color);
}

/* ─── Center Cards Grid ─── */
.centers-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.center-card {
  display: flex;
  flex-direction: column;
  height: 100%;
}
.center-card__header {
  padding: 1.5rem 1.5rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.center-card__icon-wrap {
  width: 40px;
  height: 40px;
  background: rgba(45, 184, 154, 0.08);
  border: 1px solid rgba(45, 184, 154, 0.18);
  border-radius: 10px;
  display: grid;
  place-items: center;
  color: var(--teal);
}
.center-card__tag {
  font-size: 0.62rem;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: var(--teal);
  background: rgba(45, 184, 154, 0.08);
  padding: 0.25rem 0.65rem;
  border-radius: 4px;
}
.center-card__body {
  padding: 1rem 1.5rem 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}
.center-card__title {
  font-family: var(--font-display, serif);
  font-size: 1.45rem;
  font-weight: 400;
  color: var(--text-main);
  line-height: 1.2;
}
.center-card__detail {
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
}
.center-card__label {
  font-size: 0.65rem;
  font-weight: 700;
  letter-spacing: 0.12em;
  text-transform: uppercase;
  color: var(--teal);
}
.center-card__value {
  font-size: 0.9rem;
  color: var(--text-body-color);
  line-height: 1.6;
}
.center-card__link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.95rem;
  color: var(--text-body-color);
  text-decoration: none;
  transition: color 0.2s ease;
  font-weight: 500;
}
.center-card__link:hover {
  color: var(--teal);
}
.center-card__phone svg {
  color: var(--teal);
  opacity: 0.8;
}
.center-card__phones {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.center-card__footer {
  padding: 1.25rem 1.5rem;
  border-top: 1px solid var(--border-color);
  background: var(--bg-card-alt2);
  display: flex;
  align-items: center;
}
.btn-maps {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.72rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: var(--teal);
  text-decoration: none;
  transition: all 0.2s ease;
}
.btn-maps svg {
  transition: transform 0.2s ease;
}
.btn-maps:hover {
  color: var(--teal-dark);
}
.btn-maps:hover svg {
  transform: translate(1px, -1px);
}

/* No Results */
.no-results {
  text-align: center;
  padding: 4rem 2rem;
  background: var(--bg-card);
  border: 1.5px solid var(--border-color);
  border-radius: 16px;
  color: var(--text-muted-color);
}
.no-results svg {
  color: var(--teal);
  opacity: 0.6;
  margin-bottom: 1rem;
}
.no-results h4 {
  font-family: var(--font-display, serif);
  font-size: 1.5rem;
  color: var(--text-main);
  margin-bottom: 0.5rem;
}
.no-results p {
  font-size: 0.9rem;
  margin-bottom: 1.5rem;
}

/* ─── Transitions ─── */
.card-list-enter-active,
.card-list-leave-active {
  transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
}
.card-list-enter-from,
.card-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}
.card-list-leave-active {
  position: absolute;
  width: calc(50% - 0.75rem);
}

/* ─── Responsive Breakpoints ─── */
@media (max-width: 1100px) {
  .distribution-grid-layout {
    gap: 3rem;
  }
}

@media (max-width: 900px) {
  .distribution-grid-layout {
    grid-template-columns: 1fr;
    gap: 3rem;
  }
  .sidebar-col {
    max-width: 600px;
  }
  .con-img__ribbon-frame {
    height: 185px;
    clip-path: polygon(2% 0%, 100% 0%, 98% 100%, 0% 100%);
  }
  .con-img__ribbon-caption {
    left: 26px; bottom: 20px;
  }
}

@media (max-width: 768px) {
  .con-img__ribbon-frame { height: 165px; }
  .con-img__ribbon-lines { display: none; }
  .centers-grid {
    grid-template-columns: 1fr;
  }
  .card-list-leave-active {
    width: 100%;
  }
}

@media (max-width: 480px) {
  .con-img__ribbon-frame { height: 148px; }
  .con-img__ribbon-caption { left: 18px; bottom: 16px; }
  .center-card__header { padding: 1.25rem 1.25rem 0.5rem; }
  .center-card__body { padding: 0.75rem 1.25rem 1.25rem; }
  .center-card__footer { padding: 1rem 1.25rem; }
  .stats-panel {
    grid-template-columns: 1fr;
  }
}
</style>
