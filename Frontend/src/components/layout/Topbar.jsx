/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the LICENSE file for more information.
 */
import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io5";
import { RiTwitterXLine } from "react-icons/ri";
const Topbar = () => {
  return (
    <div className="bg-zyra text-white">
      <div className="container mx-auto flex justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover-text-gray-300">
            <TbBrandMeta className="h-5 w-5"></TbBrandMeta>
          </a>
          <a href="#" className="hover-text-gray-300">
            <IoLogoInstagram className="h-5 w-5"></IoLogoInstagram>
          </a>
          <a href="#" className="hover-text-gray-300">
            <RiTwitterXLine className="h-4.5 w-4.5"></RiTwitterXLine>
          </a>
        </div>
        <div className="text-sm text-center">
          <span>We ship worldwide - Fast adn reliable shipping!</span>
        </div>
        <div className="text-sm hidden md:block text-right flex-grow:1">
          <a href="tel:+9200000000" className="hover:text-gray-300">
            Call us: +92 000 000 000
          </a>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
