import { StyledImg, StyledDes } from "./style";
import DOMPurify from 'dompurify';

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

const truncateString = (text: string, maxWords: number) => {
  if (!text || typeof text !== "string") {
    return "error occurred";
  }

  const words = text.split(" ");

  if (words.length > maxWords) {
    // Slice the array to the maximum number of words
    const truncatedWords = words.slice(0, maxWords);

    // Join string back
    const truncatedText = truncatedWords.join(" ");

    // Append ellipsis if the string is truncated
    return `${truncatedText}...`;
  }

  return text;
};

const BlogList = () => {
  const [blogData, setBlogData] = useState<BlogData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/api/blogs/?populate=*"
        );

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
      <div className="w-[80%] flex flex-col items-center gap-[42px] ">
        {blogData.map((blog) => (
          <div key={blog.id} className="flex w-[90%] justify-center gap-[25px]">
            <div className="">
              {blog.attributes.BlogThumbnail && (
                <StyledImg
                  src={`http://localhost:8082${blog.attributes.BlogThumbnail.data.attributes.url}`}
                  alt={blog.attributes.BlogThumbnail.data.attributes.name}
                />
              )}
            </div>
            <div className="w-[26%]">
              <h2 className="text-utils text-[21px] font-bold">
                {blog.attributes.BlogTitle}
              </h2>
              <h3 className="text-primary">{blog.attributes.BlogDate}</h3>{" "}
              <StyledDes
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(
                    truncateString(blog.attributes.BlogDescription, 58)
                  ),
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
