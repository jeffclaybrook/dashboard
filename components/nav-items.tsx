import { usePathname } from "next/navigation"
import { BarChart3, Briefcase, Home, Settings, StickyNote } from "lucide-react"

const NavItems = () => {
 const pathname = usePathname()
 
 const activeNavItem = (pathname: string, nav: string) => {
  return pathname.includes(nav)
 }

 return [
  {
   name: "Home",
   href: "/",
   icon: <Home size={20} />,
   active: pathname === "/",
   position: "top"
  },
  {
   name: "Posts",
   href: "/posts",
   icon: <StickyNote size={20} />,
   active: activeNavItem(pathname, "/posts"),
   position: "top"
  },
  {
   name: "Analytics",
   href: "/analytics",
   icon: <BarChart3 size={20} />,
   active: activeNavItem(pathname, "/analytics"),
   position: "top"
  },
  {
   name: "Projects",
   href: "/projects",
   icon: <Briefcase size={20} />,
   active: activeNavItem(pathname, "/projects"),
   position: "top"
  },
  {
   name: "Settings",
   href: "/settings",
   icon: <Settings size={20} />,
   active: activeNavItem(pathname, "/settings"),
   position: "bottom"
  },
 ]
}

export default NavItems