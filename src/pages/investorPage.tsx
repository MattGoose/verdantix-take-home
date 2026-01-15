import { useState } from "react"
import InvestorChart from "@components/investor/investorChart"
import { useCorporateRecordStore } from "@stores/corporateStore"

export default function InvestorPage() {
  const records = useCorporateRecordStore((store) => store.records)

  const [aggregation, setAggregate] = useState('region')
  const [year, setYear] = useState(2018)

  // Get all years for select
  const years = [...new Set(records.map(record => record.year))]

  // Get data for year
  const yearData = records.filter(record => record.year === year)

  // Build aggregated data structure
  const aggregatedData = yearData.reduce<Record<string, number>>((acc, record) => {
    const key = aggregation === 'region' ? record.region : record.sector
    acc[key] = (acc[key] ?? 0) + record.scope_one + record.scope_two + record.scope_three
    return acc
  }, {})

  return (
    <div className="container py-4">
      <div className="row">
        <div className="col-12 col-lg-6 select">
          <label htmlFor="year-select">Choose year:</label>
          <select
            className="form-select"
            id="year-select"
            onChange={(e) => setYear(Number(e.target.value))}
            value={year}
          >
            {years.map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>
        </div>

        <div className="col-12 col-lg-6 select">
          <label htmlFor="aggregate-select">Choose aggregation (region/sector):</label>
          <select
            className="form-select"
            id="aggregate-select"
            onChange={(e) => setAggregate(e.target.value)}
            value={aggregation}
          >
            <option value='region'>Region</option>
            <option value='sector'>Sector</option>
          </select>
        </div>
      </div>

      <InvestorChart
        aggregatedData={aggregatedData}
        aggregationType={aggregation}
        aggregationYear={year}
      />
    </div>
  )
}