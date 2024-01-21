// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare interface ProjectTypes {
    [x: string]: unknown;
    id: number;
    attributes: {
      Name: string;
      Description: {
        type: string;
        children: { type: string; text: string }[];
      }[];
      Title: string;
      Color: string;
      Category: string;
      Contributing_members: {
        data: [
          {
            id: number;
            attributes: {
              name: string;
              url: string,
              formats: {
                thumbnail: {
                  name: string;
                  url: string;
                };
              };
            };
          }
        ];
      };
      Tech_stack_logos: {
        data: [
          {
            id: number;
            attributes: {
              name: string;
              url: string,
              formats: {
                thumbnail: {
                  name: string;
                  url: string;
                };
              };
            };
          }
        ];
      };
      image: {
        data: {
          id: number;
          attributes: {
            url: string;
            name: string;
            formats: {
              thumbnail: {
                name: string;
              };
            };
          };
        };
      };
      Design_process: {
        data: {
          id: number;
          attributes: {
            url: string;
            name: string;
            formats: {
              thumbnail: {
                name: string;
              };
            };
          };
        };
      };
    };
  }
  