import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export default NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "username", type: "text" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials, req) {
        // Here call your API with data passed in the login form
        //const token = await loginEndpoint(credentials);
        const token = await fetch("http://localhost:8081/generate-token", {
          body: JSON.stringify(credentials),

          headers: {
            "Content-Type": "application/json",
            "Access-Control-Allow-Origin": "*",
          },
          method: "POST",
        });

        const user = await token.json();
        console.log(user);
        if (user) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.accessToken = user.token;
      }

      return token;
    },

    async session({ session, token }) {
      session.accessToken = token.accessToken;

      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  options: {
    jwt: {
      maxAge: 60 * 60 * 24 * 30,
    },
  },

  session: {
    jwt: true,
    strategy: "jwt",
  },
});
