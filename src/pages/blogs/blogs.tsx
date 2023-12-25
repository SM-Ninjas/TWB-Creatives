import { useState, useEffect } from "react";
import axios from "axios";

interface BlogData {
  id: number;
  attributes: {
    BlogTitle: string;
    BlogDate: string;
    BlogDescription: string;
    BlogThumbnail: {
      data: {
        id: number;
        attributes: {
          name: string;
          url: string;
        };
      };
    };
  };
}

const BlogList = () => {
  const [blogData, setBlogData] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        
        const response = await axios.get("http://localhost:8082/api/blogs?populate=*");

        setBlogData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);
  return (
    <div className="flex flex-col w-full items-center">
      <div className="flex justify-center text-[2rem] p-2 w-[48%] mt-[73px] mb-[153px]">
        <h1 className="text-center">
          Explore Insights and Inspiration: Our Blog Unveils the Latest Trends,
          Tips, and Stories in Design, Marketing, and Web Development.
        </h1>
      </div>
      <ul>
        {blogData.map((blog) => (
          <div key={blog.id}>
            <li>
              <h2>{blog.attributes.BlogTitle}</h2>
              <p>{blog.attributes.BlogDescription}</p>
              <img src= {blog.attributes.BlogThumbnail.data.attributes.name} alt="my image " />
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default BlogList;
