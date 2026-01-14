export default function Notification({ message }: { message: string }) {
    return (
        <div className="container">
            <div className="notification">{message}</div>
        </div>
    )
}