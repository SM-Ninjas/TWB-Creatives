/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Footer from "../../components/footer";


const ProjectDetails = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<ProjectTypes | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/portfolios/${id}?populate=*`
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
      .map((paragraph) =>
        paragraph.children.map((child) => child.text).join("")
      )
      .join("<br/>"); // Add line breaks between paragraphs
  };

  return (
    <div className="w-full flex flex-col items-center gap-[5rem]">
      <div className="flex justify-center">
        <div className="w-[65%] flex flex-col items-center mt-[4rem] gap-[48px]">
          <div>
            <h1 className="text-utils font-extrabold text-[30px]">
              {project.attributes.Name}
            </h1>
            <p className="text-primary text-center">Responsive Web App</p>
          </div>
          <img
            src={`http://localhost:8082${project.attributes.image.data.attributes.url}`}
            alt={project.attributes.image.data.attributes.name}
            className="w-[100%]"
          />
          <div className="">
            <p
              className="text-utils opacity-[0.60]"
              dangerouslySetInnerHTML={{
                __html: renderDescriptionHTML(project.attributes.Description),
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
          src={`http://localhost:8082${project.attributes.Design_process.data.attributes.url}`}
          alt={project.attributes.Design_process.data.attributes.name}
          className="w-[100%] h-[456px]"
        />
      </div>

      <div className="w-full text-center ">
        <h1 className="text-[2rem] text-utils mb-6">Contributing Members</h1>
        <div className="flex justify-center gap-[60px]">
          {project.attributes.Contributing_members.data.map((member) => (
            <div key={member.id}>
              <img
                src={`http://localhost:8082${member.attributes.formats.thumbnail.url}`}
                alt={member.attributes.name}
                className="rounded-[8px]"
              />
              <h2 className="text-[#111] mt-2">Suyog karki</h2>
              <h4 className="text-utils opacity-[.60]">Lead Developer</h4>
            </div>
          ))}
        </div>
      </div>

      <div className=" text-center">
        <h2 className="text-[2rem] text-utils font-bold">Tech Stacks</h2>
        <div className="flex justify-center gap-[60px] mt-[1.9rem]">
          {project.attributes.Tech_stack_logos.data.map((logo) => (
            <img
              key={logo.id}
              src={`http://localhost:8082${logo.attributes.formats.thumbnail.url}`}
              alt={logo.attributes.name}
              className="w-[100px] h-[100px]"
            />
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProjectDetails;