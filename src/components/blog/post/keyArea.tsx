import type { KeyArea } from "../../../types/interfaces"

export default function KeyArea({ body, title }: KeyArea) {
    return (
        <>
            <h4>{title}...</h4>
            <p className="keyAreaBody">...{body}</p>
        </>
    )
}