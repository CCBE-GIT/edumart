import { createRouter, createWebHistory } from 'vue-router'
import HomeView       from '@/views/HomeView.vue'
import AboutView      from '@/views/AboutView.vue'
import ServicesView   from '@/views/ServicesView.vue'
import IndustriesView from '@/views/IndustriesView.vue'
import ClientsView    from '@/views/ClientsView.vue'
import ExpansionView  from '@/views/ExpansionView.vue'
import InvestorsView  from '@/views/InvestorsView.vue'
import ContactView    from '@/views/ContactView.vue'
import ProductsView   from '@/views/ProductsView.vue'
import DistributionView from '@/views/DistributionView.vue'

const BASE_DESC = 'Edumart (Pvt) Ltd is Sri Lanka\'s trusted integrated supply chain solutions provider — specialising in procurement, logistics, warehousing, cargo transportation, and supply chain consultancy for educational institutions and corporates.'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Edumart (Pvt) Ltd — Integrated Supply Chain Solutions | Sri Lanka',
      description: BASE_DESC
    }
  },
  {
    path: '/about',
    name: 'About',
    component: AboutView,
    meta: {
      title: 'About Us — Edumart (Pvt) Ltd',
      description: 'Learn about Edumart (Pvt) Ltd — our vision, mission, and journey as Sri Lanka\'s integrated supply chain and logistics solutions provider since 2022.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      title: 'Our Services — Edumart (Pvt) Ltd',
      description: 'Explore Edumart\'s full range of services: procurement & purchasing, logistics handling, warehousing & inventory, cargo transportation, and supply chain consultancy across Sri Lanka.'
    }
  },
  {
    path: '/industries',
    name: 'Industries',
    component: IndustriesView,
    meta: {
      title: 'Industries We Serve — Edumart (Pvt) Ltd',
      description: 'Edumart serves educational institutions, corporate organisations, and more across Sri Lanka with tailored supply chain and logistics solutions.'
    }
  },
  {
    path: '/clients',
    name: 'Clients',
    component: ClientsView,
    meta: {
      title: 'Our Clients — Edumart (Pvt) Ltd',
      description: 'Trusted by leading educational institutions in Sri Lanka. Explore Edumart\'s primary client partnerships built on reliability and performance.'
    }
  },
  {
    path: '/expansion',
    name: 'Expansion',
    component: ExpansionView,
    meta: {
      title: 'Future Growth & Expansion — Edumart (Pvt) Ltd',
      description: 'Discover Edumart\'s future growth strategy and regional expansion plans as Sri Lanka\'s leading supply chain solutions provider.'
    }
  },
  {
    path: '/investors',
    name: 'Investors',
    component: InvestorsView,
    meta: {
      title: 'Investor Relations — Edumart (Pvt) Ltd',
      description: 'Investor relations information for Edumart (Pvt) Ltd — a growing integrated supply chain and logistics company based in Sri Lanka.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact Us — Edumart (Pvt) Ltd',
      description: 'Get in touch with Edumart (Pvt) Ltd for procurement, logistics, warehousing, and supply chain consultancy services across Sri Lanka.'
    }
  },
  {
    path: '/products',
    name: 'Products',
    component: ProductsView,
    meta: {
      title: 'Products — Edumart (Pvt) Ltd',
      description: 'Browse products and solutions offered by Edumart (Pvt) Ltd for institutional and corporate procurement across Sri Lanka.'
    }
  },
  {
    path: '/distribution-centers',
    name: 'DistributionCenters',
    component: DistributionView,
    meta: {
      title: 'Distribution Centers — Edumart (Pvt) Ltd',
      description: 'Explore Edumart\'s distribution center network across Sri Lanka, enabling efficient warehousing and last-mile cargo delivery for institutions.'
    }
  },
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

// Update page title, meta description, and canonical URL on every navigation
router.afterEach((to) => {
  // Title
  document.title = to.meta.title || 'Edumart (Pvt) Ltd'

  // Meta description
  const desc = to.meta.description || 'Edumart (Pvt) Ltd — Integrated Supply Chain Solutions in Sri Lanka.'
  let metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) {
    metaDesc.setAttribute('content', desc)
  } else {
    metaDesc = document.createElement('meta')
    metaDesc.setAttribute('name', 'description')
    metaDesc.setAttribute('content', desc)
    document.head.appendChild(metaDesc)
  }

  // Open Graph title & description
  const ogTitle = document.querySelector('meta[property="og:title"]')
  if (ogTitle) ogTitle.setAttribute('content', to.meta.title || 'Edumart (Pvt) Ltd')
  const ogDesc = document.querySelector('meta[property="og:description"]')
  if (ogDesc) ogDesc.setAttribute('content', desc)

  // Canonical URL
  const canonical = 'https://www.edumart.lk' + to.path
  let linkCanonical = document.querySelector('link[rel="canonical"]')
  if (linkCanonical) {
    linkCanonical.setAttribute('href', canonical)
  } else {
    linkCanonical = document.createElement('link')
    linkCanonical.setAttribute('rel', 'canonical')
    linkCanonical.setAttribute('href', canonical)
    document.head.appendChild(linkCanonical)
  }

  // og:url
  const ogUrl = document.querySelector('meta[property="og:url"]')
  if (ogUrl) ogUrl.setAttribute('content', canonical)
})

export default router