import Topbar from "../layout/Topbar";
import Navbar from "./Navbar";

/*
 * Copyright (c) - All Rights Reserved.
 *
 * See the LICENSE file for more information.
 */
const Header = () => {
  return (
    <header className="border-b border-gray-200">
      {/* Top bar */}
      <Topbar></Topbar>
      {/* navbar */}
      <Navbar></Navbar>
      {/* cart drawr */}
    </header>
  );
};

export default Header;
