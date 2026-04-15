import { z } from "zod";

export const profileSchema = z.object({
  name: z.literal("Trillionir"),
  role: z.literal("Full-Stack + Agentic AI Engineer"),
  experienceLevel: z.literal("intermediate"),
  avatarUrl: z.string().min(1).optional(),
  headline: z.string().max(140).optional(),
});

export const socialLinkSchema = z.object({
  id: z.string().min(1),
  label: z.string().min(1).max(60),
  url: z
    .string()
    .url()
    .refine(
      (value) => value.startsWith("https://") || value.startsWith("mailto:"),
      {
        message: "Social links must use https:// or mailto: URLs.",
      },
    ),
  visible: z.boolean().default(true),
  order: z.number().int().nonnegative(),
});

export const projectSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(80),
  summary: z.string().min(1).max(280),
  url: z.string().url().startsWith("https://"),
  isAgenticAIHighlight: z.boolean().default(false),
  imageUrl: z.string().url().optional(),
  order: z.number().int().nonnegative(),
});

export const collaboratorSchema = z.object({
  id: z.string().min(1),
  name: z.string().min(1).max(80),
  url: z.string().url().startsWith("https://"),
  avatarUrl: z.string().min(1).optional(),
  isPlaceholder: z.boolean().default(false),
  order: z.number().int().nonnegative(),
});

export const socialLinksSchema = z
  .array(socialLinkSchema)
  .superRefine((value, ctx) => {
    const orders = new Set<number>();
    for (const item of value) {
      if (orders.has(item.order)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Social link order values must be unique.",
        });
        return;
      }
      orders.add(item.order);
    }
  });

export const projectsSchema = z
  .array(projectSchema)
  .superRefine((value, ctx) => {
    // No limit on AI/automation highlights - infinite allowed
  });

export const collaboratorsSchema = z
  .array(collaboratorSchema)
  .superRefine((value, ctx) => {
    const orders = new Set<number>();
    for (const item of value) {
      if (orders.has(item.order)) {
        ctx.addIssue({
          code: z.ZodIssueCode.custom,
          message: "Collaborator order values must be unique.",
        });
        return;
      }
      orders.add(item.order);
    }
  });

export type Profile = z.infer<typeof profileSchema>;
export type SocialLink = z.infer<typeof socialLinkSchema>;
export type Project = z.infer<typeof projectSchema>;
export type Collaborator = z.infer<typeof collaboratorSchema>;
