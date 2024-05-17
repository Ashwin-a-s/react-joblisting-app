import React from 'react';


const Cards = ({children,bg="bg-gray-100"}) => {
  return (
    <>
    <div className={`${bg} shadow-lg p-6 rounded-lg space-y-2`}>
        {children}
    </div>
    </>

  )
}

export default Cards;