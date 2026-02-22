import * as z from "zod";

export const signupSchema = z
  .object({
    firstName: z
  .string()
  .min(2, "First name must be at least 2 characters"),
    lastName: z.string().min(2, "Last name is required"),
    email: z.string().email("Invalid email address"),
    phone: z
      .string()
      .regex(/^01[0125][0-9]{8}$/, "Invalid Egyptian phone number"),
    password: z
  .string()
  .min(8, "Password must be at least 8 characters")
  .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
  .regex(/[0-9]/, "Password must contain at least one number"),
   confirmPassword: z.string().min(1, "Please confirm your password"),
    agreeToTerms: z.boolean().refine((val) => val === true, {
      message: "You must agree to the Terms of Service",
    }),
    promoEmails: z.boolean().optional(),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

export type SignupFormData = z.infer<typeof signupSchema>;