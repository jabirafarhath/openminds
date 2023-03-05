import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "./Right.css";
import RightIllustration from "../../assets/images/right_illus.jpg";
import { auth } from "../../config/firebase-config";
import { Link } from 'react-router-dom';

function Right() {
    console.log(auth.currentUser);
  return (
    <div className="right_container">
        <Link className="right_container_dp" to='/settings'>
            <div className="right_container_dp_img">
                <img src={ auth.currentUser.photoURL } alt="" referrerpolicy="no-referrer" />
            </div>
        </Link>
        <Calendar />
        <div className="right_container_image">
            <img src={RightIllustration} alt=""/>
        </div>
    </div>
  );
}

export default Right;
