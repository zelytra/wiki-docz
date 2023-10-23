import React, { type ReactElement, type ReactNode } from 'react'
import { type AxiosState } from '@/libs/http/HTTPAxios'

export interface HTTPRenderProps {
  state: AxiosState
  children: (data: any) => (ReactNode[] | ReactNode)
}

export function HTTPRenderWrapper (props: HTTPRenderProps): ReactElement {
  if (props.state.loading) return <div>Loading...</div>
  if (props.state.error != null) return <div>Error: {props.state.error.message}</div>
  if (props.state.data != null) {
    return props.children(props.state.data) as React.ReactElement<any, string | React.JSXElementConstructor<any>>
  }

  return <div>State is undefined</div>
}
