// Define your routes in an array
import { Home } from '@/pages/Home'
import { PageNotFound } from '@/pages/PageNotFound'
import type React from 'react'
import { PublishedDocuments } from '@/pages/PublishedDocuments'
import { Test } from '@/pages/Test'

export interface RouteDefinition {
  path: string
  component: React.ComponentType
  isProtected: boolean
  name: string
}

const routes: RouteDefinition[] = [
  {
    path: '/',
    component: Home,
    isProtected: false,
    name: 'Home'
  }, {
    path: '/publish',
    component: PublishedDocuments,
    isProtected: false,
    name: 'Published'
  }, {
    path: '/test',
    component: Test,
    isProtected: false,
    name: 'Test'
  }, {
    path: '/*',
    component: PageNotFound,
    isProtected: false,
    name: ''
  }
]

export default routes
