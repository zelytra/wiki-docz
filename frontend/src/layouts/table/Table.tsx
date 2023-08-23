import React, { type ReactElement } from 'react'

export interface TableProps {
  columns: string[]
  children: React.ReactNode
}

export function Table (props: TableProps): ReactElement {
  return (
        <table>
            <tr>
                {props.columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
            {props.children}
        </table>
  )
}
