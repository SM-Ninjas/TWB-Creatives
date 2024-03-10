import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function ClientDetails() {
  const { id } = useParams<{ id: string }>();
  const [clientData, setClientData] = useState<Client | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://admin.twbcreates.com/api/clients/${id}?populate=*`
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
  // console.log("Graphics Images:", clientData?.attributes.graphics_img.data);

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  console.log(
    "Social Marketing Data:",
    clientData?.attributes?.socialMarketing?.data
  );
  console.log(
    "Event Handling Data:",
    clientData?.attributes?.eventHandling?.data
  );

  console.log(
    "Event Handling Data:",
    clientData?.attributes?.graphics_img?.data
  );

  return (
    <div className="w-full flex flex-col items-center gap-[4rem]">
      {/* title */}
      <h1 className="text-[27px] font-bold mt-[2rem] mbl:text-[18px]">
        {clientData?.attributes.ClientName}
      </h1>
      {/* intro and about */}
      <div className="w-[65%] flex gap-[3rem] dp:flex dp:justify-around dp:items-center dp:w-[60%] lp:w-[70%] tl:w-[70%] mbl:w-[90%] mbl:text-center mbl:block">
        <div className="text-center dp:text-left">
          <p className="text-primary mbl:text-[14px]">
            About {clientData?.attributes.ClientName}
          </p>
          <h1 className="text-[32px] text-utils font-bold mbl:text-[18px]">
            Introduction
          </h1>
        </div>
        <div className="text-utils opacity-[.75] mbl:text-[12px]">
          <p>{clientData?.attributes.Description}</p>
        </div>
      </div>
      {/* services we provided */}
      <div className="w-[65%] flex flex-col items-center text-center">
        <h1 className="text-[32px] text-utils font-bold mbl:text-[18px]">
          Services We Provided
        </h1>
        <p className="w-[100%] dp:w-[80%] text-utils opacity-[.75] text-[1rem] mbl:text-[12px]">
          Explore different services we provided to
          {clientData?.attributes.ClientName} for their valuable business and
          discover how we value our clients’ requirements and visions.
        </p>
      </div>

      <div className=" w-full  flex flex-col items-center text-center mb-[2rem] gap-[5rem]">
        {clientData?.attributes.services.data.map((service) => (
          <div className="w-[85%]" key={service.id}>
            {service.attributes.serviceName == "Web Development" && (
              <div className="w-[100%] flex flex-col items-center border">
                <div className=" mbl:w-[60%] tl:w-[40%] lp:w-[30%] dp:w-[30%] ">
                  <h1 className="text-[21px] font-semibold mbl:text-[14px]">
                    {service.attributes.serviceName}
                  </h1>
                  <p className="mt-[1rem]  mb-[2rem] rounded-[6px] opacity-[0.6] bg-gray-g4 mbl:text-[12px] ">
                    Requirements {">"} Design {">"} Development
                  </p>
                </div>
                <div className="w-[90%] mbl:w-[90%]">
                  {clientData?.attributes.webdev_Img.data?.map(
                    (webdevImg: WebDevImg) => (
                      <img
                        key={webdevImg.id}
                        src={`https://admin.twbcreates.com${webdevImg?.attributes.url}`}
                        alt={
                          webdevImg?.data?.attributes.formats?.thumbnail?.name
                        }
                        className="rounded-[8px]"
                      />
                    )
                  )}
                </div>
              </div>
            )}

            {service.attributes.serviceName === "Graphics Designing" && (
              <div className="w-[100%] flex flex-col items-center">
                <div className=" mbl:w-[60%] tl:w-[40%] lp:w-[30%] dp:w-[30%] ">
                  <h1 className="text-[21px] font-semibold mbl:text-[14px]">
                    {service.attributes.serviceName}
                  </h1>
                  <p className="mt-[1rem]  mb-[2rem] rounded-[6px] opacity-[0.6] bg-gray-g4 mbl:text-[12px] ">
                    Process1 {" > "} process2 {" > "} process...
                  </p>
                </div>

                <div className="w-[90%] mbl:w-[90%]">
                  {/* <div className="border border-black flex justify-center items-center p-2"> */}
                  <Slider {...sliderSettings}>
                    {clientData?.attributes.graphics_img.data?.map(
                      (img: GraphicsDesignImg) => (
                        <img
                          key={img.id}
                          src={`https://admin.twbcreates.com${img.attributes.url}`}
                          alt={img.attributes.name}
                          className="rounded-[8px]"
                        />
                      )
                    )}
                    {/* </div> */}
                  </Slider>
                </div>
              </div>
            )}

            {service.attributes.serviceName === "Social Media Marketing" && (
              <div className="w-[100%] flex flex-col items-center">
                <div className=" mbl:w-[60%] tl:w-[40%] lp:w-[30%] dp:w-[30%] ">
                  <h1 className="text-[24px] font-semibold mbl:text-[14px] mb-5">
                    {service.attributes.serviceName}
                  </h1>
                  <p className="mt-[1rem]  mb-[2rem] rounded-[6px] opacity-[0.6] bg-gray-g4 mbl:text-[12px] ">
                    Strategy {">"} Execution {">"} Analysis
                  </p>
                </div>

                <div className="w-[90%] mbl:w-[90%]">
                  {/* <div className="border border-black flex justify-center items-center p-2"> */}
                  <Slider {...sliderSettings}>
                    {clientData?.attributes?.socialMarketing?.data?.map(
                      (img: SocialMediaMarketing) => (
                        <img
                          key={img.id}
                          src={`https://admin.twbcreates.com${img?.attributes?.url}`}
                          alt={img.attributes.name}
                          className="rounded-[8px]"
                        />
                      )
                    )}
                    {/* </div> */}
                  </Slider>
                </div>
              </div>
            )}
            {service.attributes.serviceName === "Event Handling" && (
              <div className="w-[100%] flex flex-col items-center">
                <div className=" mbl:w-[60%] tl:w-[40%] lp:w-[30%] dp:w-[30%] ">
                  <h1 className="text-[24px] font-semibold mbl:text-[14px] mb-5">
                    {service.attributes.serviceName}
                  </h1>
                  <p className="mt-[1rem]  mb-[2rem] rounded-[6px] opacity-[0.6] bg-gray-g4 mbl:text-[12px] ">
                    Planning {">"} Execution {">"} Evaluation
                  </p>
                </div>

                <div className="w-[90%] mbl:w-[90%]">
                  {/* <div className="border border-black flex justify-center items-center p-2"> */}
                  <Slider {...sliderSettings}>
                    {clientData?.attributes?.eventHandling?.data?.map(
                      (img: eventHandlingImg) => (
                        <img
                          key={img.id}
                          src={`https://admin.twbcreates.com${img.attributes.url}`}
                          alt={img.attributes.name}
                          className="rounded-[8px]"
                        />
                      )
                    )}
                    {/* </div> */}
                  </Slider>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ClientDetails;
