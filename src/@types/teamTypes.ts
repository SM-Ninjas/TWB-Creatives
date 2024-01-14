 declare interface MemberImage {
    data: {
      id: number;
      attributes: {
        name: string;
        alternativeText: string | null;
        caption: string | null;
        width: number;
        height: number;
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
          small: {
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
        hash: string;
        ext: string;
        mime: string;
        size: number;
        url: string;
        previewUrl: string | null;
        provider: string;
        provider_metadata: string | null;
      };
    };
  }
  
  declare  interface Skill {
    id: number;
    attributes: {
      Skill_name: string;
      skills_descriptions: string;
    };
  }
  
  declare interface StaffMember {
    id: number;
    attributes: {
      member_name: string;
      Description: string;
      Experience: string | null;
      Exposure: string | null;
      Mem_position: string;
      publishedAt: string;
      Mem_education: string | null;
      ValuedSkill : string;
      MemberImg: MemberImage;
      skills: {
        data: Skill[];
      };
    };
  }
  
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  declare  interface ApiResponse {
    data: StaffMember[];
  }
  