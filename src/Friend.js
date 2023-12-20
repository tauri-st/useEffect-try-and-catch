import React, {useState} from React;

const Friend = () => {
  
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      try {
        const request = await fetch("https://gist.githubusercontent.com/skillcrush-curriculum/8231fb5350d726663f2bb16af7cf6945/raw/0dde3b3942214ed39a08479b334c752bea05b3a6/friend-status.json");
        const friendStatus = await request.json();
        setFriendData(friendStatus);
      } catch () {

      }
  }, []);
  
  return (
    <div className="friend-card">
      <div className="friend-details">
        <div className="avatar"></div>
        <h2 className="friend-name"></h2>
      </div>
      <div className="friend-status"></div>
    </div>
  );
};

export default Friend;
