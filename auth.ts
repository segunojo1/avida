import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import { db } from "./database/drizzle";
import { eq } from "drizzle-orm";
import { usersTable } from "./database/schema";

export const { handlers, signIn, signOut, auth } = NextAuth({
  session: {
    strategy: "jwt",
  },
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account, profile }) {
      if (account && profile?.email) {
        // let user = await db.query.usersTable.findFirst({
        //   where: eq(usersTable.email, profile.email as string),
        // });
        console.log("starting...");
        let user = await db
            .select()
            .from(usersTable)
            .where(eq(usersTable.email, profile.email.toString()))
            .limit(1)
        console.log(user);


        if (!user[0]) {
          const inserted = await db
            .insert(usersTable)
            .values({
              name: profile.name as string,
              email: profile.email as string,
              image: (profile as any).picture,
            })
            .returning();
          user[0] = inserted[0];
        }

        token.id = user[0].id
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id as number;
      }
      return session;
    },
  },
  pages: {
     signIn: "/auth", 
    signOut: "/auth",
    newUser: "/wall",  
  }
});
