export const policyQuery = `
  {
    privacyPolicyPage {
      title
      text {
        value
      }
    }
  }
`;

export const skillsQuery = `
  {
    teacherSkillsProfile {
      skillPlate {
        id
        name
        number
      }
    }
  }
`;
