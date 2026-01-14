import { useCorporateRecordStore } from "../../stores/corporateStore"

export default function CompanySelector() {
    const getCompanies = useCorporateRecordStore((store) => store.getCompanies)
    const selectedCompany = useCorporateRecordStore((store) => store.selectedCompany)
    const setSelectedCompany = useCorporateRecordStore((store) => store.setSelectedCompany)
    
    const companies = getCompanies()

    return(
        <select
            className="form-select"
            value={selectedCompany}
            onChange={(e) => setSelectedCompany(e.target.value)}
        >
            <option disabled hidden value="">Select a company</option>
            {companies.map((company) => (
                <option key={company} value={company}>{company}</option>
            ))}
        </select>
    )
}