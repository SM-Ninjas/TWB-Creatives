import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function OurTeam() {
  const [team, setTeam] = useState<StaffMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:8082/api/teams/?populate=*"
        );

        setTeam(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <div
      className="w-full"
      data-aos="fade-up"
    >
      <div className="mt-[2.5rem]">
        <div className="  bg-utils flex justify-center h-[304px] pt-[103px] ">
          <h1 className="text-[2rem] font-bold text-white mbl:text-[12px]">Meet The Team</h1>
        </div>
        <div className="relative bottom-[90px]">
          <div className="flex justify-center flex-wrap mbl:flex-col tl:items-center tl:flex-col mbl:flex-col  mbl:items-center">
            <div className="w-[70%] flex justify-center gap-[45px] mbl:flex-col mbl:items-center mbl:w-[75%] lp:w-[80%] tl:flex-wrap">
              {team.map((teamMember) => (
                <div className="" key={teamMember.id}>
                  <Link to={`/about/team/${teamMember.id}`}>
                    <div className="">
                      <img
                        src={`http://localhost:8082${teamMember.attributes.MemberImg.data.attributes.url}`}
                        alt={
                          teamMember.attributes.MemberImg.data.attributes.name
                        }
                        className="w-[261px] h-[268px]  rounded-[8px]"
                      />
                      <h1 className="text-utils text-[21px] mt-4 opacity-[0.6]">
                        {teamMember.attributes.member_name}
                      </h1>
                      <h1 className="text-utils font-bold text-[2rem]  mt-4">CEO</h1>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
