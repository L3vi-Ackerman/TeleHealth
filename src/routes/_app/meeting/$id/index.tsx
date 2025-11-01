import { VideoCall } from '@/components/video/video-call'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/meeting/$id/')({
  component: RouteComponent,
})

function RouteComponent() {
  const params = Route.useParams()
  const { id } = params

  return <VideoCall roomId={id} />
}
