import React, { type ReactElement, useEffect, useState } from 'react'
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
import { ReactSVG } from 'react-svg'
import icon from '@/assets/icons/home.svg'
import { useNotifications } from '@/libs/notification/NotificationProvider'
import { NotificationTemplate } from '@/libs/notification/NotificationHandler'

export function DocumentViewer (): ReactElement {
  const [isModalOpen, setModalOpen] = useState(false)
  const { docId } = useParams()
  const [isMetadataTabOpen, setMetadataTabOpen] = useState(true)
  const wikiDocument = useAxios({
    method: 'GET',
    url: 'doc/' + docId,
    isProtected: false
  })

  const notification = useNotifications()

  useEffect(() => {
    setInterval(() => {
      notification.sendNotification({
        content: 'oskour',
        style: NotificationTemplate.INFO,
        icon: <ReactSVG src={icon}/>
      })
      notification.sendNotification({
        content: 'oskour',
        style: NotificationTemplate.WARNING,
        icon: <ReactSVG src={icon}/>
      })
      notification.sendNotification({
        content: 'oskour',
        style: NotificationTemplate.ERROR,
        icon: <ReactSVG src={icon}/>
      })
      notification.sendNotification({
        content: 'oskour',
        style: NotificationTemplate.SUCCESS,
        icon: <ReactSVG src={icon}/>
      })
    }, 6000)
  }, [])
  return (
        <HTTPRenderWrapper state={wikiDocument}>
            {(doc: WikiDocument) => (
                <section className={'document'} id={docId}>
                    <div className={'doc-content'}>
                        <div className={'document-header'}>
                            <div className={'security-container'}>
                                {doc.metadata.classifications.map((content) => (
                                    <SecurityDisplay key={content} type={SecurityType.AVOGADRO} content={content}/>
                                ))}
                                {doc.metadata.mentions.map((content) => (
                                    <SecurityDisplay key={content} type={SecurityType.HIGGS} content={content}/>
                                ))}
                                {doc.metadata.themes.map((content) => (
                                    <SecurityDisplay key={content} type={SecurityType.HIGGS} content={content}/>
                                ))}
                            </div>
                            <div className={'action-bar'}>
                                <h1>{doc.metadata.title}</h1>
                                <div className={'action-buttons'}>
                                    <Button revert={true} name={'Edite'} onClick={() => {
                                      notification.sendNotification({
                                        content: 'oskour',
                                        style: NotificationTemplate.INFO,
                                        icon: <ReactSVG src={icon}/>
                                      })
                                    }
                                    }/>
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
                        <Tiptap data={doc.data}/>
                    </div>
                    <SideTabs isDeploy={isMetadataTabOpen}>
                        <FoldContent title={<h3>Editors</h3>}>
                            <div className={'metadata-value'}>
                                <label>Author</label>
                                <div className={'user-wrapper'}>
                                    <img className={'user-icon'} src={doc.metadata.author.avatar}/>
                                    <p>{doc.metadata.author.name}</p>
                                </div>
                            </div>
                            <div className={'metadata-value'}>
                                <label>Co-Editor</label>
                                {doc.metadata.coAuthors.map((author) => (
                                    <div key={author.name} className={'user-wrapper'}>
                                        <img className={'user-icon'} src={author.avatar}/>
                                        <p>{author.name}</p>
                                    </div>
                                ))}
                            </div>
                        </FoldContent>
                        <FoldContent title={<h3>Metadata</h3>}>
                            <div className={'metadata-value'}>
                                <label>Avogadro</label>
                                <p>{doc.metadata.classifications.join(',')}</p>
                            </div>
                            <div className={'metadata-value'}>
                                <label>Higgs</label>
                                <p>{doc.metadata.mentions.join(', ')}</p>
                            </div>
                            <div className={'metadata-value'}>
                                <label>Theme</label>
                                <p>{doc.metadata.themes.join(', ')}</p>
                            </div>
                            <div className={'metadata-value'}>
                                <label>Requester</label>
                                <div key={doc.metadata.sender.name} className={'user-wrapper'}>
                                    <img className={'user-icon'} src={doc.metadata.sender.avatar}/>
                                    <p>{doc.metadata.sender.name}</p>
                                </div>
                            </div>
                            <div className={'metadata-value'}>
                                <label>Last modification</label>
                                <p>{doc.metadata.date.toString()}</p>
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
