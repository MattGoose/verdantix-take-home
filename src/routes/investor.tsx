import { createFileRoute } from '@tanstack/react-router'
import InvestorPage from '../pages/investorPage.tsx'

export const Route = createFileRoute('/investor')({
  component: Investor,
})

function Investor() {
  return (
    <InvestorPage />
  )
}