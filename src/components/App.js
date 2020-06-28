import React from "react";
import Profile from "./Profile/Profile";
import userList from "./Profile/user.json";
import statsData from "./Statistics/stats-data.json";
import friendsList from "./Friends/friends.json";
import Statistics from "./Statistics/Statistics";
import FriendList from "./Friends/FriendList";
import TransactionHistory from "./Transactions/TransactionHistory";
import transactionData from "./Transactions/transactions.json";

export default function App() {
  return (
    <>
      <Profile user={userList} />
      <Statistics title="Upload stats" stats={statsData} />
      <FriendList friends={friendsList} />
      <TransactionHistory items={transactionData} />
    </>
  );
}
