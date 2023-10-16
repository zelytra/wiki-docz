import React, { type ReactElement } from 'react'
import document from '@/assets/icons/document.svg'
import { type WikiDocument } from '@/objects/Document'
import './assets/DocumentCard.scss'

export interface DocumentCardProp {
  document: WikiDocument
}

export function DocumentCard (props: DocumentCardProp): ReactElement {
  return (
        <div className={'document-card'}>
            <div className={'preview-wrapper'} style={{ backgroundImage: 'url(' + document + ')' }}/>
            <div className={'details-wrapper'}>
                <div className={'title'}>
                    <h2>{props.document.title}</h2>
                    <p className={'date'}>{props.document.date.toString()}</p>
                </div>
                <p>{props.document.themes}</p>

            </div>
        </div>
  )
}
