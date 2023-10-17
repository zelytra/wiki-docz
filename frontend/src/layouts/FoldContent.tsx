import React, { type ReactElement, useState } from 'react'
import { ReactSVG } from 'react-svg'
import arrow from '@/assets/icons/list.svg'
import './assets/FoldContent.scss'

export interface FoldContentProps {
  title: ReactElement
  children: ReactElement | ReactElement[]
}

export function FoldContent (props: FoldContentProps): ReactElement {
  const [isFold, setFold] = useState(false)
  return (
        <div className={'fold-content-wrapper'}>
            <div className={'fold-title'} onClick={() => {
              setFold(!isFold)
            }}>
                {props.title}
                <ReactSVG src={arrow}/>
            </div>
            <div className={'fold-content'} style={{ maxHeight: isFold ? '0' : '50vh' }}>
                {props.children}
            </div>
        </div>)
}
