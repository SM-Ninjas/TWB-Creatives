import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function OurClients() {
  const [clientData, setClientData] = useState<Client[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8082/api/clients/?populate=*`
        );

        setClientData(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="w-full h-[377px] flex justify-center items-center">
        <div className="w-[80%] flex flex-col items-center gap-[30px]">
          <div>
            <h1 className="text-center text-utils font-bold text-[2rem]">
              Our Brilliant Clients
            </h1>
          </div>
          <div className="  w-[70%] flex justify-center items-center">
            {clientData?.map((res) => (
              <div key={res.id} className="p-2 cursor-pointer">
                 <Link to={`/client/${res.id}`}>
                 <img
              src={`http://localhost:8082${res.attributes.clientLogo.data.attributes.url}`}
              className="w-[300px] shadow-offset-x-[-4] shadow-offset-y-[-4] shadow-blur-[20] shadow-color-[rgba(0, 0, 0, 0.05)] h-[120px]"
              alt={res.attributes.clientLogo.data.attributes.url  }
              />
              </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurClients;

