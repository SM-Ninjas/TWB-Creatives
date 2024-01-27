// member image data
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

// Staff achievement data (images)
declare interface Achievement {
  id: number;
  attributes: {
    name: string;
    url: string;
  };
}

// staff member skill data
declare interface Skill {
  id: number;
  attributes: {
    Skill_name: string;
    skills_descriptions: string;
  };
}

// staff member General data
declare interface StaffMember {
  id: number;
  attributes: {
    member_name: string;
    Achievement: {
      data: Achievement[]; // Fix here: wrap Achievement with data property
    };
    skills: {
      data: Skill[];
    };
    Description: string;
    Experience: string | null;
    Exposure: string | null;
    Mem_position: string;
    publishedAt: string;
    Mem_education: string | null;
    ValuedSkill: string;
    MemberImg: MemberImage;
  };
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
declare interface ApiResponse {
  data: StaffMember[];
}
