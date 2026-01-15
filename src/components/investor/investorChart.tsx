import { Bar } from 'react-chartjs-2'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function InvestorChart({
    aggregatedData,
    aggregationType,
    aggregationYear
}: {
    aggregatedData: object,
    aggregationType: string,
    aggregationYear: number
}) {
    // Pull out labels and values
    const labels = Object.keys(aggregatedData)
    const values = Object.values(aggregatedData)

    // Build datasets for aggragated dataset
    // const datasets = scopes.map((scope, i) => ({
    //     label: labels
    //     data: years.map((year) => {
    //         const record = filteredRecords.find((rec) => rec.year === year)
    //         return record ? record[scope] : 0
    //     }),
    //     borderColor: ['red', 'blue', 'green'][i],
    //     backgroundColor: ['red', 'blue', 'green'][i]
    // }))

    const data = {
        labels,
        datasets: [
            {
                label: `Total emissions by ${aggregationType} in ${aggregationYear}`,
                data: values
            }
        ]
    }

    return (
        <Bar className="mt-3" data={data} />
    )
}