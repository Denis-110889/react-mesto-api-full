function NavBar({ handleSignOut, userEmail }) {
  return (
    <ul className="navbar">
      <li>
        <p className="navbar__user-email">{userEmail}</p>
      </li>
      <li>
        <button onClick={handleSignOut} className="navbar__button">
          Выйти
        </button>
      </li>
    </ul>
  );
}

export default NavBar;
