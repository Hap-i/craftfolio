import React from 'react'
import EditorNavbar from '../../../components/editor/EditorNavbar';
import EditorSidebar from '../../../components/editor/EditorSidebar';

const layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className=''>
      <EditorNavbar />
      <div className='flex'>
        {children}
      <EditorSidebar />
      </div>
    </div>
  )
}

export default layout