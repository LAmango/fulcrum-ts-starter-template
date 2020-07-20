import React from "react"

const MobileTest = () => {
  const [width, setWidth] = React.useState("max-w-full")
  const sizes = {
    Full: "max-w-full",
    Large: "max-w-screen-xl",
    Medium: "max-w-screen-md",
    Small: "max-w-screen-sm",
    Mobile: "max-w-screen-mobile",
  }
  return (
    <div className="bg-gray-500 w-full mx-auto h-full overflow-auto">
      <div className="bg-gray-500 mx-auto z-50 h-5p flex content-center">
        {Object.keys(sizes).map(size => (
          <button
            className="mx-4 focus:outline-none focus:text-white"
            onClick={() => setWidth(sizes[size])}
          >
            {size}
          </button>
        ))}
      </div>
      <div
        className={`relative ${width} shadow-lg mx-auto transition transition-maxWidth duration-1000 ease-in-out h-95p overflow-visible`}
      >
        <iframe
          title="Flexible Site"
          className="flex-inital"
          src="./"
          sandbox="allow-same-origin allow-forms allow-scripts"
          seamless
          width="100%"
          height="100%"
        />
      </div>
    </div>
  )
}

export default MobileTest
