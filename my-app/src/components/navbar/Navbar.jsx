import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./navbar.css"
import { faBuilding } from "@fortawesome/free-solid-svg-icons"

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="navContainer">
        <span className="logoName"><span className="logo"><FontAwesomeIcon icon= {faBuilding} /></span>IstaBook</span>
        <div className="navItems">
          <button className="navButton">Register</button>
          <button className="navButton">Login</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar