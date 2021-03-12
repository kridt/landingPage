import "./PrimaryNavigation.scss";

export default function PrimaryNavigation() {

    return(
        <nav className="primaryNavigation">
            <ul className="primaryNavigation__menu">
                <a href="/" className="primaryNavigation__brand">SaaS Company</a>
                <li className="primaryNavigation__menuItem">
                    <a href="/home" className="primaryNavigation__menuLink">Home</a>
                    <a href="/about" className="primaryNavigation__menuLink">About</a>
                    <a href="/contact" className="primaryNavigation__menuLink">Contact</a>
                </li>
            </ul>
        </nav>
    );
}