import React, {useState} from React;

const Friend = () => {
  
  const [friendData, setFriendData] = useState([]);

  useEffect(() => {
    const fetchData = async () =>
      try {

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
