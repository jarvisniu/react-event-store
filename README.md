# react-event-store

Simplified, typed, centralized event management for React

[Demo](https://unpkg.com/react-event-store/dist/index.html)

## Usage

Firstly, define your events.

> This is typed, centralized and organized.

```tsx
// eventStore.ts
import { createEvent } from 'react-event-store'

export default {
  count: {
    add: createEvent<number>(),
    reset: createEvent(),
  },
  user: {
    logout: createEvent(),
    setting: createEvent(),
  },
}
```

Then, use `useEvent` hook listen to the events.

> The listener will be automatically removed on unmount.

```tsx
import { useEvent } from 'react-event-store'
import eventStore from './eventStore'

export default function Cart() {
  const [count, setCount] = React.useState(0)

  useEvent(eventStore.count.add, (by: number) => {
    setCount((count) => count + by)
  })

  return <div>I am going to buy {count} apples.</div>
}
```

Finally, trigger the events.

> It's just like calling normal functions.

```tsx
import eventStore from './eventStore'

return <button onClick={() => eventStore.count.add(5)}> +5 </button>
```

## Advanced usage

If your event handlers need to read React states, you can use `on/off` manually.

```tsx
React.useEffect(() => {
  function handleAdd(by: number) {
    setCount(count + by)
  }

  eventStore.count.add.on(handleAdd)
  return () => {
    eventStore.count.add.off(handleAdd)
  }
})
```

This is a little bit redundant, so it may be better to use signals instead.

`npm install @preact/signals-react@1.3.8`

```tsx
import { useSignal } from '@preact/signals-react'
import { useEvent } from 'react-event-store'
import eventStore from './eventStore'

export default function Cart() {
  const count = useSignal(0)

  useEvent(eventStore.count.add, (by: number) => {
    count.value += by
  })

  return (
    <div className='cart'>
      <div className='title'>Cart</div>
      <div>I am going to buy {count.value} apples.</div>
    </div>
  )
}
```

# License

MIT
