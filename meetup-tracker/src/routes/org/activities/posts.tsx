import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/posts')({
  loader: () => {
    return [
      {
        id: 'post-1',
        title: 'Post 1',
        body: 'Post 1 body',
      },
      {
        id: 'post-2',
        title: 'Post 2',
        body: 'Post 2 body',
      },
    ]
  },
})
