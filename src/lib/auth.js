import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";
import { connectToDB } from "./connectToDB";
import { User } from "@/models/user.model";

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [GitHub, Google],
  callbacks: {
    async signIn({ user }) {
      await connectToDB();

      const existingUser = await User.findOne({ email: user.email })

      if (!existingUser) {
        await User.create({
          name: user.name,
          email: user.email,
          image: user.image,
        })
      }

      return true
    },

    async session({ session }) {
      await connectToDB()

      const dbUser = await User.findOne({ email: session.user.email })

      session.user._id = dbUser._id.toString()
      return session
    },
  },

  session: {
    strategy: "jwt",
  },

});
