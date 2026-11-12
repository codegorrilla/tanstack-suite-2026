import { createFileRoute, Link } from '@tanstack/react-router'
import { z } from 'zod'

type Meetup = {
  id: string
  title: string
  location: string
}

const searchSchema = z.object({
  city: z.string().catch('all'),
  tech: z.string().catch('all'),
})

export const Route = createFileRoute('/org/activities/meetups/')({
  validateSearch: searchSchema,
  loaderDeps: ({ search: { city, tech } }) => ({ city, tech }),
  loader: async ({ deps }): Promise<Meetup[]> => {
    const res = await fetch('http://localhost:3001/events')

    let events = (await res.json()) as Meetup[]

    // Filter the data based on the URL state
    if (deps.city && deps.city !== 'all') {
      events = events.filter((event: any) => {
        return event.city.toLowerCase().includes(deps.city.toLowerCase())
      })
    }

    if (deps.tech && deps.tech !== 'all') {
      events = events.filter((event: any) => {
        return event.tech.toLowerCase().includes(deps.tech.toLowerCase())
      })
    }

    return events
  },
  pendingComponent: () => (
    <div className="animate-pulse">Loading Meetup data...</div>
  ),
  errorComponent: ({ error }) => (
    <div className="text-red-500">
      {error instanceof Error ? error.message : String(error)}
    </div>
  ),
  component: MeetupComponent,
})

function MeetupComponent() {
  const meetups = Route.useLoaderData()

  return (
    <div>
      {meetups.map((meetup: Meetup) => (
        <div className="mb-3 p-2 border border-amber-400 rounded-2xl">
          <Link
            key={meetup.id}
            to="/org/activities/meetups/$meetupId"
            params={{ meetupId: meetup.id }}
            className="cursor-pointer"
          >
            <h3 className="font-bold text-2xl text-purple-700">
              {meetup.title}
            </h3>
            <p>{meetup.location}</p>
          </Link>
        </div>
      ))}
    </div>
  )
}
