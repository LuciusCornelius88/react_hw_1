import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendsList } from './Friends/Friends';
import { TransactionHistory } from './TransactionHistory/TransactionHistory';
import profileData from '../data/user.json';
import statData from '../data/data.json';
import friends from '../data/friends.json';
import transactions from '../data/transactions.json';

export default function App() {
  return (
    <div>
      <Profile profileData={profileData} />
      <Statistics statData={{ title: 'Upload stats', data: statData }} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </div>
  );
}
