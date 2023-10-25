import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { makeNewUser } from "./user";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID ?? "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET ?? "",
    }),
  ],
  pages: {
    signIn: "/auth/signin",
  },
  callbacks: {
    async signIn({ user }) {
      const isAllowedToSignIn = await makeNewUser(user);
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
    async session({ session, token }) {
      const user = {
        ...session?.user,
        username: session?.user?.email ? session.user.email.split("@")[0] : "",
        id: token.id as string,
      };
      session.user = user;
      return session;
    },
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
  },
};
