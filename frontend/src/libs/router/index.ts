import { Home } from '@/pages/Home'
import { PageNotFound } from '@/pages/PageNotFound'
import type React from 'react'
import { PublishedDocuments } from '@/pages/PublishedDocuments'
import { DocumentViewer } from '@/features/document/DocumentViewer'

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
    path: '/doc/:docId',
    component: DocumentViewer,
    isProtected: false,
    name: 'Doc'
  }, {
    path: '/*',
    component: PageNotFound,
    isProtected: false,
    name: ''
  }
]

export default routes
