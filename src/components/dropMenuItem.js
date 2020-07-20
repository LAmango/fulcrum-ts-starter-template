import React from "react"
import { Link } from "gatsby"

const DropMenuItem = ({ item }) => {
  const [dropdown, setDropdown] = React.useState(false)
  const ref = React.useRef()

  const headingClicked = () => {
    setDropdown(true)
  }

  const closeMenu = () => {
    setDropdown(false)
  }

  return (
    <>
      <div className="mt-4 md:inline-block md:mt-0 md:mx-4 text-white hover:text-white mr-4 bg-black">
        <button
          onClick={headingClicked}
          className="cursor-pointer z-30 bg-black"
        >
          {item.heading}
        </button>
        <div
          ref={ref}
          className={`transition duration-300 ease-in-out absolute transform ${
            dropdown
              ? "opacity-100 z-20 visible"
              : "opacity-0 translate-y-6 invisible"
          }`}
        >
          <div className="mt-8 border border-gray-900 bg-white w-auto">
            {item.subHeading.map(sub => (
              <Link
                to={sub.link}
                className="no-wrap block bg-white w-full text-black hover:bg-black hover:text-white p-4"
              >
                {sub.heading}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <button
        onClick={closeMenu}
        className={`z-10 absolute left-0 right-0 top-0 bottom-0 h-full w-full opacity-0 bg-black ${
          dropdown ? "block" : "hidden"
        }`}
      />
    </>
  )
}

export default DropMenuItem
