import React, { type ReactElement } from 'react'
import { Table } from '@/layouts/table/Table'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type WikiDocument } from '@/objects/Document'
import './assets/PublishedDocuments.scss'
import { ReactSVG } from 'react-svg'
import research from '@/assets/icons/research.svg'
import { Button } from '@/libs/forms/Button'

export function PublishedDocuments (): ReactElement {
  const publishedDocument = useAxios({
    method: 'GET',
    url: 'docs/published/0/15',
    isProtected: false
  })
  return (
        <section className={'doc-publish-wrapper'}>
            <div className={'research-bar'}>
                <div className={'input-wrapper'}>
                    <ReactSVG src={research}/>
                    <input type={'search'} className={'research'} placeholder={'Research value...'}/>
                </div>
                <Button name={'Create new document'}/>
            </div>
            <HTTPRenderWrapper state={publishedDocument}>
                {(docs: WikiDocument[]) => (
                    <Table columns={['Title', 'Author', 'Date', 'Sender', 'Mentions', 'Classifications', 'Themes']}>
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
                )}
            </HTTPRenderWrapper>
        </section>
  )
}
