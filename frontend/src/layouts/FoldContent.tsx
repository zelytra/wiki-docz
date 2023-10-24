import React, { type ReactElement, useState } from 'react'
import './assets/FoldContent.scss'

export interface FoldContentProps {
  title: ReactElement
  children: ReactElement | ReactElement[]
}

export function FoldContent (props: FoldContentProps): ReactElement {
  const [isFold, setFold] = useState(false)
  return (
        <div className={'fold-content-wrapper ' + (isFold ? 'folded' : '')}>
            <div className={'fold-title'} onClick={() => {
              setFold(!isFold)
            }}>
                {props.title}
                <div className={'fold-animation'}/>
            </div>
            <div className={'fold-content ' + (isFold ? 'folded' : '')}>
                {props.children}
            </div>
        </div>)
}
