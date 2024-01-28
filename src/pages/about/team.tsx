import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurTeam() {
  const [team, setTeam] = useState<StaffMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "https://admin.twbcreates.com/api/teams/?populate=*"
        );

        setTeam(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

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
    <div className="w-full" data-aos="fade-up">
      <div className="mt-[2.5rem]">
        <div className="  bg-utils flex justify-center h-[304px] pt-[103px] ">
          <h1 className="text-[2rem] font-bold text-white mbl:text-[18px]">
            Meet The Team
          </h1>
        </div>
        <div className="relative bottom-[90px]">
          <div className="flex justify-center flex-wrap mbl:flex-col tl:items-center tl:flex-col mbl:flex-col  mbl:items-center">
            <Slider
              className="w-[70%] flex justify-center gap-[45px] mbl:flex-col mbl:items-center mbl:w-[75%] lp:w-[80%] tl:flex-wrap"
              {...sliderSettings}
            >
              {team.map((teamMember) => (
                <div className="" key={teamMember.id}>
                  <Link to={`/about/team/${teamMember.id}`}>
                    <div className="">
                      <img
                        src={`https://admin.twbcreates.com${teamMember.attributes.MemberImg.data.attributes.url}`}
                        alt={
                          teamMember.attributes.MemberImg.data.attributes.name
                        }
                        className="w-[261px] h-[268px]  rounded-[8px]"
                      />
                      <h1 className="text-utils text-[21px] mt-4 opacity-[0.6]">
                        {teamMember.attributes.member_name}
                      </h1>
                      <h1 className="text-utils  text-[18px]  mt-4">
                        {teamMember.attributes.Mem_position}
                      </h1>
                    </div>
                  </Link>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;
