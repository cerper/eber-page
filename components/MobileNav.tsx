"use client";

import { Link as ScrollLink } from "react-scroll";

const NavItems = [
  {
    name: "home",
    target: "home",
    offset: -100,
  },
  {
    name: "about",
    target: "about",
    offset: -100,
  },
  {
    name: "newBeats",
    target: "newBeats",
    offset: -100,
  },
  {
    name: "contact",
    target: "contact",
    offset: -100,
  },
];

const MobileNav = ({ containerStyles }: { containerStyles: string }) => {
  return (
    <div className={`${containerStyles}`}>
      {" "}
      {NavItems.map((item, index) => {
        return (
          <ScrollLink
            key={index}
            offset={item.offset}
            to={item.target}
            spy
            smooth
            className="cursor-pointer transition-all hover:text-blue-700"
          >
            {item.name}
          </ScrollLink>
        );
      })}
    </div>
  );
};
export default MobileNav;
