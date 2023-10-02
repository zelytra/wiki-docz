import React, { type ReactElement, type ReactNode, useEffect, useRef } from 'react'
import './assets/Modal.scss'

export interface ModalProps {
  open: boolean
  children: ReactNode[] | ReactNode
  onUpdate: (value: boolean) => void
}

export function Modal (props: ModalProps): ReactElement {
  const wrapperRef = useRef<any>(null)

  useEffect(() => {
    function handleClickOutside (event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        // Outside the component was clicked
        props.onUpdate(false)
      }
    }

    // Attach the listeners on component mount
    document.addEventListener('mousedown', handleClickOutside)
    // Cleanup on component un-mount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [wrapperRef])

  return (
        <>
            {props.open ? <div className={'backdrop'}/> : ''}
            <dialog ref={wrapperRef} className={'modal-wrapper'} open={props.open}>
                {props.children}
            </dialog>
        </>
  )
}
