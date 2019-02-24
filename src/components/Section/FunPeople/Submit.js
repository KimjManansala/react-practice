import React from 'react'

const Submit = ({name, reason, submit}) => {
  return (
    <div>
    <div className="field">
        <input
          type="submit"
          className="button is-link is-medium disabled"
          disabled={(name && reason) ? false : true}
          onClick={(evt)=>{submit(evt, {name: name, reason: reason})}}
          value="Add Fun Person"
        />
      </div>
    </div>
  )
}

export default Submit
