import React from 'react'
import { useRouteError } from 'react-router-dom'

const Error = () => {
    const err = useRouteError();
    console.log(err)
  return (
    <div>
        <h1>
            😨  Oops! Something went wrong. Please try again
        </h1> 
        <h2>
            {err.data}
        </h2>
    </div>
  )
}

export default Error