import React, { useState } from 'react'

const User = ({name}) => {
    const[count, setCount] = useState(0); //creating a state in functional component.
  return (
    <div className='user-card'>
        <h1>count: {count}</h1>
        <h2>Name: {name}+Kumar</h2>
        <h3>Location: Pune</h3>
        <h4>Contact: @biharwalesharmaji</h4>
    </div>
  )
}

export default User;
