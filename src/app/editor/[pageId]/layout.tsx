import React from 'react'
import EditorNavbar from '../../../components/editor/EditorNavbar';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=''>
      <EditorNavbar/>
      {children}
    </div>
  )
}

export default layout