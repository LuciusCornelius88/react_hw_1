import * as FriendsStyles from './Friends.styled';
import { FriendsListItem } from 'components/FriendsListItem/FriendsListItem';
import PropTypes from 'prop-types';

export const FriendsList = ({ friends }) => (
  <FriendsStyles.FriendsContainer className="friends-container">
    <FriendsStyles.FriendsList className="friend-list">
      {friends.map((friend) => (
        <FriendsListItem key={friend.id} props={friend} />
      ))}
    </FriendsStyles.FriendsList>
  </FriendsStyles.FriendsContainer>
);

FriendsList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  ),
};
