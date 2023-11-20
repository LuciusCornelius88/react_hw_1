import * as FriendItemStyles from './FriendsListItem.styled';
import PropTypes from 'prop-types';

export const FriendsListItem = ({ props }) => {
  return (
    <FriendItemStyles.FriendItem className="item">
      <FriendItemStyles.OnlineStatus className="status" status={props.isOnline}></FriendItemStyles.OnlineStatus>
      <FriendItemStyles.ImageContainer className="image-container">
        <FriendItemStyles.Image className="avatar" src={props.avatar} alt="User avatar" width="48" />
      </FriendItemStyles.ImageContainer>
      <p className="name">{props.name}</p>
    </FriendItemStyles.FriendItem>
  );
};

FriendsListItem.propTypes = {
  props: PropTypes.shape({
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    isOnline: PropTypes.bool.isRequired,
  }),
};
