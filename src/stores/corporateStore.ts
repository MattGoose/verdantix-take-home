import { create } from "zustand"
import { persist } from 'zustand/middleware'
import type { CorporateRecord } from "../types/interfaces"

interface CorporateRecordState {
    records: CorporateRecord[]
    setRecords: (records: CorporateRecord[]) => void

    // Computed getters to easily populate dropdowns
    getCompanies: () => string[]

    // Computed filters for page interaction
    selectedCompany: string
    setSelectedCompany: (company: string) => void
}

export const useCorporateRecordStore = create<CorporateRecordState>()(
    persist((set, get) => ({
        records: [],
        setRecords: (records) => set({ records }),

        getCompanies: () => {
            const { records } = get()
            return [...new Set(records.map(record => record.company))]
        },

        selectedCompany: '',
        setSelectedCompany: (company) => set({ selectedCompany: company }),
    }),
    {
        partialize: (state) => ({ records: state.records }),
        name: 'corporate-data-storage'
    })
)