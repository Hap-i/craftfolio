
import { ArrowLeftCircle, Eye, Laptop, Redo2, Smartphone, Tablet, Undo2 } from 'lucide-react'
import React from 'react'
import { Switch } from '../ui/switch'
import { Button } from '../ui/button'

const EditorNavbar = () => {
  return (
    <div className='flex justify-between border-b-2 py-4 px-4'>
      <div className='flex items-center gap-2'>
      <ArrowLeftCircle size={20} className='cursor-pointer hover:text-primary'/>
      <div>
        <p className='text-sm font-semibold'>Landing Page</p>
        <p className='text-xs text-gray-400'>Path: <span>/</span></p>
      </div>
      </div>
      <div className='flex gap-3 items-center'>
      <Laptop size={20} className='cursor-pointer hover:text-primary' />
      <Tablet size={20} className='cursor-pointer hover:text-primary' />
      <Smartphone size={20} className='cursor-pointer hover:text-primary' />
      </div>
      <div className='flex gap-4 items-center'>
      <Eye size={20} className='cursor-pointer hover:text-primary' />
      <Undo2 size={20} className='cursor-pointer hover:text-primary' />
      <Redo2 size={20} className='cursor-pointer hover:text-primary' />
      <div>
        <div className='flex gap-3 items-center'>
          <p className='text-sm font-semibold'>Draft</p>
          <Switch/>
          <p className='text-sm font-semibold'>Publish</p>
        </div>
        <p className='text-xs text-gray-400'>Last updated <span>1/08/2024</span></p>
      </div>
      <Button>Save</Button>
      </div>
    </div>
  )
}

export default EditorNavbar