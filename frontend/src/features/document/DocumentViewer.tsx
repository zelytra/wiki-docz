import React, { type ReactElement, useState } from 'react'
import { SecurityDisplay, SecurityType } from '@/layouts/SecurityDisplay'
import './assets/DocumentViewer.scss'
import { Button } from '@/libs/forms/Button'
import { Modal } from '@/libs/modal/Modal'
import { DocumentNote } from '@/features/document/DocumentNote'

export function DocumentViewer (): ReactElement {
  const [isModalOpen, setModalOpen] = useState(false)

  return (
        <section className={'document'}>
            <div className={'document-header'}>
                <SecurityDisplay type={[SecurityType.SECRET, SecurityType.TOP_SECRET]}/>
                <div className={'action-bar'}>
                    <h1>Document title</h1>
                    <div className={'action-buttons'}>
                        <Button name={'Edite'}/>
                        <Button name={'Submit'}/>
                        <Button name={'Details'} onClick={() => {
                          setModalOpen(true)
                        }}/>
                    </div>
                </div>
            </div>
            <Modal open={isModalOpen} onUpdate={(value) => {
              setModalOpen(value)
            }}>
                <DocumentNote/>
            </Modal>
        </section>
  )
}
