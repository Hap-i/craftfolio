import { Plus } from 'lucide-react'
import React from 'react'
const page = () => {
  return (
    <div className='h-fit border-2 border-yellow-300 w-full mr-[24rem] p-2'>
      <div className='border-2 border-dashed  h-16 w-full border-blue-600 p-2 cursor-pointer'>
        <div className='flex items-center justify-center h-full bg-blue-900'>
          <Plus/>
          <span>Add Components</span>
        </div>
      </div>

    </div>
  )
}

export default page