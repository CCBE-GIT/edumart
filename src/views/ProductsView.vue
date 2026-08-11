<template>
  <main>
    <section class="page-hero">
      <div class="page-hero__bg"></div>
      <div class="page-hero__glow"></div>
      <div class="container page-hero__inner">
        <div data-aos="fade-up">
          <p class="section-label">What We Supply</p>
          <h1 class="page-hero__title">Our <em>Products</em></h1>
          <div class="hero-rule"></div>
          <p class="page-hero__sub">Curated educational materials sourced from trusted publishers across Sri Lanka</p>
        </div>
        <div class="page-hero__crumbs" data-aos="fade-up" data-aos-delay="200">
          <router-link to="/">Home</router-link>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
          Products
        </div>
      </div>
    </section>

    <section class="section-pad">
      <div class="container">

        <!-- ═══ IMAGE BANNER: Wide cinematic strip above product grid ═══ -->
        <div class="prod-img prod-img--strip" data-aos="fade-up">
          <div class="prod-img__strip-frame">
            <img
              src="https://ik.imagekit.io/kp5tixhur/Edumart/logistics4.jpg"
              alt="Educational materials supply"
            />
            <div class="prod-img__strip-overlay"></div>
            <div class="prod-img__strip-caption">
              <span class="prod-img__strip-eye">Trusted publications</span>
              <span class="prod-img__strip-title">Quality Materials<br><em>Delivered with Care</em></span>
            </div>
            <div class="prod-img__strip-stats">
              <div class="prod-img__strip-stat">
                <span class="prod-img__strip-stat-num">{{ products.length }}+</span>
                <span class="prod-img__strip-stat-lbl">Product<br>Titles</span>
              </div>
              <div class="prod-img__strip-stat-divider"></div>
              <div class="prod-img__strip-stat">
                <span class="prod-img__strip-stat-num">2+</span>
                <span class="prod-img__strip-stat-lbl">Publisher<br>Partners</span>
              </div>
            </div>
          </div>
          <div class="prod-img__strip-notch"></div>
          <div class="prod-img__strip-rule"></div>
        </div>

        <!-- Filter Tabs -->
        <div class="filter-bar" data-aos="fade-up">
          <button
            v-for="tab in tabs"
            :key="tab.key"
            class="filter-tab"
            :class="{ 'filter-tab--active': activeTab === tab.key }"
            @click="activeTab = tab.key"
          >
            <svg :viewBox="tab.vb" width="13" height="13" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" v-html="tab.svg"></svg>
            {{ tab.label }}
            <span class="filter-tab__count">{{ getCount(tab.key) }}</span>
          </button>
        </div>

        <!-- Product Cards Grid -->
        <div class="products-grid">
          <div
            v-for="(product, i) in filteredProducts"
            :key="product.isbn"
            class="product-card"
            data-aos="fade-up"
            :data-aos-delay="i * 40"
          >
            <!-- Book Cover Image -->
            <div class="product-card__img-wrap">
              <img
                v-if="product.image"
                :src="product.image"
                :alt="product.name"
                class="product-card__img"
              />
              <!-- Placeholder when no image yet -->
              <div v-else class="product-card__img-placeholder">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round">
                  <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
                  <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
                </svg>
              </div>
              <!-- Publisher badge overlay -->
              <div class="product-card__pub-badge" :class="getPublisherClass(product.publisher)">
                {{ product.publisherShort }}
              </div>
            </div>

            <!-- Card Body -->
            <div class="product-card__body">
            <span class="product-card__edition1"> Edition:</span>
              <span class="product-card__edition">{{ product.edition }}</span>
              <h3 class="product-card__name">{{ product.name }}</h3>
              <p class="product-card__publisher">{{ product.publisher }}</p>
              <div class="product-card__footer">
                <span class="product-card__isbn">ISBN: {{ product.isbn }}</span>
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
  name: 'ProductsView',
  data() {
    return {
      activeTab: 'all',
      tabs: [
        { key: 'all',       label: 'All Products',       vb: '0 0 24 24', svg: '<rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/>' },
        //{ key: 'cambridge', label: 'Cambridge Press',    vb: '0 0 24 24', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
        //{ key: 'sadeepa',   label: 'Sadeepa Publishers', vb: '0 0 24 24', svg: '<path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>' },
      ],
      products: [
        {
          name: "Kids Box New Generation British English – Pupil's Book Level 1",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573566', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Pupils%20Book%20Level1.jpg',
        },
        {
          name: "Kids Box New Generation British English – Pupil's Book Level 2",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573597', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Pupils%20Book%20Level%202%20remove.png', 
        },
        {
          name: "Kids Box New Generation British English – Pupil's Book Level 4",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573610', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Pupils%20Book%20Level%204.png',
        },
        {
          name: "Kids Box New Generation British English - Pupil's Book Level 6",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573634', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Kids%20Box%20New%20Generation%20Level%206.jpg',
        },
        {
          name: "Kids Box New Generation British English – Activity Book Level 1",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573764', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Activity%20Book%20Level%201.jpg',
        },
        {
          name: "Kids Box New Generation British English – Activity Book Level 2",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573757', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Activity%20Book%20Level%202.jpg',
        },
        {
          name: "Kids Box New Generation British English – Activity Book Level 4",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573733', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Activity%20Book%20Level%204.jpg',
        },
        {
          name: "Kids Box New Generation British English - Activity Book Level 6",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009573641', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Kids%20Box%20New%20Generation%20Level%206%20new.jpg',
        },
        {
          name: "Storyfun Student's Book 1 (with Online Activities & Home Fun Booklet 1)",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009796392', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Storyfun%20Students%20Book%201.jpg',
        },
        {
          name: "Storyfun Student's Book 2 (with Online Activities & Home Fun Booklet 2)",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009793520', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Storyfun%20Students%20Book%202.jpg',
        },
        {
          name: "Storyfun Student's Book 4 (with Online Activities & Home Fun Booklet 4)",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009793537', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Storyfun%20Students%20Book%204%20remove.png',
        },
        {
          name: "Storyfun Student's Book 6 (with Online Activities & Home Fun Booklet 6)",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009793544', edition: 'South Asian',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Storyfun%20Students%20Book%206.jpg',
        },
        {
          name: 'Interchange Fifth Edition Level Intro',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009214421', edition: '5th Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Interchange%20Fifth%20Edition%20Level%20Intro%20remove.png',
        },
        {
          name: "Super Safari Level 1 Pupil's Book",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514019', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%201%20Pupils%20Book.jpg',
        },
        {
          name: 'Super Safari Level 1 Activity Book',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514040', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%201%20Activity%20Book.jpg',
        },
        {
          name: "Super Safari Level 2 Pupil's Book",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514026', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%202%20Pupils%20Book.png',
        },
        {
          name: 'Super Safari Level 2 Activity Book',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514057', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%202%20Activity%20Book.jpg',
        },
        {
          name: "Super Safari Level 3 Pupil's Book",
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514033', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%203%20Pupils%20Book.jpg',
        },
        {
          name: 'Super Safari Level 3 Activity Book',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009514064', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Super%20Safari%20Level%203%20Activity%20Book.jpg',
        },
        {
          name: 'Complete Key for Schools 2nd Edition',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009842839', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Complete%20Key%20for%20Schools%202nd%20edition.jpg',
        },
        {
          name: 'Complete Preliminary Second Edition',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781009325431', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Complete%20Preliminary%202nd%20edition.jpg',
        },
        {
          name: 'Click Start 2 Computer Science for Schools',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9781108855631', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Click%20Start%202%20Computer%20Science%20for%20Schools.jpg',
        },
        /*{
          name: 'Phonics Reader 2',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9789553749239', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Phonics%20Reader%202.jpeg',
        },*/
        /*{
          name: 'Phonics Reader 3',
          publisher: 'Cambridge University Press', publisherShort: 'CUP',
          isbn: '9789553749246', edition: '1st Edition',
          image: 'https://ik.imagekit.io/kp5tixhur/Edumart/Edumart-Products/Phonics%20Reader%203.jpg',
        },*/
      ],
    }
  },
  computed: {
    filteredProducts() {
      if (this.activeTab === 'all')       return this.products
      //if (this.activeTab === 'cambridge') return this.products.filter(p => p.publisher === 'Cambridge University Press')
      //if (this.activeTab === 'sadeepa')   return this.products.filter(p => p.publisher.includes('Sadeepa'))
      return this.products
    },
  },
  methods: {
    getCount(key) {
      if (key === 'all')       return this.products.length
      //if (key === 'cambridge') return this.products.filter(p => p.publisher === 'Cambridge University Press').length
      //if (key === 'sadeepa')   return this.products.filter(p => p.publisher.includes('Sadeepa')).length
      return 0
    },
    getPublisherClass(publisher) {
      return publisher === 'Cambridge University Press'
        ? 'pub-badge--cambridge'
        : 'pub-badge--sadeepa'
    },
  },
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

/* ════════════════════════════════════════
   BANNER STRIP
   ════════════════════════════════════════ */
.prod-img--strip {
  position: relative;
  width: 100%;
  margin-bottom: 2.5rem;
  border-radius: 24px 24px 0 0;
  overflow: visible;
}
.prod-img__strip-frame {
  position: relative;
  width: 100%; height: 240px;
  border-radius: 24px 24px 0 0;
  overflow: hidden;
  box-shadow: 0 20px 50px rgba(10,22,40,.14);
}
.prod-img__strip-frame img {
  width: 100%; height: 100%;
  object-fit: cover; object-position: center 40%; display: block;
  transition: transform .7s cubic-bezier(.25,.46,.45,.94);
}
.prod-img--strip:hover .prod-img__strip-frame img { transform: scale(1.04); }
.prod-img__strip-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(100deg, rgba(10,22,40,.82) 0%, rgba(10,22,40,.4) 48%, rgba(27,111,191,.3) 100%);
}
.prod-img__strip-caption {
  position: absolute; bottom: 30px; left: 36px;
  display: flex; flex-direction: column; gap: .32rem; z-index: 2;
}
.prod-img__strip-eye {
  font-size: .56rem; font-weight: 700; letter-spacing: .24em;
  text-transform: uppercase; color: #2DB89A;
}
.prod-img__strip-title {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: clamp(1.2rem,2.8vw,1.8rem); font-weight: 300; color: #fff; line-height: 1.2;
}
.prod-img__strip-title em { font-style: italic; color: #2DB89A; }
.prod-img__strip-stats {
  position: absolute; bottom: 28px; right: 36px;
  display: flex; align-items: center; gap: 1.4rem; z-index: 2;
}
.prod-img__strip-stat { display: flex; flex-direction: column; gap: .22rem; text-align: right; }
.prod-img__strip-stat-num {
  font-family: var(--font-display,'Playfair Display',Georgia,serif);
  font-size: 2rem; font-weight: 700; color: #fff; line-height: 1;
}
.prod-img__strip-stat-lbl {
  font-size: .54rem; font-weight: 700; letter-spacing: .1em;
  text-transform: uppercase; color: rgba(255,255,255,.55); line-height: 1.45;
}
.prod-img__strip-stat-divider { width: 1px; height: 36px; background: rgba(255,255,255,.18); }
.prod-img__strip-notch {
  width: 120px; height: 28px;
  background: #fff;
  clip-path: polygon(12% 0%, 88% 0%, 100% 100%, 0% 100%);
  margin: 0 auto; margin-top: -2px;
  position: relative; z-index: 1;
}
.prod-img__strip-rule {
  width: 100%; height: 3px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A, #1B6FBF);
  margin-top: -28px; position: relative; z-index: 0;
}

/* ─── Filter Bar ─── */
.filter-bar {
  display: flex;
  gap: .75rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
}
.filter-tab {
  display: inline-flex;
  align-items: center;
  gap: .5rem;
  padding: .5rem 1.1rem;
  border-radius: 999px;
  border: 1.5px solid #E8EEF5;
  background: #fff;
  font-size: .72rem;
  font-weight: 700;
  letter-spacing: .06em;
  text-transform: uppercase;
  color: rgba(10,22,40,.5);
  cursor: pointer;
  transition: all .22s ease;
}
.filter-tab:hover { border-color: rgba(45,184,154,.35); color: #2DB89A; }
.filter-tab--active {
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  border-color: transparent;
  color: #fff;
}
.filter-tab__count {
  background: rgba(255,255,255,.25);
  border-radius: 999px;
  padding: .1rem .5rem;
  font-size: .64rem;
}
.filter-tab:not(.filter-tab--active) .filter-tab__count {
  background: rgba(45,184,154,.1);
  color: #2DB89A;
}

/* ════════════════════════════════════════
   PRODUCT CARDS GRID
   ════════════════════════════════════════ */
.products-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.product-card {
  border-radius: 16px;
  border: 1px solid #E8EEF5;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 2px 10px rgba(10,22,40,.06);
  transition: all .3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
}
.product-card::after {
  content: '';
  position: absolute; bottom: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  transform: scaleX(0); transform-origin: left;
  transition: transform .3s ease;
}
.product-card:hover {
  transform: translateY(-6px);
  box-shadow: 0 16px 40px rgba(10,22,40,.1);
  border-color: rgba(45,184,154,.2);
}
.product-card:hover::after { transform: scaleX(1); }

/* Image area */
.product-card__img-wrap {
  position: relative;
  width: 100%;
  aspect-ratio: 3 / 4;
  background: #F4F6F9;
  overflow: hidden;
  flex-shrink: 0;
}
.product-card__img {
  width: 100%; height: 100%;
  object-fit: cover; display: block;
  transition: transform .4s ease;
}
.product-card:hover .product-card__img { transform: scale(1.04); }

/* Placeholder when no image */
.product-card__img-placeholder {
  width: 100%; height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, #EEF2F8 0%, #E8EEF5 100%);
  color: rgba(10,22,40,.2);
}

/* Publisher badge on image */
.product-card__pub-badge {
  position: absolute;
  top: 10px; left: 10px;
  padding: .28rem .75rem;
  border-radius: 999px;
  font-size: .58rem;
  font-weight: 700;
  letter-spacing: .07em;
  text-transform: uppercase;
}
.pub-badge--cambridge {
  background: rgba(27,111,191,.88);
  color: #fff;
}
.pub-badge--sadeepa {
  background: rgba(45,184,154,.88);
  color: #fff;
}

/* Card body */
.product-card__body {
  padding: 1.1rem 1.2rem 1.4rem;
  display: flex;
  flex-direction: column;
  flex: 1;
}
.product-card__edition {
  display: inline-block;
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #2DB89A;
  margin-bottom: .5rem;
}
.product-card__edition1 {
  display: inline-block;
  font-size: .6rem;
  font-weight: 700;
  letter-spacing: .1em;
  text-transform: uppercase;
  color: #575959;
  margin-bottom: .5rem;
}
.product-card__name {
  font-family: 'Inter', sans-serif;
  font-size: .95rem;
  font-weight: 400;
  color: #0B1929;
  line-height: 1.45;
  margin-bottom: .5rem;
  flex: 1;
}
.product-card__publisher {
  font-size: .72rem;
  color: rgba(10,22,40,.4);
  margin-bottom: .9rem;
  line-height: 1.4;
}
.product-card__footer {
  border-top: 1px solid #F0F4F8;
  padding-top: .75rem;
}
.product-card__isbn {
  font-size: .68rem;
  color: rgb(10, 22, 40);
  font-family: 'Courier New', monospace;
  letter-spacing: .02em;
}

/* ─── Responsive ─── */
@media (max-width: 1024px) {
  .products-grid { grid-template-columns: repeat(3, 1fr); }
}
@media (max-width: 768px) {
  .page-hero { padding: 100px 0 60px; }
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 1.2rem; }
  .prod-img__strip-frame { height: 200px; }
  .prod-img__strip-caption { left: 22px; bottom: 22px; }
  .prod-img__strip-stats { right: 20px; bottom: 22px; gap: 1rem; }
  .prod-img__strip-stat-num { font-size: 1.5rem; }
}
@media (max-width: 480px) {
  .products-grid { grid-template-columns: repeat(2, 1fr); gap: 1rem; }
  .prod-img__strip-frame { height: 175px; }
  .prod-img__strip-stats { display: none; }
  .prod-img__strip-caption { left: 18px; bottom: 18px; }
  .filter-tab { font-size: .66rem; padding: .45rem .9rem; }
  .product-card__body { padding: .9rem 1rem 1.1rem; }
  .product-card__name { font-size: .88rem; }
}
</style>