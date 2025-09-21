import z from "zod";

export const createDreamSchema = z.object({
    message: z.string().trim().min(10).max(200),
    tags: z.array(z.string()).min(1, "Add at least one tag"),
    vibe: z.string().min(1, "Select one vibe")
})