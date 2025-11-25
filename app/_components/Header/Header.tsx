import LoginButton from "../AuthButtons/LoginButton";
import SignupButton from "../AuthButtons/SignupButton";
import SearchBar from "../Search/SearchBar";
import LogoHeading from "./LogoHeading";

const Header = () => {
  return (
    <header className="flex items-center justify-between px-4">
      <LogoHeading />
      <div className="flex gap-4 items-center">
        <SearchBar />
        <SignupButton />
        <LoginButton />
      </div>
    </header>
  );
};

export default Header;
