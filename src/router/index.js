import { createRouter, createWebHistory } from 'vue-router'
import EventListViewVue from '@/views/EventListView.vue'
import AboutViewVue from '@/views/AboutView.vue'
import EventDetailsViewVue from '@/views/EventDetailsView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'event-list',
      component: EventListViewVue
    },
    {
      path: '/event/:id',
      name: 'event-details',
      props: true,
      component: EventDetailsViewVue
    },
    {
      path: '/about',
      name: 'about',
      component: AboutViewVue
    }
  ]
})

export default router
