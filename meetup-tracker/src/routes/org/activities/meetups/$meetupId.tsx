import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/meetups/$meetupId')({
  loader: async ({ params }) => {
    const res = await fetch(`http://localhost:3001/events/${params.meetupId}`)

    if (!res.ok) {
      throw new Error('Meetup not found.')
    }

    return res.json()
  },
  pendingComponent: () => {
    ;<div className="animate-pulse">Loading Meetup data...</div>
  },
  errorComponent: ({ error }) => (
    <div className="text-red-500">
      {error instanceof Error ? error.message : String(error)}
    </div>
  ),

  component: MeetupDetails,
})

function MeetupDetails() {
  const meetup = Route.useLoaderData()
  // console.log(meetup)

  // Define the rows we want to show
  const details = [
    { label: 'Date', value: meetup.date },
    { label: 'Location', value: meetup.location },
    { label: 'Attendees', value: meetup.attendees },
    { label: 'City', value: meetup.city },
    { label: 'Tech Stack', value: 'React' },
  ]

  return (
    <div className="max-w-2xl mx-auto bg-neutral-900 border borde-neutral-800 p-8 rounded-2xl shadow-2xl">
      <h1 className="text-4xl font-extrabold text-white mb-4 tracking-tight">
        {meetup.title}
      </h1>
      <p className="text-neutral-400 text-lg- mb-8 leading-relaxed">
        {meetup.description}
      </p>
      <div className="bg-neutral-950 rounded-xl border border-neutral-800 overflow-hidden">
        {details.map((detail, index) => {
          // only render if the value exists and is not empty
          if (!detail.value) return null

          return (
            <div
              key={detail.label}
              className={`flex justify-between py-4 px-6 ${index !== details.length - 1 ? 'border-b border-neutral-800' : ''}`}
            >
              <span className="text-neutral-500 font-medium">
                {detail.label}
              </span>
              <span className="text-emerald-400 font-semibold">
                {detail.value}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}
