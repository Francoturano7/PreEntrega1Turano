import React from 'react'

import { DotSpinner } from '@uiball/loaders'



function Loader() {
  return (
    <div className='item-list2'>

      <DotSpinner 
      size={128}
      speed={0.9} 
      color="black" 
      
     />
    </div>
  )
}

export default Loader