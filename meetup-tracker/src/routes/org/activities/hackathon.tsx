import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/org/activities/hackathon')({
  component: HackathonComponent,
})

function HackathonComponent() {
  return <div>Hello Hackathon Page</div>
}
