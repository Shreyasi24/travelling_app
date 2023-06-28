import "./navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <div className="navbar">
        <div className="navcontainer">
          <div className="navbar-menu">
            <Link
              to="/"
              style={{
                fontSize: "35px",
                color: "#fff",
                fontWeight: "700",
                textDecoration: "none",
              }}
            >
              TravelWorld
            </Link>

            <div className="navbuttons">
              <button>Register</button>
              <button>Login</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
