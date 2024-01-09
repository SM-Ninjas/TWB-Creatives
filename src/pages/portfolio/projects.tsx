/* eslint-disable @typescript-eslint/no-explicit-any */
import Filter from "./filter";
import { StyledProject } from "./style";
import { Mouse } from "iconsax-react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";


interface ProjectTypes {
  [x: string]: any;
  id: number;
  attributes: {
    Name: string;
    Description: {
      type: string;
      children: { type: string; text: string }[];
    }[];
    Title: string;
    Color: string,
    category: string ,
    image: {
      data: {
        id: number;
        attributes: {
          url: any;
          name: string;
          formats: {
            thumbnail: {
              name: string;
            };
          };
        };
      };
    };
  };
}

function Projects() {
  const [portfolio, setPortfolio] = useState<ProjectTypes[]>([]);
  const [portfolioCopy, setPortfolioCopy] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "http://localhost:8082/api/portfolios/?populate=*"
        );

        setPortfolio(response.data.data);
        setPortfolioCopy(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };  

    fetchData();
  }, []);

  const filterProjects = (category: string | null) => {
    console.log("Filtering by category:", category);
  
    const tempData = [...portfolio];
    console.log("Temp Data:", tempData);
  
    if (category === null) {
      setPortfolioCopy([...portfolio]);
    } else {
      const filteredProjects = tempData.filter(
        (project) => project.category === category
        );
      console.log("Filtered Projects:", filteredProjects);
      setPortfolioCopy(filteredProjects);
    }
  };
    
  return (
    <>
      <div className=" flex  flex-col items-center  m-[65px] gap-[60px]">
        <div className="w-[50%] text-center">
          <h1 className="text-[2rem] font-bold">
            Discover Our Creative Canvas: Showcasing Excellence in Graphic
            Design, Marketing, and Web Development.
          </h1>
        </div>
        <Mouse
          size="32"
          color="#22092C"
          className="animate-bounce"
          variant="Bulk"
        />
        <div className="flex w-[80%]">
          <div className={`flex flex-col items-center gap-[30px]`} data-aos="fade-up">
            {portfolioCopy.map((p, i) => (
              <StyledProject
                key={i}
                background={p.attributes.Color}
                data-aos="fade-up"
              >
                <div className="mx-[5rem]">
                  <h1 className="text-[#fff] text-[27px] font-bold">
                    {p.attributes.Name}
                  </h1>
                  <p className="text-gray-g2 opacity-[0.60]">
                   {p.attributes.Title}
                  </p>
                  <Link to={`/portfolio/${p.id}`}><h1>Click to Visit</h1></Link>
                </div>
                <div className="">
                  <img
                    src={`http://localhost:8082${p.attributes.image.data.attributes.url}`}
                    className="w-[458px] h-[231px]"
                    alt={p.attributes.image.data.attributes.name}
                  />
                </div>
              </StyledProject>
            ))}
          </div>
          <div className="sticky">
          <Filter onFilterChange={filterProjects}/>
          </div>
        </div>
      </div>
    </>
  );
}
export default Projects;
