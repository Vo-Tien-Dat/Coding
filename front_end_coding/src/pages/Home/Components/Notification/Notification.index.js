
import './Notification.index.scss';

function NotificationIndex(props) {
    const { title, content } = props;
    return (
        <div className='Notification-form'>
            <div className='Notification-title'>
                {title}
            </div>
            <div className='Notification-content'>
                {content}
            </div>
        </div>
    )
}

export default NotificationIndex;