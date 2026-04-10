import { collaboratorsSchema, type Collaborator } from "./schema";

const collaboratorsData: Collaborator[] = [
  {
    id: "collab-ctbfq9",
    name: "Muhammad Zain",
    url: "https://www.linkedin.com/in/muhammad-zain-359626291/",
    avatarUrl:
      "https://media.licdn.com/dms/image/v2/D4D03AQH0oeWM-wgIFA/profile-displayphoto-scale_200_200/B4DZtTmyUHGgAY-/0/1766634237152?e=1777507200&v=beta&t=JuDtj9B8GXktxQdYmeSQ4zL4e1g8WstTOAXvrSpD7jQ",
    isPlaceholder: false,
    order: 0
  },
  {
    id: "collab-qnrkae",
    name: "arham aftab",
    url: "https://github.com/arham-aftab001",
    avatarUrl: "https://avatars.githubusercontent.com/u/256279757?v=4",
    isPlaceholder: false,
    order: 1
  }
];

export const collaborators = collaboratorsSchema.parse(collaboratorsData).sort((a, b) => a.order - b.order);
