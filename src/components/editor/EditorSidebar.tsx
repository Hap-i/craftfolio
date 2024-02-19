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
        <EditorTabs/>
      </SheetContent>
      <SheetContent
        showX={false}
        side="right"
        className={clsx(
          'mt-[80px] w-80 z-[40] shadow-none p-0 mr-16 bg-background h-full transition-all overflow-hidden',
        )}>
          <TabsContent value="components">
            <p>Components Tab</p>
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