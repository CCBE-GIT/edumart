<template>
  <div id="app">
    <AppNavbar />
    <router-view v-slot="{ Component }">
      <transition name="page" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <AppFooter />
    <BackToTop />
  </div>
</template>

<script>
import AppNavbar from '@/components/layout/AppNavbar.vue'
import AppFooter from '@/components/layout/AppFooter.vue'
import BackToTop from '@/components/ui/BackToTop.vue'
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  name: 'App',
  components: { AppNavbar, AppFooter, BackToTop },
  mounted() {
    AOS.init({
      duration: 800,
      easing: 'ease-out-quart',
      once: true,
      offset: 60,
    })
  }
}
</script>

<style>
@import '@/assets/css/main.css';

.page-enter-active,
.page-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.page-enter-from {
  opacity: 0;
  transform: translateY(12px);
}
.page-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
```

---

### Step 2 — Verify Your Folder Structure

Make sure these files **all exist** at these exact paths inside your `src/` folder:
```
src/
├── App.vue                                    ← replaced above
├── main.js
├── assets/
│   └── css/
│       └── main.css                           ← must exist!
├── components/
│   ├── layout/
│   │   ├── AppNavbar.vue                      ← must exist!
│   │   └── AppFooter.vue                      ← must exist!
│   └── ui/
│       └── BackToTop.vue                      ← must exist!
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   └── ... (all other views)
└── router/
    └── index.js