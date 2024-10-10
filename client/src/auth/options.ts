import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: unknown) => {
        console.log(credentials);
        return null;
      },
    }),
  ],
  pages: {
    newUser: "/sign-up",
    signIn: "/sign-in",
  },
};
