import * as React from 'react'

export interface SoccerMatchesProps<T> {
  data: T[]
  conditions?: any
  renderResultItem: (item: T, index: number) => React.ReactElement
}

export default function SoccerMatches<T extends Record<string, any>>(props: SoccerMatchesProps<T>) {
  const { data, conditions, renderResultItem } = props

  return <>{conditions ? data.map((item, index) => renderResultItem(item, index)) : null}</>
}
