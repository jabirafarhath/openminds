import "./Settings.css";

function Settings() {
  return (
      <div className="settings_page">
        <h1>Account Settings</h1>
        <div className="input-label">
          <label htmlFor="firstName">First Name: </label>
          <input type="text" name="firstName" placeholder="Jabira"/>
        </div>
        <div className="input-label">
          <label htmlFor="lastName">Last Name: </label>
          <input type="text" name="lastName" placeholder="Farhath"/>
        </div>
        <div className="input-label">
          <label htmlFor="username">Username: </label>
          <input type="text" name="username" placeholder="jabirafarhath"/>
        </div>
        <div className="input-label">
          <label htmlFor="">Set Status: </label>
          <div className="emoji-box">
            <div className="emoji">😴</div>
            <div className="emoji">☹️</div>
            <div className="emoji">😭</div>
            <div className="emoji">🙂</div>
            <div className="emoji">😄</div>
          </div>
        </div>
        <div className="input-label">
            <label htmlFor="">Bio: </label>
            <textarea name="" id="" cols="30" rows="5"></textarea>
        </div>
        <div className="input-label">
            <div className="btn-update">
                Update
            </div>
            <div className="btn-cancel">
                Cancel
            </div>
        </div>
      </div>
  );
}

export default Settings;
