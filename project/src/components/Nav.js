import "../styles/Nav.css"
import Logo from "../resources/Logo.svg"

function Nav() {
    return (
        <div className="Navigation">
            <ul>
                <li><img src={Logo} alt="logo"></img></li>
                <li><a href="./">Home</a></li>
                <li><a href="./">About</a></li>
                <li><a href="./">Menu</a></li>
                <li><a href="./">Reservations</a></li>
                <li><a href="./">Order Online</a></li>
                <li><a href="./">Login</a></li>
            </ul>
        </div>
    )
}

export default Nav;