import React from "react"
import PropTypes from "prop-types";

const Textfield = React.forwardRef((props, ref) => {
  return (
    <div>
      <label htmlFor={props.name}>
        {props.label}
      </label>
      <input {...props} ref={ref}/>
      {props.errors[props.name] && <div>{props.errors[props.name].message || "Please fill out this field"}</div> }
    </div>
  )
})

Textfield.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
}

export default Textfield