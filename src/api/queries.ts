export const query = `
  {
    teacherSkillsProfile {
      skillPlate {
        id
        name
        number
      }
    }
    privacyPolicyPage {
      title
      text {
        value
      }
    }
  }
`;
