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
import { Tabs, TabsContent } from '../ui/tabs'
import { Database, Plus, SettingsIcon, SquareStackIcon } from 'lucide-react'
import EditorTabs from './EditorTabs'
import EditorComponent from './EditorComponent'
import { Separator } from '../ui/separator'

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
      <Tabs defaultValue="components">
        <SheetContent
          showX={false}
          side="right"
          className={clsx(
            'mt-[80px] w-16 z-[80] shadow-none  p-0 transition-all overflow-hidden',
          )}>
          <EditorTabs />
        </SheetContent>
        <SheetContent
          showX={false}
          side="right"
          className={clsx(
            'mt-[80px] w-80 z-[40] shadow-none p-0 mr-16 bg-background h-full transition-all overflow-hidden',
          )}>
          <TabsContent value="components">
            <SheetHeader className="text-left px-6 ">
              <SheetTitle>Components</SheetTitle>
              <SheetDescription>
                You can drag and drop components on the canvas
              </SheetDescription>
            </SheetHeader>
            <Separator className='my-4'/>
            <EditorComponent />
          </TabsContent>
          <TabsContent value="settings">
            <p>Settings Tab</p>
          </TabsContent>
        </SheetContent>
      </Tabs>
    </Sheet>
  )
}

export default EditorSidebar