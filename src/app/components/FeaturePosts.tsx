import Image from 'next/image';
import featuredImage1 from "@/app/imagess/feature post/image1.jpg"
import featuredImage2 from "@/app/imagess/feature post/image2.jpg"
import featuredImage3 from "@/app/imagess/feature post/image3.jpg"


const featuredPosts = [
  {
    id: 1,
    title: "Loudest à la Madison #1 (L'Intégral)",
    date: "22 April 2021",
    comments: "10 comments",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imageUrl: featuredImage1,
  },
  {
    id: 2,
    title: "Loudest à la Madison #1 (L'Intégral)",
    date: "22 April 2021",
    comments: "10 comments",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imageUrl: featuredImage2,
  },
  {
    id: 3,
    title: "Loudest à la Madison #1 (L'Intégral)",
    date: "22 April 2021",
    comments: "10 comments",
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.",
    imageUrl: featuredImage3,
  },
];

const FeaturedPosts = () => (
  <div className="container mx-auto px-5 py-24">
    <div className="text-center mb-12">
      <h1 className="text-[40px] font-bold text-gray-900 mb-[30px]">Featured Posts</h1>
      <p className="text-gray-600 font-normal text-[14px] mb-[20px]">Problems trying to resolve the conflict between the two major realms of Classical physics: Newtonian mechanics</p>
    </div>
    <div className="flex flex-wrap -m-4">
      {featuredPosts.map((post) => (
        <div key={post.id} className="p-4 md:w-1/3">
          <div className="h-full bg-white rounded-lg overflow-hidden shadow-md">
            <Image
              className="w-full h-[360px]"
              src={post.imageUrl}
              alt="post"
              width={720}
              height={400}
            />
            <div className="p-6">
              <h2 className="title-font text-lg font-medium text-gray-900 mb-3">{post.title}</h2>
              <p className="leading-relaxed mb-3">{post.description}</p>
              <div className="flex items-center flex-wrap">
                <span className="text-gray-500 mr-3">{post.date}</span>
                <span className="text-gray-500 mr-3">{post.comments}</span>
                <div className="text-indigo-500 inline-flex items-center md:mb-2 lg:mb-0">Learn More</div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default FeaturedPosts;
