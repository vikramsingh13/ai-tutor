import NextAuth from "next-auth/next";
// So far we will be using google and github for our auth.
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";

// All requests to /api/auth/* (signIn, callback, signOut, etc.) will automatically be handled by NextAuth.js.
// authOptions will be used as a param for NextAuth and exported.
const authOptions = {
  // Configure the google and github provider ids and secrets.
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
};

// Wrap the authOptions configured above with NextAuth to be used for auth use cases.
const handler = NextAuth(authOptions);

// Export the Route handler to handle REST-like requests in App Router.
export { handler as GET, handler as POST };
