import React from "react"

const DevTool = props => {
  const { children } = props
  return (
    <div className="bg-gray-500 w-full  mx-auto h-full">
      <div className={`relative max-w-full mx-auto h-full overflow-auto`}>
        {children}
      </div>
    </div>
  )
}

export default DevTool
