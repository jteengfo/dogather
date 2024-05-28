import "./Navbar.css"
import logo from '/logo.svg'
import greenArrow from '/green-arrow.svg'

const Navbar = () => {
    return (
        <nav className="navbar">
            <a className="navbar-logo" href="#">
                <img src={logo} alt="dogather-logo" />
                <span>dogather</span>
            </a>
            <div className="navbar-links">
                <ul className="navbar-pages">
                    <li>
                        <a className="navbar-link" href="#">
                            <span>about us</span>
                            <img src={greenArrow} alt="green arrow"/>
                        </a>
                    </li>
                    <li>
                        <a className="navbar-link" href='#'>
                            <span>features</span>
                            <img src={greenArrow} alt="green arrow"/>
                        </a> 
                    </li>
                    <li>
                        <a className="navbar-link" href='#'>
                            <span>contact</span> 
                            <img src={greenArrow} alt="green arrow"/>
                        </a>
                    </li>
                </ul>
                <ul className="navbar-login">
                    <li>
                        <a className="navbar-link" href='#'>
                            <span>login</span>
                            <img src={greenArrow} alt="green arrow"/>
                        </a>
                    </li>   
                </ul> 
                <button className="register-btn">register</button>
            </div>
        </nav> 
    )
}

export default Navbar