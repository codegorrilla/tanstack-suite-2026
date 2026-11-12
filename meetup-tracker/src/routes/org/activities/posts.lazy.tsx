import { createLazyFileRoute } from '@tanstack/react-router'

export const Route = createLazyFileRoute('/org/activities/posts')({
  component: PostsComponent,
})

function PostsComponent() {
  const posts = Route.useLoaderData()
  console.log(posts)

  return (
    <>
      <h1 className="text-4xl font-extrabold text-white mnb-4 tracking-tight">
        Posts
      </h1>
      <ul className="m-3">
        {posts.map((post) => (
          <li className="text-2xl p-2" key={post.id}>
            {post.title}
          </li>
        ))}
      </ul>
    </>
  )
}
