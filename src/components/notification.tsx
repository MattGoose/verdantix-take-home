import type { NotificationType } from "../types/types"

export default function Notification({
    message,
    type = 'error'
}: {
    message: string,
    type?: NotificationType
}) {
    return (
        <div className={`notification notification-${type}`}>
            {message}
        </div>
    )
}