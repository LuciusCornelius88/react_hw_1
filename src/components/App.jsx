import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import profileData from '../data/user.json';
import statData from '../data/data.json';

export default function App() {
  return (
    <div>
      <Profile profileData={profileData} />
      <Statistics statData={{ title: 'Upload stats', data: statData }} />
    </div>
  );
}
