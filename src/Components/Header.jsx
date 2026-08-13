import img from "../assets/chef-claude-icon.png";
function Header() {
  return (
    <header className="navBar">
        <img className="iconImg" src={img} alt="chef icon" />
        <p className="navName">Chef Claude</p>
    </header>
  );
}

export default Header;
