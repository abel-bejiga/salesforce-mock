import React from 'react'

const Buttons = ({name='', styles='' }) => {

  return (
    <button className={`${styles} text-sm rounded`}>
      {name}
    </button>
  )
}

export default Buttons
