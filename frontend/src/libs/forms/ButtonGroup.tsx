import React, { type ReactElement } from 'react'
import './assets/ButtonGroup.scss'

export interface ButtonGroupProps {
  children: ReactElement[]
  onAction: (buttonId: number) => void
}

export function ButtonGroup (props: ButtonGroupProps): ReactElement {
  return (
        <div className={'button-group'}>
            {props.children.map((content, index) => (
                    <button className={'group-button'} key={index} onClick={() => {
                      props.onAction(index)
                    }}>
                        {content}
                    </button>
            )
            )}
        </div>
  )
}
