// Event type

export type EventType<T> = {
  (arg: T): void
  on(fn: (arg: T) => void): void
  off(fn: (arg: T) => void): void
}
