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
        <TabsTrigger value="components" className="data-[state=active]:bg-primary" >
          <Plus className='' />
        </TabsTrigger>
        <TabsTrigger value="settings" className="data-[state=active]:bg-primary">
          <SettingsIcon className='' />
        </TabsTrigger>
      </TabsList>
  )
}

export default EditorTabs