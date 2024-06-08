import { ReactNode } from "react"

interface MainProps {
 title: string
 children: ReactNode
}

const Main = ({ title, children }: MainProps) => {
 return (
  <main className="flex flex-1 py-4 h-screen sm:h-fit flex-col space-y-2 px-4">
   <h1>{title}</h1>
   {children}
  </main>
 )
}

export default Main