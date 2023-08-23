import React, { type ReactElement } from 'react'
import { Table } from '@/layouts/table/Table'
import useAxios from '@/libs/http/HTTPAxios'
import { HTTPRenderWrapper } from '@/libs/http/HTTPRenderWrapper'
import { type WikiDocument } from '@/objects/Document'

export function PublishedDocuments (): ReactElement {
  const publishedDocument = useAxios({
    method: 'GET',
    url: 'docs/published/0/10',
    isProtected: false
  })
  return (
        <section className={'doc-publish-wrapper'}>
            <HTTPRenderWrapper state={publishedDocument}>
                {(docs: WikiDocument[]) => (
                    <Table columns={['Title']}>
                        {docs.map((doc, index) => (
                            <tr key={index}>
                                <td>{doc.title}</td>
                            </tr>
                        ))}
                    </Table>
                )}
            </HTTPRenderWrapper>
        </section>
  )
}
