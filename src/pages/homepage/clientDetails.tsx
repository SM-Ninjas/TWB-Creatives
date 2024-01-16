import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ClientDetails() {
  const { id } = useParams<{ id: string }>();
  const [clientData, setClientData] = useState<Client[] | null>(null);
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
 console.log('hello',clientData)
  return (
    <div>
        <div>
            {clientData?.map((res)=>(
                <div>{res.attributes.ClientName}</div>
            ))}
        </div>
    </div>
  );
}

export default ClientDetails;
