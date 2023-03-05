import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Right.css";
import RightIllustration from "../../assets/images/right_illus.jpg";
import { auth } from "../../config/firebase-config";

function Right() {

  return (
    <div className="right_container">
        <div className="right_container_dp">
            <div className="right_container_dp_img">
                <img src={ auth.currentUser.photoURL } alt="" />
            </div>
        </div>
        <Calendar />
        <div className="right_container_image">
            <img src={RightIllustration} alt=""/>
        </div>
    </div>
  );
}

export default Right;
