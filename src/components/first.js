import React, { useEffect, useState } from 'react'

const FirstComponent = () => {

    const [update, setupdate] = useState(0)

    useEffect(() => {
     console.log('first component mounted')
      return () => {
        console.log('first component unmounted')
      }
    }, [update]) 

    return (
        <div>FirstComponent 
            <h5>update:{update}</h5>
            <button onClick={() => setupdate(update + 1)}>Update</button>
        </div>
  )
}

export default FirstComponent