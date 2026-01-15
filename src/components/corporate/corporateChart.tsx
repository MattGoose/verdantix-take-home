import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js'
import Notification from "@components/notification"
import { useCorporateRecordStore } from "@stores/corporateStore"

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function CorporateChart() {
    const records = useCorporateRecordStore((store) => store.records)
    const getYears = useCorporateRecordStore((store) => store.getYears)
    const selectedCompany = useCorporateRecordStore((store) => store.selectedCompany)

    // Get filtered records by company or return all if no company selected
    const filteredRecords = selectedCompany ? records.filter((record) => record.company === selectedCompany) : null

    if (!filteredRecords) return <Notification message="No company is selected." type="info" />

    // Get all years for legend
    const years = getYears()

    // Build datasets for each scope
    const scopes = ['scope_one', 'scope_two', 'scope_three'] as const
    const datasets = scopes.map((scope, i) => ({
        label: scope,
        data: years.map((year) => {
            const record = filteredRecords.find((rec) => rec.year === year)
            return record ? record[scope] : 0
        }),
        backgroundColor: ['#007bff', '#28a745', '#ffc107'][i],
    }))

    const data = {
        labels: years,
        datasets: datasets
    }

    return (
        <Bar className="mt-5" data={data} />
    )
}