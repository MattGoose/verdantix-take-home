import Notification from "@components/notification"
import { useCorporateRecordStore } from "@stores/corporateStore"

export default function CorporatePeerComparison() {
    const records = useCorporateRecordStore((store) => store.records)
    const selectedCompany = useCorporateRecordStore((store) => store.selectedCompany)

    // Create a new object just containing comapny name and net zero year value
    const companyMap = new Map<string, number>()

    // Add in records, ensure unique
    records.forEach((record) => {
        if (!companyMap.has(record.company)) {
            companyMap.set(record.company, record.net_zero_year)
        }
    })

    // Now build array from mapped values
    const companies = Array.from(companyMap.entries()).map(
        ([company, net_zero_year]) => ({ company, net_zero_year })
    )

    // Find the array element of the selectedCompany
    const selected = companies.find((record) => record.company === selectedCompany)

    if (!selected) return <Notification message="No company selected for peer comparison." type="warning" />

    // Now find peers with an earleir net zero year
    const selectedPeers = companies
        .filter((record) => record.company !== selectedCompany && record.net_zero_year && record.net_zero_year < selected.net_zero_year)
        .sort((a, b) => a.net_zero_year = b.net_zero_year)
        .slice(0, 3)

    if (selectedPeers.length === 0) return <Notification message={`No peers have a lower net zero year than ${selectedCompany}.`} type="info" />

    return (
        <section className="mt-4">
            <h3>{`${ selectedCompany } peer comparison (net zero year)`}</h3>
            <div className="table-responsive mt-4 w-100">
                <table className="table table-striped table-hover">
                    <thead>
                        <tr>
                            <th scope="col">Company</th>
                            <th scope="col">Net Zero Year</th>
                        </tr>
                    </thead>

                    <tbody>
                        <tr className="table-primary">
                            <td>{selected.company}</td>
                            <td>{selected.net_zero_year}</td>
                        </tr>
                        {selectedPeers?.map((selectedPeer) => (
                            <tr key={selectedPeer.company}>
                                <td>{selectedPeer.company}</td>
                                <td>{selectedPeer.net_zero_year}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </section>
    )
}