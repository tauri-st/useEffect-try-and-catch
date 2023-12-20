const Friend = ( {friend} ) => {
  
  return (
    <div className="friend-card">
      <div className="friend-details">
        <div className="avatar"></div>
        <h2 className="friend-name">{friend.name}</h2>
      </div>
      <div className={`friend-status ${friend.online === true ? "online" : "offline"}`}></div>
    </div>
  );
};

export default Friend;
