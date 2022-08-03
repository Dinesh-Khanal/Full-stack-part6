//import { useSelector, useDispatch } from "react-redux";
import { connect } from "react-redux";
import { setMessage } from "../reducers/notificationReducer";

function Notification(props) {
  const timer = {
    messageSet(message) {
      props.setMessage(message);
      this.timeoutID = undefined;
    },
    timerSet() {
      if (typeof this.timeoutID === "number") {
        this.cancel();
      }
      this.timeoutID = setTimeout(
        function () {
          this.messageSet("");
        }.bind(this),
        5000
      );
    },
    cancel() {
      clearTimeout(this.timeoutID);
    },
  };
  timer.timerSet();
  //const notification = useSelector((state) => state.notification);
  const notification = props.notification;
  const style = {
    border: "solid",
    padding: 10,
    borderWidth: 1,
  };
  return notification && <div style={style}>{notification}</div>;
}
const mapStateToProps = (state) => {
  return { notification: state.notification };
};
export default connect(mapStateToProps, { setMessage })(Notification);
