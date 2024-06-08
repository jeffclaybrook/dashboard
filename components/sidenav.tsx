"use client"

import { useState, Fragment } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import SideNavItem from "./sidenav-Item"
import NavItems from "./nav-items"

const Sidenav = () => {
 const [expanded, setExpanded] = useState(true)
 const navItems = NavItems()

 const toggleSidebar = () => {
  setExpanded(!expanded)
 }

 return (
  <div>
   <div
    className={cn(
     expanded ? "w-[200px]" : "w-[68px]",
     "border-r transition-all duration-300 ease-in-out transform hidden sm:flex h-full bg-white"
    )}
   >
    <aside className="flex h-full flex-col w-full break-words px-4 overflow-x-hidden columns-1">
     <div className="mt-4 relative pb-2">
      <div className="flex flex-col space-y-1">
       {navItems.map((item, i) => {
        if (item.position === "top") {
         return (
          <Fragment key={i}>
           <div>
            <SideNavItem
             label={item.name}
             icon={item.icon}
             path={item.href}
             active={item.active}
             isExpanded={expanded}
            />
           </div>
          </Fragment>
         )
        }
       })}
      </div>
     </div>
     <div className="sticky bottom-0 mt-auto whitespace-nowrap mb-4 transition duration-200 block">
      {navItems.map((item, i) => {
       if (item.position === "bottom") {
        return (
         <Fragment key={i}>
          <div>
           <SideNavItem
            label={item.name}
            icon={item.icon}
            path={item.href}
            active={item.active}
            isExpanded={expanded}
           />
          </div>
         </Fragment>
        )
       }
      })}
     </div>
    </aside>
    <div className="mt-[calc(calc(90vh)-40px)] relative">
     <button
      type="button"
      onClick={toggleSidebar}
      className="absolute bottom-32 right-[-16px] flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 shadow-md hover:shadow-lg transition-shadow duration-300 ease-in-out"
     >
      {expanded ? (
       <ChevronLeft size={16} />
      ) : (
       <ChevronRight size={16} />
      )}
     </button>
    </div>
   </div>
  </div>
 )
}

export default Sidenav