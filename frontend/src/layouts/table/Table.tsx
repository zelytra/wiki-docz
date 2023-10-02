import React, { type ReactElement } from 'react'

export interface TableProps {
  columns: string[]
  children: React.ReactNode
}

export function Table (props: TableProps): ReactElement {
  return (
        <table>
            <thead>
            <tr>
                {props.columns.map((column, index) => (
                    <th key={index}>{column}</th>
                ))}
            </tr>
            </thead>
            <tbody>
            {props.children}
            </tbody>
        </table>
  )
}
