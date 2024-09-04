type PolicyText = {
  value: string;
};

type PrivacyPolicyPage = {
  text: PolicyText;
  title: string;
};

type TeacherSkillPlate = {
  id: string;
  name: string;
  number: number;
};

type TeacherSkillsProfile = {
  skillPlate: TeacherSkillPlate[];
};

export type LinkNode = {
  url: string;
  target?: string;
  rel?: string;
};

export type PolicyQueryResult = {
  privacyPolicyPage: PrivacyPolicyPage;
};

export type SkillsQueryResult = {
  teacherSkillsProfile: TeacherSkillsProfile;
};
