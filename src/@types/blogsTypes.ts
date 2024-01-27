// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare interface BlogData {
  id: number;
  attributes: {
    BlogTitle: string;
    BlogDate: string;
    set_on_top: boolean;
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
          formats: {
            thumbnail: {
              name: string;
              url: string;
            };
          };
        };
      };
    };
  };
}
