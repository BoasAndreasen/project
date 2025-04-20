import "../styles/Nav.css"
import Logo from "../resources/Logo.svg"

function Nav() {
    return (
        <div className="Navigation">
            <ul>
                <li><img src={Logo} alt="logo"></img></li>
                <li><a href="/">Home</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>About</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Menu</a></li>
                <li><a href="/reservations">Reservations</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Order Online</a></li>
                <li><a href="/" onClick={(e) => { e.preventDefault(); alert("Not implemented"); }}>Login</a></li>
            </ul>
        </div>
    )
}

export default Nav;