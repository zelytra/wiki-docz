import React, { type ReactElement } from 'react'
import './assets/Button.scss'

export interface CustomButtonProps {
  name: string
  onClick?: () => void
}

export function Button (props: CustomButtonProps): ReactElement {
  return (
      <button type={'button'} className={'custom-button'} onClick={props.onClick}>
        {props.name}
      </button>
  )
}
