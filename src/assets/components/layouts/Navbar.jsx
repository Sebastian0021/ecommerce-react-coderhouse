import { Link } from "react-router-dom";
import CartWidget from "../common/cartWidget/CartWidget";
import logo from "/mercury-planet.svg";
const Navbar = () => {
  return (
    <header className="p-5 flex justify-between items-center shadow-lg">
      {/* Logo */}
      <Link to="/" className="flex items-center gap-2">
        <img src={logo} alt="Logo Mercury" className=" w-6" />
        <span className="font-semibold">MERCURY</span>
      </Link>
      <nav>
        {/* Marcas de vapes */}
        <ul className="flex gap-8">
          <li>
            <Link to="/">Todos</Link>
          </li>
          <li>
            <Link to="category/geekbar">Geekbar</Link>
          </li>
          <li>
            <Link to="category/dummy">Dummy</Link>
          </li>
        </ul>
      </nav>
      <CartWidget />
    </header>
  );
};

export default Navbar;
