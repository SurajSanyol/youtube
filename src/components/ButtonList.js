import React from 'react'
import Button from './Button'

const ButtonList = () => {
  const list = ["All", "Gaming", "News", "Live", "Music", "Sports", "Cricket", "Pubg", "JavaScript"];
  return (
  
    <div className='flex flex-row  w-full   gap-x-6 items-center justify-center '>

      {

        list.map((l, index) => <Button key={index} name={l} />)

      }

    </div>
    
  )
}

export default ButtonList