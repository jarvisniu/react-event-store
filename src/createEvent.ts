import { EventEmitter } from 'events'
import { EventType } from './types'

// The event bus
const eventBus = new EventEmitter()

// Generate event ids
let lastId = -1
function nextId() {
  lastId += 1
  return `event-${lastId}`
}

// Create event objects
export default function createEvent<T = void>(): EventType<T> {
  const id = nextId()
  const eventEmit: EventType<T> = (arg: T) => eventBus.emit(id, arg)
  eventEmit.on = (fn: (arg: T) => void) => eventBus.on(id, fn)
  eventEmit.off = (fn: (arg: T) => void) => eventBus.off(id, fn)
  return eventEmit
}
