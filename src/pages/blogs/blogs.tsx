import { StyledImg, StyledDes } from "./style";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

interface BlogData {
  id: number;
  attributes: {
    BlogTitle: string;
    BlogDate: string;
    BlogDescription: {
      type: string;
      children: { type: string; text: string; bold?: boolean }[];
    }[];
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

const truncateString = (text: string, maxLength: number) => {
  if (!text || typeof text !== "string") {
    console.log("Unable to fetch data");
    return "error occurred";
  }

  if (text.length > maxLength) {
    return text.slice(0, maxLength) + "...";
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

  const renderParagraphs = (
    paragraphs: {
      type: string;
      children: { type: string; text: string; bold?: boolean }[];
    }[]
  ) => {
    const combinedText = paragraphs
      .filter((paragraph) => paragraph.type === "paragraph")
      .map((paragraph) => {
        let paragraphText = "";
        paragraph.children.forEach((child) => {
          paragraphText += child.bold ? `<b>${child.text}</b>` : child.text;
        });
        return paragraphText;
      })
      .join(" ");

    const truncatedText = truncateString(combinedText, 369); // Adjust the maxLength as needed

    return (
      truncatedText + (truncatedText.length < combinedText.length ? "..." : "")
    );
  };

  return (
    <div className="flex flex-col w-full my-[5rem] items-center">
      <div className="flex justify-center p-2 w-[48%] mb-[80px]">
        <h1 className="text-center text-[2rem] font-bold">
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
                <Link to={`/blogs/${blog.id}`}>
                  {blog.attributes.BlogTitle}
                </Link>
              </h2>
              <h3 className="text-primary">{blog.attributes.BlogDate}</h3>
              <StyledDes>
                {renderParagraphs(blog.attributes.BlogDescription)}
              </StyledDes>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
