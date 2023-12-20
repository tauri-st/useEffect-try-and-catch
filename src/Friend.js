const Friend = ( {friend} ) => {
  
  const letterAvatar = friend.name.split("")[0]

  return (
    <div className="friend-card">
      <div className="friend-details">
        <div className="avatar">{letterAvatar}</div>
        <h2 className="friend-name">{friend.name}</h2>
      </div>
      <div className={`friend-status ${friend.online ? "online" : "offline"}`}></div>
    </div>
  );
};

export default Friend;
