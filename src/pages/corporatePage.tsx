import { useEffect, useState } from "react"
import CompanySelector from "@components/corporate/companySelector"
import CorporateChart from "@components/corporate/corporateChart"
import CorporateTable from "@components/corporate/corporateTable"
import Notification from "@components/notification"
import Spinner from "@components/spinner"
import { useCorporateRecordStore } from "@stores/corporateStore"
import type { CorporateRecord } from "../types/interfaces"

export default function CorporatePage() {
  const setRecords = useCorporateRecordStore((store) => store.setRecords)

  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRecordData = async () => {
      try {
        const response = await fetch('/data/dummy_data.json')
        const json = await response.json()

        // Manually map dummy_data props to accessible properties
        const data: CorporateRecord[] = json.map((datum: any) => ({
          company: datum.Company,
          year: datum.Year,
          scope_one: datum["Scope 1"],
          scope_two: datum["Scope 2"],
          scope_three: datum["Scope 3"],
          baseline_year: datum["Baseline Year"],
          netZero_year: datum["Net Zero Year"],
          interim_target_year: datum["Interim Target Year"],
          interim_reduction: datum["Interim Reduction %"],
          sector: datum.Sector,
          region: datum.Region,
          ownership: datum.Ownership
        }))

        setRecords(data)
      } catch (error) {
        setErrorMessage("Could not read JSON file - sorry!")
      } finally {
        setLoading(false)
      }
    }

    fetchRecordData()
  }, [setRecords])

  if (loading) return <Spinner />
  if (errorMessage) return <Notification message={errorMessage} />

  return (
    <div className="container py-4">
      <CompanySelector />
      <CorporateChart />
      <CorporateTable />
    </div>
  )
  }