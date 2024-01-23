import { StyledImg, StyledDes } from "./style";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

declare interface BlogData {
  id: number;
  attributes: {
    BlogTitle: string;
    BlogDate: string;
    set_on_top: boolean;
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
          "https://admin.twbcreates.com/api/blogs?populate=*"
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

    const truncatedText = truncateString(combinedText, 369);

    return (
      truncatedText + (truncatedText.length < combinedText.length ? "..." : "")
    );
  };

  // Filter data to separate set_on_top and others
  const featuredBlogs = blogData.filter((blog) => blog.attributes.set_on_top);
  const otherBlogs = blogData.filter((blog) => !blog.attributes.set_on_top);

  return (
    <div className="flex flex-col items-center my-[5rem] mbl:my-[1rem]">
      <div className="flex justify-center p-2 w-[48%] mb-[80px] mbl:w-[95%]  tl:w-[90%] lp:w-[75%] mbl:mb-[20px]">
        <h1 className="mbl:text-[1.1rem]  tl:text-[1.5rem] lp:text-[1.7rem] dp:text-[2rem] font-bold text-center text-utils">
          Explore Insights and Inspiration: Our Blog Unveils the Latest Trends,
          Tips, and Stories in Design, Marketing, and Web Development.
        </h1>
      </div>

      <div className="dp:w-[75%] mbl:w-[90%] lp:w-[80%] tl:w-[80%]">
        <div className="mb-[4rem]">
          {featuredBlogs.map((blog) => (
            <div className="flex gap-10 tl:block mbl:block" key={blog.id}>
              <div className="dp:w-[70%] mbl:w-[95%] lp:w-[85%] tl:w-[90%]">
                {blog.attributes.BlogThumbnail && (
                  <StyledImg
                    src={`https://admin.twbcreates.com${blog.attributes.BlogThumbnail.data.attributes.url}`}
                    alt={blog.attributes.BlogThumbnail.data.attributes.name}
                  />
                )}
              </div>
              <div className="dp:w-[55%] mbl:w-[100%] lp:w-[75%] tl:w-[100%]">
                <h2 className="text-utils text-[21px] font-bold mbl:text-[18px]">
                  <Link to={`/blogs/${blog.id}`}>
                    {blog.attributes.BlogTitle}
                  </Link>
                </h2>
                <h3 className="text-primary">{blog.attributes.BlogDate}</h3>
                <StyledDes className="">
                  {renderParagraphs(blog.attributes.BlogDescription)}
                </StyledDes>
              </div>
            </div>
          ))}
        </div>

        <div className="  grid grid-cols-2 gap-[3rem] tl:grid-cols-1 mbl:grid-cols-1">
          {otherBlogs.map((blog) => (
            <div key={blog.id} className="">
              {blog.attributes.BlogThumbnail && (
                <StyledImg
                  src={`https://admin.twbcreates.com${blog.attributes.BlogThumbnail.data.attributes.url}`}
                  alt={blog.attributes.BlogThumbnail.data.attributes.name}
                />
              )}
              <div className="">
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
    </div>
  );
};

export default BlogList;