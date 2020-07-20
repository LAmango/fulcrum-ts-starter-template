import React from "react"
import PropTypes from "prop-types"
import { useForm } from "react-hook-form";

const Form = props => {
  const {handleSubmit, register, errors, reset} = useForm()
  const {children} = props;

  const onSubmit = values => {
    props.submit(values);
    reset();
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {React.Children.map(children, child => {
        return React.cloneElement(child, { ref: register({required: true}), errors: errors });
      })}
      {props.submitButton}
    </form>
  )
}

Form.propTypes = {
  legend: PropTypes.string,
  submit: PropTypes.func.isRequired,
  submitButton: PropTypes.element.isRequired
}

export default Form