import Button from "./Button";
import "./Navbar.css";

function Navbar() {
  return (
    <>
      <nav className="navbar-expand-md">
        <div className="container d-flex justify-content-center m-auto">
          <div className="row fixed-top">
            <div className="col-sm-12 col-md-2 m-auto">
              <a href="http://localhost:3000/">
                <img src="/logoFE.png" alt="logo" className="logo" />
              </a>
            </div>
            <div className="col-sm-12 col-md-8">
              <div className="row title justify-content-center">
                Los Angeles
              </div>
              <div className="row nav justify-content-center">
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/">
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
                    <a className="dropdown-item" href="http://localhost:3000/">
                      Team
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Team Achivement
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
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
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/player"
                    >
                      Player
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Player Contract
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Player Achievement
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Stats
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
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
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Coach
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Coach Contract
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Coach Achievement
                    </a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:3000/nothing">
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
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/agent"
                    >
                      Agent
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Agent Contract
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
                    Owner
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Owner
                    </a>
                    <a
                      className="dropdown-item"
                      href="http://localhost:3000/nothing"
                    >
                      Owner Certificate
                    </a>
                  </div>
                </li>
              </div>
            </div>
            <div className="col-sm-12 col-md-2 d-flex justify-content-center m-auto">
              <a href="http://localhost:3000/nothing">
                <Button text="Sign in" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
export default Navbar;
