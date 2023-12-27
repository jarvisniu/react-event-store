import React from 'react'
import { EventType } from './types'

export default function useEvent<T>(event: EventType<T>, fn: (arg: T) => void) {
  React.useEffect(() => {
    event.on(fn)
    return () => {
      event.off(fn)
    }
  }, [])
}
