
 // eslint-disable-next-line @typescript-eslint/no-unused-vars
 declare interface BlogData {
    id: number;
    attributes: {
      BlogTitle: string;
      BlogDate: string;
      BlogDescription: {
        type: string;
        children: { type: string; text: string; bold?: boolean }[];
      }[];
      BlogThumbnail: {
        data: {
          id: number;
          attributes: {
            name: string;
            url: string;
          };
        };
      };
    };
  }