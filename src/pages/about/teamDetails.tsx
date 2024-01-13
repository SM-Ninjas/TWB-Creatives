import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";
import CustomButton from "../../components/Button";

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
    <div className="w-full flex flex-col items-center">
      <div className="w-[65%]">
        <div className="mb-[5rem]">
          <div className="flex flex-col items-center gap-[8px] ">
            <h1 className=" text-[32px] text-utils font-bold">
              {staff.attributes.member_name}
            </h1>
            <p className="text-primary">{staff.attributes.Mem_position}</p>
            <CustomButton className="mb-[40px]">Download CV</CustomButton>
          </div>
          <img
            src={`http://localhost:8082${staff.attributes.MemberImg.data.attributes.url}`}
            alt={staff.attributes.MemberImg.data.attributes.name}
            className="w-[100%] h-[375px]"
          />
        </div>

        <div className="w-[100%] dp:flex dp:justify-evenly dp:items-center ">
          <div className="text-center dp:text-left">
            <p className="text-primary">About {staff.attributes.member_name} </p>
            <h1 className=" text-[32px] text-utils font-bold">Introduction</h1>
          </div>
          <div className="w-[100%] dp:w-[72%]  text-utils opacity-[.75]">
            {staff.attributes.Description}
          </div>
        </div>
      </div>
    </div>
  );
}

export default TeamDetails;
// dp:w-[70%]