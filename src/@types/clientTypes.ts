/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
// Client Logo data
declare type ClientLogo = {
  data: {
    id: number;
    attributes: {
      name: string;
      formats: {
        thumbnail: {
          name: string;
          hash: string;
          ext: string;
          mime: string;
          path: string | null;
          width: number;
          height: number;
          size: number;
          url: string;
        };
      };
      url: string;
    };
  };
};

declare type Service = {
  id: number;
  attributes: {
    serviceName: string;
    isServiceUsed: boolean;
  };
};

declare type Services = {
  data: Service[];
};

// Client data
declare type Client = {
  id: number;
  attributes: {
    ClientName: string;
    Description: string;
    clientLogo: ClientLogo;
    webdev_Img: WebDevImg;
    graphics_img: GraphicsDesignImg;
    services: Services;
  };
};

declare type WebDevImg = {
  attributes: any;
  id: number;
  data: {
    [x: string]: any;
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
};
declare type GraphicsDesignImg = {
  attributes: any;
  id: number;
  data: {
    [x: string]: any;
    id: number;
    attributes: {
      name: string;
      url: string;
    };
  };
};

