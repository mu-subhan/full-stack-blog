import { Link } from "react-router-dom"
import Image from "./Image"
import {format} from "timeago.js"


const PostListItem = ({post}) => {
  return (
    <div className="flex flex-col xl:flex-row gap-8 mb-8">
      {/* iamge */}
     {post.img && <div className="md:hidden xl:block xl:w-1/3">
        <Image src={post.img} className="rounded-2xl object-cover" w="735"/>
      </div>}

      {/* detail  */}
      <div className="flex flex-col gap-4 xl:w-2/3">
        <Link to={`/${post.slug}`} className="text-4xl font-semibold">
        {post.title}
        {/* console.log(post); */}
        
        </Link>
        <div className="flex item-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">user will be upload</Link>
            <span>on</span>
            <Link className="text-blue-800">{post.category}</Link>
            <span>{format(post.createdAt)}</span>
   
        </div>
        <p>
            {post.desc}
        </p>
        <Link to={`/${post.slug}`} className="underline text-blue-800 text-sm">Read more</Link>
      </div>
    </div>
  )
}

export default PostListItem