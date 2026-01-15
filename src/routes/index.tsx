import { createFileRoute } from '@tanstack/react-router'
import CorporatePage from '@pages/corporatePage.tsx'

export const Route = createFileRoute('/')({
  component: Index,
})

function Index() {
  return (
    <CorporatePage />
  )
}