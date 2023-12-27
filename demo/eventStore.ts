import { createEvent } from 'react-event-store'

type Blog = {
  title: string
  content: number
}

export default {
  count: {
    add: createEvent<number>(),
    reset: createEvent(),
  },
  user: {
    logout: createEvent(),
    setting: createEvent(),
  },
  blog: {
    post: createEvent<Blog>(),
    open: createEvent<string>(),
    delete: createEvent<string>(),
  },
}
