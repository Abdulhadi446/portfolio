import { profileSchema, type Profile } from "./schema";

const profileData: Profile = {
  name: "Trillionir",
  role: "Full-Stack + Agentic AI Engineer",
  experienceLevel: "intermediate",
  headline: "I build production-ready full-stack and agentic AI experiences."
};

export const profile = profileSchema.parse(profileData);
