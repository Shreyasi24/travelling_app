import "./maillist.css";

const Maillist = () => {
  return (
    <div className="mailList">
      <h2>Save Time, Save money</h2>
      <h5>Sign in & we'll send you best details</h5>
      <div className="mailbox">
        <input type="text" placeholder="Your Email" className="formcontrol" />
        <input type="submit" value="submit" className="sbmtcontrol" />
        <br />
        <input type="checkbox" id="mail" name="mail" value="mail"></input>
        <span
          style={{
            color: "#fff",
            marginLeft: "5px",
            fontSize: "20px",
            cursor: "pointer",
          }}
        >
          Send me a link to get free booking app
        </span>
      </div>
    </div>
  );
};

export default Maillist;
