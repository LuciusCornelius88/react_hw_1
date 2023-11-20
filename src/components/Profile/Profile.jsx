import PropTypes from 'prop-types';
import * as ProfileStyles from './Profile.styled';

export const Profile = ({ profileData }) => (
  <ProfileStyles.ProfileContainer className="profile">
    <ProfileStyles.ProfileWrapper className="profile-wrapper">
      <ProfileStyles.ProfileFrame className="description">
        <ProfileStyles.ImageWrapper className="image-wrapper">
          <ProfileStyles.Image src={profileData.avatar} alt="User avatar" className="avatar" />
        </ProfileStyles.ImageWrapper>
        <ProfileStyles.ContentWrapper className="content-wrapper">
          <p className="name">{profileData.username}</p>
          <p className="tag">@{profileData.tag}</p>
          <p className="location">{profileData.location}</p>
        </ProfileStyles.ContentWrapper>
      </ProfileStyles.ProfileFrame>

      <ProfileStyles.StatsContainer className="stats-container">
        <ProfileStyles.StatsList className="stats">
          <ProfileStyles.StatsItem>
            <span className="label">Followers: </span>
            <span className="quantity">{profileData.stats.followers}</span>
          </ProfileStyles.StatsItem>
          <ProfileStyles.StatsItem>
            <span className="label">Views: </span>
            <span className="quantity">{profileData.stats.views}</span>
          </ProfileStyles.StatsItem>
          <ProfileStyles.StatsItem>
            <span className="label">Likes: </span>
            <span className="quantity">{profileData.stats.likes}</span>
          </ProfileStyles.StatsItem>
        </ProfileStyles.StatsList>
      </ProfileStyles.StatsContainer>
    </ProfileStyles.ProfileWrapper>
  </ProfileStyles.ProfileContainer>
);

Profile.propTypes = {
  profileData: PropTypes.shape({
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
    avatar: PropTypes.string,
    stats: PropTypes.objectOf(PropTypes.number),
  }),
};
