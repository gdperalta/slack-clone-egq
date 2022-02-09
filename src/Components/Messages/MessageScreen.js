import { getFullDate } from "../../Utils/handleDate";

const MessageScreen = ({ messageDisplay }) => {
  let currentUser;

  return (
    <div className="messageScreen">
      {messageDisplay.map((user) => {
        if (currentUser === user.sender.email) {
          return (
            <div key={user.id} className="messageContainer">
              <span style={{ width: "55px" }}></span>
              <p key={user.id}>{user.body}</p>
            </div>
          );
        } else {
          currentUser = user.sender.email;
          return (
            <div className="messageContainer" key={user.id}>
              <span className="icon">
                {user.sender.email.charAt(0).toUpperCase()}
              </span>
              <div>
                <div>
                  <h3>{user.sender.email.split("@")[0]}</h3>
                  {getFullDate(user.created_at)}
                </div>
                <p key={user.id}>{user.body}</p>
              </div>
            </div>
          );
        }
      })}
    </div>
  );
};

export default MessageScreen;
