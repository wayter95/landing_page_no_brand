"use client";

import { Link as Scroll } from "react-scroll";

interface NavbarData {
  id: number;
  title: string;
  path: string;
}

interface INavbarItemProps {
  data: NavbarData[];
  onClose: () => void;
}

const NavbarItems = ({ data, onClose }: INavbarItemProps) => {
  return data.map(({ id, title, path }) => (
    <li key={id}>
      <Scroll
        to={path}
        smooth
        offset={-100}
        onClick={onClose} 
        activeClass="text-rsn-orange-600"
        className="cursor-pointer text-3xl font-semibold lg:text-base lg:font-light text-rsn-green-600 lg:text-rsn-beige-300  lg:hover:text-rsn-orange-600">
        {title}
      </Scroll>
    </li>
  ));
};

export { NavbarItems }