import { Link } from "react-router-dom"
import Image from "./Image"
const PostListItem = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-8">
      {/* iamge */}
      <div className="md:hidden xl:block xl:w-1/3">
        <Image src="public/postImg.jpeg" className="rounded-2xl object-cover" w="735"/>
      </div>

      {/* detail  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to="/test" className="text-4xl font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </Link>
        <div className="flex item-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design</Link>
            <span>2 days ago</span>
   
        </div>
        <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, nihil dicta libero, quisquam autem quod magni, sit consequatur magnam beatae voluptates similique voluptatum? Cupiditate quas voluptatum voluptas, porro cumque corporis!
        </p>
        <Link to="/test" className="underline text-blue-800 text-sm">Read more</Link>
      </div>
    </div>
  )
}

export default PostListItem