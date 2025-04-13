import React from 'react'

const Button = ({btnText="learn more"}) => {

  return (
    <button className= {`bg-blue-700   text-white p-1 px-2 text-lg`}>
           {btnText}
 </button>
  )
}

export default Button