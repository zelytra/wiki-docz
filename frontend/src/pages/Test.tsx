import React, { type ReactElement } from 'react'
import './assets/Test.scss'
import { DocumentViewer } from '@/features/document/DocumentViewer'

export function Test (): ReactElement {
  return (
      <section className={'test'}>
        <DocumentViewer uuid={'xxx'}/>
      </section>
  )
}
