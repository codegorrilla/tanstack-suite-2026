import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useEffect, useState } from 'react'

export const Route = createFileRoute('/')({ component: Home })

function Home() {
  const [count, setCount] = useState(0)
  const navigate = useNavigate()

  useEffect(() => {
    console.log(count)

    if (count >= 3) {
      console.log(count)
      navigate({ to: '/org/activities/hackathon' })
    }
  }, [count])

  return (
    <div className="p-8">
      <h1 className="text-4xl font-bold">
        Welcome to TanStack Router Crash Course
      </h1>
      <p className="flex gap-3 mt-5 text-lg">
        <Link
          to="/org/activities/hackathon"
          className="bg-emerald-700 text-white px-4 py-3 rounded font-bold cursor-pointer"
        >
          {' '}
          Go To Hackathon
        </Link>
        <button
          onClick={() => setCount((prev) => prev + 1)}
          className="bg-emerald-700 text-white px-4 py-3 rounded font-bold cursor-pointer"
        >
          {count === 0
            ? 'Goto Hackathon Programmatically'
            : `${3 - count} clicks left...`}
        </button>
      </p>
    </div>
  )
}
