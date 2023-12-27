import eventStore from './eventStore'

export default function Detail() {
  return (
    <div className='product'>
      <div className='title'>Product</div>
      <div>These apples tastes good.</div>
      <div>Select your count:</div>
      <div className='control'>
        <button onClick={() => eventStore.count.add(1)}>+1</button>
        <button onClick={() => eventStore.count.add(5)}>+5</button>
        <button onClick={() => eventStore.count.reset()}>Reset</button>
        <button onClick={() => eventStore.count.add(-5)}>-5</button>
        <button onClick={() => eventStore.count.add(-1)}>-1</button>
      </div>
    </div>
  )
}
