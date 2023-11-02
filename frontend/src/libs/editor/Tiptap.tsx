import React, { type ReactElement } from 'react'
import { EditorProvider, type Extensions } from '@tiptap/react'
import { StarterKit } from '@tiptap/starter-kit'
import { OptionMenu } from '@/libs/editor/OptionMenu'
import './assets/Tiptap.scss'

export interface TiptapProps {
  data: string
}

export function Tiptap (props: TiptapProps): ReactElement {
  // define your extension array
  const extensions: Extensions | undefined = [
    StarterKit
  ]
  return (
        <div className={'editor-wrapper'}>
            <EditorProvider slotBefore={<OptionMenu/>} extensions={extensions} content={props.data}><></>
            </EditorProvider>
        </div>
  )
}
