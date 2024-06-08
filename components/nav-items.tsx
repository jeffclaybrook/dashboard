import { usePathname } from "next/navigation"
import { Bell, Briefcase, Home, Settings, User } from "lucide-react"

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
   name: "Profile",
   href: "/profile",
   icon: <User size={20} />,
   active: activeNavItem(pathname, "/profile"),
   position: "top"
  },
  {
   name: "Notifications",
   href: "/notifications",
   icon: <Bell size={20} />,
   active: activeNavItem(pathname, "/notifications"),
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