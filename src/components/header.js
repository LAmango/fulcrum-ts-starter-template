import React, { useState } from "react"
import { Link } from "gatsby"
import Fade from "react-reveal/Fade"
import DropMenuItem from "./dropMenuItem"
import MobileMenuItem from "./mobileMenuItem"

const Header = props => {
  const [menu, setMenu] = useState(false)
  const { navItems = [], title } = props
  return (
    <div className="flex justify-between bg-black p-6 flex-wrap">
      <span className="font-semibold text-xl text-white tracking-tight">
        <Link to={"/"}>{title}</Link>
      </span>
      <div className="flex-grow md:flex-none" />
      <div className="flex-initial md:hidden">
        <button
          onClick={() => setMenu(!menu)}
          className="items-center px-3 py-2 border rounded text-white border-white hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <nav className="flex w-full md:w-auto -mr-4">
        <div
          id="mobile"
          className="block w-full md:flex md:items-center md:w-auto md:hidden"
        >
          <Fade collapse top delay={0} when={menu}>
            <div className="relative w-full flex-grow md:flex md:items-center md:w-auto">
              <div className="text-sm md:flex-grow">
                {navItems.map(item =>
                  item.subHeading ? (
                    <MobileMenuItem key={item.heading} item={item} />
                  ) : (
                    <Link
                      key={item.heading}
                      to={item.link}
                      className="block pb-4 md:inline-block md:mt-0 text-white mr-4"
                    >
                      {item.heading}
                    </Link>
                  )
                )}
              </div>
            </div>
          </Fade>
        </div>
        <div className="hidden md:flex mt-1 w-full w-auto items-center">
          <div className="text-sm mx-auto">
            {navItems.map(item =>
              item.subHeading ? (
                <DropMenuItem key={item.heading} item={item} />
              ) : (
                <Link
                  key={item.heading}
                  to={item.link}
                  className="block mt-4 md:inline-block md:mt-0 md:mx-4 text-white hover:text-white mr-4"
                >
                  {item.heading}
                </Link>
              )
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Header
