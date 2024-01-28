/* eslint-disable @typescript-eslint/no-explicit-any */
import Filter from "./filter";
import { StyledLink } from "./style";
import { Mouse } from "iconsax-react";

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
      setPortfolioCopy(filteredProjects);
    }
  };

  return (
    <div className="w-full flex  flex-col items-center ">
      <div className="dp:w-[80%] mbl:w-[100%] lp:w-[90%] tl:w-[95%] flex  flex-col items-center  m-[60px] gap-[30px]">
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

        <div className="w-[90%] flex justify-end sticky">
          <Filter onFilterChange={filterProjects} />
        </div>

        <div
          className={`flex flex-col items-center gap-[30px] `}
          // data-aos="fade-up"
        >
          {portfolioCopy.map((p, i) => {
            // console.log(p.attributes.image.data.attributes);
            // console.log(p.attributes.image?.data?.attributes.url);
            return (
              <StyledLink
                to={`/portfolio/${p.id}`}
                key={i}
                background={p.attributes.Color}
                className=" flex items-center justify-around mbl:justify-between dp:w-[80%] mbl:w-[85%] mbl:mx-[1rem] lp:w-[50%] tl:w-[70%] "
              >
                <div className="flex flex-col  mx-[3rem]  dp:w-[30%] mbl:w-[100%] mbl:mx-[1rem] lp:w-[50%] tl:w-[70%] gap-4">
                  <h1 className="text-[#fff] text-[27px] font-bold">
                    {p.attributes.Name}
                  </h1>
                  <p className="text-gray-g2 opacity-[0.60]">
                    {p.attributes.Title}
                  </p>
                  <h1 className="text-white">Click to Visit</h1>
                </div>

                <div className="dp:w-[35%] mbl:w-[90%] lp:w-[75%] tl:w-[80%] mbl:hidden">
                  <img
                    // src={{p.attributes.image.data.attributes.url}
                    // src={`${webdevImg.attributes.url}`}
                    src={`https://admin.twbcreates.com${p.attributes.image?.data?.attributes.url}`}
                    alt={p.attributes.image?.data?.attributes.name}
                    className="h-[231px]"
                  />
                </div>
              </StyledLink>
            );
          })}
        </div>
      </div>
    </div>
  );
}
export default Projects;
