import logo from "../../assets/logoNuKenzie.svg";
import styles from "./Header.module.scss"

export function Header() {
  return (
    <header>
      <div>
        <img src={logo} alt="logo nu kenzie" />
      </div>
    </header>
  );
}
