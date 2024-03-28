import "./header-nav-menu.scss"

const HeaderNawMenu = () => {
  return (
      <ul className="nav d-flex align-items-center">
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>Home</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>Shop</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>Pages</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>About</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>Blog</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>User Dashboard</span>
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white fw-bold" href="#">
            <span>Contact</span>
          </a>
        </li>
      </ul>
  );
};

export default HeaderNawMenu;
