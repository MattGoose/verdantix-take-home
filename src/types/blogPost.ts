export default interface BlogPost {
    call_to_action: string
    closing: string[]
    intro: string[]
    key_areas: KeyArea[]
    source_file: string
    type: string
}

interface KeyArea {
    body: string
    title: string
}