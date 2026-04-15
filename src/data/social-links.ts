import { socialLinksSchema, type SocialLink } from "./schema";

const socialLinksData: SocialLink[] = [
  {
    id: "social-1",
    label: "GitHub",
    url: "https://github.com/Abdulhadi446",
    visible: true,
    order: 1,
  },
  {
    id: "social-3",
    label: "Email",
    url: "mailto:abdulhadijunaidahmedkhan@gmail.com",
    visible: true,
    order: 2,
  },
];

export const socialLinks = socialLinksSchema
  .parse(socialLinksData)
  .sort((a, b) => a.order - b.order);
