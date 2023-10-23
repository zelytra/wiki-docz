import React, { type ReactElement, useState } from 'react'
import { SecurityDisplay, SecurityType } from '@/layouts/SecurityDisplay'
import './assets/DocumentViewer.scss'
import { Button } from '@/libs/forms/Button'
import { Modal } from '@/libs/modal/Modal'
import { DocumentNote } from '@/features/document/DocumentNote'
import { useParams } from 'react-router-dom'
import { SideTabs } from '@/layouts/SideTabs'
import { FoldContent } from '@/layouts/FoldContent'
import { Tiptap } from '@/libs/editor/Tiptap'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type WikiDocument } from '@/objects/Document'

export interface DocumentViewerProps {
  uuid?: string
}

export function DocumentViewer (props: DocumentViewerProps): ReactElement {
  const [isModalOpen, setModalOpen] = useState(false)
  const { docId } = useParams()
  const [isMetadataTabOpen, setMetadataTabOpen] = useState(true)
  const wikiDocument = useAxios({
    method: 'GET',
    url: 'doc/' + props.uuid,
    isProtected: false
  })

  return (
        <HTTPRenderWrapper state={wikiDocument}>
            {(doc: WikiDocument) => (
                <section className={'document'} id={docId}>
                    <div className={'doc-content'}>
                        <div className={'document-header'}>
                            <SecurityDisplay type={[SecurityType.AVOGADRO, SecurityType.HIGGS]}/>
                            <div className={'action-bar'}>
                                <h1>Document title</h1>
                                <div className={'action-buttons'}>
                                    <Button revert={true} name={'Edite'}/>
                                    <Button revert={true} name={'Submit'}/>
                                    <Button revert={true} name={'Details'} onClick={() => {
                                      setModalOpen(true)
                                    }}/>
                                    <Button revert={true} name={'...'} onClick={() => {
                                      setMetadataTabOpen(!isMetadataTabOpen)
                                    }}/>
                                </div>
                            </div>
                        </div>
                        <Tiptap/>
                    </div>
                    <SideTabs isDeploy={isMetadataTabOpen}>
                        <FoldContent title={<h3>Metadata</h3>}>
                            <div className={'metadata-value'}>
                                <label>Date</label>
                                <p>xxx</p>
                            </div>
                        </FoldContent>
                    </SideTabs>
                    <Modal open={isModalOpen} onUpdate={(value) => {
                      setModalOpen(value)
                    }}>
                        <DocumentNote/>
                    </Modal>
                </section>
            )}
        </HTTPRenderWrapper>

  )
}
