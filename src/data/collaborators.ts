import { collaboratorsSchema, type Collaborator } from "./schema";

const collaboratorsData: Collaborator[] = [
  {
    id: "collaborator-1",
    name: "Amina Rahman",
    url: "https://github.com/",
    isPlaceholder: false,
    order: 1
  },
  {
    id: "collaborator-2",
    name: "Placeholder Collaborator",
    url: "https://example.com/profile",
    isPlaceholder: true,
    order: 2
  }
];

export const collaborators = collaboratorsSchema.parse(collaboratorsData).sort((a, b) => a.order - b.order);
