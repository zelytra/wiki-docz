import React, { type ReactElement } from 'react'
import { EditorProvider } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { OptionMenu } from '@/libs/editor/OptionMenu'
import './assets/Tiptap.scss'

export function Tiptap (): ReactElement {
  // define your extension array
  const extensions = [
    StarterKit
  ]

  const content = '<p>Hello World!</p>'

  return (
        <div className={'editor-wrapper'}>
            <EditorProvider slotBefore={<OptionMenu/>} extensions={extensions} content={content}><></>
            </EditorProvider>
        </div>
  )
}
