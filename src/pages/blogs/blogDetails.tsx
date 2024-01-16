import { StyledDes } from "./style";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import DisqusComments from "../../components/comments/comments";

// import { renderToString } from "react-dom/server";


const BlogDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [blogDetails, setBlogDetails] = useState<BlogData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/blogs/$?populate=*{id}`
        );
        setBlogDetails(response.data.data);
      } catch (error) {
        console.error("Error fetching blog details:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!blogDetails || !blogDetails.attributes) {
    return <div>Error loading blog details</div>;
  }

  const renderParagraphs = (
    paragraphs: {
      type: string;
      children: { type: string; text: string; bold?: boolean }[];
    }[]
  ) => {
    const htmlString = paragraphs
      .map((paragraph) =>
        paragraph.children.map((child) => `<p>${child.text}</p>`).join("")
      )
      .join("");
    // dangerouslysetinnerhtml stuff passed from here
    return { __html: htmlString };
  };

  //   destructuring necessary fetched data
  const { BlogTitle, BlogDate, BlogThumbnail, BlogDescription } =
    blogDetails.attributes;

  return (
    <div className="">
      <div className="flex justify-center  w-full">
        <div
          key={blogDetails.id}
          className="flex flex-col w-[60%] items-center gap-[60px]"
        >
          <div className="w-[80%] mt-[60px] text-center">
            <h2 className="text-utils text-[32px] font-bold">{BlogTitle}</h2>
            <h3 className="text-primary text-[1rem]">{BlogDate}</h3>
          </div>
          <div className="">
            {BlogThumbnail && (
              <img
                className="w-[100%] rounded-[14px]"
                src={`http://localhost:8082${BlogThumbnail.data.attributes.url}`}
                alt={BlogThumbnail.data.attributes.name}
              />
            )}
          </div>
          <StyledDes
            dangerouslySetInnerHTML={renderParagraphs(BlogDescription)}
          />
        <DisqusComments
          url={`http://localhost:5173/blogs/${blogDetails.id}`}
          identifier={blogDetails.id.toString()}
          title={blogDetails.attributes.BlogTitle}
        />
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
