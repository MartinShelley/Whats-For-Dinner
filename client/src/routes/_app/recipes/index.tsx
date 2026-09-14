import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/_app/recipes/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>This is the recipes page!</div>
}
