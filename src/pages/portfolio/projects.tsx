/* eslint-disable @typescript-eslint/no-explicit-any */
import Filter from "./filter";
import { StyledProject } from "./style";
import { Mouse } from "iconsax-react";

import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function Projects() {
  const [portfolio, setPortfolio] = useState<ProjectTypes[]>([]);
  const [portfolioCopy, setPortfolioCopy] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://admin.twbcreates.com/api/portfolios?populate=*"
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
    // category received from filter component as props
    const tempData = [...portfolio];

    if (category === null) {
      setPortfolioCopy([...portfolio]);
    } else {
      const filteredProjects = tempData.filter(
        (project) => project.attributes.Category === category
      );
      console.log("Filtered Projects:", filterProjects);
      setPortfolioCopy(filteredProjects);
    }
  };

  return (
    <div className="w-full flex  flex-col items-center ">
      <div className="dp:w-[80%] mbl:w-[100%] lp:w-[90%] tl:w-[95%] flex  flex-col items-center  m-[65px] gap-[60px]">
        <div className="dp:w-[70%] mbl:w-[95%] lp:w-[85%] tl:w-[90%] text-center">
          <h1 className="mbl:text-[1.1rem]  tl:text-[1.5rem] lp:text-[1.7rem] dp:text-[2rem] font-bold text-center text-utils">
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

        <div className="w-[80%] flex justify-end sticky mbl:mr-[10rem]">
          <Filter onFilterChange={filterProjects} />
        </div>

        <div
          className={`flex flex-col items-center gap-[30px]`}
          // data-aos="fade-up"
        >
          {portfolioCopy.map((p, i) => {
            // console.log(p.attributes.image.data.attributes);
            console.log(p.attributes.image?.data?.attributes.url);
            return (
              <StyledProject
                key={i}
                background={p.attributes.Color}
                className="flex items-center justify-around mbl:justify-between dp:w-[80%] mbl:w-[100%] mbl:mx-[1rem] lp:w-[50%] tl:w-[70%] "
              >
                <div className="flex flex-col  mx-[3rem]  dp:w-[30%] mbl:w-[100%] mbl:mx-[1rem] lp:w-[50%] tl:w-[70%]">
                  <h1 className="text-[#fff] text-[27px] font-bold">
                    {p.attributes.Name}
                  </h1>
                  <p className="text-gray-g2 opacity-[0.60]">
                    {p.attributes.Title}
                  </p>
                  <Link to={`/portfolio/${p.id}`}>
                    <h1 className="text-white underline">Click to Visit</h1>
                  </Link>
                </div>

                <div className="dp:w-[35%] mbl:w-[90%] lp:w-[75%] tl:w-[80%]">
                  <img
                    // src={{p.attributes.image.data.attributes.url}
                    // src={`${webdevImg.attributes.url}`}
                    src={`https://admin.twbcreates.com${p.attributes.image?.data?.attributes.url}`}
                    alt={p.attributes.image?.data?.attributes.name}
                    className="w-[] h-[231px]"
                  />
                </div>
              </StyledProject>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;

// <img
//   // src={`https://admin.twbcreates.com${p.attributes.image.data.attributes.url}`}
//   // "https://admin.twbcreates.com/api/portfolios?populate=*"

// />
