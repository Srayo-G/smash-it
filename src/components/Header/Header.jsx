//jshint esversion: 6
import "./Header.css";

const Header = () => {
  return (
    <span
      className="header"
      onClick={() => {
        window.scroll(0, 0);
      }}
    >
      🎬 Smash It 🎞
    </span>
  );
};

export default Header;
