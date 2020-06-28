// import React from "./node_modules/react";
import React from "react";

import FriendListItem from "./FriendListItem";

import styles from "./Friends.module.css";

function FriendList({ friends }) {
  return (
    <>
      {friends.map((friend) => (
        <ul className={styles.list}>
          <li key={friend.id} className={styles.listItem}>
            <FriendListItem friend={friend} />
          </li>
        </ul>
      ))}
    </>
  );
}

export default FriendList;
