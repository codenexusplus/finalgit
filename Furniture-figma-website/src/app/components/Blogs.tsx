import React from "react";
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import DateRangeIcon from '@mui/icons-material/DateRange';
import Image from "next/image";
// Define types for the blog props
interface Blog {
  id: number;
  image: string;
  title: string;
  date: string;
  readTime: string;
}

// Example data for the blogs
const blogs: Blog[] = [
  {
    id: 1,
    image: "/assets/imgs/blog1.png", // Replace with actual image paths
    title: "Going all-in with millennial design",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
  {
    id: 2,
    image: "/assets/imgs/blog2.png", 
    title: "Going all-in with millennial design",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
  {
    id: 3,
    image: "/assets/imgs/blog3.png", 
    title: "Going all-in with millennial design",
    date: "12th Oct 2022",
    readTime: "5 min",
  },
];

// BlogCard component with props type
const BlogCard: React.FC<Blog> = ({ image, title, date, readTime }) => (
  <div className="bg-white shadow rounded-lg overflow-hidden">
    <Image src={image} alt={title}  layout="responsive" height={300} width={300} className="w-full h-40 object-cover" />
    <div className="p-4 text-center">
      <h3 className="mt-4 text-lg font-medium">{title}</h3>
      <p className="text-black mb-4 text-xl mt-2 cursor-pointer">Read More</p>
      <div className="flex justify-center items-center gap-4 text-gray-500 text-sm mt-2">
        <span>
          <AccessTimeIcon/> {readTime}
        </span>
        <span>
          <DateRangeIcon/> {date}
        </span>
      </div>
    </div>
  </div>
);

// Blogs component
const Blogs: React.FC = () => (
  <div className="max-w-4xl mx-auto px-4 py-16">
    <h2 className="text-2xl font-bold text-center mb-4">Our Blogs</h2>
    <p className="text-gray-500 text-center mb-6">
      Find a bright idea to suit your taste with our great selection
    </p>
    <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
      {blogs.map((blog) => (
        <BlogCard key={blog.id} {...blog} />
      ))}
    </div>
    <div className="text-center mt-12">
      <a
        href="/blogs"
        className="text-black mb-4 text-xl mt-4 cursor-pointer underline"
      >
        View All Post
      </a>
    </div>
  </div>
);

export default Blogs;
