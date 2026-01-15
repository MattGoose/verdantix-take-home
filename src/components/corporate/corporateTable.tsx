import { useState } from "react"
import { useCorporateRecordStore } from "@stores/corporateStore"

export default function CorporateTable() {
    const records = useCorporateRecordStore((store) => store.records)
    const selectedCompany = useCorporateRecordStore((store) => store.selectedCompany)

    const [year, setYear] = useState('')

    // Get filtered records by company or return all if no company selected
    const filteredRecords = selectedCompany 
        ? records
            .filter((record) => record.company === selectedCompany)
            .filter((record) => year ? record.year.toString().includes(year) : true)
            .sort((a, b) => a.year - b.year)
        : null

    if (filteredRecords) return (
        <>
            <div className="float-end my-4">
                <input
                    className="from-control search"
                    onChange={(e) => setYear(e.target.value)}
                    placeholder="Search by year..."
                    value={year}
                />
            </div>

            <div className="table-responsive mt-4 w-100">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Year</th>
                            <th scope="col">Scope 1</th>
                            <th scope="col">Scope 2</th>
                            <th scope="col">Scope 3</th>
                        </tr>
                    </thead>

                    <tbody>
                        {filteredRecords?.map((record) => (
                            <tr key={record.year}>
                                <td>{record.year}</td>
                                <td>{record.scope_one.toLocaleString()}</td>
                                <td>{record.scope_two.toLocaleString()}</td>
                                <td>{record.scope_three.toLocaleString()}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    )
}