import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ClientDetails() {
  const { id } = useParams<{ id: string }>();
  const [clientData, setClientData] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/clients/${id}?populate=*`
        );

        setClientData(response.data.data);
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
//  console.log(clientData?.attributes.services.data[1].attributes.serviceName)

  return (
    <div className="w-full flex flex-col items-center gap-[4rem]">
      {/* title */}
      <h1 className="text-[27px] font-bold mt-[2rem]">
        {clientData?.attributes.ClientName}
      </h1>
      {/* intro and about */}
      <div className="w-[65%] dp:flex dp:justify-around dp:items-center">
        <div className="text-center dp:text-left">
          <p className="text-primary">
            About {clientData?.attributes.ClientName}
          </p>
          <h1 className="text-[32px] text-utils font-bold">Introduction</h1>
        </div>
        <div className="w-[100%] dp:w-[60%]  text-utils opacity-[.75]">
          <p>{clientData?.attributes.Description}</p>
        </div>
      </div>
      {/* services we provided */}
      <div className="w-[65%] flex flex-col items-center text-center">
        <h1 className="text-[32px] text-utils font-bold">
          Services We Provided
        </h1>
        <p className="w-[100%] dp:w-[80%] text-utils opacity-[.75] text-[1rem]">
          Explore different services we provided to{" "}
          {clientData?.attributes.ClientName} for their valuable business and
          discover how we value our clients’ requirements and visions.
        </p>
      </div>
      <div className="text-center mb-[2rem]">
        <h1 className="mb-[15px] text-[21px] text-utils font-bold">
          {/* Web Development */}
          {/* {clientData?.attributes.services.data[1].attributes.serviceName} */}
        </h1>
        <p className="py-1 px-4 rounded-[6px] opacity-[0.6] bg-gray-g4 ">
          Requirements {">"} Design {">"} Development
        </p>
      </div>
    </div>
  );
}

export default ClientDetails;
