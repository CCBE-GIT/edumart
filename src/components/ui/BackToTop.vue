<template>
  <transition name="fade-up">
    <button v-if="visible" class="back-to-top" @click="scrollToTop" aria-label="Back to top">
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
        <polyline points="18 15 12 9 6 15"></polyline>
      </svg>
    </button>
  </transition>
</template>

<script>
export default {
  name: 'BackToTop',
  data() {
    return { visible: false }
  },
  mounted() {
    window.addEventListener('scroll', this.onScroll, { passive: true })
  },
  beforeUnmount() {
    window.removeEventListener('scroll', this.onScroll)
  },
  methods: {
    onScroll() {
      this.visible = window.scrollY > 400
    },
    scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }
  }
}
</script>

<style scoped>
.back-to-top {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 900;
  width: 46px;
  height: 46px;
  background: var(--gold);
  color: var(--navy);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  display: grid;
  place-items: center;
  box-shadow: 0 4px 16px rgba(201,168,76,0.4);
  transition: all var(--transition);
}
.back-to-top:hover {
  transform: translateY(-3px);
  background: var(--gold-light);
  box-shadow: 0 8px 24px rgba(201,168,76,0.5);
}
.fade-up-enter-active,
.fade-up-leave-active {
  transition: all 0.3s ease;
}
.fade-up-enter-from,
.fade-up-leave-to {
  opacity: 0;
  transform: translateY(12px);
}
</style>