import React from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { BoxSelect, Image, Type } from 'lucide-react'

type Props = {}

const EditorComponent = (props: Props) => {
  return (
    <div className='px-6'>
      <Accordion type="multiple" className="w-full" defaultValue={['Layouts', 'Elements']}>
        <AccordionItem value="Layouts">
          <AccordionTrigger className='hover:no-underline'>Layouts</AccordionTrigger>
          <AccordionContent>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col items-center gap-1'>
                <div className='bg-secondary w-fit p-2 cursor-pointer'>
                  <BoxSelect />
                </div>
                <span className='text-muted-foreground text-xs'>Container</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="Elements">
          <AccordionTrigger className='hover:no-underline' >Elements</AccordionTrigger>
          <AccordionContent>
            <div className='grid grid-cols-4'>
              <div className='flex flex-col items-center gap-1'>

                <div className='bg-secondary w-fit p-2 cursor-pointer'>
                  <Type />
                </div>
                <span className='text-muted-foreground text-xs'>Textbox</span>
              </div>
              <div className='flex flex-col items-center gap-1'>

                <div className='bg-secondary w-fit p-2 cursor-pointer'>
                  <Image />
                </div>
                <span className='text-muted-foreground text-xs'>Image</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  )
}

export default EditorComponent