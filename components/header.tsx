"use client"

import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "./ui/button"
import { Avatar, AvatarImage, AvatarFallback } from "./ui/avatar"
import Link from "next/link"
import NavItems from "./nav-items"

const Header = () => {
 const navItems = NavItems()
 const [isOpen, setIsOpen] = useState(false)

 return (
  <header className="flex items-center h-16 px-4 border-b shrink-0 md:px-6 justify-between">
   <Link
    href="#"
    prefetch={false}
    className="flex items-center gap-2 text-lg font-semibold md:text-base"
   >
    <svg
     xmlns="http://www.w3.org/2000/svg"
     viewBox="0 0 24 24"
     fill="currentColor"
     height="1.5em"
     width="1.5em"
    >
     <path d="M12.001 16.709c-1.013-1.271-1.609-2.386-1.808-3.34-.197-.769-.12-1.385.218-1.848.357-.532.89-.791 1.589-.791s1.231.259 1.589.796c.335.458.419 1.075.215 1.848-.218.974-.813 2.087-1.808 3.341l.005-.006zm7.196.855c-.14.934-.775 1.708-1.65 2.085-1.687.734-3.359-.437-4.789-2.026 2.365-2.961 2.803-5.268 1.787-6.758-.596-.855-1.449-1.271-2.544-1.271-2.206 0-3.419 1.867-2.942 4.034.276 1.173 1.013 2.506 2.186 3.996-.735.813-1.432 1.391-2.047 1.748-.478.258-.934.418-1.37.456-2.008.299-3.582-1.647-2.867-3.656.1-.259.297-.734.634-1.471l.019-.039c1.097-2.382 2.43-5.088 3.961-8.09l.039-.1.435-.836c.338-.616.477-.892 1.014-1.231.258-.157.576-.235.934-.235.715 0 1.271.418 1.511.753.118.18.259.419.436.716l.419.815.06.119c1.53 3.001 2.863 5.702 3.955 8.089l.02.019.401.915.237.573c.183.459.221.915.16 1.393l.001.002zm.913-1.791c-.139-.438-.378-.953-.675-1.569v-.022a262.99 262.99 0 00-3.976-8.128l-.084-.121C14.486 4.109 13.849 3.014 12 3.014c-1.827 0-2.604 1.27-3.397 2.922l-.061.119c-1.251 2.426-2.564 5.128-3.975 8.13v.039l-.418.914c-.158.378-.237.575-.259.636C2.878 18.556 4.964 21 7.489 21c.021 0 .099 0 .198-.021h.278c1.313-.159 2.664-.993 4.035-2.485 1.371 1.49 2.725 2.326 4.033 2.485h.279c.1.021.18.021.2.021 2.525.002 4.61-2.444 3.598-5.227z" />
    </svg>
    <span>Airbnb</span>
   </Link>
   <div className="ml-4 flex items-center gap-3">
    <Button
     variant="outline"
     size="icon"
     className="overflow-hidden rounded-full"
    >
     <Avatar>
      <AvatarImage src="/avatar.jpeg" alt="Avatar" />
      <AvatarFallback>JC</AvatarFallback>
     </Avatar>
    </Button>
    <Button
     variant="link"
     onClick={() => setIsOpen(!isOpen)}
     className="sm:hidden"
    >
     <Menu size={20} />
    </Button>
    {isOpen && (
     <div className="fixed inset-0 bg-black bg-opacity-50 z-50">
      <div className="absolute right-0 top-0 left-0 bg-white h-full shadow-lg p-5">
       <ul className="space-y-4">
        {navItems.map((item, i) => (
         <li key={i}>
          <Link
           href={item.href}
           onClick={() => setIsOpen(!isOpen)}
           className="flex items-center gap-2"
          >
           {item.icon}
           <span>{item.name}</span>
          </Link>
         </li>
        ))}
       </ul>
      </div>
     </div>
    )}
   </div>
  </header>
 )
}

export default Header