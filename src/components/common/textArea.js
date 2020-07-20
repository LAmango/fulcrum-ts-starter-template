import React from "react"
import PropTypes from "prop-types";

const TextArea = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <textarea {...props} ref={ref}/>
      {props.errors[props.name] && <div>{props.errors[props.name].message || "Please fill out this field"}</div> }
    </div>
  )
})

TextArea.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextArea
