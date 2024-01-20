import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
// import CustomButton from "../../components/Button";

function TeamDetails() {
  const { id } = useParams<{ id: string }>();

  const [staff, setStaff] = useState<StaffMember | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/teams/${id}?populate=*`
        );

        setStaff(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  // loading before data fetched
  if (loading) {
    return <div>Loading...</div>;
  }
  if (!staff) {
    return <div>Staff member not found!</div>;
  }

  return (
    <div className="w-full">
      <div className="flex flex-col  items-center">
        <div className=" w-[65%] mb-[5rem]">
          <div className="flex flex-col items-center gap-[8px] ">
            <h1 className=" text-[32px] text-utils font-bold mbl:text-[16px]">
              {staff.attributes.member_name}
            </h1>
            <p className="text-primary mbl:text-[16px] m-2 ">{staff.attributes.Mem_position}</p>
            {/* <CustomButton className=" text-black mb-[40px]">
              Download CV
            </CustomButton> */}
          </div>
          <img
            src={`http://localhost:8082${staff.attributes.MemberImg.data.attributes.url}`}
            alt={staff.attributes.MemberImg.data.attributes.name}
            className="w-[100%] h-[375px]"
          />
        </div>
        <div className="w-[65%] pb-[5rem] dp:flex dp:justify-evenly dp:items-center ">
          <div className="text-center dp:text-left">
            <p className="text-primary mbl:text-[12px]">About {staff.attributes.member_name}</p>
            <h1 className=" text-[32px] text-utils font-bold mbl:text-[16px]">Introduction</h1>
          </div>
          <div className="w-[100%] dp:w-[72%]  text-utils opacity-[.75] mbl:text-[12px]">
            {staff.attributes.Description}
          </div>
        </div>

        <div className="w-[100%] text-center flex justify-center  bg-utils border border-black border-[2px] pt-[100px] pb-[60px]">
          <div className="w-[75%]">
            <div className="mb-[2rem]">
              <h1 className="text-[32px] text-white font-bold mbl:text-[16px]">
                Qualification
              </h1>
              <p className=" text-gray-g2 opacity-[.75] mbl:text-[12px]">
                Here is a quick view on {staff.attributes.member_name}
              </p>
            </div>
            {/* dp:flex dp:justify-center dp:gap-[2rem] */}
            <div className=" flex justify-center gap-[2rem] flex-wrap ">
              <div className="w-[25%] dp:w-[15%]">
                <h1 className="text-[32px] text-white font-extrabold mbl:text-[24px] mbl:text-[12px]">
                  {staff.attributes.Experience}
                </h1>
                <p className="text-gray-g2 opacity-[.75] mbl:text-[12px]">
                  Years of Experience in the field{" "}
                </p>
              </div>
              <div className="w-[25%] dp:w-[15%]">
                <h1 className="text-[32px] text-white font-extrabold mbl:text-[24px] mbl:text-[12px]">
                  {staff.attributes.Mem_education}
                </h1>
                <p className="text-gray-g2 opacity-[.75] mbl:text-[12px]">
                  Latest Academic Qualification{" "}
                </p>
              </div>
              <div className="w-[25%] dp:w-[15%] mbl:text-[12px]">
                <h1 className="text-[32px] text-white font-extrabold mbl:text-[24px] mbl:text-[12px]">
                  {staff.attributes.ValuedSkill}
                </h1>
                <p className="text-gray-g2 opacity-[.75] mbl:text-[12px]">
                  Most valued and mastered skillset
                </p>
              </div>
              <div className="w-[25%] dp:w-[15%]">
                <h1 className="text-[32px] text-white font-extrabold mbl:text-[24px] mbl:text-[12px]">
                  {staff.attributes.Exposure}
                </h1>
                <p className="text-gray-g2 opacity-[.75] mbl:text-[12px]">
                  Years of exposure in the market as team
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-[100%] mt-[120px]">
          <div className="flex justify-center">
            <div className="text-center w-[65%] mb-[5rem]">
              <h1 className="text-[32px] text-utils font-extrabold mbl:text-[16px]">
                Explore {staff.attributes.member_name} Skillsets
              </h1>
              <p className="text-utils opacity-[.75] mbl:text-[12px]">
                Explore different set of skillsets owned by Placeholder and get
                to know who you are trusting your beloved project with.
              </p>
            </div>
          </div>

          {/* dp:flex dp:justify-center dp:gap-[2rem] */}
          <div className="bg-utils flex justify-center">
            <div className=" w-[65%] grid grid-cols-3 justify-items-center gap-[45px] dp:w-[70%] dp:gap-[40px] lp:w-[80%] lp:gap-[20px] lp:grid-cols-2 tl:w-[95%] tl:gap-[25px]  tl:grid-cols-2  mbl:w-[95%] mbl:flex mbl:flex-col mbl:items-center ">
              {staff.attributes.skills.data.map((skill) => (
                <div
                  className="dp:w-[80%] lp:w-[90%] tl:w-[95%] mbl:w-[80%] py-[30px] px-[22px] bg-gray-g2 border text-center rounded-[8px] relative bottom-[30px]"
                  key={skill.id}
                >
                  <h1 className="text-[16px] mb-[1rem] font-bold mbl:text-[16px]">
                    {skill.attributes.Skill_name}
                  </h1>
                  <p className="text-utils opacity-[.75] mbl:text-[12px]">
                    {skill.attributes.skills_descriptions}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="w-full my-[5rem]">
          <div className=" text-center mb-[5rem]">
            <h1 className="text-[32px] text-utils font-bold mb-[15px] mbl:text-[16px]">Achievements</h1>
            <p className="text-utils opacity-[.75] mbl:text-[12px]">
              Explore  {staff.attributes.member_name}  past works and achievements
            </p>
          </div>
          <div className="flex justify-center flex-wrap gap-[20px]">
            {staff.attributes.Achievement.data.map((achievement) => (
              <div
                className="dp:w-[100%] lp:w-[90%] tl:w-[100%] mbl:w-[100%] py-[30px] px-[22px] text-center rounded-[8px] relative bottom-[30px]"
                key={achievement.id}
              >
                <img
                   src={`http://localhost:8082${achievement.attributes.url}`}
                   alt={achievement.attributes.name}
                  className="w-[100%] h-[375px]"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
