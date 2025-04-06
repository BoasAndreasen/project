import '../styles/Footer.css'

function Footer() {
    return (
        <div className="Footer">
            <div className="columns">
                <ul>
                    <li><p>Navigation</p></li>
                    <li><a href="./">Home</a></li>
                    <li><a href="./">About</a></li>
                    <li><a href="./">Menu</a></li>
                    <li><a href="./">Reservations</a></li>
                    <li><a href="./">Order Online</a></li>
                    <li><a href="./">Login</a></li>
                </ul>
            </div>
            <div className="columns">
                <ul>
                    <li><p>Contact</p></li>
                    <li><p>Adress</p></li>
                    <li><p>Phone Number</p></li>
                    <li><p>Email</p></li>
                </ul>
            </div>
            <div className="columns">
                <ul>
                    <li><p>Social Meida Links</p></li>
                    <li><p>Adress</p></li>
                    <li><p>Phone Number</p></li>
                    <li><p>Email</p></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;