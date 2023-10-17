import React, { type ReactElement, useState } from 'react'
import { SecurityDisplay, SecurityType } from '@/layouts/SecurityDisplay'
import './assets/DocumentViewer.scss'
import { Button } from '@/libs/forms/Button'
import { Modal } from '@/libs/modal/Modal'
import { DocumentNote } from '@/features/document/DocumentNote'
import { useParams } from 'react-router-dom'
import { SideTabs } from '@/layouts/SideTabs'
import { FoldContent } from '@/layouts/FoldContent'
import { CKEditor } from '@ckeditor/ckeditor5-react'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export function DocumentViewer (): ReactElement {
  const [isModalOpen, setModalOpen] = useState(false)
  const { docId } = useParams()
  const [isMetadataTabOpen, setMetadataTabOpen] = useState(true)

  return (
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
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Hello from CKEditor&nbsp;5!</p>"
                    onReady={editor => {
                      // You can store the "editor" and use when it is needed.
                      console.log('Editor is ready to use!', editor)
                    }}
                    onChange={(event, editor) => {
                      const data = editor.config.names()
                      console.log({ event, editor, data })
                    }}
                    onBlur={(event, editor) => {
                      console.log('Blur.', editor)
                    }}
                    onFocus={(event, editor) => {
                      console.log('Focus.', editor)
                    }}
                    config={{}}
                />
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
  )
}
