import { type User } from '@/objects/User'

export interface WikiDocument {
  uuid: string
  title: string
  date: Date
  authors: User[]
  classifications: string[]
  mentions: string[]
  themes: string[]
  coAuthors: User[]
  sender: User[]
}
