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
      <EditorNavbar/>
      <EditorSidebar />
      {children}
    </div>
  )
}

export default layout