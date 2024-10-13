import * as z from "zod";

export const newUserSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, { message: "Name must be at least 3 characters long." })
    .max(50, { message: "Name cannot be longer than 50 characters." }),
  // .refine((name) => validateName(name), {
  //   message: "Name contains invalid characters.",
  // }),
  email: z.string().email({ message: "Email is not valid." }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
