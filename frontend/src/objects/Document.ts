import { type User } from '@/objects/User'

export interface WikiDocument {
  uuid: string
  data: string
  metadata: DocumentMetadata
}

export interface DocumentMetadata {
  title: string
  date: Date
  authors: User[]
  classifications: string[]
  mentions: string[]
  themes: string[]
  coAuthors: User[]
  sender: User[]
}
