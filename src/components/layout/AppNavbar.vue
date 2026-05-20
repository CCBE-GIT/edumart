<template>
  <header :class="['navbar', { 'navbar--scrolled': scrolled, 'navbar--open': menuOpen }]">
    <div class="container navbar__inner">

      <!-- Logo -->
      <router-link to="/" class="navbar__logo" @click="closeMenu">
        <div class="navbar__logo-wrap">
          <img
            src="https://ik.imagekit.io/kp5tixhur/Edumart/logo"
            alt="Edumart"
            class="navbar__logo-img"
          />
          <span class="navbar__logo-sub">Edumart (Pvt) Ltd</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="navbar__links hide-mobile">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="nav-link"
          active-class="nav-link--active"
        >{{ item.label }}</router-link>
      </nav>

      <!-- CTA + Burger -->
      <div class="navbar__actions">
        <router-link to="/contact" class="btn-cta hide-mobile">
          Get In Touch
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </router-link>
        <button class="burger" :class="{ 'burger--open': menuOpen }" @click="toggleMenu" aria-label="Toggle menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="menuOpen" class="mobile-nav">
        <router-link
          v-for="item in navItems"
          :key="item.path"
          :to="item.path"
          class="mobile-nav__link"
          @click="closeMenu"
        >
          {{ item.label }}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><polyline points="9 18 15 12 9 6"/></svg>
        </router-link>
        <router-link to="/contact" class="mobile-cta" @click="closeMenu">
          Get In Touch →
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script>
export default {
  name: 'AppNavbar',
  data() {
    return {
      scrolled: false,
      menuOpen: false,
      navItems: [
        { label: 'Home',       path: '/' },
        { label: 'About',      path: '/about' },
        { label: 'Services',   path: '/services' },
        { label: 'Industries', path: '/industries' },
        { label: 'Clients',    path: '/clients' },
        { label: 'Growth',     path: '/expansion' },
        { label: 'Investors',  path: '/investors' },
      ]
    }
  },
  mounted()      { window.addEventListener('scroll', this.onScroll, { passive: true }) },
  beforeUnmount(){ window.removeEventListener('scroll', this.onScroll) },
  methods: {
    onScroll()   { this.scrolled = window.scrollY > 60 },
    toggleMenu() { this.menuOpen = !this.menuOpen; document.body.style.overflow = this.menuOpen ? 'hidden' : '' },
    closeMenu()  { this.menuOpen = false; document.body.style.overflow = '' }
  }
}
</script>

<style scoped>
/* ─── Heights ─── */
:root {
  --nav-height:    54px;
  --nav-height-sm: 48px;
}

/* ─── Base ─── */
.navbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 1000;
  height: var(--nav-height);
  display: flex;
  align-items: center;
  transition: background 0.4s ease, height 0.3s ease, box-shadow 0.4s ease, backdrop-filter 0.4s ease;
  background: white;
  padding-top: 20px;
  padding-bottom: 20px;
}

/* ─── Scrolled ─── */
.navbar--scrolled {
  height: var(--nav-height-sm);
  /* background: rgba(11, 25, 41, 0.88); */
  backdrop-filter: blur(20px) saturate(1.8);
  -webkit-backdrop-filter: blur(20px) saturate(1.8);
  box-shadow: 0 1px 0 rgba(45,184,154,0.2), 0 8px 32px rgba(0,0,0,0.3);
}
/* Blue → Teal gradient shimmer line */
.navbar--scrolled::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0; height: 2px;
  background: linear-gradient(90deg, transparent, #1B6FBF 30%, #2DB89A 60%, transparent);
}

/* ─── Layout ─── */
.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1.5rem;
  width: 100%;
}

/* ─── Logo ─── */
.navbar__logo {
  display: flex;
  align-items: center;
  text-decoration: none;
  flex-shrink: 0;
}

.navbar__logo-wrap {
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.navbar__logo-img {
  height: 36px;
  width: auto;
  object-fit: contain;
  display: block;
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.navbar__logo-sub {
  font-size: 0.6rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: rgba(10, 22, 40, 0.45);
  line-height: 1.5;
  padding-left: 2px;
}

.navbar__logo:hover .navbar__logo-img {
  opacity: 0.85;
  transform: scale(1.02);
}

/* ─── Nav Links ─── */
.navbar__links {
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: center;
  gap: 0;
}

.nav-link {
  padding: 0.4rem 1.5rem;
  font-size: 0.7rem;
  font-weight: 600;
  letter-spacing: 0.08em;
  color: black;
  border-radius: 5px;
  transition: all 0.2s;
  text-transform: uppercase;
  text-decoration: none;
  position: relative;
  white-space: nowrap;
}
.nav-link:hover {
  color: #2DB89A;
  background: rgba(255,255,255,0.07);
}
.nav-link--active {
  color: #2DB89A;
  background: rgba(45,184,154,0.1);
}
.nav-link--active::after {
  content: '';
  position: absolute;
  bottom: 1px; left: 50%;
  transform: translateX(-50%);
  width: 14px; height: 2px;
  background: linear-gradient(90deg, #1B6FBF, #2DB89A);
  border-radius: 2px;
}

/* ─── CTA Button ─── */
.navbar__actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-shrink: 0;
}

.btn-cta {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem 1.1rem;
  font-size: 0.69rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  color: #ffffff;
  background: linear-gradient(135deg, #1B6FBF 0%, #2DB89A 100%);
  border-radius: 6px;
  text-decoration: none;
  transition: all 0.25s ease;
  white-space: nowrap;
}
.btn-cta:hover {
  background: linear-gradient(135deg, #155A9E 0%, #229D83 100%);
  transform: translateY(-1px);
  box-shadow: 0 6px 20px rgba(45,184,154,0.3);
}
.btn-cta:hover svg { transform: translateX(2px); }
.btn-cta svg { transition: transform 0.2s; }

/* ─── Burger ─── */
.burger {
  display: none;
  flex-direction: column;
  gap: 4.5px;
  background: none;
  border: 1px solid rgba(255,255,255,0.18);
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  transition: border-color 0.2s;
}
.burger:hover { border-color: rgba(45,184,154,0.6); }

.burger span {
  display: block; width: 18px; height: 1.5px;
  background: black; border-radius: 2px;
  transition: all 0.3s cubic-bezier(0.4,0,0.2,1);
  transform-origin: center;
}
.burger--open span:nth-child(1) { transform: rotate(45deg)  translate(4.5px, 4.5px); }
.burger--open span:nth-child(2) { opacity: 0; transform: scaleX(0); }
.burger--open span:nth-child(3) { transform: rotate(-45deg) translate(4.5px,-4.5px); }

/* ─── Mobile Menu ─── */
.mobile-nav {
  position: absolute;
  top: 100%; left: 0; right: 0;
  background: rgba(11,25,41,0.97);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  border-top: 2px solid transparent;
  background-clip: padding-box;
  border-image: linear-gradient(90deg, #1B6FBF, #2DB89A) 1;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  padding: 1.2rem 1.5rem 1.8rem;
  display: flex;
  flex-direction: column;
  gap: 0.1rem;
}

.mobile-nav__link {
  display: flex; align-items: center; justify-content: space-between;
  font-size: 0.74rem; font-weight: 600;
  color: rgba(255,255,255,0.55);
  padding: 0.8rem 0.4rem;
  letter-spacing: 0.1em; text-transform: uppercase;
  text-decoration: none;
  border-bottom: 1px solid rgba(255,255,255,0.05);
  transition: color 0.2s;
}
.mobile-nav__link svg { opacity: 0.3; transition: opacity 0.2s, transform 0.2s; }
.mobile-nav__link:hover { color: #2DB89A; }
.mobile-nav__link:hover svg { opacity: 0.7; transform: translateX(3px); }

.mobile-cta {
  display: block; margin-top: 1.1rem; padding: 0.82rem;
  background: linear-gradient(135deg, #1B6FBF 0%, #2DB89A 100%);
  color: #fff; text-align: center;
  font-size: 0.74rem; font-weight: 700;
  letter-spacing: 0.1em; text-transform: uppercase;
  text-decoration: none; border-radius: 8px;
  transition: opacity 0.2s;
}
.mobile-cta:hover { opacity: 0.9; }

/* ─── Transitions ─── */
.mobile-menu-enter-active { transition: all 0.35s cubic-bezier(0.16,1,0.3,1); }
.mobile-menu-leave-active  { transition: all 0.2s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to      { opacity: 0; transform: translateY(-12px); }

/* ─── Breakpoints ─── */
@media (max-width: 1100px) { .nav-link { font-size: 0.62rem; padding: 0.38rem 0.58rem; } }
@media (max-width: 940px)  { .btn-cta  { display: none; } }
@media (max-width: 768px)  {
  .burger { display: flex; }
  .navbar__links { display: none; }
  .navbar { height: 54px; }
  .navbar--scrolled { height: 48px; }
}
@media (max-width: 380px) {
  .navbar__logo-img { height: 28px; }
}

.hide-mobile { display: flex; }
@media (max-width: 768px) { .hide-mobile { display: none !important; } }
</style>