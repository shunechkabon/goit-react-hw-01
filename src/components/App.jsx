import { Profile } from './Profile.jsx';
import { FriendList } from './FriendList.jsx';
import { TransactionHistory } from './TransactionHistory.jsx';
import userData from '../assets/userData.json';
import friends from "../assets/friends.json";
import transactions from '../assets/transactions.json';

const App = () => {
    return (
        <>
            <Profile
            name={userData.username}
            tag={userData.tag}
            location={userData.location}
            image={userData.avatar}
            stats={userData.stats}
            />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} />
    </>
);
};

export default App