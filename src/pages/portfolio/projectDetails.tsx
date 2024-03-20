/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://admin.twbcreates.com/api/portfolios/${id}?populate=*`
        );

        setProject(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!project) {
    return <div>Error loading project details</div>;
  }

  const renderDescriptionHTML = (
    description: ProjectTypes["attributes"]["Description"]
  ) => {
    return description
      ?.map((paragraph) =>
        paragraph?.children.map((child) => child.text).join("")
      )
      .join("<br/>"); // Add line breaks between paragraphs
  };
  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <div className="w-full flex flex-col items-center gap-[5rem]">
      <div className="flex justify-center">
        <div className="w-[65%] dp:w-[75%] mbl:w-[90%] lp:w-[85%] tl:w-[80%] flex flex-col items-center mt-[4rem] gap-[48px]">
          <div>
            <h1 className="text-utils font-extra bold text-[26px] ">
              {project.attributes.Name}
            </h1>
            <p className="text-primary  text-center">Responsive Web App</p>
          </div>
          <img
            src={`https://admin.twbcreates.com${project.attributes?.image?.data?.attributes?.url}`}
            alt={project?.attributes?.image.data?.attributes?.name}
            className="w-[100%]"
          />
          <div className="">
            <p
              className="text-utils opacity-[0.60]"
              dangerouslySetInnerHTML={{
                __html: renderDescriptionHTML(project?.attributes?.Description),
              }}
            />
          </div>
        </div>
      </div>

      <div className="w-full">
        <div className="text-center mb-[30px]">
          <h1 className="text-[2rem] text-utils">Design Process</h1>
          <p className="text-utils opacity-[.6]">
            Identify . Research . Brainstorm . Mockups
          </p>
        </div>
        <img
          src={`https://admin.twbcreates.com${project?.attributes?.Design_process.data?.attributes?.url}`}
          alt={project?.attributes.Design_process?.data?.attributes?.name}
          className="w-[100%] h-[456px]"
        />
      </div>

      <div className="w-full text-center flex flex-col items-center">
        <div className="w-[75%] text-center  flex flex-col items-center mbl:w-[100%]">
          <h2 className="text-[2rem] mb-5 text-utils font-bold mbl:text-[18px]">
            Contributing Members
          </h2>
          <div className=" flex justify-center gap-10 w-[65%] mb-12 mbl:w-[100%]">
            {project.attributes?.Contributing_members?.data?.map((member) => (
              <div key={member.id} className=" mbl:w-[25%]">
                <img
                  src={`https://admin.twbcreates.com${member.attributes?.formats?.thumbnail?.url}`}
                  alt={member?.attributes.name}
                  className=" rounded-[8px] "
                />
                <h2 className="text-[#111] mt-2">
                  {member?.attributes?.caption}
                </h2>
                <h4 className="text-utils opacity-[.60]">{}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Tech stacks */}
        <div className="w-[75%] text-center  flex flex-col items-center mbl:w-[100%]">
          <h2 className="text-[2rem] text-utils font-bold mbl:text-[18px]">
            Tech Stacks
          </h2>
          {/* <div className=" w-[60%] mb-12 mbl:w-[100%] mbl:p-10"> */}
          <Slider
            className="flex justify-center w-[60%] mb-12 mbl:w-[100%] mbl:p-10"
            {...sliderSettings}
          >
            {project?.attributes?.Tech_stack_logos?.data?.map((logo) => (
              <div
                key={logo.id}
                className=""
              >
                <div className="gap-[2rem] m-[2rem] p-1">
                  <img
                    src={`https://admin.twbcreates.com${logo.attributes?.url}`}
                    alt={logo?.attributes.name}
                    className="rounded-[8px] h-[100px] mx-5"
                  />
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ProjectDetails;
