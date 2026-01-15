import { Line } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import Notification from "@components/notification"
import { useCorporateRecordStore } from "@stores/corporateStore"

ChartJS.register(CategoryScale, LinearScale, LineElement, PointElement, Title, Tooltip, Legend)

export default function CorporateChart() {
    const records = useCorporateRecordStore((store) => store.records)
    const selectedCompany = useCorporateRecordStore((store) => store.selectedCompany)

    // Get filtered records by company or return all if no company selected
    const filteredRecords = selectedCompany ? records.filter((record) => record.company === selectedCompany) : null

    if (!filteredRecords) return <Notification message="No company selected for chart view." type="warning" />

    // Get all years for legend
    const years = [...new Set(records.map(record => record.year))]

    // Build datasets for each scope
    const scopes = ['scope_one', 'scope_two', 'scope_three'] as const
    const datasets = scopes.map((scope, i) => ({
        label: scope.replace('_', ' '),
        data: years.map((year) => {
            const record = filteredRecords.find((rec) => rec.year === year)
            return record ? record[scope] : 0
        }),
        borderColor: ['red', 'blue', 'green'][i],
        backgroundColor: ['red', 'blue', 'green'][i]
    }))

    const data = {
        labels: years,
        datasets: datasets
    }

    const options = {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      }

    return (
        <section className="mt-4">
            <h3>{`${ selectedCompany } trend visualiser`}</h3>
            <Line className="mt-3" data={data} options={options} />
        </section>
    )
}