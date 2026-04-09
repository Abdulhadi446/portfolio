import { profileSchema, type Profile } from "./schema";

const profileData: Profile = {
  name: "Trillionir",
  role: "Full-Stack + Agentic AI Engineer",
  experienceLevel: "intermediate",
  avatarUrl:
    "https://media.licdn.com/dms/image/v2/D4E03AQEIE7gQ1HAGvg/profile-displayphoto-crop_800_800/B4EZv2n5KrHUAI-/0/1769369213068?e=1777507200&v=beta&t=jk0WrxlU_qK7nuuVgZNMrhgqTbKJhbr0f-2m95NQJyg",
  headline: "I build production-ready full-stack and agentic AI experiences."
};

export const profile = profileSchema.parse(profileData);
