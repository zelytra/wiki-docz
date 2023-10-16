import React, { type ReactElement, useState } from 'react'
import { SecurityDisplay, SecurityType } from '@/layouts/SecurityDisplay'
import './assets/DocumentViewer.scss'
import { Button } from '@/libs/forms/Button'
import { Modal } from '@/libs/modal/Modal'
import { DocumentNote } from '@/features/document/DocumentNote'
import { useParams } from 'react-router-dom'
import { SideTabs } from '@/layouts/SideTabs'

export function DocumentViewer (): ReactElement {
  const [isModalOpen, setModalOpen] = useState(false)
  const { docId } = useParams()
  const [isMetadataTabOpen, setMetadataTabOpen] = useState(true)

  return (
        <section className={'document'} id={docId}>
            <div className={'doc-content'}>
                <div className={'document-header'}>
                    <SecurityDisplay type={[SecurityType.SECRET, SecurityType.TOP_SECRET]}/>
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
            </div>
            <SideTabs isDeploy={isMetadataTabOpen}>
                <p>oskour tabs</p>
            </SideTabs>
            <Modal open={isModalOpen} onUpdate={(value) => {
              setModalOpen(value)
            }}>
                <DocumentNote/>
            </Modal>
        </section>
  )
}
