import logo from "../assets/logo.svg";

function header() {
  return (
    <header className="header">
      <img className="logo" src={logo} alt="logo kasa" />
    </header>
  );
}

export default header;
