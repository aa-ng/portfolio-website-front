import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/pages/Home'
import Projects from '@/components/pages/Projects'
import Notes from '@/components/pages/projects/webdev/Notes'
import Ignite from '@/components/pages/projects/Ignite'
import Settings from '@/components/settings/AppearenceSettings.vue'
import Admin from '@/components/pages/Admin.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/settings',
      name: 'Settings',
      component: Settings
    },
    {
      path: '/projects',
      name: 'Projects',
      component: Projects
    },
    {
      path: '/projects/webdev/notes',
      name: 'Note taking web app',
      component: Notes
    },
    {
      path: '/projects/ignite',
      name: 'Project Ignite',
      component: Ignite
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ],
  mode: 'history'
})
