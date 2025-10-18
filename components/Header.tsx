import Image from "next/image";
import Link from "next/link";
import logo from "../public/assets/icons/logo.svg";
import NavItems from "./NavItems";
import UserDropDown from "./UserDropDown";

const Header = ({ user }: { user: User }) => {
  return (
    <header className="sticky top-0 header">
      <div className="container header-wrapper">
        <Link href="/">
          <Image
            src={logo}
            alt="logo"
            width={140}
            height={32}
            className="h-8 w-auto cursor-pointer"
          ></Image>
        </Link>
        <nav className="hidden sm:block">
          <NavItems />
        </nav>
        <UserDropDown user={user} />
      </div>
    </header>
  );
};

export default Header;
