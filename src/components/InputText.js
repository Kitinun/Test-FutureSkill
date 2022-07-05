import React from 'react'
import { Form } from 'react-bootstrap'

function InputText({
    title, star, type, idName, value, placeholder, classLabel, handleChange, handleKeyPress,
    invalid, handleInvalid, disabled, classFormGroup, as, rows, classFormCon, min, max, autoFocus
  }) {

  return (
    <Form.Group className={classFormGroup} >
      {title ? <Form.Label className={`${classLabel} mb-1`}>{title} <span className="text-danger">{star ? "*" : ""}</span></Form.Label> : ""}
      <Form.Control type={type} id={idName} name={idName} className={invalid ? "is-invalid" : classFormCon ? classFormCon : ""}
        as={as} rows={rows}
        value={value} disabled={disabled ? true : false}
        placeholder={placeholder}
        min={min ? min : ""}
        max={max ? max : ""}
        autoFocus={autoFocus ? autoFocus : false}
        onChange={e => {
          handleChange(e.target.value)
          if (handleInvalid) {
            handleInvalid()
          }
        }}
        onKeyPress={e => {
          if (handleKeyPress) {
            if (e.key === 'Enter') {
              handleKeyPress(e.target.value)
              if (handleInvalid) {
                handleInvalid()
              }
            }
          }
        }} />
      {invalid ? <div className="invalid-error">{invalid}</div> : ""}
    </Form.Group>
  )
}

export default InputText