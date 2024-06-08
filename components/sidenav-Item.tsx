import { ReactElement, FC } from "react"
import { LucideIcon } from "lucide-react"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "./ui/tooltip"
import { cn } from "@/lib/utils"
import Link from "next/link"

const SideNavItem: FC<{
 label: string
 icon: ReactElement<LucideIcon>
 path: string
 active: boolean
 isExpanded: boolean
}> = ({ label, icon, path, active, isExpanded }) => {
 return (
  <>
   {isExpanded ? (
    <Link
     href={path}
     className={cn(
      active
       ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white"
       : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
      "h-full relative flex items-center whitespace-nowrap rounded-md"
     )}
    >
     <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
      {icon}
      <span>{label}</span>
     </div>
    </Link>
   ) : (
    <TooltipProvider delayDuration={70}>
     <Tooltip>
      <TooltipTrigger>
       <Link
        href={path}
        className={cn(
         active
          ? "font-base text-sm bg-neutral-200 shadow-sm text-neutral-700 dark:bg-neutral-800 dark:text-white"
          : "hover:bg-neutral-200 hover:text-neutral-700 text-neutral-500 dark:text-neutral-400 dark:hover:bg-neutral-800 dark:hover:text-white",
         "h-full relative flex items-center whitespace-nowrap rounded-md"
        )}
       >
        <div className="relative font-base text-sm py-1.5 px-2 flex flex-row items-center space-x-2 rounded-md duration-100">
         {icon}
        </div>
       </Link>
      </TooltipTrigger>
      <TooltipContent
       side="left"
       sideOffset={10}
       className="px-3 py-1.5 text-xs bg-white"
      >
       <span>{label}</span>
      </TooltipContent>
     </Tooltip>
    </TooltipProvider>
   )}
  </>
 )
}

export default SideNavItem