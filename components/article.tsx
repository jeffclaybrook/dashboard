import Image from "next/image"

interface ArticleProps {
 image: string
}

const Article = ({ image }: ArticleProps) => {
 return (
  <section className="my-4">
   <Image
    src={image}
    alt="Placeholder"
    width={676}
    height={480}
    className="rounded-md mx-auto mb-6"
   />
   <p className="text-sm text-slate-600 mb-4 max-w-[676px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis.</p>
   <p className="text-sm text-slate-600 mb-4 max-w-[676px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis.</p>
   <p className="text-sm text-slate-600 mb-4 max-w-[676px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis.</p>
   <p className="text-sm text-slate-600 mb-4 max-w-[676px] mx-auto">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis voluptatem? Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum hic in deleniti ducimus porro animi magnam beatae quam dolor veniam, eligendi quaerat dolorum omnis.</p>
  </section>
 )
}

export default Article