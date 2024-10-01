"use client";

import React from "react";
// Import the SessionProvider from next-auth/react to help setup the session management contexts.
import { SessionProvider } from "next-auth/react";

// SessionWrapper will be used for session management throughout the application.
// SessionWrapper will wrap the children with the SessionProvider and return it. 
const SessionWrapper = ({ children }: { children: React.ReactNode }) => {
  // Wrap the children with the SessionProvider and return it. 
  return <SessionProvider>{children}</SessionProvider>
};

export default SessionWrapper;
