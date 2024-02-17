"use client"

import React, { useEffect, useState } from 'react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import clsx from 'clsx'
import { Tabs } from '../ui/tabs'
import { Database, Plus, SettingsIcon, SquareStackIcon } from 'lucide-react'

type Props = {}

const EditorSidebar = (props: Props) => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <Sheet
      open={true}
      modal={false}
    >
      <SheetTrigger>Open</SheetTrigger>
      <SheetContent
        showX={false}
        side="right"
        className={clsx(
          'mt-[97px] w-16 z-[80] shadow-none  p-0 transition-all overflow-hidden',
        )}>
        <div className='flex flex-col items-center gap-6'>

          <Plus />
          <SettingsIcon />
        </div>

      </SheetContent>
    </Sheet>
  )
}

export default EditorSidebar