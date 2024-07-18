import { Rotate as Hamburger } from "hamburger-react";
import Link from "next/link";
import LogoWhite from "../public/img/logo_white.svg";
import useHideOnScroll from "../hooks/useHideOnScroll";
import { useState } from "react";

export default function Navigation({ activeComponentName }) {
  let visible = useHideOnScroll();
  const [isOpen, setOpen] = useState(false);

  let mobileStyle = {
    position: "fixed",
    transition: "transform 0.6s",
    transform: isOpen ? "" : "translateX(100%)",
  };

  let desktopStyle = {
    position: "fixed",
    transition: "transform 0.6s",
    transform: visible ? "" : "translateY(-100%)",
  };

  const NavLink = (componentName, href) => {
    return (
      <div
        className={
          activeComponentName === componentName ? "link active" : "link"
        }
      >
        <Link href={href}>
          <a onClick={() => setOpen(false)}>{componentName}</a>
        </Link>
      </div>
    );
  };

  const NavVersion = (classNames, style) => {
    let classes =
      "flex flex-col sm:flex-row justify-between w-full fixed px-12 py-8 " +
      classNames;

    return (
      <div className={classes} style={style}>
        <div className="logo overflow-y-hidden">
          <Link href="/">
            <a onClick={() => setOpen(false)}>
              <LogoWhite />
            </a>
          </Link>
        </div>
        <div>
          <div id="nav-area" className="h-full">
            <div
              id="nav-box"
              className="flex flex-col md:flex-row items-center justify-center h-full gap-8"
            >
              {NavLink("Fonts", "/fonts")}
              {NavLink("Shop", "/shop")}
              {NavLink("About", "/about")}
              {NavLink("Cart", "/cart")}
            </div>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div
        className="md:hidden fixed flex flex-row justify-end w-full p-8"
        style={{
          zIndex: 3,
        }}
      >
        <Hamburger
          color={isOpen ? "var(--color-primary)" : "var(--color-primary)"}
          toggled={isOpen}
          toggle={setOpen}
        />
      </div>
      {NavVersion("md:hidden", mobileStyle)}
      {NavVersion("hidden md:flex", desktopStyle)}
    </>
  );
}