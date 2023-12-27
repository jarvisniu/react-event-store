import { useSignal } from '@preact/signals-react'
import { useEvent } from 'react-event-store'
import eventStore from './eventStore'

export default function Cart() {
  const count = useSignal(0)

  useEvent(eventStore.count.add, (by: number) => {
    count.value += by
  })

  useEvent(eventStore.count.reset, () => {
    count.value = 0
  })

  return (
    <div className='cart'>
      <div className='title'>Cart</div>
      <div>I am going to buy {count.value} apples.</div>
    </div>
  )
}
