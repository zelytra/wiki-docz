import { type HTTPRenderProps } from '@/libs/http/HTTPAxios'
import React from 'react'

export function HTTPRenderWrapper ({ state, children }: HTTPRenderProps) {
  if (state.loading) return <div>Loading...</div>
  if (state.error != null) return <div>Error: {state.error.message}</div>
  if (state.data != null) return <div className={'axios-http-renderer'}>{children(state.data)}</div>

  return <div>State is undefined</div>
}
