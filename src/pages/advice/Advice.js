import Counselor from "../../components/counsellor/Counselor";
import "./Advice.css";

function Advice() {
  return (
    <div className="advice_page">
      <h1>Get help from counselors</h1>
      <div className="advice_cards">
        <div className="card-counselor">
          <Counselor />
        </div>
        <div className="card-counselor">
          <Counselor />
        </div>
        <div className="card-counselor">
          <Counselor />
        </div>
        <div className="card-counselor">
          <Counselor />
        </div>
      </div>
    </div>
  );
}

export default Advice;