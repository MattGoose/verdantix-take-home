export default function KeyArea({ body, title }: { body: string, title: string }) {
    return (
        <>
            <h4>{title}...</h4>
            <p className="keyAreaBody">...{body}</p>
        </>
    )
}