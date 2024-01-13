import { StyledTeam } from "./style";

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
    // data-aos="fade-up"
    >
      <div className="mt-[5.5rem]">
        <div className="">
          <div className=" bg-utils flex justify-center h-[304px] pt-[103px] ">
            <h1 className="text-[2rem] font-bold text-white">Meet The Team</h1>
          </div>
          <div className="relative bottom-[91px]">
            <div className="flex justify-center gap-[45px]">
              {team.map((teamMember) => (
                <div key={teamMember.id}>
                  <StyledTeam>
                    <img
                      src={`http://localhost:8082${teamMember.attributes.MemberImg.data.attributes.url}`}
                      alt={teamMember.attributes.MemberImg.data.attributes.name}
                      className="w-[261px] h-[268px] rounded-[8px]"
                    />
                    <h1 className="text-utils text-[21px] opacity-[0.6]">
                      {teamMember.attributes.member_name}
                    </h1>
                    <h1 className="text-utils font-bold text-[2rem]">CEO</h1>
                    <Link to={`/about/team/${teamMember.id}`}>
                      <h1 className="text-white underline">Click to Visit</h1>
                    </Link>
                  </StyledTeam>
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
