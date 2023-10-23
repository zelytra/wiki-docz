import React, { type ReactElement } from 'react'
import document from '@/assets/icons/document.svg'
import { type WikiDocument } from '@/objects/Document'
import './assets/DocumentCard.scss'

export interface DocumentCardProp {
  document: WikiDocument
  onClick?: () => void
}

export function DocumentCard (props: DocumentCardProp): ReactElement {
  return (
        <div className={'document-card'} onClick={props.onClick}>
            <div className={'preview-wrapper'} style={{ backgroundImage: 'url(' + document + ')' }}/>
            <div className={'details-wrapper'}>
                <div className={'title'}>
                    <h2>{props.document.metadata.title}</h2>
                    <p className={'date'}>{props.document.metadata.date.toString()}</p>
                </div>
                <p>{props.document.metadata.themes}</p>

            </div>
        </div>
  )
}
