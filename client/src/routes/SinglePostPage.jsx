import { Link } from "react-router-dom";
import Image from "../components/Image";
import PostMenuActions from "../components/PostMenuActions";
import Search from "../components/Search";
import Comments from "../components/Comments.jsx";

const SinglePostPage = () => {
  return (
    <div className="flex flex-col gap-8">
      {/* detail  */}
      <div className="flex gap-8">
        <div className="lg:w-3/5 flex flex-col gap-8">
          <h1 className="text-xl md:text-3xl xl:text-4xl 2xl:text-5xl font-semibold">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nulla velit repudiandae ad.
          </h1>
          <div className="flex items-center gap-2 text-gray-400 text-sm">
            <span>Written by</span>
            <Link className="text-blue-800">John Doe</Link>
            <span>on</span>
            <Link className="text-blue-800">Web Design </Link>
            <span>2 days ago</span>
          </div>

          <p className="text-gray-500 font-medium">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus consequuntur repellendus, pariatur quaerat ut porro. Esse maiores, rem unde temporibus magnam ad commodi ipsa architecto nisi. Quos vel voluptate totam?
          </p>
        </div>
        <div className="hidden lg:block w-2/5">
          <Image src="public/postImg.jpeg" className="rounded-2xl" w="600" />
        </div>
      </div>

      {/* content */}
      <div className="flex flex-col lg:flex-row gap-12 justify-between">
        {/* text  */}
        <div className="lg:text-lg flex flex-col gap-6 text-justify lg:w-3/5">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus, iure aperiam, officia voluptatem sequi obcaecati rerum reprehenderit, modi nesciunt temporibus doloribus maiores ad nam quibusdam dicta libero ab quas soluta?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe laudantium quaerat inventore. Repellat ipsa laudantium expedita pariatur ab quo quia rerum quibusdam enim, sequi illo fugit numquam, unde minima recusandae.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas iure veritatis laboriosam? Aliquid exercitationem veniam nemo, nulla itaque labore modi dolorum fugiat mollitia in consequatur ipsum, quo repellat voluptate tempore.
            Sapiente, asperiores harum eos aut ullam sit ducimus debitis adipisci aperiam veritatis nihil odio iure blanditiis placeat nostrum. Odio, ea aliquid! Quasi qui sunt aliquam harum expedita error accusamus distinctio!
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Optio rem vero provident laboriosam! Sed illo ea a corporis, dolore suscipit nostrum, architecto natus expedita quam obcaecati modi est provident labore?
          </p>
        </div>

        {/* menu  */}
        <div className="lg:w-2/5 flex flex-col gap-8 sticky top-8 ">
  <div className="px-4">
    <h1 className="mb-4 text-sm font-medium">Author</h1>
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-8">
        <Image src="public/userImg.jpeg" className="w-12 h-12 rounded-full object-cover" w="48" h="48" />
        <Link>John Doe</Link>
      </div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>
      <div className="flex gap-8">
        <Link>
          <Image src="public/facebook.svg" />
        </Link>
        <Link>
          <Image src="public/instagram.svg" />
        </Link>
      </div>
    </div>
    <PostMenuActions />
    <h1 className="mt-8 mb-4 text-sm font-medium">Categories</h1>
    <div className="flex flex-col gap-2 text-sm">
      <Link to="/" className="underline">All</Link>
      <Link to="/" className="underline">Web Design</Link>
      <Link to="/" className="underline">Development</Link>
      <Link to="/" className="underline">Databases</Link>
      <Link to="/" className="underline">Search Engines</Link>
      <Link to="/" className="underline">Marketing</Link>
    </div>

    <h1 className="mt-8 mb-4 text-sm font-medium">Search</h1>
    <Search />
  </div>
</div>
      </div>
<Comments/>
    </div>
  );
};

export default SinglePostPage;