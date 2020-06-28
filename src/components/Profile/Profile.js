// import React from "./node_modules/react";
import React from "react";

// import PropTypes from "./node_modules/prop-types";
import PropTypes from "prop-types";

import styles from "./Profile.module.css";

function Profile({ user }) {
  const { name, tag, avatar, location, stats } = user;
  return (
    <>
      <div className={styles.profile}>
        <div className={styles.description}>
          <img className={styles.img} src={avatar} alt="user avatar" />
          <p className={styles.name}>{name}</p>
          <p className={styles.tag}>{tag} </p>
          <p className={styles.location}>{location}</p>
        </div>

        <ul className={styles.list}>
          <li className={styles.listItem}>
            <span>Followers</span>
            <span className={styles.stats}>{stats.followers}</span>
          </li>
          <li className={styles.listItem}>
            <span>Views</span>
            <span className={styles.stats}>{stats.views}</span>
          </li>
          <li className={styles.listItem}>
            <span>Likes</span>
            <span className={styles.stats}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}

Profile.propTypes = {
  user: PropTypes.exact({
    name: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.exact({
      followers: PropTypes.number.isRequired,
      views: PropTypes.number.isRequired,
      likes: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
};

export default Profile;
