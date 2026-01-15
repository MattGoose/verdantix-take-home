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
import type { AggregationType } from '../../types/types'

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend)

export default function InvestorChart({
    aggregatedData,
    aggregationType,
    aggregationYear
}: {
    aggregatedData: object,
    aggregationType: AggregationType,
    aggregationYear: number
}) {
    // Pull out labels and values
    const labels = Object.keys(aggregatedData)
    const values = Object.values(aggregatedData)

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