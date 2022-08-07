import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <div className="container d-flex justify-content-center m-auto">
        <div className="row fixed-top">
          <div className="col-12 col-md-2 m-auto">
            <a href="/">
              <img src="/logoFE.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-12 col-md-8">
            <div className="row title justify-content-center">Los Angeles</div>
            <div className="row nav justify-content-center">
              <li className="nav-item">
                <a className="nav-link" href="/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Team
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/team">
                    Team
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Team Achivement
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Arena
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Player
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/player">
                    Player
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Player Contract
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Player Achievement
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Stats
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Status Report
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Coach
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/nothing">
                    Coach
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Coach Contract
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Coach Achievement
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/nothing">
                  Staff
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Agent
                </a>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/agent">
                    Agent
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Agent Contract
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <div
                  className="nav-link dropdown-toggle"
                  id="navbarDropdownMenuLink"
                  role="button"
                  data-toggle="dropdown"
                  aria-expanded="false"
                >
                  Owner
                </div>
                <div
                  className="dropdown-menu"
                  aria-labelledby="navbarDropdownMenuLink"
                >
                  <a className="dropdown-item" href="/nothing">
                    Owner
                  </a>
                  <a className="dropdown-item" href="/nothing">
                    Owner Certificate
                  </a>
                </div>
              </li>
            </div>
          </div>
          <div className="col-12 col-md-2 d-flex justify-content-center m-auto">
            <a href="/nothing">
              <Button text="Sign in" />
            </a>
          </div>

        </div>
     </div>
    </>
  );
}
export default Navbar;
