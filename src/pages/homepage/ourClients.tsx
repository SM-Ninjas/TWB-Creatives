import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function OurClients() {
  const [clientData, setClientData] = useState<Client[] | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://admin.twbcreates.com/api/clients?populate=*`
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
    <div>
      <div className="w-full h-[380px] flex justify-center items-center">
        <div className="w-[80%] tl:w-[90%] mbl:w-[100%]  flex flex-col items-center gap-[30px] overflow-hidden">
          <div>
            <h1 className="text-center text-utils font-bold text-[2rem] mbl:text-[16px]">
              Our Brilliant Clients
            </h1>
          </div>
          <div className="w-[80%] mbl:w-[160%] tl:w-[100%]">
            
            <Slider {...sliderSettings} className="flex flex-col">
              {clientData?.map((res) => (
                <div
                  key={res.id}
                  className="p-2 cursor-pointer  mr-[30px] mbl:mr-[1rem]"
                >
                  <Link to={`/client/${res.id}`} className="flex justify-center ">
                    <img
                      src={`https://admin.twbcreates.com${res.attributes.clientLogo.data.attributes.url}`}
                      className="w-[220px] h-[130px] shadow-offset-x-[-4] shadow-offset-y-[-4] shadow-blur-[20] shadow-color-[rgba(0, 0, 0, 0.05)] mx-[3.5rem]"
                      alt={res.attributes.clientLogo.data.attributes.url}
                    />
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

export default OurClients;
