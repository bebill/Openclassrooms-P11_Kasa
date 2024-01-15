import { Link, NavLink } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <Link to="/">
        <img
          src={`${process.env.PUBLIC_URL}/logo_header.svg`}
          alt="Logo Kasa Header"
        />
      </Link>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Accueil</NavLink>
          </li>
          <li>
            <NavLink to="/about">A propos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};
