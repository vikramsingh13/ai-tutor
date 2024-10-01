import NextAuth from "next-auth/next";
// import the auth options from the lib to be used by the NextAuth.
import { authOptions } from "@/lib/authOptions";

// Wrap the authOptions configured above with NextAuth to be used for auth use cases.
const handler = NextAuth(authOptions);

// Export the Route handler to handle REST-like requests in App Router.
export { handler as GET, handler as POST };
