import React from 'react'
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"
import { Plus, SettingsIcon } from 'lucide-react'

type Props = {}

const EditorTabs = (props: Props) => {
  return (
      <TabsList className="flex items-center flex-col justify-evenly w-full bg-transparent h-fit gap-4" >
        <TabsTrigger value="components">
          <Plus className='icon-click' />
        </TabsTrigger>
        <TabsTrigger value="settings">
          <SettingsIcon className='icon-click' />
        </TabsTrigger>
      </TabsList>
  )
}

export default EditorTabs