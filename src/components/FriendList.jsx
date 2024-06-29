// Завдання 2 - Список друзів
import FriendListItem from "./FriendListItem";

export const FriendList = ({ friends }) => {
    return (
        <ul style={{ listStyle: 'none',
            display: 'flex',
            gap: '20px',
            marginTop: '80px'
        }}>
            {friends.map(friend => (
        <li style={{ border: "2px solid black", borderRadius: '5px', padding: '20px'}} key={friend.id}>
            <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
            />
        </li>
    ))}
</ul>
);
};

export default FriendList