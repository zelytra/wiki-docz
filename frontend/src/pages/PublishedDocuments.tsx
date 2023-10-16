import React, { type ReactElement, useState } from 'react'
import { Table } from '@/layouts/table/Table'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type WikiDocument } from '@/objects/Document'
import './assets/PublishedDocuments.scss'
import { ReactSVG } from 'react-svg'
import research from '@/assets/icons/research.svg'
import document from '@/assets/icons/document.svg'
import list from '@/assets/icons/list.svg'
import { Button } from '@/libs/forms/Button'
import { ButtonGroup } from '@/libs/forms/ButtonGroup'
import { DocumentCard } from '@/features/document/DocumentCard'

export function PublishedDocuments (): ReactElement {
  const [isCardMod, setIsCardMod] = useState(true)
  const publishedDocument = useAxios({
    method: 'GET',
    url: 'docs/published/0/50',
    isProtected: false
  })

  function tableDisplay (id: number) {
    switch (id) {
      case 0:
        setIsCardMod(false)
        break
      case 1:
        setIsCardMod(true)
        break
    }
  }

  return (
        <section className={'doc-publish-wrapper'}>
            <div className={'research-bar'}>
                <div className={'input-wrapper'}>
                    <ReactSVG src={research}/>
                    <input type={'search'} className={'research'} placeholder={'Research value...'}/>
                </div>
                <Button name={'Create new document'}/>
                <ButtonGroup onAction={(index: number) => {
                  tableDisplay(index)
                }}>
                    <ReactSVG src={document}/>
                    <ReactSVG src={list}/>
                </ButtonGroup>
            </div>
            <HTTPRenderWrapper state={publishedDocument}>
                {(docs: WikiDocument[]) => (
                  (isCardMod
                    ? <Table
                                columns={['Title', 'Author', 'Date', 'Sender', 'Mentions', 'Classifications', 'Themes']}>
                                {docs.map((doc, index) => (
                                    <tr className={'body-table'} key={index}>
                                        <td>{doc.title}</td>
                                        <td>{doc.authors.join(', ')}</td>
                                        <td>{doc.date.toString()}</td>
                                        <td>{doc.sender}</td>
                                        <td>{doc.mentions.join(', ')}</td>
                                        <td>{doc.classifications.join(', ')}</td>
                                        <td>{doc.themes.join(', ')}</td>
                                    </tr>
                                ))}
                            </Table>
                    : <div className={'documents-wrapper'}>
                                {docs.map((doc, index) => (
                                    <DocumentCard document={doc} key={index}/>
                                ))}
                            </div>
                  )

                )}
            </HTTPRenderWrapper>
        </section>
  )
}
