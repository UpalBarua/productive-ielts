import { baseURL } from "@/config";
import Credentials from "next-auth/providers/credentials";

export const nextAuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials: unknown) => {
        try {
          const res = await fetch(`${baseURL}/user/sign-in`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(credentials),
          }).then((res) => res.json());

          if (res.success) {
            console.log(res.data);
            return res.data;
          }

          return null;
        } catch (error) {
          console.log(error);
          return null;
        }
      },
    }),
  ],
  pages: {
    newUser: "/sign-up",
    signIn: "/sign-in",
  },
};
