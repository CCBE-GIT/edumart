import { createRouter, createWebHistory } from 'vue-router'
import HomeView       from '@/views/HomeView.vue'
import AboutView      from '@/views/AboutView.vue'
import ServicesView   from '@/views/ServicesView.vue'
import IndustriesView from '@/views/IndustriesView.vue'
import ClientsView    from '@/views/ClientsView.vue'
import ExpansionView  from '@/views/ExpansionView.vue'
import InvestorsView  from '@/views/InvestorsView.vue'
import ContactView    from '@/views/ContactView.vue'

const routes = [
  { path: '/',           name: 'Home',       component: HomeView,       meta: { title: 'Edumart (Pvt) Ltd — Integrated Supply Chain Solutions' } },
  { path: '/about',      name: 'About',      component: AboutView,      meta: { title: 'About Us — Edumart (Pvt) Ltd' } },
  { path: '/services',   name: 'Services',   component: ServicesView,   meta: { title: 'Our Services — Edumart (Pvt) Ltd' } },
  { path: '/industries', name: 'Industries', component: IndustriesView, meta: { title: 'Industries We Serve — Edumart (Pvt) Ltd' } },
  { path: '/clients',    name: 'Clients',    component: ClientsView,    meta: { title: 'Our Clients — Edumart (Pvt) Ltd' } },
  { path: '/expansion',  name: 'Expansion',  component: ExpansionView,  meta: { title: 'Future Growth — Edumart (Pvt) Ltd' } },
  { path: '/investors',  name: 'Investors',  component: InvestorsView,  meta: { title: 'Investor Relations — Edumart (Pvt) Ltd' } },
  { path: '/contact',    name: 'Contact',    component: ContactView,    meta: { title: 'Contact Us — Edumart (Pvt) Ltd' } },
  // 404 catch-all
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

// Update page title on navigation
router.afterEach((to) => {
  document.title = to.meta.title || 'Edumart (Pvt) Ltd'
})

export default router