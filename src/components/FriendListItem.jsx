export const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={`friend-item ${isOnline ? 'online' : 'offline'}`}>
        <img src={avatar} alt="Avatar" width="48" />
        <p>{name}</p>
        <p className="status">{isOnline ? 'Online' : 'Offline'}</p>
    </div>
);
};

export default FriendListItem