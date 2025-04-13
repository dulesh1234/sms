import React from 'react'
import Button from './Button.jsx'


// const Cart = (props) => {
const Cart = ({image:image1,heading,paragraph,btnText,new1}) => {

    // let {image:image1,heading,paragraph,btnText="learn more"}  = props
  return (
    
<div className="shadow-xl rounded-md overflow-hidden w-72">
          <div>
            <img src={image1} alt="#" />
          </div>
          <div className='h-56 p-5 flex flex-col gap-3'>
           {new1 && <Button btnText='new'  />}
            <h1 className="text-2xl font-medium h-32">
              {heading}
            </h1>
            <p className="">
            {paragraph}
            </p>
          </div>
            <div className="p-5">
            <Button btnText={btnText}/>
            </div>
        </div>
  )
}

export default Cart