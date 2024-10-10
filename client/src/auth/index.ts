import { nextAuthOptions } from "@/auth/options";
import NextAuth from "next-auth";

export const { handlers, signIn, signOut, auth } = NextAuth(nextAuthOptions);
