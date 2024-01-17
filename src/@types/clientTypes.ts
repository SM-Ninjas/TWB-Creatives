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

declare type services = {
  data : [{
    id : number,
    attributes : {
      serviceName : string
    }
  } 
  ]
}

// Client data
declare type Client = {
  id: number;
  attributes: {
    ClientName: string;
    Description: string;
    clientLogo: ClientLogo;
    services : services;

  };
};


