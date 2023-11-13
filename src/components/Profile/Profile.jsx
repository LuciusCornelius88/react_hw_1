import PropTypes from 'prop-types';

export const Profile = ({ profileData }) => (
  <div className="profile">
    <div className="description">
      <img src={profileData.avatar} alt="User avatar" className="avatar" />
      <p className="name">{profileData.username}</p>
      <p className="tag">@{profileData.tag}</p>
      <p className="location">{profileData.location}</p>
    </div>

    <ul className="stats">
      <li>
        <span className="label">Followers: </span>
        <span className="quantity">{profileData.stats.followers}</span>
      </li>
      <li>
        <span className="label">Views: </span>
        <span className="quantity">{profileData.stats.views}</span>
      </li>
      <li>
        <span className="label">Likes: </span>
        <span className="quantity">{profileData.stats.likes}</span>
      </li>
    </ul>
  </div>
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
