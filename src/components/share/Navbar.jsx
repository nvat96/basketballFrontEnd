import Button from "./Button";
import './Navbar.css'

function Navbar() {
  return (
    <div>
      <div className="container-fluid">
        <div className=" row fixed-top">
          <div className="col-sm-12 col-md-2">
            <a href="http://localhost:3000/">
              <img src="/logoFE.png" alt="logo" className="logo" />
            </a>
          </div>
          <div className="col-sm-12 col-md-8">
            <div className="row title">Los Angeles</div>
            <div className="row nav">
            <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Home
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
                  <a className="dropdown-item" href="#">
                    Team Achivement
                  </a>
                  <a className="dropdown-item" href="#">
                    Arena
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
                  <a className="dropdown-item" href="http://localhost:3000/">
                    Player
                  </a>
                  <a className="dropdown-item" href="http://localhost:3000/">
                    Player Contract
                  </a>
                  <a className="dropdown-item" href="#">
                    Player Achievement
                  </a>
                  <a className="dropdown-item" href="#">
                    Stats
                  </a>
                  <a className="dropdown-item" href="#">
                    Status Report
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
                  <a className="dropdown-item" href="http://localhost:3000/">
                    Coach
                  </a>
                  <a className="dropdown-item" href="#">
                    Coach Contract
                  </a>
                  <a className="dropdown-item" href="#">
                    Coach Achievement
                  </a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:3000/">
                  Staff
                </a>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
                  <a className="dropdown-item" href="http://localhost:3000/">
                    Agent
                  </a>
                  <a className="dropdown-item" href="#">
                    Agent Contract
                  </a>
                </div>
              </li>
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
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
                  <a className="dropdown-item" href="http://localhost:3000/">
                    Owner
                  </a>
                  <a className="dropdown-item" href="#">
                    Owner Certificate
                  </a>
                </div>
              </li>
            </div>
          </div>
          <div className="col-sm-12 col-md-2">
            <Button text='Sign in'/>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Navbar;
