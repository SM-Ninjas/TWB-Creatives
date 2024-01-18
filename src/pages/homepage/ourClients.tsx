import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    autoplay: true, 
    autoplaySpeed: 2000,  
  };

  return (
    <div>
      <div className="w-full h-[377px] flex justify-center items-center">
        <div className="w-[80%] mbl:w-[100%] flex flex-col items-center gap-[30px]">
          <div>
            <h1 className="text-center text-utils font-bold text-[2rem]">
              Our Brilliant Clients
            </h1>
          </div>
          <div className="w-[70%]">
            <Slider {...sliderSettings}>
              {clientData?.map((res) => (
                <div key={res.id} className="p-2 cursor-pointer">
                  <Link to={`/client/${res.id}`}>
                    <img
                      src={`http://localhost:8082${res.attributes.clientLogo.data.attributes.url}`}
                      className="w-[200px] shadow-offset-x-[-4] shadow-offset-y-[-4] shadow-blur-[20] shadow-color-[rgba(0, 0, 0, 0.05)] h-[140px]"
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


