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

export type QueryResult = {
  privacyPolicyPage: PrivacyPolicyPage;
  teacherSkillsProfile: TeacherSkillsProfile;
};
