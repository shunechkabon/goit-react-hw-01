import s from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, name, isOnline, }) => {
    const statusClass = isOnline ? s.online : s.offline;
    const status = [s['friend-status'], statusClass].join(' ');

    return (
        <div className={s.friendItem}>
        <img src={avatar} alt="Avatar" width="100" />
        <p className={s.name}>{name}</p>
        <p className={status}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>
);
};

export default FriendListItem