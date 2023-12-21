// Projects.js
import { useState, useEffect } from "react";
import Project from "./project.json";
import { StyledProject } from "./style";
import Filter from "./filter";
import { Mouse } from "iconsax-react";

interface ProjectTypes {
  name: string;
  description: string;
  image: string;
  background: string;
  text: string;
  category: string;
}

function Projects() {
  const [portfolio, setPortfolio] = useState<ProjectTypes[]>([]);
  const [portfolioCopy, setPortfolioCopy] = useState<ProjectTypes[]>([]);

  useEffect(() => {
    setPortfolio(Project);
    setPortfolioCopy([...portfolio]);
  }, [portfolio]);

  // category argument passed from filter.tsx
  const filterProjects = (category: string | null) => {
    const tempData = [...portfolio];

    if (category === null) {
      setPortfolioCopy([...portfolio]);
    } else {
      // Filter projects based on the selected category (case-insensitive)
      const filteredProjects = tempData.filter(
        (project) => project.category.toLowerCase() === category.toLowerCase()
      );
      setPortfolioCopy(filteredProjects);
    }
  };

  return (
    <>
      <div className="flex flex-col items-center m-[65px] gap-[60px] ">
        <div className="w-[687px] h-[138px] text-center ">
          <h1 className="text-[2rem] font-bold">
            Discover Our Creative Canvas: Showcasing Excellence in Graphic
            Design, Marketing, and Web Development.
          </h1>
        </div>
        <Mouse size="32" color="#22092C" className="animate-bounce" variant="Bulk" />
        <div className="flex">
          <div className="flex flex-col gap-[30px] ">
            {portfolioCopy.map((p, i) => (
              <StyledProject background={p.background} key={i}>
                <div className="mx-[5rem]">
                  <h1 className="text-white  text-[27px] font-bold">
                    {p.name}
                  </h1>
                  <p className="text-gray-g2 opacity-[0.60]">{p.description}</p>
                </div>
                <div className="">
                  <img src={p.image} className="w-[458px] h-[231px]" alt="" />
                </div>
              </StyledProject>
            ))}
          </div>
          <div className="ml-6 fixed button-[100px] right-[160px]   z-10">
            {/* Adjust the positioning of your Filter component here */} 
            <Filter onFilterChange={filterProjects} />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;

