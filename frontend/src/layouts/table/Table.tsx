import React, { type ReactElement } from 'react'
import './assets/Table.scss'
import { ReactSVG } from 'react-svg'
import sort from '@/assets/icons/order.svg'
import filter from '@/assets/icons/funnel.svg'

export interface TableProps {
  columns: string[]
  children: React.ReactNode
}

export function Table (props: TableProps): ReactElement {
  return (
        <table className={'custom-table'}>
            <thead>
            <tr>
                {props.columns.map((column, index) => (
                    <th key={index}>
                        <div className={'header-wrapper'}>
                            <div className={'side-wrapper'}>
                                <ReactSVG src={sort}/>
                                {column}
                            </div>
                            <ReactSVG src={filter}/>
                        </div>
                    </th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
  )
}
