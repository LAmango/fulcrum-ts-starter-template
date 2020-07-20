import React from "react"
import { FaCaretLeft } from "react-icons/fa"
import { Link } from "gatsby"

const MobileMenuItem = ({ item }) => {
  const [dropdown, setDropdown] = React.useState(false)

  const headingClicked = () => {
    setDropdown(true)
  }

  return (
    <>
      <div className="mb-4 md:inline-block md:mt-0 text-white hover:text-white mr-4 bg-black">
        <button
          onClick={headingClicked}
          className="cursor-pointer z-30 bg-black"
        >
          {item.heading}
        </button>
      </div>
      <div
        className={`transition duration-300 transform overflow-y-auto z-20 bg-black absolute left-0 top-0 w-1/2 h-full ${
          dropdown ? "opacity-100 w-full" : "opacity-0 translate-x-full"
        }`}
      >
        <button
          onClick={() => setDropdown(false)}
          className="text-white border rounded border-white px-1"
        >
          <FaCaretLeft className="inline" />
        </button>
        <h2 className="text-white inline mx-2">{item.heading}</h2>
        {item.subHeading.map(sub => (
          <Link to={sub.link} className="py-2 no-wrap block w-full text-white">
            {sub.heading}
          </Link>
        ))}
      </div>
    </>
  )
}

export default MobileMenuItem
