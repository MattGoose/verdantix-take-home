export interface BlogPost {
    call_to_action: string
    closing: string[]
    intro: string[]
    key_areas: KeyArea[]
    source_file: string
    type: string
}

export interface CorporateRecord {
    company: string
    year: number
    scope_one: number
    scope_two: number
    scope_three: number
    baseline_year: number
    net_zero_year: number
    interim_target_year: number | null
    interim_reduction: number | null
    sector: string
    region: string
    ownership: string
}

export interface KeyArea {
    body: string
    title: string
}