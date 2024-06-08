import Image from "next/image"

const data = [
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-1.svg"
 },
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-2.svg"
 },
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-3.svg"
 },
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-4.svg"
 },
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-5.svg"
 },
 {
  title: "Lorem ipsum",
  subtitle: "Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor sit. Lorem ipsum dolor sit amet consecetur adipsicing ipsum dolor sit ipsum dolor sit amet consecetur adipsicing ipsum dolor",
  image: "/placeholder-6.svg"
 }
]

const Cards = () => {
 return (
  <section className="flex flex-wrap gap-4 my-4">
   {data.map((item, i) => (
    <div key={i} className="flex flex-col gap-5 grow basis-72 bg-white border border-slate-200 p-4 rounded-lg">
    <div className="flex items-center justify-center rounded-full">
     <Image
      src={item.image}
      alt={item.title}
      width={800}
      height={250}
      className="rounded-md"
     />
    </div>
    <div className="flex flex-col">
     <h4>{item.title}</h4>
     <h5 className="text-sm font-normal text-slate-500">{item.subtitle}</h5>
    </div>
   </div>
   ))}
  </section>
 )
}

export default Cards