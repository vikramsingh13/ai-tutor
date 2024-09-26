'use client';

import { useRouter, redirect } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  // Initialize the router.
  const router = useRouter();
  // test user for development.
  const userId = 'test-user';
  return (
    <div className="">
      { /* Redirect to /test-user/learning-section for now */ }
      { redirect(`/${userId}/dashboard`) }
    </div>
  );
}
