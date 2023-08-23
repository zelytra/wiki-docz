// Define your routes in an array
import { Home } from '@/pages/Home'
import { PageNotFound } from '@/pages/PageNotFound'

const routes = [
  {
    path: '/',
    component: Home,
    isProtected: false
  }, {
    path: '/test',
    component: Home,
    isProtected: false
  }, {
    path: '/*',
    component: PageNotFound,
    isProtected: false
  }
]

export default routes
